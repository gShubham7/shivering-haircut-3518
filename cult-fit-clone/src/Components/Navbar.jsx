import React from "react";
import styles from "./Navbar.module.css";
import cult from "../images/cult-logo-white.svg";
import {
  Flex,
  Box,
  Spacer,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import {
  MenuButton,
  MenuList,
  Menu,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";

import { DrawerExample } from "./CartDrawer";

function Navbar() {
  const [city, setCity] = React.useState("Pune");

  return (
    <div className={styles.nav}>
      <Flex
        w="95%"
        m="auto"
        minWidth="max-content"
        alignItems="center"
        gap="5"
        color="white"
        fontWeight="bold"
        p={1}
      >
        <Image boxSize="8%" src={cult} alt="logo" />

        <Spacer />
        <Box w="150px">FITNESS</Box>
        <Box w="150px">CARE</Box>
        <Box w="150px">MIND</Box>
        <Box w="150px">STORE</Box>
        <Spacer />
        <Menu closeOnSelect={true}>
          <Box
            display="flex"
            _hover={{ bg: "grey", borderRadius: "5px", padding: "3px 0" }}
          >
            <MenuButton as={Box} fontWeight="light" minWidth="150px">
              {city}
            </MenuButton>
            <Image
              boxSize="20%"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/header/location.png"
            />
          </Box>
          <MenuList
            minWidth="240px"
            color="grey"
            bg="rgb(22,25,33)"
            border="none"
          >
            <MenuOptionGroup
              title="Popular Cities"
              type="radio"
              onChange={(e) => setCity(e)}
            >
              <MenuItemOption value="Pune">Pune</MenuItemOption>
              <MenuItemOption value="Bangalore">Bangalore</MenuItemOption>
              <MenuItemOption value="Delhi NCR">Delhi NCR</MenuItemOption>
              <MenuItemOption value="Mumbai">Mumbai</MenuItemOption>
              <MenuItemOption value="Hyderabad">Hyderabad</MenuItemOption>
              <MenuItemOption value="Imphal">Imphal</MenuItemOption>
              <MenuItemOption value="Ranchi">Ranchi</MenuItemOption>
              <MenuItemOption value="Dehradun">Dehradun</MenuItemOption>
              <MenuItemOption value="Bhubaneshwar">Bhubaneshwar</MenuItemOption>
              <MenuItemOption value="Jabalpur">Jabalpur</MenuItemOption>
              <MenuItemOption value="Vijaywada">Vijaywada</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <ButtonGroup gap="0">
          <Button
            size="sm"
            colorScheme="black"
            border="1px"
            borderColor="white"
          >
            GET APP
          </Button>
          {/* <Button colorScheme="teal">Log in</Button> */}
          <Box display="flex" alignItems="center" gap={5}>
            <Image
              boxSize="25px"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/Profile.png"
              alt="login"
            />
            <Image
              boxSize="25px"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg"
              alt="cart"             
            />
          </Box>
        </ButtonGroup>
      </Flex>
    </div>
  );
}

export {Navbar};
