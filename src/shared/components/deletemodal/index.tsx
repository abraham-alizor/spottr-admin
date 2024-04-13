import React from "react";

import ButtonV2 from "@/shared/components/buttonV2";
import ModalV2 from "@/shared/components/modalV2";

interface Props {
  open: boolean;
  close: () => void;
  handleDelete: () => void;
}
const DeleteModal = ({ open, close, handleDelete }: Props) => (
  <ModalV2
    closeBtnColor=''
    isBTnTrue={false}
    isClose={close}
    isOpen={open}
    maxWidth='w-[330px]'
  >
    <div className='flex flex-col gap-5'>
      <span className='text-xl text-darkblue  '>Delete Tasks?</span>
      <hr />
      <div>
        <span className='text-sm text-[#4C596F]'>
          This action cannot be undone
        </span>
      </div>

      <div className='flex justify-between items-center py-5 px-4'>
        <ButtonV2
          btnStyle='w-full  h-[7vh]'
          handleClick={handleDelete}
          textStyle='text-[#FF0000] font-medium'
          title='Delete'
        />
        <ButtonV2
          btnStyle='w-full bg-darkblue h-[7vh] rounded-md'
          handleClick={close}
          textStyle='text-white font-medium'
          title='Cancel'
        />
      </div>
    </div>
  </ModalV2>
);

export default DeleteModal;
