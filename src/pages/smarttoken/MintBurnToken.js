import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import arrow from "../../assets/right-arrow.png";

const MintBurnToken = () => {
  document.title = "Smart Token - Mint Burn Token";

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    tokenType: "mint-burn-token",
    tokenName: "",
    symbol: "",
    decimal: "",
    initialSupply: "",
    initialBurn: "",
    totalSupply: "",
  });

  const handleTokenType = (e) => {
    const token = e.target.value;
    setFormData({ ...formData, tokenType: token });

    if (token === "standard-token") {
      navigate("/smarttoken");
    } else if (token === "deflationary-token") {
      navigate("/smarttoken/deflationary");
    } else if (token === "hyper-deflationary-token") {
      navigate("/smarttoken/hyperdeflationary");
    } else {
      navigate("/smarttoken/mintburn");
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
          <Select defaultValue="mint-burn-token" onChange={handleTokenType}>
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
            placeholder="ex: ArchWay"
            onChange={(e) =>
              setFormData({ ...formData, tokenName: e.target.value })
            }
          />
        </FormControl>

        <FormControl my="1.5rem">
          <FormLabel>Symbol</FormLabel>
          <Input
            type="text"
            placeholder="ex: ArchWay"
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
          <FormLabel>Initial Supply</FormLabel>
          <Input
            type="text"
            placeholder="ex : 10000000"
            onChange={(e) =>
              setFormData({ ...formData, initialSupply: e.target.value })
            }
          />
        </FormControl>

        <FormControl my="1.5rem">
          <FormLabel>Initial Burn</FormLabel>
          <Input
            type="text"
            placeholder="ex : 10000000000"
            onChange={(e) =>
              setFormData({ ...formData, initialBurn: e.target.value })
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

        <Box my="0.3rem" textAlign="center">
          <Text display="flex" alignItems="center" justifyContent="center">
            <Text as="span" mr="1rem">
              Admin edits
            </Text>{" "}
            <Image boxSize="20px" src={arrow} alt="arrow" />{" "}
          </Text>
        </Box>
      </form>
    </Box>
  );
};

export default MintBurnToken;
