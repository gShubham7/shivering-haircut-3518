import React from "react";
//import { data } from "../Components/data"
import { getData } from "../Components/api";
import { Link } from "react-router-dom";
import { ImageSlider } from "../Components/ImageSlider";
import { FAQAccordian } from "../Components/FAQAccordian";
import { ProductCard } from "../Components/Product";
import { Grid, Box } from "@chakra-ui/react";

function Home() {
  const [data, setData] = React.useState([]);
  // const [searchParams, setSearchParams] = React.useSearchParams;
  // const i = searchParams.get()
  // console.log(i)
  React.useEffect(() => {
    fetchData();
  }, []);

  // React.useEffect(() => {
  //   setSearchParams({ product_id });
  // }, [product_id])

  const fetchData = () => {
    getData()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => console.log("call completed"));
  };

  return (
    <div style={{ width: "100%" }}>
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
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          w="90%"
          margin="auto"
        >
          {data.map((item) => (
            <Link to={`/${item.id}`} key={item.id + 8}>
              <ProductCard
                key={item.id}
                imageURL={item.imageURL}
                name={item.name}
                price={item.price}
              />
            </Link>
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
            <ProductCard
              key={item.id + 1}
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
            <ProductCard
              key={item.id + 2}
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
            <ProductCard
              key={item.id + 3}
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
            <ProductCard
              key={item.id + 4}
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
            <ProductCard
              key={item.id + 5}
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
            <ProductCard
              key={item.id + 6}
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
            <ProductCard
              key={item.id + 7}
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
            <ProductCard
              key={item.id + 8}
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
