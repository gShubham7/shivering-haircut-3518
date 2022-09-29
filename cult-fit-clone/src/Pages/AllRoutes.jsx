import { Routes, Route } from "react-router-dom";
//import Products from "./Users";
import ProductDetails from "./ProductDetails";
import PageNotFound from "./NotFoundPage";
import PrivateRoute from "../Components/PrivateRoute";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>      
      {/* <Route
        path="/products"
        element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        }
      ></Route> */}
      <Route
        path="/products/:product_id"
        element={
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        }
      ></Route>      
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AllRoutes;
