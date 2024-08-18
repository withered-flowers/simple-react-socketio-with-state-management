import { RouterProvider } from "react-router-dom";
import router from "./routers";

import { useEffect } from "react";
import { useSocketStore } from "./stores";

// ? Di sini kita akan menggunakan useEffect untuk memanggil connection ke socket
const App = () => {
	const { internalSocketConnect, internalSocketDisconnect } = useSocketStore(
		(state) => state,
	);

	useEffect(() => {
		internalSocketConnect();

		// ? Jangan lupa untuk handle disconnect pada saat unmount, supaya tidak terjadi leak !
		return () => {
			internalSocketDisconnect();
		};
	}, [internalSocketConnect, internalSocketDisconnect]);

	return <RouterProvider router={router} />;
};

export default App;
