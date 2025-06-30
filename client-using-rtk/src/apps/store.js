import { configureStore } from "@reduxjs/toolkit";
import socketReducer from "../features/socket-slice";

const store = configureStore({
	reducer: {
		// Define your reducers here
		socket: socketReducer,
	},
	// ! Harus pakai ini supaya tidak error di console
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
