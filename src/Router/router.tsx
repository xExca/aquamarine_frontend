import { createHashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "../Components/Layout/DefaultLayout";
import CheckoutLayout from "../Components/Layout/CheckoutLayout";
import Home from "../Components/Page/Home";
import ProductItem from "../Components/Product/ProductItem";
import Checkout from "../Components/Page/Checkout";
import Shop from "../Components/Page/Shop";
import CustomerCare from "../Components/Page/CustomerCare";
import Sale from "../Components/Page/Sale";
import UserManagement from "../Components/Page/UserManagement";
export default function AppRoute() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductItem />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/customer-care" element={<CustomerCare />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/user-management" element={<UserManagement />} />
        </Route>
        <Route element={<CheckoutLayout />}>
          <Route path="/checkout/:id" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
