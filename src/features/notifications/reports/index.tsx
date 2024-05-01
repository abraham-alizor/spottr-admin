/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

import { sortbyfilters } from "@/fake_data";
import ButtonV2 from "@/shared/components/buttonV2";
import SortBy from "@/shared/components/sortby";
import TextBox from "@/shared/components/textbox";
import {
  DOTS_ICON,
  EDIT_ICON,
  TASK_IMAGE,
  USER_VERIFIED,
} from "@/utils/Exports";

function Reports() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Date");
  return (
    <main className='flex gap-16'>
      <div className='w-[503.43px] h-[672.54px] bg-white border-[0.2px] border-[#BBC4D4] rounded-md mt-6 inset-1 px-5'>
        <div className='flex justify-between items-start px-[2rem] pt-6'>
          <div className='flex flex-col gap-1 '>
            <span className='text-[22.38px] font-bold text-darkblue'>
              Reported Accounts/Products
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
          <div className='w-[410px] h-[120px] px-2 py-3 bg-white rounded-sm shadow-blur flex gap-3 mt-4'>
            <div>
              <img alt='' className='w-[88.23px] h-[68px]' src={TASK_IMAGE} />
            </div>
            <div>
              <span className='text-[15.74px] font-bold text-[#061E48]'>
                10 Baskets of Tomatoes
              </span>
              <div className='flex flex-col'>
                <span className='text-[12.24px] font-bold text-[#1569FA]'>
                  Food Services
                </span>
                <span className='text-[10.49px] text-[#061E48] font-semibold'>
                  Coker & Sons Ltd.
                </span>
              </div>
              <div className='flex gap-[7rem] mt-5'>
                <span className='text-xs text-[#AAB4C3] font-semibold'>
                  Lagos, Nigeria
                </span>
                <div className='flex items-center gap-1'>
                  <span className='w-[63.34px] h-[23.66px] flex justify-center items-center bg-[#DDE6F6] rounded-md text-[9.74px] text-darkblue p-[2px]'>
                    ₦10,000.00
                  </span>
                  <span className='text-[9.74px] text-[#C4C4C4] font-semibold'>
                    /day
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-3 flex justify-between border-b-2 border-[#E7E7E7] pb-6 relative'>
            <div className='flex gap-3 items-center'>
              <div>
                <img
                  alt=''
                  className='w-[68.95px] h-[69.46px] border-[4.02px] border-[#C2E0FF] rounded-full'
                  src={TASK_IMAGE}
                />
                <img
                  alt=''
                  className='absolute top-2 left-10'
                  src={USER_VERIFIED}
                />
              </div>
              <div className='flex flex-col items-start gap-5'>
                <span className='text-lg font-normal'>Adewale Adedamola</span>
                <span className='text-xs text-[#C4C4C4]'>@adedamola456</span>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <img alt='' className='w-8 h-8' src={DOTS_ICON} />
              <div className='flex gap-1'>
                <BsFillStarFill className='text-darkblue font-bold' />
                <span className='text-xs font-semibold text-darkblue'>4.5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[481px] h-[715px] bg-white border-[0.2px] border-[#BBC4D4] rounded-md mt-6'>
        <div className='h-[600px] overflow-y-scroll flex justify-center items-center'>
          <span className='text-2xl text-lightgrey font-medium'>
            The Message Box Will be here
          </span>
        </div>
        <TextBox onChange={() => {}} placeholder='Type reply...' value='' />
      </div>
    </main>
  );
}

export default Reports;
