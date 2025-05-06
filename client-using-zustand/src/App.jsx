import { BrowserRouter } from "react-router";
import { BaseRouter } from "./routers";

import { useEffect } from "react";
import { useSocketStore } from "./stores";

// ? Di sini kita akan menggunakan useEffect untuk memanggil connection ke socket
const App = () => {
	const { internalSocketConnect, internalSocketDisconnect } = useSocketStore();

	useEffect(() => {
		internalSocketConnect();

		// ? Jangan lupa untuk handle disconnect pada saat unmount, supaya tidak terjadi leak !
		return () => {
			internalSocketDisconnect();
		};
	}, [internalSocketConnect, internalSocketDisconnect]);

	return (
		<BrowserRouter>
			<BaseRouter />
		</BrowserRouter>
	);
};

export default App;
