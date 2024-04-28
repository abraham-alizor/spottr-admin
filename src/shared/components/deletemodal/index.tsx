import React from "react";

import ButtonV2 from "@/shared/components/buttonV2";
import Modal from "@/shared/components/Modal";
import { CANCEL_ICON } from "@/utils/Exports";

interface DeleteModalProps {
  open: boolean;
  close: () => void;
  text: string;
  handleDelete: () => void;
}
function DeleteModal(props: DeleteModalProps) {
  return (
    <Modal
      edges='rounded-md'
      isClose={props.close}
      isOpen={props.open}
      maxWidth='w-[497px] '
    >
      <div className=''>
        <div className='flex flex-col gap-5 items-center'>
          <div className='w-[72px] h-[72px] rounded-full border border-branded flex justify-center items-center'>
            <img alt='' src={CANCEL_ICON} />
          </div>
          <span className='text-[36px] font-semibold text-darkblue'>
            Are you sure?
          </span>
          <span className='text-[12px] font-semibold text-darkblue w-[222px] break-words'>
            {props.text}
          </span>
        </div>
        <div className='flex gap-3 mt-10 w-full justify-center'>
          <ButtonV2
            btnStyle='w-[192px] bg-lightgrey h-[55px] rounded-md'
            handleClick={props.close}
            textStyle='text-[16px] text-white font-[600]'
            title='Cancel'
          />
          <ButtonV2
            btnStyle='w-[192px] bg-branded h-[55px] rounded-md'
            handleClick={props.handleDelete}
            textStyle='text-[16px] text-white font-[600]'
            title='Delete'
          />
        </div>
      </div>
    </Modal>
  );
}

export default DeleteModal;
