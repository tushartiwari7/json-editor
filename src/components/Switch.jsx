import React, { useId } from "react";
import ReactSwitch from "react-switch";
const Switch = ({ checked, onToggle, name }) => {
  const id = useId();
  return (
    <>
      <label className="switch" htmlFor={id}>
        Required
      </label>
      <ReactSwitch
        id={id}
        onChange={onToggle}
        checked={checked}
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </>
  );
};

export default Switch;
