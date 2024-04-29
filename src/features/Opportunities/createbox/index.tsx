import React from "react";

import ButtonV2 from "@/shared/components/buttonV2";

interface Props {
  title: string;
  handleclick: () => void;
  children: React.ReactNode;
  btntext: string;
}
function CreateBox(props: Props) {
  return (
    <div className='mt-6 w-[417px] h-[430px]  bg-white rounded-xl shadow-blur'>
      <div className='flex flex-col items-center py-6'>
        <span className='text-[16px] text-center text-darkblue font-semibold'>
          {props.title}
        </span>
        <div>{props.children}</div>
        <div>
          <ButtonV2
            btnStyle='w-[351.09px] h-[55px] bg-darkblue rounded-md'
            handleClick={props.handleclick}
            textStyle='text-white text-[16px]'
            title={props.btntext}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateBox;
