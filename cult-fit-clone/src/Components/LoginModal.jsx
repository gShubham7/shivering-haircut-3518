import React from "react";
import {
  Text,
  Box,
  Button,
  useDisclosure,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,  
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  InputGroup,
  Stack,
  InputLeftAddon,
  VStack,
} from "@chakra-ui/react";

function LoginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [contact, setContact] = React.useState("");
  const handleChange = (e)=>{
    // console.log(e.target.value)
    // setContact(e.target.value)
  }
  const handleClick = ()=>{
    // console.log(contact)
  }
  return (
    <>
      <Box
        ref={finalRef}
        tabIndex={-1}
        aria-label="Focus moved to this box"
      ></Box>

      <Image
        onClick={onOpen}
        boxSize="25px"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/cultsport/prod/Profile.svg"
        alt="login"
      />

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg="black"
          color="white"
          border="1px solid white"
          borderRadius="10px"
          w="400px"
        >
          <ModalCloseButton />
          <ModalBody>
            <Image
              height={24}
              margin="auto"
              mt={12}
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_1.14,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman_with_cultsport_vertical.svg"
            />

            <InputGroup mt={10} mb={10} size="xs">
              <InputLeftAddon
                children="+91"
                bg="black"
                border="none"
                borderBottom="1px solid grey"
                borderRadius="0"
                focusBorderColor="none"
              />
              <Input
                type="tel"
                placeholder="Enter your phone number"
                border="none"
                borderBottom="1px solid grey"
                borderRadius="0"
                focusBorderColor="none"
                onChange={handleChange}
              />
            </InputGroup>
            <Button
              w="full"
              height={7}
              bg="grey"
              color="black"
              fontSize="14px"
              letterSpacing={2}
              onClick={handleClick}
            >
              CONTINUE
            </Button>
            <Button
              w="full"
              height={7}
              bg="black"
              color="white"
              border="1px solid white"
              mt={8}
              justifyContent="left"
              fontSize="14px"
            >
              Or connect with{" "}
              <Image
                height={5}
                ml={2}
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_24,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/login/google-login-white.svg"
              />
              <Image
                height={5}
                ml={2}
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_24,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/login/email-login-white.svg"
              />
            </Button>
          </ModalBody>

          <ModalFooter>
            <Text
              fontSize="13px"
              fontWeight='bold'
              color="grey"
              w="70%"
              margin="auto" 
              mb={12}
              textAlign="center"
            >
              * By Continuing you agree to the Terms of Services and Privacy
              policy.
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export { LoginModal };
