import { ToastContainer } from "react-toastify";
import Wrapper from "./components/Wrapper";
import "./styles.css";
import "react-toastify/dist/ReactToastify.css";
import { initSchema, toastOptions } from "./utils";
import WrapperProvider from "./components/WrapperContext";
import { useState } from "react";
import { useSchema } from "./hooks/useSchema";
export default function App() {
  const { state, dispatch } = useSchema(initSchema);

  const addNewField = () => {
    dispatch({
      type: "add",
      payload: {
        title: "addName",
        isRequired: false,
        type: "string",
        children: null,
      },
    });
  };

  return (
    <div className="App center">
      <WrapperProvider value={state}>
        <section className="wrapper">
          <header className="header">
            <p className="text">Field Name and Type</p>
            <button className="btn" onClick={addNewField}>
              +
            </button>
          </header>
          <Wrapper />
        </section>
      </WrapperProvider>
      <ToastContainer {...toastOptions} />
    </div>
  );
}
