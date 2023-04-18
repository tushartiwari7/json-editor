import React from "react";
import { useWrapperProvider } from "./WrapperContext";

const Property = ({ data }) => {
  const { dispatch } = useWrapperProvider();
  const renameTitleHandler = (event) => {
    const updateTo = event.target.value;
    dispatch({
      type: "update",
      payload: { key: data.id, value: { title: updateTo } },
    });
  };

  return (
    <li>
      <input value={data.title} onChange={renameTitleHandler} />
      {data.type}
    </li>
  );
};

export default Property;
