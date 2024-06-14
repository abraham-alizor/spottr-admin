/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { BiDotsHorizontal } from "react-icons/bi";
import { BsBarChartFill, BsStarFill } from "react-icons/bs";
import { useQuery } from "react-query";

import { DashboardApi } from "@/services/dashboard/service";
import { GetAllWallets } from "@/services/wallets/service";
import DropDown from "@/shared/components/dropdown/Dropdown";
import MainChart from "@/shared/components/mainChart";
import Progress from "@/shared/components/progress";
import { AVATAR, BADGE } from "@/utils/Exports";

function Dashboard() {
  const [data, setData] = useState<string>("Last 30 days");
  const { data: dashboardData } = useQuery("DASHBOARD", DashboardApi);
  const { data: wallets } = useQuery("wallets", GetAllWallets);

  // eslint-disable-next-line no-console
  console.log(wallets);

  const chartData = {
    "Last 30 days": [
      {
        name: "Jan",
        uv: 4000,
        pv: 4300,
      },
      {
        name: "Feb",
        uv: 3000,
        pv: 4300,
      },
      {
        name: "Mar",
        uv: 2000,
        pv: 4300,
      },
      {
        name: "Apr",
        uv: 2780,
        pv: 4300,
      },
      {
        name: "May",
        uv: 1890,
        pv: 4300,
      },
      {
        name: "Jun",
        uv: 2390,
        pv: 4300,
      },
      {
        name: "Jul",
        uv: 3490,
        pv: 4300,
      },
      {
        name: "Aug",
        uv: 3490,
        pv: 4300,
      },
      {
        name: "Sep",
        uv: 3490,
        pv: 4300,
      },
      {
        name: "Oct",
        uv: 3490,
        pv: 4300,
      },
      {
        name: "Nov",
        uv: 3490,
        pv: 4300,
      },
      {
        name: "Dec",
        uv: 3490,
        pv: 4300,
      },
    ],
    "Last 7 days": [
      {
        name: "Mon",
        uv: 700,
        pv: 250,
      },
      {
        name: "Tue",
        uv: 300,
        pv: 250,
      },
      {
        name: "Wed",
        uv: 200,
        pv: 250,
      },
      {
        name: "Thu",
        uv: 278,
        pv: 250,
      },
      {
        name: "Fri",
        uv: 180,
        pv: 100,
      },
      {
        name: "Sat",
        uv: 290,
        pv: 100,
      },
      {
        name: "Sun",
        uv: 500,
        pv: 300,
      },
    ],
    Today: [
      {
        name: new Date(),
        uv: 700,
        pv: 250,
      },
    ],
  };

  return (
    <div className='pb-32 px-4 lg:px-8'>
      <div className=' flex justify-between w-full mt-9'>
        <div className='flex flex-col  max-md:mt-2.5 w-full lg:w-[58%]'>
          <div className='px-0.5  max-md:max-w-full'>
            <div className='flex justify-between w-full flex-wrap'>
              <div className='flex flex-col  w-full lg:w-[32.5%]'>
                <div className='flex flex-col px-4 py-3.5 mx-auto w-full bg-white rounded-xl border border-sky-100 border-solid max-md:mt-3'>
                  <div className='flex gap-5 justify-between px-0.5 text-2xl font-bold text-blue-900 whitespace-nowrap'>
                    <div className='self-start mt-3.5'>
                      {dashboardData?.totalUsers}
                    </div>
                    <img
                      alt=''
                      className='shrink-0 rounded-xl shadow-lg shadow-white aspect-square w-[33px]'
                      loading='lazy'
                      srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/7f80bcd3c14a7ca1dc5641492552db86d6373d073218f59ab7ab01865224174f?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f80bcd3c14a7ca1dc5641492552db86d6373d073218f59ab7ab01865224174f?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f80bcd3c14a7ca1dc5641492552db86d6373d073218f59ab7ab01865224174f?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f80bcd3c14a7ca1dc5641492552db86d6373d073218f59ab7ab01865224174f?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f80bcd3c14a7ca1dc5641492552db86d6373d073218f59ab7ab01865224174f?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f80bcd3c14a7ca1dc5641492552db86d6373d073218f59ab7ab01865224174f?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f80bcd3c14a7ca1dc5641492552db86d6373d073218f59ab7ab01865224174f?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f80bcd3c14a7ca1dc5641492552db86d6373d073218f59ab7ab01865224174f?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&'
                    />
                  </div>
                  <div className='flex gap-5 mt-6'>
                    <div className='my-auto text-base text-slate-500'>
                      Total users
                    </div>
                    <div className='flex flex-1 gap-1.5 text-sm text-right text-green-500'>
                      <div className='grow my-auto'>
                        {dashboardData?.percentageOfNewUsersInThePast24hrs}
                      </div>
                      <img
                        alt=''
                        className='shrink-0 w-6 aspect-square'
                        loading='lazy'
                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/99f64d3a275e7723870abc1b63d4e12ff27dcac8349e7450d0138143cbda261a?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col  w-full lg:w-[32.5%]'>
                <div className='flex flex-col px-6 pt-6 pb-4 mx-auto w-full whitespace-nowrap bg-white rounded-xl border border-sky-100 border-solid max-md:pl-5 max-md:mt-3'>
                  <div className='flex gap-3.5'>
                    <div className='grow text-2xl font-bold text-blue-900'>
                      N222,300,000
                    </div>
                    <div className='my-auto text-sm text-right text-green-500'>
                      +
                    </div>
                  </div>
                  <div className='flex gap-5 mt-6'>
                    <div className='my-auto text-base text-slate-500'>
                      Revenue
                    </div>
                    <div className='flex flex-1 gap-1 px-px text-sm text-right text-green-500'>
                      <div className='grow my-auto'>+12.09%</div>
                      <img
                        alt=''
                        className='shrink-0 w-6 aspect-square'
                        loading='lazy'
                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/99f64d3a275e7723870abc1b63d4e12ff27dcac8349e7450d0138143cbda261a?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col  w-full lg:w-[32.5%]'>
                <div className='flex flex-col  px-4 py-3.5 mx-auto w-full whitespace-nowrap bg-white rounded-xl border border-sky-100 border-solid max-md:mt-3'>
                  <div className='flex gap-5 justify-between px-0.5 text-2xl font-bold text-blue-900'>
                    <div className='self-start mt-3.5'>34,890</div>
                    <img
                      alt=''
                      className='shrink-0 rounded-xl shadow-lg shadow-white  aspect-square w-[33px]'
                      loading='lazy'
                      srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/f7e0cffb27ee612b0b5e44c304b8afca5332a112cc965f3417927b2b2eab8552?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7e0cffb27ee612b0b5e44c304b8afca5332a112cc965f3417927b2b2eab8552?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7e0cffb27ee612b0b5e44c304b8afca5332a112cc965f3417927b2b2eab8552?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7e0cffb27ee612b0b5e44c304b8afca5332a112cc965f3417927b2b2eab8552?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7e0cffb27ee612b0b5e44c304b8afca5332a112cc965f3417927b2b2eab8552?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7e0cffb27ee612b0b5e44c304b8afca5332a112cc965f3417927b2b2eab8552?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7e0cffb27ee612b0b5e44c304b8afca5332a112cc965f3417927b2b2eab8552?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7e0cffb27ee612b0b5e44c304b8afca5332a112cc965f3417927b2b2eab8552?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&'
                    />
                  </div>
                  <div className='flex gap-5 justify-between px-px mt-6 w-full'>
                    <div className='my-auto text-base text-slate-500'>
                      Sales
                    </div>
                    <div className='flex gap-1.5 text-sm text-right text-red-500'>
                      <div className='grow my-auto'>-2.98%</div>
                      <img
                        alt=''
                        className='shrink-0 w-6 aspect-square'
                        loading='lazy'
                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/010e8d58f7f70c37b0fcf95fd061363e6aeb126145eb02513b3ddbffbd9f8fb4?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-2 w-full'>
            <div className='flex justify-between w-full'>
              <div className='flex flex-col w-[48%] lg:w-[24%] max-md:ml-0 max-md:w-full'>
                <div className='flex flex-col grow items-center text-center py-5 w-full font-semibold text-blue-900 bg-white rounded-xl shadow-2xl shadow-brand-light  max-md:mt-2'>
                  <div className='self-stretch text-sm'>Corporate accounts</div>
                  {/* <Count text='6m' /> */}
                  <Progress
                    customheight='h-8'
                    customwidth='w-8'
                    styling='mt-3'
                    textSize='text-sm'
                    totalCount={dashboardData?.totalCorporateAccount ?? 0}
                    unit='m'
                  />
                  <div className='mt-3 text-xs whitespace-nowrap'>
                    <span className='text-green-500 '>45 </span>
                    <span className=''>new accounts &gt;</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col  w-[48%] lg:w-[24%]'>
                <div className='flex flex-col grow text-center py-5 w-full font-semibold text-blue-900 bg-white rounded-xl shadow-2xl shadow-brand-light  max-md:px-5 max-md:mt-2 items-center'>
                  <div className='text-sm'>Business accounts</div>
                  {/* <Count text='6m' /> */}
                  <Progress
                    customheight='h-8'
                    customwidth='w-8'
                    styling='mt-3'
                    textSize='text-sm'
                    totalCount={dashboardData?.totalVendors ?? 0}
                    unit='m'
                  />
                  <div className='mt-3 text-xs whitespace-nowrap'>
                    <span className='text-green-500 '>45 </span>
                    <span className=''>new accounts &gt;</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col  w-[48%] lg:w-[24%]'>
                <div className='flex flex-col grow text-center py-5 w-full font-semibold text-blue-900 bg-white rounded-xl shadow-2xl  shadow-brand-light max-md:px-5 max-md:mt-2 items-center'>
                  <div className='text-sm'>Check-ins</div>
                  {/* <Count text='3k' /> */}
                  <Progress
                    customheight='h-8'
                    customwidth='w-8'
                    styling='mt-3'
                    textSize='text-sm'
                    totalCount={dashboardData?.totalCheckIns ?? 0}
                    unit='k'
                  />
                  <div className='mt-3 text-xs whitespace-nowrap'>
                    <span className='text-green-500 '>45k </span>
                    <span className=''> all time &gt;</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col  w-[48%] lg:w-[24%]'>
                <div className='flex flex-col grow items-center text-center py-4 w-full font-semibold text-blue-900 bg-white rounded-xl shadow-2xl shadow-brand-light max-md:px-5 max-md:mt-2'>
                  <div className='text-sm'>Ads</div>
                  {/* <Count text='20k' /> */}
                  <Progress
                    customheight='h-8'
                    customwidth='w-8'
                    styling='mt-3'
                    textSize='text-sm'
                    totalCount={dashboardData?.totalAds ?? 0}
                    unit='k'
                  />
                  <div className='self-stretch mt-3 text-xs whitespace-nowrap'>
                    <span className='text-green-500 '>45</span>
                    <span className=''> new ads running &gt;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-start  max-md:mt-2.5 w-full lg:w-[40%] px-6 pt-4 bg-white rounded-xl border border-sky-100 border-solid'>
          <div className='w-1/3'>
            <p className='text-brand text-base font-semibold'>Top Locations</p>
            <ol className='list-decimal flex flex-col text-brand gap-3 mt-3 ml-4'>
              {dashboardData?.topLocations !== undefined &&
                dashboardData?.topLocations?.map((data_) => (
                  <li>{data_.city}</li>
                ))}
            </ol>
          </div>
          <div className='w-1/3'>
            <p className='text-brand text-base font-semibold'>Top Interests</p>
            <ol className='list-decimal flex flex-col text-brand gap-3 mt-3 ml-4'>
              {dashboardData?.topInterests !== undefined &&
                dashboardData?.topInterests?.map((data_) => (
                  <li className='flex justify-start gap-2'>
                    <img
                      alt=''
                      className='aspect-auto h-8 rounded-full'
                      src={data_.displayImage}
                    />
                    {data_.name}
                  </li>
                ))}
            </ol>
          </div>
          <div className='w-1/3'>
            <p className='text-brand text-base font-semibold'>Top Categories</p>
            <ol className='list-decimal flex flex-col text-brand gap-3 mt-3 ml-4'>
              {dashboardData?.topCategories !== undefined &&
                dashboardData?.topCategories?.map((data_) => (
                  <li className='flex justify-start gap-2'>
                    <img
                      alt=''
                      className='aspect-auto h-8 rounded-full'
                      src={AVATAR}
                    />
                    {data_.name.length >= 8
                      ? `${data_.name.slice(0, 8)}...`
                      : data_.name}
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>

      <Zoom>
        <div className='flex w-full flex-wrap justify-between'>
          <div className='w-[67%] flex justify-between flex-wrap'>
            <div className='w-full rounded-md border border-solid border-zinc-200 bg-white pb-11 pt-6 lg:mt-6 lg:w-[60%] mb-4 lg:px-5'>
              <div className='flex w-full flex-wrap items-center justify-between'>
                <div className='font-semibold leading-9 text-gray-dark'>
                  Revenue
                </div>

                <div className='flex items-center justify-end pr-4 lg:pr-0'>
                  <div className='flex items-center justify-start'>
                    <div className='h-4 w-4 rounded bg-[#26D49B]' />
                    <div className='ml-2 text-xs'>Subscriptions</div>
                  </div>
                  <div className='ml-2 flex items-center justify-start'>
                    <div className='h-4 w-4 rounded bg-[#0075FF]' />
                    <div className='ml-2 text-xs'>Ads</div>
                  </div>
                  <div className='ml-2 flex items-center justify-start'>
                    <div className='h-4 w-4 rounded bg-[#FFB211]' />
                    <div className='ml-2 text-xs'>Tasks</div>
                  </div>
                  <div className='ml-2 flex items-center justify-start'>
                    <div className='h-4 w-4 rounded bg-[#980BE9]' />
                    <div className='ml-2 text-xs'>Wallets</div>
                  </div>
                  <div className='ml-2 flex items-center justify-start'>
                    <div className='h-4 w-4 rounded bg-[#FF725F]' />
                    <div className='ml-2 text-xs'>Purchases</div>
                  </div>
                </div>
                <div className='mb-3 flex justify-between   font-semibold text-zinc-500 '>
                  <DropDown {...{ state: data, setState: setData }} />
                </div>
              </div>

              {data === "Last 30 days" ? (
                <MainChart data={chartData["Last 30 days"]} />
              ) : data === "Last 7 days" ? (
                <MainChart data={chartData["Last 7 days"]} />
              ) : (
                <></>
              )}
            </div>

            <div className='w-full  bg-white rounded-xl border border-sky-100 border-solid pb-11 pt-6 lg:mt-6 lg:w-[38%] mr-2 mb-4 '>
              <div className='flex justify-between mb-4 lg:px-5'>
                <div className='font-bold text-lg'>Trending</div>
                <BiDotsHorizontal />
              </div>

              <div className='flex gap-3 mb-2 items-start px-3 py-2 font-bold bg-white rounded shadow-[0px_4px_20px_rgba(0,0,0,0.07)]'>
                <img
                  alt=''
                  className='shrink-0 aspect-[1.02] w-[52px]'
                  loading='lazy'
                  srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&'
                />
                <div className='flex flex-col'>
                  <div className='text-xs text-sky-950'>
                    10 Baskets of Tomatoes
                  </div>
                  <div className='mt-1.5 text-xs text-blue-600'>
                    Food Services
                  </div>
                  <div className='mt-1.5 text-xs font-semibold text-sky-950'>
                    Coker & Sons Ltd.
                  </div>
                  <div className='flex gap-5 justify-between mt-2.5 font-semibold'>
                    <div className='text-xs text-gray-400'>Lagos, Nigeria</div>
                    <div className='justify-center px-1.5 py-1 text-xs text-blue-900 rounded bg-slate-200'>
                      <span className='font-medium'>₦</span>10,000.00
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex gap-3 mb-2 items-start px-3 py-2 font-bold bg-white rounded shadow-[0px_4px_20px_rgba(0,0,0,0.07)]'>
                <img
                  alt=''
                  className='shrink-0 aspect-[1.02] w-[52px]'
                  loading='lazy'
                  srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&'
                />
                <div className='flex flex-col'>
                  <div className='text-xs text-sky-950'>
                    10 Baskets of Tomatoes
                  </div>
                  <div className='mt-1.5 text-xs text-blue-600'>
                    Food Services
                  </div>
                  <div className='mt-1.5 text-xs font-semibold text-sky-950'>
                    Coker & Sons Ltd.
                  </div>
                  <div className='flex gap-5 justify-between mt-2.5 font-semibold'>
                    <div className='text-xs text-gray-400'>Lagos, Nigeria</div>
                    <div className='justify-center px-1.5 py-1 text-xs text-blue-900 rounded bg-slate-200'>
                      <span className='font-medium'>₦</span>10,000.00
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex gap-3 mb-2 items-start px-3 py-2 font-bold bg-white rounded shadow-[0px_4px_20px_rgba(0,0,0,0.07)]'>
                <img
                  alt=''
                  className='shrink-0 aspect-[1.02] w-[52px]'
                  loading='lazy'
                  srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/43f4ff6834ab29e0cb27484f7bec09c21e0f8c9fa6d839ba3ccf52d9511fd6ad?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&'
                />
                <div className='flex flex-col'>
                  <div className='text-xs text-sky-950'>
                    10 Baskets of Tomatoes
                  </div>
                  <div className='mt-1.5 text-xs text-blue-600'>
                    Food Services
                  </div>
                  <div className='mt-1.5 text-xs font-semibold text-sky-950'>
                    Coker & Sons Ltd.
                  </div>
                  <div className='flex gap-5 justify-between mt-2.5 font-semibold'>
                    <div className='text-xs text-gray-400'>Lagos, Nigeria</div>
                    <div className='justify-center px-1.5 py-1 text-xs text-blue-900 rounded bg-slate-200'>
                      <span className='font-medium'>₦</span>10,000.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex gap-5 justify-between pl-8 font-semibold text-blue-900 bg-blue-50 w-[32%] mb-4'>
              <div className='flex flex-col my-auto'>
                <div className='text-lg'>Vendors</div>
                <div className='mt-4 text-xs'>
                  <span className='text-green-500'>
                    {dashboardData?.totalVendors}
                  </span>
                  new vendor accounts
                </div>
              </div>
              <div className='justify-center px-2.5 py-9 text-lg whitespace-nowrap bg-blue-200'>
                {dashboardData?.totalVendors}
              </div>
            </div>
            <div className='flex gap-5 justify-between pl-8 font-semibold text-blue-900 bg-blue-50  w-[32%] mb-4'>
              <div className='flex flex-col my-auto'>
                <div className='text-lg'>Referrals</div>
                <div className='mt-4 text-xs'>
                  <span className='text-green-500'>45m </span> CT disbursed
                </div>
              </div>
              <div className='justify-center px-2.5 py-9 text-lg whitespace-nowrap bg-blue-200'>
                {dashboardData?.totalReferrals}
              </div>
            </div>
            <div className='flex gap-5 justify-between pl-8 font-semibold text-blue-900 bg-blue-50  w-[32%] mb-4 mr-2'>
              <div className='flex flex-col my-auto'>
                <div className='text-lg'>Tasks</div>
                <div className='mt-4 text-xs'>
                  <span className='text-green-500'>45k </span> all time takers
                </div>
              </div>
              <div className='justify-center px-2.5 py-9 text-lg whitespace-nowrap bg-blue-200'>
                227k
              </div>
            </div>
          </div>
          <div className='w-full  bg-white rounded-xl border border-sky-100 border-solid pb-11 pt-6 lg:mt-6 lg:w-[33%] lg:px-5'>
            <div className='flex justify-between mb-6'>
              <div className='font-bold text-lg'>Best performers</div>
              <BiDotsHorizontal />
            </div>
            <div className='flex justify-between flex-wrap mb-6'>
              <div className='w-[31%] text-[10px] flex justify-between  items-center px-4 py-3 border  rounded-md border-gray-300'>
                <BsStarFill className='text-brand' />
                <div className=''>Top sellers</div>
              </div>
              <div className='w-[32%] text-[10px] flex justify-between items-center px-4 py-3 border  rounded-md border-gray-300'>
                <BsStarFill className='text-yellow-500' />
                <div className=' '>Best Rated</div>
              </div>
              <div className='w-[34%] text-[10px] flex justify-between items-center px-4 py-3 border  rounded-md border-gray-300'>
                <BsBarChartFill className='text-purple-700' />
                <div className=' '>Leaderboard</div>
              </div>
            </div>
            <p className='my-6'>Top Sellers</p>
            <div className='flex w-full justify-between'>
              <div className='flex flex-col justify-center font-semibold w-[49.3%]'>
                <div className='flex gap-1.5 py-2 px-1 bg-orange-100 rounded border border-solid border-slate-400 border-opacity-30 shadow-[0px_3px_17px_rgba(0,0,0,0.07)]'>
                  <img
                    alt=''
                    className='shrink-0 rounded-full border-4 border-blue-200 border-solid aspect-[0.98] w-[62px] '
                    loading='lazy'
                    srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/81cbc827396870d55bf3abad46488add2f90496582119c29efb277618fa9aa98?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/81cbc827396870d55bf3abad46488add2f90496582119c29efb277618fa9aa98?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81cbc827396870d55bf3abad46488add2f90496582119c29efb277618fa9aa98?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/81cbc827396870d55bf3abad46488add2f90496582119c29efb277618fa9aa98?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/81cbc827396870d55bf3abad46488add2f90496582119c29efb277618fa9aa98?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81cbc827396870d55bf3abad46488add2f90496582119c29efb277618fa9aa98?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/81cbc827396870d55bf3abad46488add2f90496582119c29efb277618fa9aa98?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/81cbc827396870d55bf3abad46488add2f90496582119c29efb277618fa9aa98?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&'
                  />
                  <div className='flex flex-col flex-1 my-auto'>
                    <div className='text-xs font-bold text-sky-950'>
                      John Tommy
                    </div>
                    <div className='mt-1 text-xs leading-3 text-gray-400'>
                      Lagos, Nigeria
                    </div>
                    <div className='w-full flex items-center  p-1 mt-1.5 text-xs text-center text-blue-900 rounded bg-slate-200 bg-opacity-50 shadow-[0px_3px_17px_rgba(0,0,0,0.07)]'>
                      <img
                        alt=''
                        className='shrink-0  w-1.5 aspect-square mr-1'
                        loading='lazy'
                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/f67eaa7d829705a7d72efbba93b7baee0bf0a28f045de0d68dee44853c2ff03c?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&'
                      />
                      <span className='text-[10px]'>5,786 items sold</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-center font-semibold w-[49.3%]'>
                <div className='flex gap-1.5 py-2 px-1 bg-sky-100 rounded border border-solid border-slate-400 border-opacity-30 shadow-[0px_3px_17px_rgba(0,0,0,0.07)]'>
                  <img
                    alt=''
                    className='shrink-0 rounded-full border-4 border-blue-200 border-solid aspect-[0.98] w-[62px] '
                    loading='lazy'
                    srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/a53605e7056332d120a824551fd85fb33016123557cbb69f79546a27362ff63b?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a53605e7056332d120a824551fd85fb33016123557cbb69f79546a27362ff63b?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a53605e7056332d120a824551fd85fb33016123557cbb69f79546a27362ff63b?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a53605e7056332d120a824551fd85fb33016123557cbb69f79546a27362ff63b?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a53605e7056332d120a824551fd85fb33016123557cbb69f79546a27362ff63b?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a53605e7056332d120a824551fd85fb33016123557cbb69f79546a27362ff63b?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a53605e7056332d120a824551fd85fb33016123557cbb69f79546a27362ff63b?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a53605e7056332d120a824551fd85fb33016123557cbb69f79546a27362ff63b?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&'
                  />
                  <div className='flex flex-col flex-1 my-auto'>
                    <div className='text-xs font-bold text-sky-950'>
                      John Tommy
                    </div>
                    <div className='mt-1 text-xs leading-3 text-gray-400'>
                      Lagos, Nigeria
                    </div>
                    <div className='w-full flex items-center  p-1 mt-1.5 text-xs text-center text-blue-900 rounded bg-slate-200 bg-opacity-50 shadow-[0px_3px_17px_rgba(0,0,0,0.07)]'>
                      <img
                        alt=''
                        className='shrink-0  w-1.5 aspect-square mr-1'
                        loading='lazy'
                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/f67eaa7d829705a7d72efbba93b7baee0bf0a28f045de0d68dee44853c2ff03c?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&'
                      />
                      <span className='text-[10px]'>5,786 items sold</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className='my-6'>Best Rating</p>

            <div className='w-full flex justify-between items-start'>
              <div className='flex flex-col justify-center text-xs font-semibold w-[32%]'>
                <div className='flex flex-col px-2 py-3 w-full bg-yellow-50 rounded-sm border border-solid border-slate-400 border-opacity-30 shadow-[0px_3px_16px_rgba(0,0,0,0.07)]'>
                  <div className='relative mx-auto'>
                    <img
                      alt=''
                      className='self-center w-10 h-10 rounded-full border-4 border-blue-200 border-solid aspect-[0.7]'
                      loading='lazy'
                      srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&'
                    />
                    <img
                      alt=''
                      className='aspect-[0.7] w-10 absolute top-2'
                      loading='lazy'
                      src={BADGE}
                    />
                    <span className='text-[9px] flex items-center text-white z-10 absolute top-6 text-center left-2'>
                      <BsStarFill className='mr-1' /> 5.0
                    </span>
                  </div>
                  <div className='mt-3.5 text-xs pl-2 font-bold text-sky-950'>
                    John Tommy
                  </div>
                  <div className='text-gray-400 text-[9px] leading-[150%] pl-2'>
                    Lagos, Nigeria
                  </div>
                  <div className='w-full justify-center text-[9px] p-1.5 mt-2.5 text-center text-amber-500 rounded-sm bg-yellow-500 bg-opacity-10 shadow-[0px_3px_16px_rgba(0,0,0,0.07)]'>
                    4,567 people rated
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-center text-xs font-semibold w-[32%]'>
                <div className='flex flex-col px-2 py-3 w-full bg-yellow-50 rounded-sm border border-solid border-slate-400 border-opacity-30 shadow-[0px_3px_16px_rgba(0,0,0,0.07)]'>
                  <div className='relative mx-auto'>
                    <img
                      alt=''
                      className='self-center w-10 h-10 rounded-full border-4 border-blue-200 border-solid aspect-[0.7]'
                      loading='lazy'
                      srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&'
                    />
                    <img
                      alt=''
                      className='aspect-[0.7] w-10 absolute top-2'
                      loading='lazy'
                      src={BADGE}
                    />
                    <span className='text-[9px] flex items-center text-white z-10 absolute top-6 text-center left-2'>
                      <BsStarFill className='mr-1' /> 5.0
                    </span>
                  </div>
                  <div className='mt-3.5 text-xs pl-2 font-bold text-sky-950'>
                    John Tommy
                  </div>
                  <div className='text-gray-400 text-[9px] leading-[150%] pl-2'>
                    Lagos, Nigeria
                  </div>
                  <div className='w-full justify-center text-[9px] p-1.5 mt-2.5 text-center text-amber-500 rounded-sm bg-yellow-500 bg-opacity-10 shadow-[0px_3px_16px_rgba(0,0,0,0.07)]'>
                    4,567 people rated
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-center text-xs font-semibold w-[32%]'>
                <div className='flex flex-col px-2 py-3 w-full bg-yellow-50 rounded-sm border border-solid border-slate-400 border-opacity-30 shadow-[0px_3px_16px_rgba(0,0,0,0.07)]'>
                  <div className='relative mx-auto'>
                    <img
                      alt=''
                      className='self-center w-10 h-10 rounded-full border-4 border-blue-200 border-solid aspect-[0.7]'
                      loading='lazy'
                      srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca496bc3eed7d50df64d275ebcb0fde8d58918216467de0b4615ea3ca82ca179?apiKey=fb715a6bf2504d5fac6b5a06e4022d85&'
                    />
                    <img
                      alt=''
                      className='aspect-[0.7] w-10 absolute top-2'
                      loading='lazy'
                      src={BADGE}
                    />
                    <span className='text-[9px] flex items-center text-white z-10 absolute top-6 text-center left-2'>
                      <BsStarFill className='mr-1' /> 5.0
                    </span>
                  </div>
                  <div className='mt-3.5 text-xs pl-2 font-bold text-sky-950'>
                    John Tommy
                  </div>
                  <div className='text-gray-400 text-[9px] leading-[150%] pl-2'>
                    Lagos, Nigeria
                  </div>
                  <div className='w-full justify-center text-[9px] p-1.5 mt-2.5 text-center text-amber-500 rounded-sm bg-yellow-500 bg-opacity-10 shadow-[0px_3px_16px_rgba(0,0,0,0.07)]'>
                    4,567 people rated
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default Dashboard;
