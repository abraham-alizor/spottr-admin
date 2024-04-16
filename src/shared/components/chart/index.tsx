import React from "react";

import MainChart from "@/shared/components/mainChart";
import { ARROW_DOWN, REC_BLUE, REC_GREEN } from "@/utils/Exports";

const ChartComponent = ({
  data,
  title,
  totalStat1,
  totalStat2,
}: {
  data: any;
  title: string;
  totalStat1: string;
  totalStat2: string;
}) => (
  <main className='bg-white border border-darkblue rounded-lg w-[598px] h-[370px] p-6 flex flex-col'>
    <div className='flex justify-between items-center'>
      <span className='text-darkblue font-semibold'>{title}</span>
      <div className='flex gap-5 text-sm'>
        <div className='flex items-center justify-start gap-3'>
          <img alt='' src={REC_GREEN} />
          <span className=' font-semibold text-darkblue'>{totalStat1}</span>
        </div>
        <div className='flex items-center justify-start gap-3'>
          <img alt='' src={REC_BLUE} />
          <span className=' font-semibold text-darkblue'>{totalStat2}</span>
        </div>
      </div>
      <div>
        <button
          className='w-full  h-[20px] rounded-md text-sm bg-[#E1EFFB47] bg-opacity-15 flex  gap-4 border items-center p-1'
          type='button'
        >
          <span className='text-xs'>{`${new Date().toLocaleString("default", {
            month: "short",
          })}, ${new Date().getFullYear()}`}</span>
          <img alt='arrow_down' height={10} src={ARROW_DOWN} width={10} />
        </button>
      </div>
    </div>
    <div className='mt-3'>
      <MainChart data={data["Last 30 days"]} />
    </div>
  </main>
);

export default ChartComponent;
