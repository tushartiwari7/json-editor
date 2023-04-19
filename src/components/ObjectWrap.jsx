import React from "react";
import "./ObjectWrap.css";
import Property from "./Property";

import { useObjectWrapProvider } from "./ObjectWrapContext";
const ObjectWrap = () => {
  const { state } = useObjectWrapProvider();
  return (
    <ol className="list">
      {Object.entries(state).map(([key, value]) => (
        <Property key={key} data={value} />
      ))}
    </ol>
  );
};

export default ObjectWrap;
