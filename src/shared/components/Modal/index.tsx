/* eslint-disable jsx-a11y/control-has-associated-label */
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { FaTimes } from "react-icons/fa";

type ModalProps = {
  // state modal params types
  isOpen: boolean;
  isClose: () => void;
  closeBtnColor: string;
  children: React.ReactNode;
  maxWidth: string;
  isBTnTrue?: boolean;
};

// Modal component reusable in all component
const Modal = ({
  isOpen,
  isClose,
  children,
  closeBtnColor,
  maxWidth,
  isBTnTrue,
}: ModalProps) => (
  <Transition appear as={Fragment} show={isOpen}>
    <Dialog as='div' className='relative z-50' onClose={isClose}>
      <Transition.Child
        as={Fragment}
        enter='ease-out duration-300'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <div className='fixed inset-0 bg-black bg-opacity-25' />
      </Transition.Child>
      <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex min-h-full justify-center items-center p-4 text-center'>
          <Transition.Child
            as={Fragment}
            enter='transition-transform ease-out duration-300'
            enterFrom='translate-y-full'
            enterTo='translate-y-0'
            leave='transition-transform ease-in duration-200'
            leaveFrom='translate-y-0'
            leaveTo='translate-y-full'
          >
            <Dialog.Panel
              className={` ${maxWidth} transform overflow-hidden rounded-md text-center bg-white dark:bg-bg_black lg:p-6 p-3 align-middle shadow-xl transition-all h-full`}
            >
              {isBTnTrue === true ? (
                <button
                  className={`flex items-center justify-center float-end bg-darkblue text-white w-7 h-7 rounded-full ${closeBtnColor} hover:scale-90 transition-all `}
                  onClick={isClose}
                  type='button'
                >
                  <FaTimes />
                </button>
              ) : null}
              <div className='mt-2 max-h-[500px] overflow-y-scroll overscroll-x-none '>
                {children}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
);

export default Modal;

// end..
