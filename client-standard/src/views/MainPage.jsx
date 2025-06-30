import CustomForm from "../components/CustomForm.jsx";
import { useSocket } from "../hooks/socket-hooks.jsx";

const MainPage = () => {
  const { socketState, stringArg0, formResponseDariServer } = useSocket();

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
        <CustomForm socketState={socketState} formResponseDariServer={formResponseDariServer} />
      </section>
    </>
  );
};

export default MainPage;
