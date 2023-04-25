import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
} from "@chakra-ui/react";
import { SmartdeployerCoswasm } from "../../sdk/web3/index"
import { SmartInstantiate } from "../../sdk/web3/instantiate";
const StandardToken = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    tokenType: "standard-token",
    tokenName: "",
    symbol: "",
    decimal: "",
    totalSupply: ""
  });
  const [wasmFile, setWasmFile] = useState(null)
  const [wasmByteArray, setWasmByteArray] = useState(null)

  const onFileChange = (e) => {
    if (!e.target.files) return
    setWasmFile(e.target.files[0])
  }

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
  useEffect(() => {
    if (wasmFile) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          if (!e.target?.result) return
          const byteArray = new Uint8Array(e.target.result)
          setWasmByteArray(byteArray)
        } catch (error) { }
      }
      reader.readAsArrayBuffer(wasmFile)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wasmFile])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log({ wasmFile })
      await SmartdeployerCoswasm(wasmByteArray)
      //await SmartInstantiate()
    } catch (err) {
      console.log({ err })
    }

    // const reader = new FileReader()
    // reader.onload = (e) => {
    //   try {
    //     if (!e.target?.result) return
    //     const byteArray = new Uint8Array(e.target.result)
    //   } catch (error) { }
    // }
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

        <FormControl>
          <Input type="file" onChange={(e) => onFileChange(e)} />
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
