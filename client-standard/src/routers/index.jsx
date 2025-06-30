import { createBrowserRouter } from "react-router";
import MainPage from "../views/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

export default router;
