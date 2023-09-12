import React from "react";
import { Flex, Box } from "@chakra-ui/react";

const PlaygroundPage = () => {
  return (
    <Flex
      height="100vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="100px"
        height="100px"
        backgroundColor="blue.500"
        marginRight="5vw">
      </Box>

      <Box
        width="100px"
        height="100px"
        backgroundColor="blue.500">
      </Box>
    </Flex>
  );
};

export default PlaygroundPage;
