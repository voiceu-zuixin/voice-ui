import React, { useState } from "react";
import Switch from "../switch";

const SwitchExample1 = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (value: boolean) => {
    setChecked(!checked)
  }
  return (
    <div style={{ height: '31px' }}>
      <span style={{ marginRight: '10px' }}>
        <Switch checked={checked} onChange={handleChange} />
      </span>
      <span style={{ marginRight: '10px' }}>
        <Switch checked />
      </span>
      <span style={{ marginRight: '10px' }}>
        <Switch checked={false} />
      </span>
      <span style={{ marginRight: '10px' }}>
        <Switch checked disabled />
      </span>
      <span style={{ marginRight: '10px' }}>
        <Switch checked={false} disabled />
      </span>
    </div>
  );
};

export default SwitchExample1;
