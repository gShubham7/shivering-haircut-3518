// ModalOverlay' is not defined      react/jsx-no-undef
//   Line 12:12:  'ModalContent' is not defined      react/jsx-no-undef
//   Line 13:14:  'ModalHeader' is not defined       react/jsx-no-undef
//   Line 14:14:  'ModalCloseButton' is not defined  react/jsx-no-undef
//   Line 15:14:  'ModalBody' is not defined         react/jsx-no-undef
//   Line 16:16:  'Text' is not defined              react/jsx-no-undef
//   Line 19:16:  'Lorem' is not defined             react/jsx-no-undef
//   Line 22:14:  'ModalFooter' is not defined       react/jsx-no-undef
//   Line 23:16:  'Button' is not defined            react/jsx-no-undef
//   Line 26:16:  'Button
import {ModalContent,ModalHeader,ModalCloseButton,ModalBody,Text,ModalFooter,Button,Modal,ModalOverlay,useDisclosure} from '@chakra-ui/react'
function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight='bold' mb='1rem'>
                You can scroll the content behind the modal
              </Text>
              sdfsfdsdfsfsfsdafsfsafsdfsdfsdf
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export {BasicUsage};