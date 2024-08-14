import { useContext, useRef, useState } from "react";
import { SocketContext } from "../contexts/socket-context";

const CustomForm = () => {
	const { socketState, formResponseDariServer } = useContext(SocketContext);

	const formRef = useRef("");
	const [formValue, setFormValue] = useState("");

	const formOnSubmitHandler = (event) => {
		// ? Supaya tidak refresh
		event.preventDefault();

		// ? Kirim valuenya ke server via socket
		if (socketState) {
			// ? Gunakan ref supaya pada saat ganti input tidak akan mengubah tampilan
			formRef.current = formValue;
			socketState.emit("form-submission", formValue);
		}
	};

	return (
		<>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
				}}
				onSubmit={formOnSubmitHandler}
			>
				<input
					style={{ fontSize: "1.5em" }}
					type="text"
					placeholder="Input string untuk dihitung jumlahnya"
					onChange={(event) => setFormValue(event.target.value)}
				/>
				<button style={{ fontSize: "1.5em" }} type="submit">
					Kirim ke BackEnd via Form Submit
				</button>
			</form>
			{formResponseDariServer && (
				<p>
					Panjang &quot;{formRef.current}&quot; di atas adalah{" "}
					{formResponseDariServer}
				</p>
			)}
		</>
	);
};

export default CustomForm;
