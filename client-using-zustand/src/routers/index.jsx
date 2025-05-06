import { Route, Routes } from "react-router";
import MainPage from "../views/MainPage";

export const BaseRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
		</Routes>
	);
};
