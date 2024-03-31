import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaEye } from "react-icons/fa";
import { LuMoreVertical } from "react-icons/lu";

interface DatabaseTypes {
  handleDelete?: () => void;
  handleView?: () => void;
  handleRename?: () => void;
  handleFee?: () => void;
  handleDetails?: () => void;
  isFee?: boolean;
  details?: boolean;
  isLoading?: boolean;
  isNotDelete?: boolean;
  isRename?: boolean;
  actionTitle: string;
}

export default function DropDownOptions(props: DatabaseTypes) {
  return (
    <div className=' text-right '>
      <Menu as='div' className=' inline-block text-left'>
        <div>
          {props.isLoading ? (
            <button
              className='inline-flex w-full justify-center rounded-md bg-BRAND text-black px-2 py-1 text-xs font-medium  hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
              disabled={props.isLoading}
              type='button'
            >
              <svg
                className='w-5 h-5 mr-3 -ml-1 text-black animate-spin'
                fill='none'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  className='opacity-25'
                  cx={12}
                  cy={12}
                  r={10}
                  stroke='currentColor'
                  strokeWidth={4}
                />
                <path
                  className='opacity-75'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  fill='currentColor'
                />
              </svg>

              <span className='ml-2 text-xs'>processing...</span>
            </button>
          ) : (
            <Menu.Button className='inline-flex w-full justify-center rounded-md bg-BRAND text-black px-2 py-1 text-xs font-medium  hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
              <LuMoreVertical
                aria-hidden='true'
                className='ml-2 -mr-1 h-5 w-5 text-brand '
              />
            </Menu.Button>
          )}
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
          <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50'>
            <div className='px-1 py-1'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[#C6D6FF]" : ""
                    } group flex w-full items-center  text-gray-900 rounded-md px-2 py-2 text-sm`}
                    onClick={props.handleView}
                  >
                    <FaEye
                      aria-hidden='true'
                      className='mr-2 h-5 w-5 text-brand_blue'
                    />

                    {props.actionTitle}
                  </button>
                )}
              </Menu.Item>
            </div>
            {props.isRename && (
              <div className='px-1 py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-[#C6D6FF]" : ""
                      } group flex w-full items-center text-gray-900 rounded-md px-2 py-2 text-sm`}
                      onClick={props.handleRename}
                    >
                      {active ? (
                        <EditActiveIcon
                          aria-hidden='true'
                          className='mr-2 h-5 w-5'
                        />
                      ) : (
                        <EditInactiveIcon
                          aria-hidden='true'
                          className='mr-2 h-5 w-5'
                        />
                      )}
                      Rename
                    </button>
                  )}
                </Menu.Item>
              </div>
            )}
            {props.details && (
              <div className='px-1 py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-[#C6D6FF]" : ""
                      } group flex w-full items-center text-gray-900 rounded-md px-2 py-2 text-sm`}
                      onClick={props.handleDetails}
                    >
                      {active ? (
                        <EditActiveIcon
                          aria-hidden='true'
                          className='mr-2 h-5 w-5'
                        />
                      ) : (
                        <EditInactiveIcon
                          aria-hidden='true'
                          className='mr-2 h-5 w-5'
                        />
                      )}
                      View Details
                    </button>
                  )}
                </Menu.Item>
              </div>
            )}
            {props.isFee && (
              <div className='px-1 py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-[#C6D6FF]" : ""
                      } group flex w-full items-center text-gray-900 rounded-md px-2 py-2 text-sm`}
                      onClick={props.handleFee}
                    >
                      {active ? (
                        <EditActiveIcon
                          aria-hidden='true'
                          className='mr-2 h-5 w-5'
                        />
                      ) : (
                        <EditInactiveIcon
                          aria-hidden='true'
                          className='mr-2 h-5 w-5'
                        />
                      )}
                      Attach fee
                    </button>
                  )}
                </Menu.Item>
              </div>
            )}
            {props.isNotDelete ? (
              <></>
            ) : (
              <div className='px-1 py-1 '>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-[#C6D6FF]" : ""
                      } group flex w-full items-center text-gray-900 rounded-md px-2 py-2 text-sm`}
                      onClick={props.handleDelete}
                    >
                      {active ? (
                        <DeleteActiveIcon
                          aria-hidden='true'
                          className='mr-2 h-5 w-5'
                        />
                      ) : (
                        <DeleteInactiveIcon
                          aria-hidden='true'
                          className='mr-2 h-5 w-5'
                        />
                      )}
                      Delete
                    </button>
                  )}
                </Menu.Item>
              </div>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function EditInactiveIcon(props: any) {
  return (
    <svg
      {...props}
      fill='none'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 13V16H7L16 7L13 4L4 13Z'
        fill='#98C3F0'
        stroke='#2E34D2'
        strokeWidth='2'
      />
    </svg>
  );
}

function EditActiveIcon(props: any) {
  return (
    <svg
      {...props}
      fill='none'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 13V16H7L16 7L13 4L4 13Z'
        fill='#98C3F0'
        stroke='#2E34D2'
        strokeWidth='2'
      />
    </svg>
  );
}

function DeleteInactiveIcon(props: any) {
  return (
    <svg
      {...props}
      fill='none'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        fill='#98C3F0'
        height='10'
        stroke='#2E34D2'
        strokeWidth='2'
        width='10'
        x='5'
        y='6'
      />
      <path d='M3 6H17' stroke='#2E34D2' strokeWidth='2' />
      <path d='M8 6V4H12V6' stroke='#2E34D2' strokeWidth='2' />
    </svg>
  );
}

function DeleteActiveIcon(props: any) {
  return (
    <svg
      {...props}
      fill='none'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        fill='#2E34D2'
        height='10'
        stroke='#000'
        strokeWidth='2'
        width='10'
        x='5'
        y='6'
      />
      <path d='M3 6H17' stroke='#000' strokeWidth='2' />
      <path d='M8 6V4H12V6' stroke='#000' strokeWidth='2' />
    </svg>
  );
}
