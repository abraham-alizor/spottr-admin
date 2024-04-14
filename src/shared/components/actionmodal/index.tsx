import React from "react";

import ButtonV2 from "@/shared/components/buttonV2";
import ModalV2 from "@/shared/components/modalV2";

interface Props {
  open: boolean;
  close: () => void;
  handleAction: () => void;
  title: string;
  actionTitle1: string;
  actionTitle2: string;
  warningText: string;
}
const ActionModal = ({
  open,
  close,
  handleAction,
  title,
  actionTitle1,
  actionTitle2,
  warningText,
}: Props) => (
  <ModalV2
    closeBtnColor=''
    isBTnTrue={false}
    isClose={close}
    isOpen={open}
    maxWidth='w-[300px]'
  >
    <div className='flex flex-col gap-5'>
      <span className='text-xl text-darkblue  '>{`${title}?`}</span>
      <hr />
      <div className='max-w-[200px] flex self-center'>
        <span className='text-sm text-[#4C596F]'>{warningText}</span>
      </div>

      <div className='flex justify-between items-center py-5 px-4'>
        <ButtonV2
          btnStyle='w-full  h-[7vh]'
          handleClick={handleAction}
          textStyle='text-[#FF0000] font-medium'
          title={actionTitle1}
        />
        <ButtonV2
          btnStyle='w-full bg-darkblue h-[7vh] rounded-md'
          handleClick={close}
          textStyle='text-white font-medium'
          title={actionTitle2}
        />
      </div>
    </div>
  </ModalV2>
);

export default ActionModal;
