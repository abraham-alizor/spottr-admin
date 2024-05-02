/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

import { feedbackdata, sortbyfilters } from "@/fake_data";
import ButtonV2 from "@/shared/components/buttonV2";
import SortBy from "@/shared/components/sortby";
import { DOTS_ICON, EDIT_ICON, USER_VERIFIED } from "@/utils/Exports";

function FeedBack() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Date");
  return (
    <main className='w-[503.43px] h-[672.54px] bg-white border-[0.2px] border-[#BBC4D4] rounded-md mt-6 inset-1 px-5'>
      <div className='flex justify-between items-start px-[2rem] pt-6'>
        <div className='flex flex-col gap-1 '>
          <span className='text-[22.38px] font-bold text-darkblue'>
            Feedback
          </span>
          <span className='text-[11.19px] font-normal'>lorem impsum</span>
        </div>
        <ButtonV2
          btnStyle='mt-2'
          handleClick={() => {}}
          image={EDIT_ICON}
          textStyle=''
          title=''
        />
      </div>
      <div className='flex items-center gap-2 px-[2rem] pt-4 relative'>
        <span className='text-[9px] text-textcolor text-opacity-[70%]'>
          Sort by:
        </span>
        <span
          className='text-darkblue text-[10px] cursor-pointer'
          onClick={() => setOpen(true)}
        >
          {selected}
        </span>
        <SortBy
          close={() => setOpen(false)}
          handleSelected={setSelected}
          open={open}
          sorts={sortbyfilters}
          styling='left-16 top-5'
        />
      </div>
      <div className='h-[490px] overflow-y-scroll mt-2 flex flex-col gap-3 px-[2rem] '>
        {feedbackdata.map((data) => (
          <div className='pt-3 flex justify-between border-b-2 border-[#E7E7E7] pb-6 relative'>
            <div className='flex gap-3 items-center'>
              <div>
                <img
                  alt=''
                  className='w-[68.95px] h-[69.46px] border-[4.02px] border-[#C2E0FF] rounded-full'
                  src={data.userimag}
                />
                <img
                  alt=''
                  className='absolute top-2 left-10'
                  src={USER_VERIFIED}
                />
              </div>
              <div className='flex flex-col items-start gap-1'>
                <div className='flex flex-col items-start'>
                  <span className='text-lg font-normal'>{data.name}</span>
                  <span className='text-xs text-[#C4C4C4]'>
                    {data.username}
                  </span>
                </div>
                <span className='text-[16px] text-darkblue font-semibold'>
                  {data.feedback}
                </span>
              </div>
            </div>
            <div className='flex flex-col gap-2 items-end'>
              <div>
                <img alt='' className='w-8 h-8' src={DOTS_ICON} />
              </div>
              <div className='flex gap-6'>
                <BsFillStarFill className='text-darkblue font-bold' />
                <span className='text-xs font-semibold text-darkblue'>4.5</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default FeedBack;
