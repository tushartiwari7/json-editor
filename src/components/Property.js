import React from "react";

const Property = ({ data }) => {
  return (
    <li>
      {data.key} {data.value}
    </li>
  );
};

export default Property;
