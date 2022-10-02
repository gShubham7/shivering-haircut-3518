import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { singleProductData } from "../Components/api";
import { CartContext } from "../CartContext/CartContext";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Badge,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";

export function ProductDetails() {
  const { product_id } = useParams();
  const { cart, handleCart } = React.useContext(CartContext);
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    singleProductData(product_id).then((res) => setProduct(res.data));
  }, [product_id]);

  const handleClick = () => {
    handleCart(product);
  };

  return (
    <Container maxW={"7xl"} textAlign={"left"} mt={-20}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={product.imageURL}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            // h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Text>cultsport</Text>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
            >
              {product.name}
            </Heading>
            <Text
              color={useColorModeValue("pink.500", "red.400")}
              fontWeight={"bold"}
              fontSize={"2xl"}
            >
              ₹ {product.price}{" "}
              <Badge bg="orange" fontSize={"md"}>
                35% OFF
              </Badge>
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
            color={"teal"}
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"xs"}>
                Run your own race, defy the norms and cook up a storm in this
                workout T-shirt.Meant to move with you, this combines design and
                technology to deliver a performance as impressive as yours.
              </Text>
              <Flex w={"full"} justifyContent={"space-between"}>
                <Button
                  bg={"#F83F45"}
                  color={"white"}
                  fontWeight={"bold"}
                  fontSize={"xs"}
                  w={"350px"}
                  borderRadius={30}
                  _hover={{ bg: "teal" }}
                  onClick={handleClick}
                >
                  ADD TO CART
                </Button>
                <Link to="/checkout">
                  <Button
                    borderRadius={30}
                    w={"300px"}
                    color={"white"}
                    fontWeight={"bold"}
                    fontSize={"xs"}
                    bg={"#F83F45"}
                    _hover={{ bg: "teal" }}
                  >
                    VIEW CART
                  </Button>
                </Link>
              </Flex>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={10}
                fontSize={"xs"}
              >
                <List>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{" "}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List>
                  <ListItem>Anti-magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box fontSize={"xs"}>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Between lugs:
                  </Text>{" "}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Bracelet:
                  </Text>{" "}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case:
                  </Text>{" "}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case diameter:
                  </Text>{" "}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Dial color:
                  </Text>{" "}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Crystal:
                  </Text>{" "}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Water resistance:
                  </Text>{" "}
                  5 bar (50 metres / 167 feet){" "}
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
