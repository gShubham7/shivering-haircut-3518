import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Image,
  useDisclosure,
  Button,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

function CartDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart } = React.useContext(CartContext);
  const btnRef = React.useRef();

  return (
    <>
      <Image
        src="https://static.cure.fit/assets/images/cart-icon-new.svg"
        alt="cart"
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        blockScrollOnMount={false}
      >
        <DrawerContent mt={10}>
          <DrawerCloseButton />
          <DrawerHeader>Your cart</DrawerHeader>

          <DrawerBody textAlign={"center"}>
            {/* Cart Item's will be displayed here */}
            {cart.length === 0 ? (
              <Box>
                <Image
                  margin={"auto"}
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/temp/cart/empty-cart-dark-theme.svg"
                  alt="cart-img"
                />
                <Text textAlign={"center"}>Your cart is empty</Text>
              </Box>
            ) : (
              cart?.map((item) => (
                <Box>
                  <Flex p={5}>
                    <Image
                      src={item.imageURL}
                      w={"100px"}
                      borderRadius={"10px"}
                    />
                    <Box>
                      <Text
                        fontSize={"xs"}
                        color={"grey"}
                        ml={5}
                        textAlign={"left"}
                      >
                        cultsport
                      </Text>
                      <Text
                        fontSize={"xs"}
                        fontWeight={"bold"}
                        textAlign={"left"}
                        ml={5}
                      >
                        {item.name}
                      </Text>
                      <Text
                        fontSize={"xs"}
                        fontWeight={"bold"}
                        textAlign={"left"}
                        ml={5}
                      >
                        ₹ {item.price}
                      </Text>
                    </Box>
                  </Flex>
                  <hr />
                </Box>
              ))
            )}
          </DrawerBody>
          <Link to="/checkout">
            <DrawerFooter bg="white">
              <Button w="100%" bg="#FF3278" size={10} p={1}>
                BUY NOW
              </Button>
            </DrawerFooter>
          </Link>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export { CartDrawer };
