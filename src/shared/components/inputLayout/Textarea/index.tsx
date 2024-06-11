import React from "react";

interface TextAreaProps {
  name: string;
  placeholder: string;
  value: string;
  onchange: any;
}
function TextArea(props: TextAreaProps) {
  return (
    <textarea
      className='bg-[#F8F8F8] py-4 px-4 outline-none rounded-md placeholder:text-[#C4C4C4] placeholder:text-sm resize-none'
      cols={10}
      id=''
      name={props.name}
      onChange={props.onchange}
      placeholder={props.placeholder}
      rows={10}
      value={props.value}
    />
  );
}

export default TextArea;
