import React from "react";
import { ButtonGroup, Spacer, Menu, MenuButton, MenuList, MenuItem, Avatar, Flex, Button } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <Flex alignItems="center" p="4">
      <ButtonGroup gap="0">
        <Button colorScheme="teal" variant="outline" borderRadius="25">
          Live
        </Button>
        <Button colorScheme="teal" variant="outline" borderRadius="25">
          Explore
        </Button>
      </ButtonGroup>
      <Spacer />
      <Menu>
        <MenuButton as={Button} rightIcon={<FaUserCircle />} variant="outline" borderRadius="full">
          <Avatar size="sm" name="John Doe" src="https://placekitten.com/64/64" />
        </MenuButton>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;
