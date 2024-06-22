import Switch from "@mui/material/Switch";
import React from "react";

const label = { inputProps: { "aria-label": "Switch demo" } };
interface ToggleSwitchProps {
  checked: boolean;
  onchange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void;
}
function ToggleSwitch(props: ToggleSwitchProps) {
  return (
    <div>
      <Switch {...label} checked={props.checked} onChange={props.onchange} />
    </div>
  );
}

export default ToggleSwitch;
