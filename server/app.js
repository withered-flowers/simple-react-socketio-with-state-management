const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: {
		// ! Note: origin "*" hanya untuk pembelajaran saja, pada production, gunakan domain yang pasti
		origin: "*",
	},
});

io.on("connection", (socket) => {
	console.log(`User ${socket.id} is connected`);

	socket.on("hello-world", () => {
		console.log('Hello world is handled via "(on) hello-world" on server');
	});

	socket.on("hello-response", () => {
		console.log(
			'Hello response is handled via "(on) hello-response" on server, will (emit) hello-response-to-client to the client',
		);

		// ! Note: di sini akan melempar 3 argument ke client
		socket.emit(
			"hello-response-to-client",
			"first-value-as-a-string",
			["second-value-from-an-array"],
			{
				third: "value as an object",
			},
		);
	});

	socket.on("disconnect", (reason) => {
		console.log(`User ${socket.id} disconnected - reason: ${reason}`);
	});
});

httpServer.listen(3000);
