import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home.tsx";
import { Cart } from "./pages/Cart.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/cart",
    Component: Cart,
  },
]);
