import Switch from "@mui/material/Switch";
import React from "react";

const label = { inputProps: { "aria-label": "Switch demo" } };
function ToggleSwitch() {
  return (
    <div>
      <Switch {...label} />
    </div>
  );
}

export default ToggleSwitch;
