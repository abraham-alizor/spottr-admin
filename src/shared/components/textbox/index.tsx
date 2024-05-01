/* eslint-disable react/jsx-sort-props */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";

import ButtonV2 from "@/shared/components/buttonV2";
import { MEDIA_ICON, SEND_ICON } from "@/utils/Exports";

interface Props {
  value: string;
  onChange: any;
  placeholder: string;
}
function TextBox(props: Props) {
  return (
    <div className='w-[410px] h-[47px] rounded-3xl bg-[#F5F5F5] ml-9 flex justify-between items-center px-4'>
      <div className='flex gap-3 w-[320px]'>
        <ButtonV2
          btnStyle=''
          handleClick={() => {}}
          image={MEDIA_ICON}
          textStyle=''
          title=''
        />

        <textarea
          className='w-full placeholder:text-[#7E7E7E] h-full placeholder:text-sm bg-transparent resize-none overflow-auto focus:outline-none'
          onChange={props.onChange}
          placeholder={props.placeholder}
          value={props.value}
          // @ts-ignore
          rows='1'
        />
      </div>

      <div>
        <ButtonV2
          btnStyle=''
          handleClick={() => {}}
          image={SEND_ICON}
          textStyle=''
          title=''
        />
      </div>
    </div>
  );
}

export default TextBox;
