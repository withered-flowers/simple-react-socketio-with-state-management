import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { SocketProvider } from "./contexts/socket-context.jsx";
import router from "./routers/index.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<SocketProvider>
			<RouterProvider router={router} />
		</SocketProvider>
	</StrictMode>,
);
