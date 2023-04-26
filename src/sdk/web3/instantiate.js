import { SigningArchwayClient } from '@archwayhq/arch3.js';
import ChainInfo from './constantine.config.js';
import { GasPrice } from "@cosmjs/stargate";
import * as base64js from "base64-js";
import Long from "long";
import contractCw20 from "./contracts/cw20.wasm"


export async function SmartInstantiate() {
    /**
     * Storage RawLog: [{"events":[{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgStoreCode"},{"key":"module","value":"wasm"},{"key":"sender","value":"archway1ep9hptmqnpntv8ps90j8sxurgs4kj7c60dvm5w"}]},{"type":"store_code","attributes":[{"key":"code_checksum","value":"b507bf7fc9507ffe2c1b853face46796c4f153b626c9c1506b7c4de9cf66fa58"},{"key":"code_id","value":"734"}]}]}]
     */
    const data = [{ "events": [{ "type": "message", "attributes": [{ "key": "action", "value": "/cosmwasm.wasm.v1.MsgStoreCode" }, { "key": "module", "value": "wasm" }, { "key": "sender", "value": "archway1ep9hptmqnpntv8ps90j8sxurgs4kj7c60dvm5w" }] }, { "type": "store_code", "attributes": [{ "key": "code_checksum", "value": "b507bf7fc9507ffe2c1b853face46796c4f153b626c9c1506b7c4de9cf66fa58" }, { "key": "code_id", "value": "719" }] }] }]
    await window.keplr.enable(ChainInfo.chainId);
    const offlineSigner = window.keplr.getOfflineSigner(ChainInfo.chainId);
    const account = await window.keplr.getKey(ChainInfo.chainId)
    const accountName = account.name;
    const accountAddress = account.bech32Address;
    const signingClient = await SigningArchwayClient.connectWithSigner(ChainInfo.rpc, offlineSigner, { gasPrice: GasPrice.fromString('0.02uconst'), });

    const msg = {
        symbol: "test",
        name: "Tester",
        decimals: 18,
        // initial_balances: [{
        //     address: accountAddress,
        //     amount: 10000000000000
        // }],
        // mint: {
        //     minter: accountAddress,
        //     cap: 900000000000 * 100000,
        // },
        // marketing: {
        //     project: "",
        //     description: "",
        //     marketing: "",
        //     logo: ""
        // }

    }
    const rawLog = data;
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
            msg: new TextEncoder().encode(JSON.parse(msg)),
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