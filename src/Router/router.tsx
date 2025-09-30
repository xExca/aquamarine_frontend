import { createHashRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../Components/Layout/DefaultLayout";
import CheckoutLayout from "../Components/Layout/CheckoutLayout";
import Home from "../Components/Page/Home";
import ProductItem from "../Components/Product/ProductItem";
import Checkout from "../Components/Page/Checkout";
import Shop from "../Components/Page/Shop";
import CustomerCare from "../Components/Page/CustomerCare";
import Sale from "../Components/Page/Sale";
import UserManagement from "../Components/Page/UserManagement";

const router = createHashRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product/:id", element: <ProductItem /> },
      { path: "/shop", element: <Shop /> },
      { path: "/customer-care", element: <CustomerCare /> },
      { path: "/sale", element: <Sale /> },
      { path: "/user-management", element: <UserManagement /> },
    ],
  },
  {
    element: <CheckoutLayout />,
    children: [{ path: "/checkout/:id", element: <Checkout /> }],
  },
]);

export default function AppRoute() {
  return <RouterProvider router={router} />;
}
