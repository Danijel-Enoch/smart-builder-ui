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

const StandardToken = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    tokenType: "standard-token",
    tokenName: "",
    symbol: "",
    decimal: "",
    totalSupply: "",
  });

  const handleTokenType = (e) => {
    const token = e.target.value;
    setFormData({ ...formData, tokenType: token });

    if (token === "deflationary-token") {
      navigate("/smarttoken/deflationary");
    } else if (token === "hyper-deflationary-token") {
      navigate("/smarttoken/hyperdeflationary");
    } else if (token === "mint-burn-token") {
      navigate("/smarttoken/mintburn");
    } else {
      navigate("/smarttoken");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
  };

  // console.log(formData);

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
            defaultValue="standard-token"
            onChange={(e) => handleTokenType(e)}
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

export default StandardToken;
