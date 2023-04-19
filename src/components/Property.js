import React from "react";
import ObjectWrapProvider from "./ObjectWrapContext";
import "./Property.css";
import ObjectWrap from "./ObjectWrap";
import Switch from "./Switch";
import { ReactComponent as TrashSvg } from "assets/trash.svg";
import { usePropertyControls } from "hooks/usePropertyControls";
import { validPropertyTypes } from "utils";

const Property = ({ data }) => {
  const {
    renameTitleHandler,
    changeInterfaceType,
    addChild,
    toggleIsRequired,
    removeProperty,
    observer,
  } = usePropertyControls(data);

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
            {Object.values(validPropertyTypes).map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
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
