import React from "react";
import { BsStarFill } from "react-icons/bs";

import { bestPerformanceData, ratingsdata } from "@/fake_data";
import Layout from "@/features/Performance/layout";
import Progress from "@/shared/components/progress";
import { BADGE, ROUND_STAR, TAG, THIRD_POSITION } from "@/utils/Exports";

import PageHeader from "../../shared/components/pageheader";

function PerformancePage() {
  return (
    <main className='px-8 pt-6 pb-16'>
      <PageHeader route='/dashboard' title='Performance' />
      <div className='flex flex-col gap-5 items-end'>
        <div className='flex gap-2 items-center'>
          <img alt='' height={30} src={ROUND_STAR} width={30} />
          <span className='font-medium text-darkblue'>Arrange Tray</span>
        </div>
        <div className='w-full flex justify-between items-start flex-wrap gap-3'>
          <Layout title='Best performance'>
            <div className='flex items-end flex-col mt-3'>
              <div className='flex gap-3 items-center text-xs text-[#929AA7]'>
                <span>Referrals</span>
                <span>Trans</span>
                <span>Ratings</span>
              </div>
              <div className='w-full flex flex-col gap-5 mt-4'>
                {bestPerformanceData.map((data, index) => (
                  <div className='flex justify-between  items-center border-b pb-2'>
                    <div className='flex justify-start items-center'>
                      <div className='flex gap-3 items-center '>
                        <span className='text-xs text-[#929AA7]'>
                          {index + 1}
                        </span>
                        <div className='flex gap-[3px] items-center'>
                          <img
                            alt=''
                            className='border-4 rounded-full border-[#C2E0FF]'
                            height={40}
                            src={data.userimg}
                            width={40}
                          />
                          <div className='flex flex-col'>
                            <span className='text-sm font-medium'>
                              {data.name}
                            </span>
                            <span className='text-xs text-[#C4C4C4]'>
                              {data.username}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex gap-3 relative ml-2'>
                      {/* <Count text={data.referals} />
                      <Count text={data.trans} />
                      <Count text={data.ratings} /> */}
                      <Progress
                        customheight='h-10'
                        customwidth='w-10'
                        textSize='text-sm'
                        totalCount={Number(data.referals)}
                      />
                      <Progress
                        customheight='h-10'
                        customwidth='w-10'
                        textSize='text-sm'
                        totalCount={Number(data.trans)}
                      />
                      <Progress
                        customheight='h-10'
                        customwidth='w-10'
                        textSize='text-sm'
                        totalCount={Number(data.ratings)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Layout>
          <Layout title='Best sellers'>
            <div className='grid grid-cols-2 gap-2 mt-4'>
              {ratingsdata.map((data) => (
                <div
                  className={`border border-[#9A9FBF40] ${data.peoplerate > "4,567" ? "bg-[#FFF0CF]" : "bg-[#C2E0FF]"} flex gap-3 items-center py-2 px-2 rounded-md`}
                >
                  <div>
                    <img
                      alt=''
                      className='border-4 rounded-full border-[#C2E0FF]'
                      height={60}
                      src={data.img}
                      width={60}
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-col'>
                      <span className='text-sm font-medium'>{data.name}</span>
                      <span className='text-[9px] text-[#929AA7]'>
                        {data.location}
                      </span>
                    </div>
                    <div className='flex gap-1 bg-[#E3E8F082] bg-opacity-[51%] py-[4px] w-[69.24px]  h-[19.19px] rounded-sm px-1'>
                      <img alt='' height={6} src={TAG} width={6} />
                      <span className='text-[6.67px] text-darkblue'>
                        {data.peoplerate} items sold
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Layout>
          <Layout title='Best Rating'>
            <div className='grid grid-cols-3 gap-3 mt-4'>
              {ratingsdata.map((data) => (
                <div className='flex flex-col px-2 py-3 w-full bg-[#FFFADD] rounded-sm border border-[#9A9FBF40]   border-opacity-[25%] '>
                  <div className='relative mx-auto'>
                    <img
                      alt=''
                      className='self-center w-14 h-14 rounded-full border-4 border-blue-200 border-solid aspect-[0.7]'
                      src={data.img}
                    />
                    <img
                      alt=''
                      className='aspect-[0.7] w-10 absolute top-5 right-2'
                      loading='lazy'
                      src={BADGE}
                    />
                    <span className='text-[9px] flex items-center text-white z-10 absolute top-10 text-center left-4'>
                      <BsStarFill className='mr-1' /> 5.0
                    </span>
                  </div>
                  <div className='mt-3.5 text-xs pl-2 font-bold text-sky-950'>
                    {data.name}
                  </div>
                  <div className='text-gray-400 text-[9px] leading-[150%] pl-2'>
                    {data.location}
                  </div>
                  <div className='w-full justify-center text-[9px] p-1.5 mt-2.5 text-center text-amber-500 rounded-sm bg-yellow-500 bg-opacity-10 '>
                    {data.peoplerate} people rated
                  </div>
                </div>
              ))}
            </div>
          </Layout>
          <Layout title='Leaderboard'>
            <div className='grid grid-cols-3 mt-4 '>
              {ratingsdata.map((data) => (
                <div className='flex flex-col gap-3 items-center border-t-2 pt-3 pb-3'>
                  <div className='flex flex-col items-center relative'>
                    <img
                      alt=''
                      className='w-16 h-16 rounded-full border-[2.78px] border-branded'
                      src={data.img}
                    />
                    <img
                      alt=''
                      className='absolute -bottom-3 w-7 h-7'
                      src={THIRD_POSITION}
                    />
                  </div>
                  <div className='flex items-center flex-col'>
                    <span className='font-semibold'>{data.name}</span>
                    <span className='text-xs text-lightgrey'>
                      {data.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Layout>
        </div>
      </div>
    </main>
  );
}

export default PerformancePage;
