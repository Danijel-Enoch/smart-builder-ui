import { Box, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { smartNeeds } from "../../constants/data";

const SmartBuidl = () => {
  const navigate = useNavigate();
  return (
    <Box w={"100%"}>
      <Box>
        <Text
          color={"blackAlpha.900"}
          textAlign={"center"}
          mt={"3%"}
          fontSize={30}
          fontWeight={"600"}
        >
          All your Smart needs in one place
        </Text>
        <Text textAlign={"center"} mt={4} mb={7}>
          SmartBuidl will help you launch your product faster by selecting
          below.
        </Text>
      </Box>
      <Box
        display={"flex"}
        w={"100%"}
        gap={"10%"}
        height={"50%"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        {smartNeeds.map((item) => {
          const { id, name, logo, text, path } = item;
          return (
            <Box
              p="0.5rem"
              mb="2rem"
              textAlign="center"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              background="rgba(217, 217, 217, 0.3)"
              border="1px"
              borderRadius="15px"
              borderColor="rgba(0, 0, 0, 0.2);"
              w="20%"
              h={"100%"}
              key={id}
              onClick={() => navigate(path)}
              cursor="pointer"
            >
              <Image mx="auto" mt="0.5rem" src={logo} alt="logo" />
              <Text pt="0.4rem" pb="0.5rem" fontWeight="600">
                {name}
              </Text>
              <Text color="rgba(0, 0, 0, 0.7)" lineHeight="37px">
                {text}
              </Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SmartBuidl;
