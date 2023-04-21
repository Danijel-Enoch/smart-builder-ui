import React from "react";
import { Box, Text, Button, Image, Flex } from "@chakra-ui/react";
import { sbEcosystem } from "../../constants/data";
import arrow from "../../assets/right-arrow.png";
import "../card.css";

const Home = () => {
  return (
    <Box color="black" py="1.5rem">
      <Text textAlign="center" fontSize="2rem" fontWeight="600">
        The auto-deployer tool for everyone !
      </Text>

      <Text
        textAlign="center"
        px="1rem"
        color="rgba(0, 0, 0, 0.7)"
        fontSize="1rem"
        pt="0.5rem"
        pb="1.5rem"
        fontWeight="400"
      >
        SmartBuilder helps everyone create and deploy their Token and smart
        contract easily . SmartBuilder , everyone are alllowed to create their
        very own Smarttoken in minutes.
      </Text>

      <Box display="flex" justifyContent="center" mt="1rem" mb="2rem">
        <Button
          bg="brand.primary"
          color="white"
          p="1rem"
          mr="3rem"
          borderRadius="15px"
          _hover={{
            bg: "brand.primary",
            opacity: "0.8",
            color: "black"
          }}
        >
          Create Now
        </Button>

        <Box display="flex" alignItems="center">
          <Text as="span" mr="0.5rem">
            Learn more
          </Text>{" "}
          <Image boxSize="20px" src={arrow} alt="right-arrow" />
        </Box>
      </Box>

      <Flex
        py="2rem"
        bg="brand.gray100"
        alignItems="center"
        justifyContent="space-around"
        mb="1.5rem"
      >
        <Box>
          <Text fontSize="3rem" fontWeight="500">
            12.3k
          </Text>
          <Text fontSize="1rem">Total Projects</Text>
        </Box>
        <Box>
          <Text fontSize="3rem" fontWeight="500">
            $13.5M
          </Text>
          <Text fontSize="1rem">Total Value Locked</Text>
        </Box>
        <Box>
          <Text fontSize="3rem" fontWeight="500">
            5.4M
          </Text>
          <Text fontSize="1rem">Total Users</Text>
        </Box>
      </Flex>

      <Box borderTop="1px" borderColor="rgba(0, 0, 0, 0.3);">
        <Text
          textAlign="center"
          fontSize="1.5rem"
          pt="1rem"
          pb="0.5rem"
          fontWeight="600"
        >
          Growing the ARCHWAY ecosystem
        </Text>

        <Text
          textAlign="center"
          fontSize="1rem"
          color="rgba(0, 0, 0, 0.7)"
          fontWeight="400"
        >
          Smartbuilder is the toolkit needed to build almost evertthing on the
          ARCHWAY ecosystem easily.
        </Text>

        <Flex
          flexWrap="wrap"
          my="2rem"
          py="1.5rem"
          px="0.5rem"
          justifyContent="center"
          alignItems="center"
        >
          {sbEcosystem.map((item) => (
            <Box
              className="card-glass"
              p="0.5rem"
              mx="0.5rem"
              mb="2rem"
              textAlign="center"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              background="rgba(217, 217, 217, 0.3)"
              border="1px"
              borderRadius="15px"
              borderColor="rgba(0, 0, 0, 0.4);"
              w="31%"
              key={item.id}
            >
              <Image mx="auto" mt="0.5rem" src={item.logo} alt="logo" />
              <Text pt="0.4rem" pb="0.5rem" fontWeight="600">
                {item.name}
              </Text>
              <Text color="rgba(0, 0, 0, 0.7)" lineHeight="37px">
                {item.text}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
