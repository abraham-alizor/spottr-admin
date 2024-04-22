/* eslint-disable react/no-unused-prop-types */
import React, { MouseEventHandler } from "react";

interface Props {
  title: string;
  btnStyle: string;
  disabled?: any;
  icon?: any;
  iconStyle?: string;
  textStyle: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  image?: any;
}
const ButtonV2 = ({
  title,
  disabled,
  btnStyle,
  icon,
  iconStyle,
  textStyle,
  handleClick,
  image,
}: Props) => (
  <button
    className={`${btnStyle} hover:scale-105 transition-all duration-300`}
    disabled={disabled}
    onClick={handleClick}
    type='button'
  >
    <span className={textStyle}>{title}</span>
    {image ? (
      <img alt='' src={image} />
    ) : (
      <span className={iconStyle}>{icon}</span>
    )}
  </button>
);

export default ButtonV2;
