import { createBrowserRouter } from "react-router-dom";
import Index from "@/container/Index";
import About from "@/container/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Index,
  },
  {
    path: "/about",
    Component: About,
  },
]);

export default router;
