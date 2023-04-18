import React from "react";
import "./Wrapper.css";
import Property from "./Property";

import { useWrapperProvider } from "./WrapperContext";
const Wrapper = () => {
  const { state, createNewProperty } = useWrapperProvider();
  return (
    <section className="wrapper">
      <header className="header">
        <p className="text">Field Name and Type</p>
        <button className="btn" onClick={createNewProperty}>
          +
        </button>
      </header>
      <ol>
        {Object.entries(state).map(([key, value]) => (
          <Property key={key} data={value} />
        ))}
      </ol>
    </section>
  );
};

export default Wrapper;
