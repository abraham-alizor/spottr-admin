/* eslint-disable react/no-unused-prop-types */
import React, { MouseEventHandler } from "react";

interface Props {
  title: string;
  btnStyle: string;
  icon?: any;
  iconStyle?: string;
  textStyle: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
const ButtonV2 = ({
  title,
  btnStyle,
  icon,
  iconStyle,
  textStyle,
  handleClick,
}: Props) => (
  <button
    className={`${btnStyle} hover:scale-105 transition-all duration-300`}
    onClick={handleClick}
    type='button'
  >
    <span className={textStyle}>{title}</span>
    <span className={iconStyle}>{icon}</span>
  </button>
);

export default ButtonV2;
