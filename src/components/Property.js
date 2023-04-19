import React from "react";
import ObjectWrapProvider, { useObjectWrapProvider } from "./ObjectWrapContext";
import "./Property.css";
import ObjectWrap from "./ObjectWrap";
import Switch from "./Switch";
import { ReactComponent as TrashSvg } from "assets/trash.svg";
import { schemaOperationsEnum } from "hooks/useSchema";
import { defaultSchemaProperty } from "utils";

const Property = ({ data }) => {
  const { dispatch } = useObjectWrapProvider();

  const updateProperty = (value) =>
    dispatch({
      type: schemaOperationsEnum.UPDATE,
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

  const addChild = () => {
    let uuid = self.crypto.randomUUID();
    console.log(uuid);
    updateProperty({
      type: "object",
      children: {
        ...data.children,
        [uuid]: {
          ...defaultSchemaProperty,
          id: uuid,
        },
      },
    });
  };

  const toggleIsRequired = (isChecked) =>
    updateProperty({ isRequired: isChecked });

  const removeProperty = () => {
    dispatch({ type: schemaOperationsEnum.REMOVE, payload: data.id });
  };

  const observer = (updatedChild) => updateProperty({ children: updatedChild });

  return (
    <li>
      <summary className="property">
        <section className="inputs">
          <input
            className="title"
            autoFocus={true}
            value={data.title}
            onChange={renameTitleHandler}
          />
          <select
            value={data.type}
            className="type"
            onChange={changeInterfaceType}
          >
            <option>string</option>
            <option>object</option>
            <option>number</option>
            <option>boolean</option>
          </select>
        </section>
        <section className="controls">
          <Switch
            checked={data.isRequired}
            onToggle={toggleIsRequired}
            name="is Required"
          />
          <button className="add btn" onClick={addChild}>
            +
          </button>
          <TrashSvg className="btn" onClick={removeProperty} />
        </section>
      </summary>
      {data.children && (
        <section className="children">
          <ObjectWrapProvider observer={observer} value={data.children}>
            <ObjectWrap />
          </ObjectWrapProvider>
        </section>
      )}
    </li>
  );
};

export default Property;
