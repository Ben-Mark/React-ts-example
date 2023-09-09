import React from "react";
import { Flex, Box , Text, Spacer} from "@chakra-ui/react";


const Footer = () => {

  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      bg="gray.800"
      p="4"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      zIndex="100"
    >
      <Text color="white" fontWeight="bold">
        © 2023 Animals App
      </Text>
      <Spacer />
      <Box ml="5">
        <Text color="gray.400">
          <a href="/privacy" style={{ color: '#aaa', textDecoration: 'none' }}>Privacy Policy</a>
        </Text>
      </Box>
      <Box ml="5">
        <Text color="gray.400">
          <a href="/terms" style={{ color: '#aaa', textDecoration: 'none' }}>Terms of Service</a>
        </Text>
      </Box>
      <Box ml="5">
        <Text color="gray.400">
          <a href="/about" style={{ color: '#aaa', textDecoration: 'none' }}>About Us</a>
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
