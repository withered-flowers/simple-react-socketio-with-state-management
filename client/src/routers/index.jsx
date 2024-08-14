import { createBrowserRouter } from "react-router-dom";
import MainPage from "../views/MainPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainPage />,
	},
]);

export default router;
