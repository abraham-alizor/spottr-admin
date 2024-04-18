/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Transition } from "@headlessui/react";
import React, { useState } from "react";

interface DropDownV3Types {
  isOpen: boolean;
  width: string;
  data: any;
  isClose: () => void;
  classname: string;
  setSelected: (string: string) => void;
}
function DropDownV3(props: DropDownV3Types) {
  const [state, setState] = useState("");

  return (
    <Transition
      as='div'
      className={` absolute bg-white shadow-custom   ${props.width} max-h-[100px] overflow-y-scroll  ${props.classname}`}
      enter='ease-out duration-300'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='ease-in duration-200'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
      show={props.isOpen}
    >
      {props.data.map((lists: any) => (
        <div
          className='flex flex-col items-start py-2 px-3 border-b cursor-pointer hover:bg-darkblue hover:text-white'
          key={lists.id}
          onClick={() => {
            props.setSelected(lists.label);
            props.isClose();
          }}
        >
          <span
            // @ts-ignore
            className='text-xs font-normal '
          >
            {lists.label}
          </span>
        </div>
      ))}
    </Transition>
  );
}

export default DropDownV3;
