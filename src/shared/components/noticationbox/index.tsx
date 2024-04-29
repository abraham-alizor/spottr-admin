import { Transition } from "@headlessui/react";
import React from "react";

import ButtonV2 from "@/shared/components/buttonV2";

interface NotificationProps {
  open: boolean;
  title: string;
  newMessageLength: string;
  handleClick: () => void;

  style: string;
  data: any;
}
function NotificationBox(props: NotificationProps) {
  return (
    <Transition
      as='div'
      className={`w-[300px] h-[500.33px] py-6 rounded-md bg-white shadow-blur absolute ${props.style} `}
      enter='ease-out duration-300'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='ease-in duration-200'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
      show={props.open}
    >
      {props.data.length > 0 ? (
        <div>
          <div className='flex flex-col gap-3 px-5'>
            <span className='text-[17.57px] font-bold text-darkblue'>
              {props.title}
            </span>
            <span className='text-[8.78px]'>
              You have {props.newMessageLength} new messages
            </span>
          </div>
          <div className='flex justify-between mt-3 px-5'>
            <div className='flex items-center gap-2'>
              <span className='text-[7.32px] text-textcolor text-opacity-[70%]'>
                Sort by:
              </span>
              <span className='text-darkblue text-[8px]'>Date</span>
            </div>
            <span className='text-darkblue text-[8px] font-bold'>
              Mark all as read
            </span>
          </div>
          <div className='max-h-[320px] overflow-y-scroll mt-6 flex flex-col gap-1 '>
            {props.data.map((data_: any) => (
              <div className='flex gap-2 hover:bg-[#FBFBFB] w-full px-5 py-2 cursor-pointer'>
                <div>
                  <img
                    alt=''
                    className='w-[33.25px] h-[33.25px] rounded-full'
                    src={data_.userimg}
                  />
                </div>
                <div>
                  <div className='flex items-end gap-2'>
                    <span className='text-[12px] text-darkblue font-bold'>
                      {data_.username}
                    </span>
                    <span className='text-[6.33px] text-[#919191]'>
                      2 miniutes ago
                    </span>
                  </div>
                  <div className='flex flex-col items-start'>
                    <span className='text-[12px] font-bold text-darkblue'>
                      {data_.companyname}
                    </span>
                    <span className='text-[12px] text-lightgrey'>
                      {data_.message}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          <span className='text-lightgrey font-medium text-xl'>
            !Oops, No messages
          </span>
        </div>
      )}
      <div className='flex justify-center items-center'>
        <ButtonV2
          btnStyle='mt-3 mb-4'
          handleClick={props.handleClick}
          textStyle='text-[12px] font-bold text-darkblue'
          title='Open messages'
        />
      </div>
    </Transition>
  );
}

export default NotificationBox;
