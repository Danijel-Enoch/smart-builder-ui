import { TokenHomeContainer, TokenHomeContent } from "../../styled/TokenHome";
import Digital from "../../assets/digital.png";
import { Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TokenHome = () => {
  document.title = "Smart Token";
  const navigate = useNavigate();
  return (
    <TokenHomeContainer>
      <img
        src={Digital}
        alt="digital-transformation-girl-in-binary-code-background"
      />
      <TokenHomeContent>
        <Text
          textAlign={"center"}
          fontWeight="600"
          fontSize={20}
          color={"blackAlpha.900"}
          mb={2}
        >
          Create your first contract
        </Text>
        <Text textAlign={"center"} mb={7}>
          Our no code smart auto-deployer enables people create and deploy their
          dApps with ease
        </Text>
        <Button
          ml={"35%"}
          p="1.5rem"
          bg="brand.primary"
          color="white"
          borderRadius="15px"
          _hover={{
            bg: "brand.primary",
            opacity: "0.8",
            color: "black",
          }}
          as={motion.button}
          initial={{ scale: 1 }}
          whileTap={{
            scale: 1.3,
          }}
          onClick={() => navigate("/smarttoken/standardToken")}
        >
          Get Started
        </Button>
      </TokenHomeContent>
    </TokenHomeContainer>
  );
};

export default TokenHome;
