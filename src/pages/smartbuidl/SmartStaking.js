import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Select from "react-select";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SmartStakingForm } from "../../styled/SmartStaking";
import { colors } from "../../styled/UniversalStyle";
// import { RadioGroup, RadioButton } from "react-radio-buttons";
import { templates } from "../../constants/data";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const SmartStaking = () => {
  const network = {
    name: "network",
  };

  const platformName = {
    name: "platform",
  };

  // Dropdown
  const networks = [
    {
      id: 1,
      name: "Archwway Testnet",
    },
    {
      id: 2,
      name: "Archway Mainnet",
    },
  ];

  // Logic

  const steps = [1, 2, 3, 4];
  const [values, setValues] = useState({});
  const [pageStep, setPageStep] = useState(1);
  const [platform, setPlatform] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleNetwork = (selectedOption) => {
    setValues({ ...values, [network.name]: selectedOption.name });
  };
  const handlePlatform = () => {
    setValues({ ...values, [platformName.name]: platform });
  };

  useEffect(() => {
    handlePlatform();
    // eslint-disable-next-line
  }, [platform]);

  console.log(values);

  const handleValidation = () => {
    const {
      dAppName,
      network,
      chainId,
      platform,
      dataQuery,
      frontEndName,
      functionality,
      logo,
    } = values;

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
    }
    if (pageStep === 3 && !platform) {
      toast.error("Select one of the options.");
      return false;
    }
    if (pageStep === 4) {
      if (!frontEndName && !dataQuery && !functionality && !logo) {
        toast.error("Please fill all fields");
        return false;
      }

      if (!frontEndName || frontEndName === "") {
        toast.error("Front-End name cannot be empty!");
        return false;
      }
      if (frontEndName.length < 4) {
        toast.error("Front-End name is too short!");
        return false;
      }
      if (!dataQuery || dataQuery === "") {
        toast.error("Data Query name cannot be empty!");
        return false;
      }
      if (dataQuery.length < 4) {
        toast.error("Data Query name is too short!");
        return false;
      }
      if (!functionality || functionality === "") {
        toast.error("Functionality description cannot be empty!");
        return false;
      }
      if (functionality.length < 4) {
        toast.error("Functionality description is too short!");
        return false;
      }
      if (!logo) {
        toast.error("No logo set!");
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
      setPageStep(step);
    }
    if (handleValidation() && step === 0) {
      toast.success("Your token has been deployed successfully!");
      setTimeout(() => {
        navigate("/smartbuidl");
      }, 1500);
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
            w={"25%"}
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
              <RadioGroup onChange={setPlatform} value={platform}>
                <Stack direction="column">
                  {templates.map((template) => {
                    const { id, name, text } = template;
                    return (
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        width={"100%"}
                        border={
                          platform === name
                            ? "1px solid #FC8B23"
                            : "1px solid #eee"
                        }
                        borderRadius={5}
                        padding={3}
                        key={id}
                      >
                        <Box>
                          <Text
                            fontSize={16}
                            fontWeight={"550"}
                            color={"black"}
                            mb={2}
                          >
                            {name}
                          </Text>
                          <Text>{text}</Text>
                        </Box>
                        <Radio
                          value={name}
                          position={"absolute"}
                          right={5}
                          size={"lg"}
                          colorScheme={"orange"}
                        />
                      </Box>
                    );
                  })}
                </Stack>
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
        {pageStep === 4 && (
          <>
            <SmartStakingForm onSubmit={(e) => handleSubmit(e, 0)}>
              <Text textAlign={"center"} fontWeight={"600"} mb={3}>
                FRONT-END DESIGN
              </Text>
              <Text fontSize={16} fontWeight={"600"} mb={1}>
                Name
              </Text>
              <Input
                name="frontEndName"
                type={"text"}
                onChange={(e) => handleChange(e)}
                focusBorderColor={colors.gray100}
                mb={3}
              />
              <Text fontSize={16} fontWeight={"600"} mb={1}>
                Color Code
              </Text>
              <Input
                name="colorCode"
                type={"text"}
                onChange={(e) => handleChange(e)}
                focusBorderColor={colors.gray100}
                mb={3}
              />
              <Text fontSize={16} fontWeight={"600"} mb={1}>
                Upload Logo
              </Text>
              <Input
                name="logo"
                type={"text"}
                onChange={(e) => handleChange(e)}
                focusBorderColor={colors.gray100}
                mb={10}
              />
              <Text textAlign={"center"} fontWeight={"600"} mb={3}>
                BACK-END DESIGN
              </Text>
              <Text fontSize={16} fontWeight={"600"} mb={1}>
                Functionality
              </Text>
              <Input
                name="functionality"
                type={"text"}
                onChange={(e) => handleChange(e)}
                focusBorderColor={colors.gray100}
                mb={3}
              />
              <Text fontSize={16} fontWeight={"600"} mb={1}>
                Data Query
              </Text>
              <Input
                name="dataQuery"
                type={"text"}
                onChange={(e) => handleChange(e)}
                focusBorderColor={colors.gray100}
                mb={3}
              />

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
                  Deploy
                </Button>
              </Box>
            </SmartStakingForm>
          </>
        )}
      </Box>
    </>
  );
};

export default SmartStaking;
