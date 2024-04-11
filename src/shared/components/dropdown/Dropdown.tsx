/* eslint-disable react/button-has-type */
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineWeekend,
  MdWeekend,
} from "react-icons/md";

interface DropDownTypes {
  state: string;
  setState: (newState: string) => void;
}

function DropDown(props: DropDownTypes) {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex w-full items-center justify-center rounded-lg  border border-solid border-[color:var(--Border-bd-dark,#DADAE7)] bg-white bg-opacity-80 px-4 py-2 text-sm font-medium leading-[157%] text-gray-dark hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 '>
          {props.state === "Last 30 days" ? "This Month" : props.state}

          <MdOutlineKeyboardArrowDown className='ml-2' />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute left-0 z-10 mt-2 w-56  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='px-1 py-1 '>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-brand_indigo text-gray-500" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => props.setState("Today")}
                >
                  {active ? (
                    <MdWeekend className='mr-2' />
                  ) : (
                    <MdOutlineWeekend className='mr-2' />
                  )}
                  Today
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-brand_indigo text-gray-500" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => props.setState("Last 7 days")}
                >
                  {active ? (
                    <MdWeekend className='mr-2' />
                  ) : (
                    <MdOutlineWeekend className='mr-2' />
                  )}
                  Last 7 days
                </button>
              )}
            </Menu.Item>
          </div>
          <div className='px-1 py-1'>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-brand_indigo text-gray-500" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => props.setState("Last 30 days")}
                >
                  {active ? (
                    <MdWeekend className='mr-2' />
                  ) : (
                    <MdOutlineWeekend className='mr-2' />
                  )}
                  This Month
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropDown;
