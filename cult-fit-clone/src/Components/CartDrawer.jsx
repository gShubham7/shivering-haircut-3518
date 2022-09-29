import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Image
        src="https://static.cure.fit/assets/images/cart-icon-new.svg"
        alt="cart"
        ref={btnRef}
        colorScheme="teal"
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

          <DrawerBody>
            {/* Cart Item's will be displayed here */}
          </DrawerBody>

          <DrawerFooter bg="white">
            <Button w="full" bg="#FF3278" size={10} p={1}>
              BUY NOW
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export { DrawerExample };
