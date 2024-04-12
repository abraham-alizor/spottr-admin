import React from "react";

import ButtonV2 from "@/shared/components/buttonV2";
import ModalV2 from "@/shared/components/modalV2";

interface Props {
  open: boolean;
  close: () => void;
}
const SuccessModal = ({ open, close }: Props) => (
  <ModalV2
    closeBtnColor=''
    isBTnTrue={false}
    isClose={close}
    isOpen={open}
    maxWidth='w-[330px]'
  >
    <div className='flex flex-col gap-5'>
      <span className='text-xl text-darkblue  '>Task sent Successfully!</span>
      <hr />
      <div>
        <span className='text-sm text-[#4C596F]'>The task is now active</span>
      </div>

      <div className=''>
        <ButtonV2
          btnStyle='w-full bg-darkblue h-[7vh]'
          handleClick={close}
          textStyle='text-white font-medium'
          title='Close'
        />
      </div>
    </div>
  </ModalV2>
);

export default SuccessModal;
