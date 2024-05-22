/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";

import { pushNotificationData, sortbyfilters } from "@/fake_data";
import ButtonV2 from "@/shared/components/buttonV2";
import SortBy from "@/shared/components/sortby";
import { BLUE_ARROW_LEFT, EDIT_ICON } from "@/utils/Exports";

const getRandomColors = (index: number) => {
  const colors = [
    "border-r-green-500",
    "border-r-blue-700",
    "border-r-red-600",
    "border-r-yellow-400",
  ];
  return colors[index % colors.length];
};
function PushNotification() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Date");

  return (
    <main className='flex gap-12 '>
      <div className='w-[420px] h-[715px] bg-white border-[0.2px] border-[#BBC4D4] rounded-md mt-6 inset-1 px-3'>
        <div className='flex justify-between items-start px-[2rem] pt-6'>
          <div className='flex flex-col gap-1 '>
            <span className='text-[22.38px] font-bold text-darkblue'>
              Announcement
            </span>
            <span className='text-[11.19px] font-normal'>
              You have 2 push notifications credited
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
        <div className='flex justify-between mt-6 px-[2rem] relative'>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-textcolor text-opacity-[70%]'>
              Sort by:
            </span>
            <span
              className='text-darkblue text-xs cursor-pointer'
              onClick={() => setOpen(true)}
            >
              {selected}
            </span>
          </div>
          <span className='text-darkblue text-xs font-bold'>
            Create new push notification
          </span>
          <SortBy
            close={() => setOpen(false)}
            handleSelected={setSelected}
            open={open}
            sorts={sortbyfilters}
            styling='left-16 top-5'
          />
        </div>
        <div className='h-[490px] overflow-y-scroll mt-4 flex flex-col gap-5 px-[2rem] '>
          {pushNotificationData.map((data, index) => (
            <div
              className={` flex flex-col gap-2 border p-2 rounded-md border-r-[5.96px] ${getRandomColors(index)} `}
            >
              <div className='flex flex-col items-start'>
                <span className='text-[9px] font-semibold text-[#919191] '>
                  Title:
                </span>
                <span className='text-[12.1px] font-bold text-darkblue'>
                  {data.title}
                </span>
              </div>
              <div className='flex gap-3 items-start'>
                <span className='text-[9px] font-semibold text-[#919191]'>
                  Text:
                </span>
                <span className='text-[11px] font-semibold text-darkblue'>
                  {data.text}
                </span>
              </div>
              <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                  <span className='text-[9px] font-semibold text-[#919191]'>
                    Location:
                  </span>
                  <span className='text-[11px] font-semibold text-darkblue'>
                    {data.location}
                  </span>
                </div>
                <div className='flex gap-3 items-center'>
                  <span className='text-[9px] font-semibold text-[#919191]'>
                    Banner Color:
                  </span>
                  <div className='flex gap-1 items-center'>
                    <span className='text-[#919191] font-bold text-[11px]'>
                      {data.color}
                    </span>
                    <div
                      className={`w-[7.53px] h-[7.53px] rounded-full border-[1.01px] border-white bg-[${data.bg_color}] `}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-[671px] h-[581px] rounded-md bg-white mt-6 border border-[#BBC4D4] px-10 py-7'>
        <div className='flex gap-6 items-center'>
          <img alt='' className='cursor-pointer' src={BLUE_ARROW_LEFT} />
          <span className='text-sm font-semibold text-darkblue'>
            Create new announcement{" "}
          </span>
        </div>
        <form action='' className='flex flex-col gap-5 mt-4'>
          <input
            className='w-full bg-[#F8F8F8] outline-none  rounded-md px-3 py-5 placeholder:text-[12px] placeholder:text-[#C4C4C4]'
            placeholder='Announcement text'
            type='text'
          />
          <input
            className='w-full bg-[#F8F8F8] outline-none  rounded-md px-3 py-5 placeholder:text-[12px] placeholder:text-[#C4C4C4]'
            placeholder='Highlight text'
            type='text'
          />
          <input
            className='w-full bg-[#F8F8F8]  outline-none rounded-md px-3 py-5 placeholder:text-[12px] placeholder:text-[#C4C4C4]'
            placeholder='Announcement category'
            type='text'
          />
          <input
            className='w-full bg-[#F8F8F8]  outline-none rounded-md px-3 py-5 placeholder:text-[12px] placeholder:text-[#C4C4C4]'
            placeholder='Target page link'
            type='text'
          />
          <input
            className='w-full bg-[#F8F8F8] outline-none  rounded-md px-3 py-5 placeholder:text-[12px] placeholder:text-[#C4C4C4]'
            placeholder='Publish location'
            type='text'
          />
        </form>
        <ButtonV2
          btnStyle='bg-darkblue w-full rounded-md py-4 mt-7'
          handleClick={() => {}}
          textStyle='text-xs font-semibold text-white'
          title='Submit'
        />
      </div>
    </main>
  );
}

export default PushNotification;
