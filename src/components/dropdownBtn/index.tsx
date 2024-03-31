import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineWeekend,
  MdWeekend,
} from "react-icons/md";

function DropDown(props?: any) {
  // completedCaseStat, setCompletedCaseStat
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex w-full justify-center items-center rounded-md  bg-opacity-80 px-4 py-2 text-sm font-medium text-gray-700 bg-[#13BAED] hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 '>
          {props.state}
          {/* <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            /> */}
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
        <Menu.Items className='absolute left-0 origin-top-right mt-2 w-56  divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10'>
          <div className='px-1 py-1 '>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-brand_indigo text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => props.setState("Year")}
                >
                  {active ? (
                    <MdWeekend className='mr-2' />
                  ) : (
                    <MdOutlineWeekend className='mr-2' />
                  )}
                  This Year
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-brand_indigo text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => props.setState("Month")}
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
          <div className='px-1 py-1'>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-brand_indigo text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => props.setState("Week")}
                >
                  {active ? (
                    <MdWeekend className='mr-2' />
                  ) : (
                    <MdOutlineWeekend className='mr-2' />
                  )}
                  Week
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
