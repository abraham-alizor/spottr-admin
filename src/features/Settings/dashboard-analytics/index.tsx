/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";

import Barcharts from "@/shared/components/Barchart";
import { COMING_DOWN, GOING_UP, WHITE_ARROW } from "@/utils/Exports";

const barchartData = [
  {
    name: "Jan 1-2",
    value: 10,
  },
  {
    name: "Jan 2-5",
    value: 20,
  },
  {
    name: "Jan 5-8",
    value: 15,
  },
  {
    name: "Jan 8-10",
    value: 25,
  },
  {
    name: "Jan 10-12",
    value: 25,
  },
  {
    name: "Jan 12-14",
    value: 25,
  },
  {
    name: "Jan 14-16",
    value: 25,
  },
  {
    name: "Jan 16-18",
    value: 25,
  },
  {
    name: "Jan 18-20",
    value: 25,
  },
  {
    name: "Jan 18-22",
    value: 25,
  },
];
function DashboardAnalytics({ close }: any) {
  return (
    <main className='w-[819px] h-[917px] rounded-md ml-[15rem] mt-6 bg-[#FFFFFFCC] bg-opacity-[80%] border-[0.2px] border-[#BBC4D4] mb-24'>
      <div className='w-full h-[181px] bg-darkblue px-10 pt-14 flex justify-between items-center'>
        <div className='flex flex-col gap-1'>
          <img
            alt=''
            className='w-3 h-3 cursor-pointer'
            onClick={close}
            src={WHITE_ARROW}
          />

          <span className='text-3xl font-bold text-white'> Overview</span>
          <span className='text-3xl font-bold text-white'>Dashboard</span>
        </div>
        <div className='w-[132px] h-[44px] rounded-3xl bg-white flex gap-2 justify-center items-center mt-2'>
          <div className='bg-[#39B54A] w-[24px] h-[16px] flex justify-center text-[10px] items-center text-white rounded-md'>
            AD
          </div>
          <span className='text-xs font-semibold text-[#39B54A]'>
            Create an ad
          </span>
        </div>
      </div>
      <div className='px-10 pt-5 '>
        <div className='flex flex-col gap-2'>
          <span className='text-[14.79px] font-semibold text-darkblue'>
            Your performance
          </span>
          <span className='text-[#3B3B3BB2] text-opacity-[70%] font-normal text-xs w-[274px] break-words'>
            You reached 450 accounts in the month of March, compare to February
          </span>
        </div>
        <div className='mt-7 flex flex-col items-start border-b pb-5'>
          <Barcharts data={barchartData} height={175} width={700} />
          <div className='flex items-center gap-5'>
            <div className='flex items-center gap-2'>
              <div className='w-[7px] h-[7px] rounded-full bg-[#D6DCE8]' />
              <span className='text-[11px] text-darkblue font-normal'>
                Last month
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-[7px] h-[7px] rounded-full bg-[#9EAECA]' />
              <span className='text-[11px] text-darkblue font-normal'>
                This month
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className='flex justify-start gap-20'>
            <div className='flex flex-col items-start'>
              <div className='flex flex-col gap-2 mt-5'>
                <span className='text-[20px] font-semibold text-darkblue'>
                  Top performance metrics
                </span>
                <span className='text-xs font-normal text-[#3B3B3BB2] text-opacity-[70%]'>
                  Stats compare to previous month
                </span>
              </div>
              <div className='flex gap-52 mt-5 '>
                <div className=''>
                  <div className='w-full flex flex-col items-center'>
                    <span className='text-[16px] font-semibold text-[#3B3B3BB2] text-opacity-[70%]'>
                      Search
                    </span>
                    <span className='text-[45px] font-[700] text-darkblue'>
                      495
                    </span>
                    <div className='flex items-center gap-1'>
                      <img alt='' src={GOING_UP} />
                      <span className='text-xs text-[#3B3B3BB2] text-opacity-[70%]'>
                        14%
                      </span>
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-0 items-center mt-10'>
                    <span className='text-[16px] font-semibold text-[#3B3B3BB2] text-opacity-[70%]'>
                      Profile Visit
                    </span>
                    <span className='text-[45px] font-[700] text-darkblue'>
                      38
                    </span>
                    <div className='flex items-center gap-1'>
                      <img alt='' src={GOING_UP} />
                      <span className='text-xs text-[#3B3B3BB2] text-opacity-[70%]'>
                        78%
                      </span>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className='w-full flex flex-col gap-0 items-center'>
                    <span className='text-[16px] font-semibold text-[#3B3B3BB2] text-opacity-[70%]'>
                      Contact
                    </span>
                    <span className='text-[45px] font-[700] text-darkblue'>
                      38
                    </span>
                    <div className='flex items-center gap-1'>
                      <img alt='' src={GOING_UP} />
                      <span className='text-xs text-[#3B3B3BB2] text-opacity-[70%]'>
                        78%
                      </span>
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-0 items-center mt-10'>
                    <span className='text-[16px] font-semibold text-[#3B3B3BB2] text-opacity-[70%]'>
                      Request
                    </span>
                    <span className='text-[45px] font-[700] text-darkblue'>
                      2
                    </span>
                    <div className='flex items-center gap-1'>
                      <img alt='' src={COMING_DOWN} />
                      <span className='text-xs text-[#3B3B3BB2] text-opacity-[70%]'>
                        87%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <div>
                <span className='text-[20px] font-semibold text-darkblue'>
                  Highlights
                </span>
                <div className='flex flex-col gap-6 mt-3 border-b pb-3'>
                  <div className='flex gap-32 items-center'>
                    <div className='flex flex-col gap-0'>
                      <span className='text-[#3B3B3BB2] text-opacity-[70%] font-bold'>
                        5769
                      </span>
                      <span className='text-[#3B3B3BB2] text-opacity-[70%] font-normal text-[11px]'>
                        Account reached
                      </span>
                    </div>
                    <span className='text-[#3B3B3BB2] text-opacity-[70%] font-normal text-[11px]'>
                      -63.8%
                    </span>
                  </div>
                  <div className='flex gap-40 items-center'>
                    <div className='flex flex-col gap-0'>
                      <span className='text-[#3B3B3BB2] text-opacity-[70%] font-bold'>
                        30
                      </span>
                      <span className='text-[#3B3B3BB2] text-opacity-[70%] font-normal text-[11px]'>
                        Opportunities
                      </span>
                    </div>
                    <span className='text-[#39B54A]  font-normal text-[11px]'>
                      8%
                    </span>
                  </div>
                </div>
              </div>
              <div className='mt-6'>
                <span className='text-[20px] font-semibold text-darkblue'>
                  Ads
                </span>
                <div className='flex flex-col gap-6 mt-3  pb-3'>
                  <div className='flex gap-32 items-center'>
                    <div className='flex flex-col gap-0'>
                      <span className='text-[#3B3B3BB2] text-opacity-[70%] font-bold'>
                        5769
                      </span>
                      <span className='text-[#3B3B3BB2] text-opacity-[70%] font-normal text-[11px]'>
                        Account reached
                      </span>
                    </div>
                    <span className='text-[#3B3B3BB2] text-opacity-[70%] font-normal text-[11px]'>
                      -63.8%
                    </span>
                  </div>
                  <div className='flex gap-40 items-center'>
                    <div className='flex flex-col gap-0'>
                      <span className='text-[#3B3B3BB2] text-opacity-[70%] font-bold'>
                        30
                      </span>
                      <span className='text-[#3B3B3BB2] text-opacity-[70%] font-normal text-[11px]'>
                        Profile clicked
                      </span>
                    </div>
                    <span className='text-[#39B54A]  font-normal text-[11px]'>
                      8%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardAnalytics;
