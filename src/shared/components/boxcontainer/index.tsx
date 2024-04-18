import React, { useState } from "react";

import { EDIT_ICON } from "@/utils/Exports";

const BoxContainer = ({
  title,
  data,
  Title,
  Page,
}: {
  title: string;
  data: any;
  Title?: string;
  Page?: string;
}) => {
  const [hello, setHello] = useState("");
  return (
    <div className='w-[351px] bg-white h-[511px] py-7  border-[0.2px] border-[#BBC4D4] rounded-md'>
      <div className='flex justify-between px-6'>
        <span className='text-darkblue font-medium text-xl'>{title}</span>
        <img alt='' src={EDIT_ICON} />
      </div>
      <div className='mt-8 max-h-[400px] overflow-y-scroll px-5 flex flex-col gap-6'>
        {data.map((_data: any) => (
          <div className='flex flex-col gap-6  border-[0.5px] border-[#0000001A] border-opacity-10 px-4 py-3 rounded-md'>
            <div className='flex  gap-5 text-xs'>
              <span className='text-[#919191]'>{Title || Page}</span>
              <span className='font-medium text-darkblue text-[15px]'>
                {_data.title}
              </span>
            </div>
            <div className='flex gap-5'>
              <span className='text-xs text-[#919191]'>Text</span>
              <span className='text-[10.8px] font-medium'>{_data.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxContainer;
