import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// ? Karena pada Zustand kita tetap akan menggunakan useEffect maka kita harus menggunakan App untuk bisa memanggil useEffect pada paling atas

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
