import React from "react";

import ButtonV2 from "@/shared/components/buttonV2";
import ModalV2 from "@/shared/components/modalV2";

interface ActionModalProps {
  isOpen: boolean;
  isClose: () => void;
  title: string;
  actionText: string;
  handleAction: any;
}
function Actionmodal(props: ActionModalProps) {
  return (
    <ModalV2
      closeBtnColor=''
      edges='rounded-md'
      isBTnTrue={false}
      isClose={props.isClose}
      isOpen={props.isOpen}
      maxWidth='w-[330px]'
    >
      <div className='flex flex-col gap-5'>
        <span className='text-xl text-darkblue  '>{props.title}?</span>
        <hr />
        <div>
          <span className='text-sm text-[#4C596F]'>{props.actionText}?</span>
        </div>

        <div className='border-t flex'>
          <ButtonV2
            btnStyle='w-full'
            handleClick={props.isClose}
            textStyle='text-darkblue font-medium'
            title='No'
          />
          <ButtonV2
            btnStyle='w-full bg-darkblue h-[7vh]'
            handleClick={props.handleAction}
            textStyle='text-white font-medium'
            title='Yes'
          />
        </div>
      </div>
    </ModalV2>
  );
}

export default Actionmodal;
