import React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Container,
  Stack,
} from "@chakra-ui/react";

function FAQAccordian() {
  return (
    <>
      <div style={{ backgroundColor: "#F2F4F8", padding: "40px 0" }}>
        <Stack width="90%" m="auto">
          <Text textAlign="left" fontWeight="bold" fontSize="30px">
            FAQS
          </Text>
          <Text textAlign="left" color="teal" fontSize="20px" fontWeight="bold">
            2 QUESTIONS
          </Text>
          <Accordion allowToggle ml={5}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <li>What is cultsport and what does it offer?</li>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                textAlign="left"
                fontSize="15px"
                fontWeight="bold"
                color="teal"
                w="50%"
                ml={5}
              >
                cultsport from the house of cure.fit aims to make health easy by
                providing smart fitness products for the everyday athlete.
                Designed to give you the best workout experience, the cultsport
                product range includes sportswear, at-home workout equipments,
                bicycles & nutraceutical.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <li>What makes cultsport special?</li>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                textAlign="left"
                fontSize="15px"
                fontWeight="bold"
                color="teal"
                w="50%"
                ml={5}
              >
                cultsport has a wide range of smart fitness products across
                categories. Each of the products is crafted to create you
                workout exprience better. Be it the moisture-wicking technology
                in our apparel, extra soft and light insole in our footwear,
                smart tracking in the outdoor cycle or progress tracker in our
                home equipment. cultsport aims to give you products that look
                good and have even better quality. With our post-sale assembly &
                installation service, we make sure you have a delightful
                experience from when you add to cart till when it's delivered.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
      </div>
    </>
  );
}

export { FAQAccordian };
