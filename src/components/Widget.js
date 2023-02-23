import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Tokens } from '../constants/data';

const Widget = () => {
  return (
    <Box
      position="fixed"
      top="18.4%"
      w="100%"
      bg="white"
      borderTop="1px"
      borderBottom="1px"
      borderColor="rgba(0, 0, 0, 0.3);"
      px="1.5rem"
      py="0.5rem"
      zIndex={2}
    >
      <Box
        display="flex"
        bg="white"
        color="black"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="space-evenly"
      >
        <Box>Trending</Box>

        {Tokens.map((token) => (
          <Box key={token.id} ml="1rem">
            <Text color="black" as="span">
              #{token.id}
            </Text>
            <Text color="brand.primary" ml="0.5rem" as="span">
              {token.name}
            </Text>
          </Box>
        ))}
      </Box>
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