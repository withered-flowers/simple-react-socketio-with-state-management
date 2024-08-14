import { useContext } from "react";
import { SocketContext } from "../contexts/socket-context";

const MainPage = () => {
	const { socketState, stringArg0 } = useContext(SocketContext);

	const btnHelloWorldOnClickHandler = () => {
		// ? Hanya akan dijalankan bila socketState tidak undefined
		socketState?.emit("hello-world");
	};

	const btnHelloResponseOnClickHandler = () => {
		// ? Hanya akan dijalankan bila socketState tidak undefined
		socketState?.emit("hello-response");
	};

	return (
		<>
			Lihat file berikut:
			<ul>
				<li>src/contexts/socket-context-jsx</li>
				<li>src/views/MainPage.jsx</li>
			</ul>
			<section
				style={{
					display: "flex",
					gap: "0.25em",
				}}
			>
				<button
					type="button"
					style={{
						fontSize: "1.5em",
					}}
					onClick={btnHelloWorldOnClickHandler}
				>
					Emit (hello-world) - See Server Console after Clicked
				</button>
				<button
					type="button"
					style={{
						fontSize: "1.5em",
					}}
					onClick={btnHelloResponseOnClickHandler}
				>
					Emit (hello-response) - See Client Console after Clicked
				</button>
			</section>
			{stringArg0 && (
				<p>
					{stringArg0} - len: {stringArg0.length}
				</p>
			)}
		</>
	);
};

export default MainPage;
