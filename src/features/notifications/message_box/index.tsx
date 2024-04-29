import React from "react";

import { dummyMessage } from "@/fake_data";
import ButtonV2 from "@/shared/components/buttonV2";
import {
  ARROW_DOWN,
  BLUE_ARROW_LEFT,
  EDIT_ICON,
  MEDIA_ICON,
  SEND_ICON,
  TASK_IMAGE,
} from "@/utils/Exports";

function MessageBox() {
  return (
    <div className='mt-6 flex gap-24'>
      <div className='w-[420px] h-[715px] bg-white border-[0.2px] border-[#BBC4D4] rounded-md  py-10'>
        <div className='flex justify-between items-start px-[4rem]'>
          <div className='flex flex-col gap-1 '>
            {" "}
            <span className='text-[22.38px] font-bold text-darkblue'>
              Messages
            </span>
            <span className='text-[11.19px] font-normal'>
              You have {dummyMessage.length} new messages
            </span>
          </div>
          <ButtonV2
            btnStyle='mt-2'
            handleClick={() => {}}
            image={EDIT_ICON}
            textStyle=''
            title=''
          />
        </div>
        <div className='flex justify-between mt-5 px-[4rem]'>
          <div className='flex items-center gap-2'>
            <span className='text-[7.32px] text-textcolor text-opacity-[70%]'>
              Sort by:
            </span>
            <span className='text-darkblue text-[9.33px]'>Date</span>
          </div>
          <span className='text-darkblue text-[9.33px] font-bold'>
            Mark all as read
          </span>
        </div>

        <div className='flex flex-col  mt-5 max-h-[500px] overflow-y-scroll px-[2rem]'>
          {dummyMessage.map((data_: any) => (
            <div className='flex gap-5 hover:bg-[#FBFBFB] w-full cursor-pointer py-2 pl-5 rounded-md'>
              <div>
                <img
                  alt=''
                  className='w-[42.36px] h-[42.36px] rounded-full'
                  src={data_.userimg}
                />
              </div>
              <div>
                <div className='flex items-end gap-2'>
                  <span className='text-[12.1px] text-darkblue font-bold'>
                    {data_.username}
                  </span>
                  <span className='text-[8.07px] text-[#919191]'>
                    2 miniutes ago
                  </span>
                </div>
                <div className='flex flex-col items-start'>
                  <span className='text-[12.1px] font-bold text-darkblue'>
                    {data_.companyname}
                  </span>
                  <span className='text-[12.1px] text-lightgrey'>
                    {data_.message}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-[481px] h-[715px] bg-white border-[0.2px] border-[#BBC4D4] rounded-md py-10'>
        <div className='flex justify-between pl-[2.8rem] pr-[8rem]'>
          <div>
            <img alt='' className='w-7 h-7' src={BLUE_ARROW_LEFT} />
          </div>
          <div className='flex items-center gap-3'>
            <div>
              <img
                alt=''
                className='w-[42px] h-[42px] rounded-full'
                src={TASK_IMAGE}
              />
            </div>
            <div className='flex flex-col items-start'>
              <div className='flex gap-3 items-center'>
                <span className='text-sm font-semibold'>Obinna Samuel</span>
                <img alt='' className='w-3 h-3' src={ARROW_DOWN} />
              </div>
              <span className='text-xs'>Online</span>
            </div>
          </div>
        </div>
        <div className='h-[550px] overflow-y-scroll'>hello</div>
        <div className='w-[410px] h-[47px] rounded-3xl bg-[#F5F5F5] ml-9 flex justify-between items-center px-4'>
          <div className='flex gap-3 w-[320px]'>
            <ButtonV2
              btnStyle=''
              handleClick={() => {}}
              image={MEDIA_ICON}
              textStyle=''
              title=''
            />
            <input
              className='w-full outline-none placeholder:text-[#7E7E7E] placeholder:text-sm bg-transparent'
              placeholder='Type something...'
              type='text'
            />
          </div>

          <div>
            <ButtonV2
              btnStyle=''
              handleClick={() => {}}
              image={SEND_ICON}
              textStyle=''
              title=''
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageBox;
