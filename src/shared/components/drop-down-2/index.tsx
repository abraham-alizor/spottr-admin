/* eslint-disable no-restricted-globals */
/* eslint-disable react/button-has-type */
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface DropDownTypes {
  open: boolean;
  setState: (newState: string) => void;
  data: any;
}

function DropDownV2(props: DropDownTypes) {
  return (
    <Menu
      as='div'
      className='absolute right-[14rem] top-[3rem] inline-block text-right z-40'
    >
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
        show={props.open}
      >
        <Menu.Items className='absolute left-0 z-10 mt-2 w-56  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='px-1 py-1 '>
            {props.data.map((links: any) => (
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-darkblue  text-gray-100" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm border-b`}
                    key={links.id}
                    onClick={() => props.setState(links.label)}
                  >
                    {links.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropDownV2;
