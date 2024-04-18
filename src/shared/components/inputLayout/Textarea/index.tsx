import React from "react";

interface TextAreaProps {
  name: string;
  placeholder: string;
}
function TextArea(props: TextAreaProps) {
  return (
    <textarea
      className='bg-[#F8F8F8] py-4 px-4 rounded-md placeholder:text-[#C4C4C4] placeholder:text-sm'
      cols={10}
      id=''
      name={props.name}
      placeholder={props.placeholder}
      rows={10}
    />
  );
}

export default TextArea;
