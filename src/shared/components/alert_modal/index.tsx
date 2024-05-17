/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";

import ButtonV2 from "@/shared/components/buttonV2";
import Modal from "@/shared/components/Modal";

interface Props {
  open: boolean;
  close: () => void;
  confirmationText: string;
  details: string;
  btntext: string;
  handleclick: () => void;
}
function AlertModal(props: Props) {
  return (
    <Modal
      edges='rounded-2xl'
      isClose={props.close}
      isOpen={props.open}
      maxWidth='w-[377px]'
    >
      <div className='flex flex-col items-end gap-20'>
        <span
          className='font-bold text-darkblue text-xs cursor-pointer'
          onClick={props.close}
        >
          Close
        </span>
        <div className='w-full flex flex-col gap-6 items-center'>
          <span className='text-[20px] text-darkblue font-semibold'>
            {props.confirmationText}
          </span>
          <span className='text-[12px] font-normal text-opacity-[70%] text-[#3B3B3BB2] w-[228px] break-words'>
            {props.details}
          </span>
        </div>
        <ButtonV2
          btnStyle='w-[328px] h-[55px] rounded-md bg-darkblue'
          handleClick={props.handleclick}
          textStyle='text-sm font-semibold text-white'
          title={props.btntext}
        />
      </div>
    </Modal>
  );
}

export default AlertModal;
