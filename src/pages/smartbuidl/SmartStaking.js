import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import Select from "react-select";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SmartStakingForm } from "../../styled/SmartStaking";
import { colors } from "../../styled/UniversalStyle";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import { templates } from "../../constants/data";
const SmartStaking = () => {
  // Dropdown
  const network = {
    name: "network",
  };

  const networks = [
    {
      id: 1,
      name: "NEAR Testnet",
    },
    {
      id: 2,
      name: "NEAR Mainnet",
    },
  ];

  // Logic

  const steps = [1, 2, 3, 4];
  const [values, setValues] = useState({});
  const [pageStep, setPageStep] = useState(1);
  const [platform, setPlatform] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const platformChange = (e) => {
    setPlatform(e.target.value);
  };

  const handleNetwork = (selectedOption) => {
    setValues({ ...values, [network.name]: selectedOption });
  };

  const handleValidation = () => {
    const { dAppName, network, chainId } = values;

    if (pageStep === 1) {
      if (!dAppName || dAppName === "") {
        toast.error("dApp's name cannot be empty!");
        return false;
      }
      if (dAppName.length < 4) {
        toast.error("dApp's name is too short!");
        return false;
      } else {
        return true;
      }
    }
    if (pageStep === 2) {
      if (!network || network === "") {
        toast.error("Network is not set!");
        return false;
      }
      if (!chainId || chainId === "") {
        toast.error("Chain ID cannot be empty!");
        return false;
      }
      if (chainId.length < 4) {
        toast.error("Chain ID is too short!");
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  const handleSubmit = (e, step) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log("true");
      setPageStep(step);
    } else {
      console.log("false");
    }
  };

  return (
    <>
      <ToastContainer />
      <Box
        width={"50%"}
        mt={10}
        ml={"25%"}
        height={"auto"}
        border="1px"
        borderRadius={15}
        borderColor="rgba(0, 0, 0, 0.2);"
        p={10}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Text textAlign={"center"}>Step {pageStep || 1} of 4</Text>
        <Box position={"relative"} w={"100%"} mt={5}>
          <Box
            position={"absolute"}
            background="black"
            w={"30%"}
            h={0.5}
            zIndex={1}
            top={"45%"}
            left={"35%"}
          />
          <Box display={"flex"} width={"30%"} ml={"35%"} gap={"15%"}>
            {steps.map((step) => {
              return (
                <Box
                  w={5}
                  h={5}
                  border="1px"
                  borderRadius={50}
                  borderColor="rgba(0, 0, 0, 0.2);"
                  key={step}
                  background={pageStep >= step ? colors.primary : "white"}
                  zIndex={2}
                />
              );
            })}
          </Box>
        </Box>
        {pageStep === 1 && (
          <SmartStakingForm onSubmit={(e) => handleSubmit(e, 2)}>
            <Text fontWeight={"600"} mb={3} fontSize={20}>
              Let's give your dApps a name
            </Text>
            <Input
              name="dAppName"
              type={"text"}
              placeholder={"ex: pancakeswap"}
              onChange={(e) => handleChange(e)}
              focusBorderColor={colors.gray100}
            />
            <Box textAlign="center" mt={"30%"}>
              <Button
                type="submit"
                bg="brand.primary"
                color="white"
                w={"20%"}
                fontSize={18}
                borderRadius="15px"
                _hover={{
                  bg: "brand.primary",
                  opacity: "0.8",
                  color: "black",
                }}
              >
                Next
              </Button>
            </Box>
          </SmartStakingForm>
        )}
        {pageStep === 2 && (
          <>
            <SmartStakingForm onSubmit={(e) => handleSubmit(e, 3)}>
              <Text fontWeight={"600"} mb={1} fontSize={20}>
                Choose Network
              </Text>
              <Select
                defaultValue={""}
                onChange={(option) => handleNetwork(option)}
                options={networks}
                placeholder={""}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.name}
              />
              <Text fontWeight={"600"} mt={3} mb={1} fontSize={20}>
                Chain Id
              </Text>
              <Input
                name="chainId"
                type={"text"}
                onChange={(e) => handleChange(e)}
                focusBorderColor={colors.gray100}
              />
              <Box
                display={"flex"}
                justifyContent={"center"}
                padding={10}
                gap={5}
              >
                <Button
                  type="button"
                  bg="brand.primary"
                  color="white"
                  w={"20%"}
                  fontSize={18}
                  borderRadius="15px"
                  _hover={{
                    bg: "brand.primary",
                    opacity: "0.8",
                    color: "black",
                  }}
                  onClick={() => setPageStep(pageStep - 1)}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  bg="brand.primary"
                  color="white"
                  w={"20%"}
                  fontSize={18}
                  borderRadius="15px"
                  _hover={{
                    bg: "brand.primary",
                    opacity: "0.8",
                    color: "black",
                  }}
                >
                  Next
                </Button>
              </Box>
            </SmartStakingForm>
          </>
        )}
        {pageStep === 3 && (
          <>
            <SmartStakingForm onSubmit={(e) => handleSubmit(e, 4)}>
              <RadioGroup
                style={{
                  width: "100%",
                  marginTop: "20px",
                }}
                onChange={platformChange}
              >
                {templates.map((template) => {
                  const { id, name, text } = template;
                  return (
                    <RadioButton
                      value={name}
                      iconSize={20}
                      iconInnerSize={10}
                      pointColor={colors.primary}
                      key={id}
                    >
                      <Text fontSize={18} fontWeight={"600"} color={"black"}>
                        {name}
                      </Text>
                      <Text fontSize={14} color={"black"}>
                        {text}
                      </Text>
                    </RadioButton>
                  );
                })}
              </RadioGroup>

              <Box
                display={"flex"}
                justifyContent={"center"}
                padding={5}
                gap={5}
              >
                <Button
                  type="button"
                  bg="brand.primary"
                  color="white"
                  w={"20%"}
                  fontSize={18}
                  borderRadius="15px"
                  _hover={{
                    bg: "brand.primary",
                    opacity: "0.8",
                    color: "black",
                  }}
                  onClick={() => setPageStep(pageStep - 1)}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  bg="brand.primary"
                  color="white"
                  w={"20%"}
                  fontSize={18}
                  borderRadius="15px"
                  _hover={{
                    bg: "brand.primary",
                    opacity: "0.8",
                    color: "black",
                  }}
                >
                  Next
                </Button>
              </Box>
            </SmartStakingForm>
          </>
        )}
        {pageStep === 4 && <Text>step 4</Text>}
      </Box>
    </>
  );
};

export default SmartStaking;
