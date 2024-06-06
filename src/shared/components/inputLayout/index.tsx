import React from "react";

import ButtonV2 from "@/shared/components/buttonV2";
import { BLUE_ARROW_LEFT } from "@/utils/Exports";

interface InputLayoutProps {
  title: string;
  children: React.ReactNode;
  handleClick: () => void;
}
const InputLayout = (props: InputLayoutProps) => (
  <div className='w-[437px] h-full bg-white py-7 px-4 border-[0.2px] border-[#BBC4D4] rounded-md'>
    <div className='flex gap-3 items-center mb-5'>
      <img alt='' height={30} src={BLUE_ARROW_LEFT} width={30} />
      <span className='font-medium text-darkblue'>{props.title}</span>
    </div>
    <div>{props.children}</div>
    <div className='mt-6'>
      <ButtonV2
        btnStyle='bg-darkblue w-full py-4 rounded-md'
        handleClick={props.handleClick}
        textStyle='text-white'
        title='Submit'
      />
    </div>
  </div>
);

export default InputLayout;
