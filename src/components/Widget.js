import React from "react";
import { Box, Text, Image, Link } from "@chakra-ui/react";
// import { Tokens } from "../constants/data";
import axios from "axios";
import { useState } from "react";
import { useLayoutEffect } from "react";

import "./widget.css";

const Widget = () => {
  const [list, setList] = useState([]);

  const response = async () => {
    const flow = await axios
      .get("https://dorahacks.io/api/hackathon-buidls/69")
      .then((e) => {
        setList(e.data?.results);
        console.log(e?.data?.results);
      });
  };
  useLayoutEffect(() => {
    response();
  }, []);
  return (
    <Box
      className="ticker"
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1",
        whiteSpace: "nowrap",
        position: "fixed",
        borderBottom: "1px",
        borderColor: "rgba(0, 0, 0, 0.3)",

        left: "auto",
        right: "auto",
        marginLeft: "0px",
        marginRight: "0px",
        top: "17%",
        zIndex: "20000",
        background: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        // -webkit-backdrop-filter: blur(5px)
        border: "1px solid rgba(255, 255, 255, 0.3)",

        width: "100vw",
        height: "50px",
        marginBottom: "20px"
      }}
    >
      {list.map((token, i) => (
        <Link
          className="ticker-item"
          key={token.id}
          ml="1rem"
          href={`${token?.demo_url}` || "#"}
          style={{
            width: "300px",
            overflowX: "hidden",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center"
          }}
        >
          <Box>
            <Image
              style={{ width: ".95em", borderRadius: "50%" }}
              src={token?.pictures[0]}
              alt={`${token.name} image url`}
            />
          </Box>
          <Text color="black" as="span">
            #{i + 1}
          </Text>
          <Text
            color="brand.primary"
            ml="0.5rem"
            as="span"
            style={{ maxWidth: "100px", width: "100px", overflowX: "hidden" }}
          >
            {token.name}
          </Text>
        </Link>
      ))}
      <Box height={"300px"} />
    </Box>
  );
};

export default Widget;

// const [signedIn, setSignedIn] = useState('Connect wallet');
// const [loading, setLoading] = useState(false);

// creates keyStore using private key in local storage
// const {
//   keyStores,
//   connect,
//   WalletConnection,
//   ConnectedWalletAccount,
//   utils,
// } = nearAPI;
// const myKeyStore = new keyStores.BrowserLocalStorageKeyStore();

// const connectionConfig = {
//   networkId: 'testnet',
//   keyStore: myKeyStore, // first create a key store
//   nodeUrl: 'https://rpc.testnet.near.org',
//   walletUrl: 'https://wallet.testnet.near.org',
//   helperUrl: 'https://helper.testnet.near.org',
//   explorerUrl: 'https://explorer.testnet.near.org',
// };

// useEffect(() => {
//   const signedUser = async () => {
//     const nearConnection = await connect(connectionConfig);
//     const walletConnection = new WalletConnection(nearConnection);
//     setSignedIn(walletConnection.getAccountId() || 'Connect Wallet');
//     console.log(walletConnection.getAccountId());
//     const account = await nearConnection.account(
//       walletConnection.getAccountId()
//     );
//     console.log(
//       utils.format.formatNearAmount(
//         (await account.getAccountBalance()).available
//       )
//     );
//   };
//   signedUser();
//   // setSignedIn("Connect wallet");
// }, []);

// const handleWalletConnection = async () => {
//   // console.log("it's ptressing");
//   const nearConnection = await connect(connectionConfig);
//   const walletConnection = new WalletConnection(nearConnection);

//   walletConnection.requestSignIn(
//     'testnet', // contract requesting access
//     'Example App', // optional title
//     'https://google.com', // optional redirect URL on success
//     'localhost:3000' // optional redirect URL on failure
//   );
//   // setSignedIn(walletConnection.getAccountId());

// };
