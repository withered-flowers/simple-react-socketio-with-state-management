import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const initialState = {
	socketState: undefined,
	stringArg0: undefined,
	formResponseDariServer: undefined,
};

const socketSlice = createSlice({
	name: "socket",
	initialState: initialState,
	reducers: {
		// Berhubungan dengan event socket
		connectSocket(state, action) {
			state.socketState = io(action.payload);
		},
		disconnectSocket(state) {
			state.socketState.disconnect();
			state.socketState = null;
		},

		// Berhubungan dengan data socket untuk stringArg0
		setStringArg0(state, action) {
			state.stringArg0 = action.payload;
		},

		// Berhubungan dengan data socket untuk formResponseDariServer
		setFormResponseDariServer(state, action) {
			state.formResponseDariServer = action.payload;
		},
	},
});

export const {
	connectSocket,
	disconnectSocket,
	setStringArg0,
	setFormResponseDariServer,
} = socketSlice.actions;

// fn Thunk dimulai di sini
export const initEventSocket = (url) => (dispatch, getState) => {
	dispatch(connectSocket(url));

	// getState . namaAlias . namaState

	const socket = getState().socket.socketState;

	// Declare socket event di sini semua
	socket.on("connect", () => {
		console.log(socket.id);
	});

	// ! Note: di sini akan menerima 3 argument 3dari server
	socket.on("hello-response-to-client", (arg0, arg1, arg2) => {
		console.log("String:", arg0);
		console.log("Array", arg1);
		console.log("Object", arg2);

		// ! Note: pada contoh ini hanya arg0 yang dijadikan state
		dispatch(setStringArg0(arg0));
	});

	// ! Note: di sini akan menerima 1 argument dari server
	socket.on("form-submission-response", (arg0) => {
		console.log("Response dari server adalah:", arg0);
		dispatch(setFormResponseDariServer(arg0));
	});
};

export const unmountEventSocket = () => (dispatch, getState) => {
	const socket = getState().socket.socketState;

	if (socket) {
		dispatch(disconnectSocket());
	}
};

export default socketSlice.reducer;
