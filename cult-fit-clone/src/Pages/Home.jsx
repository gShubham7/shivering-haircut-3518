import React from "react";
import { ImageSlider } from "../Components/ImageSlider";
import { FAQAccordian } from "../Components/FAQAccordian";
import { ProductAddToCart } from "../Components/Product";
import { Flex, Grid, GridItem, Box } from "@chakra-ui/react";

const data = [
  {
    imageURL:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ifxQqSatbw9anqJsmG1eo1SA",
    name: "Flomo Women Running Shoe",
    price: 2794,
  },
  {
    imageURL:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mU1dZAHqT6pjRn55ZWYvq6Mf",
    name: "FormFit High Impact Ivy Sports Bra",
    price: 1624,
  },
  {
    imageURL:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/8vVR6uLBQSmX2vMsh6hfkXT2",
    name: "Vitals Running T-Shirt",
    price: 974,
  },
  {
    imageURL:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/anBREptvxVED3KMUSXcPpTen",
    name: "Seamless Ombre Tights",
    price: 1049,
  },
];

function Home() {
  return (
    <div style={{width:'100%'}}>
      <ImageSlider />
      {
        <Box boxSize="88%" margin="auto" textAlign="left" mt={5}>
          <Box
            fontSize="30px"
            fontWeight="bolder"
            fontStyle="italic"
            color="rgb(51,51,51)"
          >
            BEST SELLERS
          </Box>
          <Box color="teal" letterSpacing={2}>
            LOVED BY CULT MEMBERS
          </Box>
        </Box>
      }
      {
        <Grid templateColumns={["repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)"]} w="90%" margin="auto">
          {data.map((item) => (
            <ProductAddToCart
              imageURL={item.imageURL}
              name={item.name}
              price={item.price}
            />
          ))}
        </Grid>
      }
      {
        <Box boxSize="88%" margin="auto" textAlign="left" mt={5}>
          <Box
            fontSize="30px"
            fontWeight="bolder"
            fontStyle="italic"
            color="rgb(51,51,51)"
          >
            JUST LAUNCHED
          </Box>
          <Box color="teal" letterSpacing={2}>
            NEW ARRIVALS
          </Box>
        </Box>
      }
      {
        <Grid templateColumns="repeat(4, 1fr)" w="90%" margin="auto">
          {data.map((item) => (
            <ProductAddToCart
              imageURL={item.imageURL}
              name={item.name}
              price={item.price}
            />
          ))}
        </Grid>
      }
      {
        <Box boxSize="88%" margin="auto" textAlign="left" mt={5}>
          <Box
            fontSize="30px"
            fontWeight="bolder"
            fontStyle="italic"
            color="rgb(51,51,51)"
          >
            CYCLES
          </Box>
        </Box>
      }
      {
        <Grid templateColumns="repeat(4, 1fr)" w="90%" margin="auto">
          {data.map((item) => (
            <ProductAddToCart
              imageURL={item.imageURL}
              name={item.name}
              price={item.price}
            />
          ))}
        </Grid>
      }
      {
        <Box boxSize="88%" margin="auto" textAlign="left" mt={5}>
          <Box
            fontSize="30px"
            fontWeight="bolder"
            fontStyle="italic"
            color="rgb(51,51,51)"
          >
            SPINBIKES
          </Box>
        </Box>
      }
      {
        <Grid templateColumns="repeat(4, 1fr)" w="90%" margin="auto">
          {data.map((item) => (
            <ProductAddToCart
              imageURL={item.imageURL}
              name={item.name}
              price={item.price}
            />
          ))}
        </Grid>
      }
      {
        <Box boxSize="88%" margin="auto" textAlign="left" mt={5}>
          <Box
            fontSize="30px"
            fontWeight="bolder"
            fontStyle="italic"
            color="rgb(51,51,51)"
          >
            TREADMILLS
          </Box>
        </Box>
      }
      {
        <Grid templateColumns="repeat(4, 1fr)" w="90%" margin="auto">
          {data.map((item) => (
            <ProductAddToCart
              imageURL={item.imageURL}
              name={item.name}
              price={item.price}
            />
          ))}
        </Grid>
      }
      {
        <Box boxSize="88%" margin="auto" textAlign="left" mt={5}>
          <Box
            fontSize="30px"
            fontWeight="bolder"
            fontStyle="italic"
            color="rgb(51,51,51)"
          >
            ACCESSORIES
          </Box>
        </Box>
      }
      {
        <Grid templateColumns="repeat(4, 1fr)" w="90%" margin="auto">
          {data.map((item) => (
            <ProductAddToCart
              imageURL={item.imageURL}
              name={item.name}
              price={item.price}
            />
          ))}
        </Grid>
      }
      {
        <Box boxSize="88%" margin="auto" textAlign="left" mt={5}>
          <Box
            fontSize="30px"
            fontWeight="bolder"
            fontStyle="italic"
            color="rgb(51,51,51)"
          >
            TOPWEAR
          </Box>
        </Box>
      }
      {
        <Grid templateColumns="repeat(4, 1fr)" w="90%" margin="auto">
          {data.map((item) => (
            <ProductAddToCart
              imageURL={item.imageURL}
              name={item.name}
              price={item.price}
            />
          ))}
        </Grid>
      }
      {
        <Box boxSize="88%" margin="auto" textAlign="left" mt={5}>
          <Box
            fontSize="30px"
            fontWeight="bolder"
            fontStyle="italic"
            color="rgb(51,51,51)"
          >
            BOTTOMWEAR
          </Box>
        </Box>
      }
      {
        <Grid templateColumns="repeat(4, 1fr)" w="90%" margin="auto">
          {data.map((item) => (
            <ProductAddToCart
              imageURL={item.imageURL}
              name={item.name}
              price={item.price}
            />
          ))}
        </Grid>
      }
      {
        <Box boxSize="88%" margin="auto" textAlign="left" mt={5}>
          <Box
            fontSize="30px"
            fontWeight="bolder"
            fontStyle="italic"
            color="rgb(51,51,51)"
          >
            HEALTH & NUTRITION
          </Box>
        </Box>
      }
      {
        <Grid templateColumns="repeat(4, 1fr)" w="90%" margin="auto">
          {data.map((item) => (
            <ProductAddToCart
              imageURL={item.imageURL}
              name={item.name}
              price={item.price}
            />
          ))}
        </Grid>
      }
      <FAQAccordian />
    </div>
  );
}

export { Home };
