import React from "react";
import { Flex, Avatar, AvatarBadge, Text } from "@chakra-ui/react";


const Header = () => {
    return (
      <Flex pt={'7vh'} w="100%" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Avatar size="lg" name="Dan Abrahmov" src="/assets/logo/animal-foot.png">
          {/*<AvatarBadge boxSize="1.05em" bg="green.500" />*/}
        </Avatar>
        <Flex flexDirection="column" mx="5" justify="center" style={{ textAlign: 'center' }}>
          <Text fontSize="lg" fontWeight="bold" style={{ fontSize: '1.5em', color: '#333' }}>
            Animals React Example
          </Text>
          <Text color="green.500" style={{ color: '#4CAF50' }}>
            We love Animals
          </Text>
        </Flex>
      </Flex>
    );
};

export default Header;
