import React from "react";
import "./Wrapper.css";
import Property from "./Property";

import { useWrapperProvider } from "./WrapperContext";
const Wrapper = () => {
  const { state } = useWrapperProvider();
  return (
    <ol className="list">
      {Object.entries(state).map(([key, value]) => (
        <Property key={key} data={value} />
      ))}
    </ol>
  );
};

export default Wrapper;
