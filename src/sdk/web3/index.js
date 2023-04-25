import { SigningArchwayClient } from '@archwayhq/arch3.js';
import ChainInfo from './constantine.config.js';
import { GasPrice } from "@cosmjs/stargate";
import * as base64js from "base64-js";
import Long from "long";
import contractCw20 from "./contracts/cw20.wasm"

export async function SmartdeployerCoswasm(contract) {
    await window.keplr.enable(ChainInfo.chainId);
    const offlineSigner = window.keplr.getOfflineSigner(ChainInfo.chainId);
    const account = await window.keplr.getKey(ChainInfo.chainId)
    const accountName = account.name;
    const accountAddress = account.bech32Address;
    const destinationAddress = "<add destination address here>"
    // const beneficiaryAddress = process.env.BENEFICIARY_ADDRESS;

    const signingClient = await SigningArchwayClient.connectWithSigner(ChainInfo.rpc, offlineSigner, { gasPrice: GasPrice.fromString('0.02uconst'), });
    const wasmCode = contract;
    const encoded = Buffer.from(wasmCode, "binary").toString("base64");
    const contractData = base64js.toByteArray(encoded);
    const msgStoreCode = {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: {
            sender: accountAddress,
            wasmByteCode: contractData,
            instantiatePermission: {
                // optional
                permission: 3,
                //address: accountAddress,
            },
        },
    };
    const broadcastResult = await signingClient.signAndBroadcast(
        accountAddress,
        [msgStoreCode],
        "auto",
        // Can manually set fee here if needed
        "" // optional memo
    );
    if (broadcastResult.code !== undefined && broadcastResult.code !== 0) {
        console.log(
            "Storage failed:",
            broadcastResult.log || broadcastResult.rawLog
        );
    } else {
        console.log("Storage successful:", broadcastResult.transactionHash);
        console.log("Storage RawLog:", broadcastResult.rawLog);
    }

    //instantiate
    const rawLog = JSON.parse(broadcastResult.rawLog);
    const codeId = rawLog[0].events[1].attributes.find(
        (attr) => attr.key === "code_id"
    ).value;
    const msgInstantiate = {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: {
            sender: accountAddress,
            admin: accountAddress,
            codeId: new Long(codeId), // Code id that was returned on previous step (store)
            label: "my-instance-label", // replace with any value you want
            msg: new TextEncoder().encode(
                // has to be encoded in utf8
                // name: "Auto Gen".to_string(),
                // symbol: "AUTO".to_string(),
                // decimals: 3,
                // initial_balances: vec![Cw20Coin {
                //     address: addr.to_string(),
                //     amount,
                // }],
                // mint: mint.clone(),
                // marketing: None,

                {
                    decimals: 18,
                    symbol: "test",
                    name: "Tester",
                    initial_balances: {
                        address: accountAddress,
                        amount: 100000000,
                    },
                    mint: {
                        minter: "",
                        cap: "",
                    },
                    marketing: {
                        project: "",
                        description: "",
                        marketing: "",
                        logo: ""
                    }

                }

            ),
            funds: [
                // Funds transferred to contract, can be an empty array
                //  { denom: "uconst", amount: "1000" },
            ],
        },
    };

    const broadcastResult2 = await signingClient.signAndBroadcast(
        accountAddress,
        [msgInstantiate],
        "auto",
        // Can manually set fee here if needed
        "" // optional
    );
    if (broadcastResult2.code !== undefined && broadcastResult2.code !== 0) {
        console.log(
            "Instantiation failed:",
            broadcastResult2.log || broadcastResult2.rawLog
        );
    } else {
        console.log(
            "Instantiation successful:",
            broadcastResult2.transactionHash
        );
    }
}