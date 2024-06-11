import React from "react";

interface InputType {
  type: string;
  name: string;
  placeholder: string;
  onchange: any;
  value: string;
}
function Inputs(props: InputType) {
  return (
    <input
      className='bg-[#F8F8F8] outline-none w-full py-4 px-4 rounded-md placeholder:text-sm placeholder:text-[#C4C4C4]'
      name={props.name}
      onChange={props.onchange}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
    />
  );
}

export default Inputs;
