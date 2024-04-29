/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable eqeqeq */
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";
import { FaChevronDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "@/hooks";
import { reset, selectUser } from "@/states/slices/authReducer";
import { getBackgroundColor } from "@/utils/functions/userDynamicColor";

export function MenuDropdown() {
  const currentUser = useAppSelector(selectUser);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const colors: string = getBackgroundColor("Abraham");

  return (
    <div className=' max-w-56 text-right'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex w-full justify-center items-center rounded-md px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            {/* <Menu.Button className={'inline-flex w-full justify-center'}> */}

            {currentUser?.photoUri === null ||
            currentUser?.photoUri === undefined ? (
              <>
                {colors && (
                  <div
                    className='w-12 h-12  border-4  rounded-full flex justify-center items-center text-white font-bold'
                    style={{
                      backgroundColor: colors,
                    }}
                  >
                    A
                  </div>
                )}
              </>
            ) : (
              <img
                alt=''
                className='h-12 w-12 z-30 rounded-full'
                src={currentUser?.photoUri}
              />
            )}
            <FaChevronDown
              aria-hidden='true'
              className='ml-2 mr-1 h-3 w-3 hover:text-[#F59E0B] text-black'
            />
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
          <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-brand text-white" : "text-gray-900"
                    } group flex w-full flex-col  items-start gap-3 rounded-md px-2 py-2 text-sm  font-bold`}
                    onClick={() => navigate("#")}
                    type='button'
                  >
                    {currentUser?.photoUri === null ||
                    currentUser?.photoUri === undefined ? (
                      <>
                        {colors && (
                          <div
                            className='w-[24px] h-[24px]  border-4  rounded-full flex justify-center items-center text-white font-bold'
                            style={{
                              backgroundColor: colors,
                            }}
                          >
                            A
                          </div>
                        )}
                      </>
                    ) : (
                      <img
                        alt=''
                        className='w-[24px] h-[24px] z-30 rounded-full'
                        src={currentUser?.photoUri}
                      />
                    )}
                    <span
                      className={`${active ? "text-white" : "text-darkblue"} `}
                    >
                      Adewale Adedamola
                    </span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-brand text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => navigate("#")}
                    type='button'
                  >
                    Create a new admin account
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className='px-1 py-1'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-brand text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => navigate("#")}
                    type='button'
                  >
                    Settings
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className='px-1 py-1'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-brand text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm text-branded `}
                    onClick={() => dispatch(reset())}
                    type='button'
                  >
                    <span className='font-bold text-branded'> logout</span>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
