import React from "react";
import "./Wrapper.css";
import { useSchema } from "../hooks/useSchema";
import Property from "./Property";
const Wrapper = () => {
  const { get, add } = useSchema();

  const createNewProperty = () => {
    add("temp", {
      isRequired: false,
      type: "string",
      children: null,
    });
  };

  return (
    <section className="wrapper">
      <header className="header">
        <p className="text">Field Name and Type</p>
        <button className="btn" onClick={createNewProperty}>
          +
        </button>
      </header>
      <ol>
        {Object.entries(get()).map(([key, value]) => (
          <Property key={key} data={{ key, value }} />
        ))}
      </ol>
    </section>
  );
};

export default Wrapper;
