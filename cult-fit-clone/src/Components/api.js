import axios from "axios";

export const getData = () => {
  return axios.get(`https://mock-server-app-4i5h.onrender.com/products`);
};

export const singleProductData = (product_id) => {
  return axios.get(
    `https://mock-server-app-4i5h.onrender.com/products/${product_id}`
  );
};
