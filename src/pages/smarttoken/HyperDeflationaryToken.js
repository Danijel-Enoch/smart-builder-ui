import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
} from "@chakra-ui/react";

const HyperDeflationaryToken = () => {
  document.title = "Smart Token - HyperDeflationary Token";

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    tokenType: "hyper-deflationary-token",
    tokenName: "",
    symbol: "",
    decimal: "",
    totalSupply: "",
    marketingWallet: "",
    buyBack: "",
    holdersReward: "",
    tax: "",
  });

  const handleTokenType = (e) => {
    const token = e.target.value;
    setFormData({ ...formData, tokenType: token });

    if (token === "standard-token") {
      navigate("/smarttoken");
    } else if (token === "deflationary-token") {
      navigate("/smarttoken/deflationary");
    } else if (token === "mint-burn-token") {
      navigate("/smarttoken/mintburn");
    } else {
      navigate("/smarttoken/hyperdeflationary");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
  };

  return (
    <Box
      mx="6rem"
      my="1.5rem"
      py="1.5rem"
      px="3rem"
      border="1px"
      borderRadius="10px"
      borderColor="rgba(0, 0, 0, 0.3)"
    >
      <form onSubmit={handleSubmit}>
        <FormControl my="1.5rem">
          <FormLabel>Token Type</FormLabel>
          <Select
            defaultValue="hyper-deflationary-token"
            onChange={handleTokenType}
          >
            <option value="standard-token">Standard Token</option>
            <option value="deflationary-token">Deflationary Token</option>
            <option value="hyper-deflationary-token">
              Hyper Deflationary Token
            </option>
            <option value="mint-burn-token">Mint Burn Token</option>
          </Select>
        </FormControl>

        <FormControl my="1.5rem">
          <FormLabel>Token Name</FormLabel>
          <Input
            type="text"
            placeholder="ex: Archway"
            onChange={(e) =>
              setFormData({ ...formData, tokenName: e.target.value })
            }
          />
        </FormControl>

        <FormControl my="1.5rem">
          <FormLabel>Symbol</FormLabel>
          <Input
            type="text"
            placeholder="ex: Archway"
            onChange={(e) =>
              setFormData({ ...formData, symbol: e.target.value })
            }
          />
        </FormControl>

        <FormControl my="1.5rem">
          <FormLabel>Decimal</FormLabel>
          <Input
            type="text"
            placeholder="ex : 18"
            onChange={(e) =>
              setFormData({ ...formData, decimal: e.target.value })
            }
          />
        </FormControl>

        <FormControl my="1.5rem">
          <FormLabel>Total Supply</FormLabel>
          <Input
            type="text"
            placeholder="ex : 10000000"
            onChange={(e) =>
              setFormData({ ...formData, totalSupply: e.target.value })
            }
          />
        </FormControl>

        <FormControl my="1.5rem">
          <FormLabel>Marketing Wallet</FormLabel>
          <Input
            type="text"
            placeholder="ex : 5zxsdorjrjj43jefnkklkkfvfvnjvjfvj"
            onChange={(e) =>
              setFormData({ ...formData, marketingWallet: e.target.value })
            }
          />
        </FormControl>

        <FormControl my="1.5rem">
          <FormLabel>Buy Back</FormLabel>
          <Input
            type="text"
            placeholder="ex : 1%"
            onChange={(e) =>
              setFormData({ ...formData, buyBack: e.target.value })
            }
          />
        </FormControl>

        <FormControl my="1.5rem">
          <FormLabel>Holders Reward</FormLabel>
          <Input
            type="text"
            placeholder="ex : 3%"
            onChange={(e) =>
              setFormData({ ...formData, holdersReward: e.target.value })
            }
          />
        </FormControl>

        <FormControl my="1.5rem">
          <FormLabel>Tax</FormLabel>
          <Input
            type="text"
            placeholder="ex : 3%"
            onChange={(e) => setFormData({ ...formData, tax: e.target.value })}
          />
        </FormControl>

        <Box my="1.5rem" textAlign="center">
          <Button
            type="submit"
            bg="brand.primary"
            color="white"
            p="1rem"
            mr="3rem"
            borderRadius="15px"
            _hover={{
              bg: "brand.primary",
              opacity: "0.8",
              color: "black",
            }}
          >
            Create Token
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default HyperDeflationaryToken;
