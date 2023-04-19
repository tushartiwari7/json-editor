import React from "react";
import WrapperProvider, { useWrapperProvider } from "./WrapperContext";
import Wrapper from "./Wrapper";

const Property = ({ data }) => {
  const { dispatch } = useWrapperProvider();

  const updateProperty = (value) =>
    dispatch({
      type: "update",
      payload: { key: data.id, value },
    });

  const renameTitleHandler = (event) =>
    updateProperty({ title: event.target.value });

  const changeInterfaceType = (event) => {
    const changeTo = event.target.value;
    if (changeTo === "object")
      return updateProperty({ type: changeTo, children: {} });
    updateProperty({ type: changeTo, children: null });
  };

  const removeProperty = () => {
    dispatch({ type: "delete", payload: data.id });
  };

  const observer = (updatedChild) => updateProperty({ children: updatedChild });

  return (
    <li>
      <input
        autoFocus={true}
        value={data.title}
        onChange={renameTitleHandler}
      />
      <select value={data.type} onChange={changeInterfaceType}>
        <option>string</option>
        <option>object</option>
        <option>number</option>
        <option>boolean</option>
      </select>
      <button onClick={removeProperty}>Delete</button>
      {data.children && (
        <WrapperProvider observer={observer} defaultValue={data.children}>
          <Wrapper />
        </WrapperProvider>
      )}
    </li>
  );
};

export default Property;
