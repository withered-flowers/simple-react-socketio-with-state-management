import { io } from "socket.io-client";
import { create } from "zustand";

const SOCKET_SERVER = "http://localhost:3000";

// ? Ini adalah store yang akan mengikat si socket
export const useSocketStore = create((set, get) => ({
	// ? State yang akan digunakan untuk socket emitter pada component
	socketState: undefined,
	// ? Data tambahan untuk menerima data dari socket
	stringArg0: undefined,
	formResponseDariServer: undefined,

	// ? Karena pada zustand tidak bisa menggunakan useEffect (bukan context), jadi kita harus membuat fungsi sendiri untuk dipanggil pada useEffect pertama
	internalSocketConnect: () => {
		const socketInitializer = io(SOCKET_SERVER);

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
			set({ stringArg0: arg0 });
		});

		// ! Note: di sini akan menerima 1 argument dari server
		socketInitializer.on("form-submission-response", (arg0) => {
			console.log("Response dari server adalah:", arg0);
			set({ formResponseDariServer: arg0 });
		});

		// ? set socketState untuk digunakan pada component nantinya
		set({ socketState: socketInitializer });
	},
	internalSocketDisconnect: () => {
		const currentSocket = get().socketState;

		if (currentSocket) {
			currentSocket.disconnect();
		}
	},
}));
