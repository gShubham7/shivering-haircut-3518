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
  InputLeftAddon,
  PinInput,
  PinInputField,
  HStack,
} from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContext";

function LoginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [mobile, setMobile] = React.useState("");
  const [otp, setOTP] = React.useState();
  const { isAuth, toggleAuth, contact, setContact } =
    React.useContext(AuthContext);
  //const [ count, setCount] = React.useState(10);

  const handleChange = (e) => {    
    setMobile(e.target.value);
  };
  const handleClick = () => {    
    toggleAuth();
    setContact(mobile);    
  };
  const handleConfirm = () => {
    alert("You are logged in now");    
  };

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
          {isAuth ? (
            <ModalBody>
              <Text color="white">Enter OTP</Text>
              <Text w="80%" fontSize="xs" margin="auto" mt={14} color="grey">
                Please enter the code we just sent to {contact} to proceed
              </Text>
              <HStack mt={10} mb={10} justifyContent={'center'}>
                <PinInput mask onChange={(e)=>{setOTP(e)}}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>

              <Button
                w="full"
                height={7}
                bg="grey"
                color="black"
                fontSize="14px"
                letterSpacing={2}
                onClick={() => {
                  onClose();
                  handleConfirm();
                }}
              >
                CONFIRM
              </Button>
              <Text fontSize="xs" textAlign="center" mt={5} mb={5}>
                Get OTP On Call in
              </Text>
              <Text color="grey" textAlign="center">
                Didn't receive OTP?
              </Text>
              <Text
                fontSize="xs"
                textAlign="center"
                color="pink.400"
                fontWeight="bold"
              >
                RESEND
              </Text>
            </ModalBody>
          ) : (
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
                disabled={mobile.length<10}
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
          )}
          <ModalFooter>
            <Text
              fontSize="13px"
              fontWeight="bold"
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
