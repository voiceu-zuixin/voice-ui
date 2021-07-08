import React from "react";
import Switch from "../switch";

const SwitchExample2 = () => {
  return (
    <div>
      <span style={{ marginRight: '10px' }}>
      <Switch checked size="lg" />
      </span>
      <span style={{ marginRight: '10px' }}>
      <Switch checked size="sm" />
      </span>
    </div>
  );
};

export default SwitchExample2;
