/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Transition } from "@headlessui/react";
import React from "react";

interface Props {
  open: boolean;
  close: () => void;
  sorts: any;
  handleSelected: (id: any) => void;
  styling: string;
}
function SortBy(props: Props) {
  return (
    <Transition
      as='div'
      className={`absolute  ${props.styling} z-50 shadow-blur w-fit h-full `}
      enter='ease-out duration-300'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='ease-in duration-200'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
      show={props.open}
    >
      {props.sorts.map((data: any) => (
        <div
          className='bg-white  text-sm flex flex-col gap-4 px-1 '
          key={data.id}
        >
          <span
            className=' font-normal hover:bg-darkblue hover:text-white cursor-pointer'
            onClick={() => {
              props.handleSelected(data.filter);
              props.close();
            }}
          >
            {data.filter}
          </span>
        </div>
      ))}
    </Transition>
  );
}

export default SortBy;
