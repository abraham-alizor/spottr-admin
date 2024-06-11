/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Transition } from "@headlessui/react";
import React from "react";

interface Props {
  data: any;
  setSelected: (string: string) => void;
  open: boolean;
  close: () => void;
}
function CurrencyBox(props: Props) {
  return (
    <Transition
      as='div'
      className='bg-white h-fit absolute w-fit flex flex-col gap-3 right-[3rem] mt-7 z-50  shadow-custom'
      enter='ease-out duration-300'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='ease-in duration-200'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
      show={props.open}
    >
      {props.data?.map((current: any) => (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <span
          className='cursor-pointer hover:bg-brand hover:text-white px-5'
          key={current.id}
          onClick={() => {
            props.setSelected(current.code);
            props.close();
          }}
        >
          {current.code}
        </span>
      ))}
    </Transition>
  );
}

export default CurrencyBox;
