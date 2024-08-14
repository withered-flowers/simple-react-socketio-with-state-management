import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

// Context
export const SocketContext = createContext(undefined);

// Context.Provider
// eslint-disable-next-line react/prop-types
export const SocketProvider = ({ children }) => {
	const [socketState, setSocketState] = useState(undefined);

	// ? State tambahan untuk menerima data dari socket
	const [stringArg0, setStringArg0] = useState(undefined);

	useEffect(() => {
		// Socket
		const socketInitializer = io("http://localhost:3000");

		// Socket Event
		socketInitializer.on("connect", () => {
			console.log(socketInitializer.id);
		});

		// ! Note: di sini akan menerima 3 argument dari server
		socketInitializer.on("hello-response-to-client", (arg0, arg1, arg2) => {
			console.log("String:", arg0);
			console.log("Array", arg1);
			console.log("Object", arg2);

			// ! Note: pada contoh ini hanya arg0 yang dijadikan state
			setStringArg0(arg0);
		});

		// Socket to socketState Setter
		setSocketState(socketInitializer);

		return () => {
			if (socketInitializer) {
				socketInitializer.disconnect();
			}
		};
	}, []);

	return (
		// ! Aturannya: Lempar value yang dibutuhkan saja
		<SocketContext.Provider value={{ socketState, stringArg0 }}>
			{children}
		</SocketContext.Provider>
	);
};
