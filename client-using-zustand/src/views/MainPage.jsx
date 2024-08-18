import CustomForm from "../components/CustomForm.jsx";
import { useSocketStore } from "../stores/index.js";

const MainPage = () => {
	// ? Di sini kita akan memanggil "state" yang akan digunakan pada component ini yang disediakan zustand
	const { socketState, stringArg0 } = useSocketStore((state) => state);

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
				<li>src/stores/index.js</li>
				<li>src/App.jsx</li>
				<li>src/views/MainPage.jsx</li>
				<li>src/components/CustomForm.jsx</li>
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
					Emit (hello-world) - Lihat Server Console setelah Klik
				</button>
				<button
					type="button"
					style={{
						fontSize: "1.5em",
					}}
					onClick={btnHelloResponseOnClickHandler}
				>
					Emit (hello-response) - Lihat Client Console setelah Klik
				</button>
			</section>
			{stringArg0 && (
				<p>
					{stringArg0} - len: {stringArg0.length}
				</p>
			)}
			<section
				style={{
					paddingTop: "1em",
					paddingBottom: "1em",
					width: "50vw",
				}}
			>
				<CustomForm />
			</section>
		</>
	);
};

export default MainPage;
