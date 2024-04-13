import React from "react";

interface Props {
  headerBgColor: string;
  AdsData: any;
  icon: any;
  adsName: string;
  adsruunin: any;
}
const AdsComponent = ({
  headerBgColor,
  AdsData,
  icon,
  adsName,
  adsruunin,
}: Props) => (
  <main className='w-full max-h-[521px] bg-white px-5 py-5 border rounded-lg mb-20 overflow-y-auto'>
    <div className={`${headerBgColor} px-4 py-6 rounded-lg `}>
      <div className='flex flex-col gap-3'>
        <div className='flex gap-4 items-center '>
          <img alt='' src={icon} />
          <span className='text-darkblue font-semibold text-sm'>{adsName}</span>
        </div>
        <span className='text-2xl text-darkblue font-medium'>{`${adsruunin} Ads Running`}</span>
      </div>
    </div>
    <div className='max-h-[380px] overflow-y-scroll'>
      <div className='flex flex-col gap-3 my-7 '>
        {AdsData.map((data: any) => (
          <div className='flex bg-white shadow-custom p-2 items-start  gap-4 rounded-md'>
            <img alt='' height={70} src={data.img} width={70} />
            <div className='flex flex-col gap-3'>
              <span className='font-semibold text-[#061E48] text-[16px]'>
                {data.title}
              </span>
              <div className='flex justify-between '>
                <span className='text-2xl font-semibold text-[#061E48]'>
                  {data.pricetag}
                </span>
                <span className='ml-[2rem] text-[10px] text-[#1569FA] font-semibold'>
                  {`${data.days} (${data.time})`}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default AdsComponent;
