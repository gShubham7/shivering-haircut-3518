import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  chakra,
  Tooltip,
} from "@chakra-ui/react";

function ProductCard({ imageURL, name, price }) {
  return (
    <Flex p={3} w="100%" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        position="relative"
      >
        <Image src={imageURL} alt={`Picture of ${imageURL}`} />

        <Box>
          <Box d="flex" alignItems="baseline"></Box>
          <Box as="p" color="teal" textAlign="left" mt={2}>
            cultsport
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="19px"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              textAlign="left"
            >
              {name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                {/* <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} /> */}
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
            <Box fontSize="xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="md" fontWeight="bold">
                ₹{" "}
              </Box>
              <Box as="span" fontSize="md" fontWeight="bold">
                {price}{" "}
              </Box>
              <Box as="span" fontSize="md" fontWeight="bold" color="#FF3278">
                {" "}
                35% off
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export { ProductCard };
