import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home";
import Order from "../components/Order";
import AllOrders from "../components/AllOrders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/@admin/all-orders",
        element: <AllOrders />,
      },
    ],
  },
]);
