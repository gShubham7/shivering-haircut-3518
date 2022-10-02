import React from "react";
import { CartContext } from "../CartContext/CartContext";
import { Flex, Box, Image, Text, HStack, Button } from "@chakra-ui/react";

function Checkout() {
  const { cart } = React.useContext(CartContext);
  const [count, setCount] = React.useState(1);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    let sum = 0;
    //cart.reduce((a) => console.log(a.price), 0);
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].price;
    }
    console.log(sum);
    setTotal(sum);
    console.log(total);
  }, [cart]);

  function handleClick(val, price) {
    setCount(count + val);
    setTotal((prev) => prev + price * val);
  }

  return (
    <div>
      <Flex>
        {cart?.map((item) => (
          <Box>
            <Flex p={5}>
              <Image src={item.imageURL} w={"100px"} borderRadius={"10px"} />
              <Box>
                <Text fontSize={"xs"} color={"grey"} ml={5} textAlign={"left"}>
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
                <HStack>
                  <Button onClick={() => handleClick(-1, item.price)}>-</Button>
                  <Text>{count}</Text>
                  <Button onClick={() => handleClick(1, item.price)}>+</Button>
                </HStack>
              </Box>
            </Flex>
            <hr />
          </Box>
        ))}
        <Box
          borderRadius={30}
          w={"500px"}
          color={"red"}
          fontWeight={"bold"}
          fontSize={"lg"}
          mt={10}
        >
          Cart Total : {total}
        </Box>
      </Flex>
    </div>
  );
}

export { Checkout };
