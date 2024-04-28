/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";

import { Adsdata, highlitedata, productsListed } from "@/fake_data";
import Barcharts from "@/shared/components/Barchart";
import ButtonV2 from "@/shared/components/buttonV2";
import Modal from "@/shared/components/Modal";
import ToggleSwitch from "@/shared/components/toggle_switch";
import {
  BADGE,
  BLUE_ARROW_LEFT,
  CALL_ICON,
  COMING_DOWN,
  EMAIL_ICON,
  GLOWY_RING,
  GOING_UP,
  GOOGLE,
  MESSAGE_ICON,
  NIGERIA_FLAG,
  RED_ARROW,
  TAG,
  USER_VERIFIED,
} from "@/utils/Exports";

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
];
function Profile() {
  const [modal, setModal] = useState(false);
  const data = useLocation()?.state.data;
  return (
    <main>
      <div className='flex justify-between items-center'>
        <div className='w-[550px] pr-6'>
          <div className='flex gap-5 mx-3'>
            <div className='flex flex-col items-center'>
              <div className='relative'>
                <img
                  alt=''
                  className='border-[3.5px]  rounded-full border-[#C2E0FF] w-14 h-14'
                  src={data.img}
                />
                <img
                  alt=''
                  className='absolute top-0 right-0 w-4 h-4'
                  src={USER_VERIFIED}
                />
              </div>
              <span className='text-[22px] font-[700] text-darkblue'>C</span>
            </div>
            <div>
              <div className='flex  items-center gap-4'>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col'>
                    <span className='font-[700] text-darkblue text-[22px]'>
                      {data.name}
                    </span>
                    <span className='text-[12px] font-semibold text-lightgrey'>
                      {data.username}
                    </span>
                  </div>
                  <span className='font-[700] text-[11px] text-black text-opacity-[70%]'>
                    Brief Info:
                  </span>
                </div>
                <div className='relative flex flex-col items-center mb-3'>
                  <img alt='' className='w-10 h-10' src={BADGE} />
                  <img alt='' src={GLOWY_RING} />
                  <div className='flex gap-1 text-[8.21px] items-center text-white top-[10.5px] right-[6px] absolute'>
                    <BsStarFill />
                    <span>4.5</span>
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='w-[83px] h-[23px] bg-[#E3E8F082] bg-opacity-[51%] rounded-sm flex gap-1 items-center px-1'>
                    <img alt='' height={7} src={TAG} width={7} />
                    <span className='text-[8px] text-darkblue font-semibold'>
                      5,786 items sold
                    </span>
                  </div>
                  <div className='w-[83px] h-[23px] font-semibold text-[#E09B09] pl-2 py-1 text-[8px] bg-[#FFB21126] bg-opacity-[15%] rounded-sm'>
                    <span> 4,567 people rated</span>
                  </div>
                  <div className='w-[83px] h-[23px] text-[#701DA0] text-[8px] py-1 px-4 bg-[#701DA026] bg-opacity-[15%] rounded-sm'>
                    <span>37H9EFEFE</span>
                  </div>
                </div>
              </div>
              <div className='max-w-[380px] text-[12px] mt-2 font-normal text-lightgrey'>
                <span>
                  I’ve worked directly, indirectly with these brands Either part
                  time, full time, campaign, accelerator, branding or product
                  design)
                </span>
              </div>
              <div className='flex items-center gap-2 mt-7'>
                <ButtonV2
                  btnStyle='w-full h-[41px] justify-center border border-[#F6F6F6]  bg-[#ECF7FF] flex flex-row-reverse gap-2 items-center rounded-md'
                  handleClick={() => {}}
                  image={CALL_ICON}
                  textStyle='text-sm text-darkblue'
                  title='Call'
                />
                <ButtonV2
                  btnStyle='w-full h-[41px] justify-center border border-[#F6F6F6]  bg-[#ECF7FF] flex flex-row-reverse gap-2 items-center rounded-md'
                  handleClick={() => {}}
                  image={MESSAGE_ICON}
                  textStyle='text-sm text-darkblue'
                  title='Message'
                />

                <ButtonV2
                  btnStyle='w-full h-[41px] justify-center border border-[#F6F6F6]  bg-[#ECF7FF] flex flex-row-reverse gap-2 items-center rounded-md'
                  handleClick={() => {}}
                  image={EMAIL_ICON}
                  textStyle='text-sm text-darkblue'
                  title='Email'
                />
              </div>
              <div className='flex items-center gap-2 mt-7 border-b pb-3'>
                <div className='flex w-full flex-col items-center gap-2 '>
                  <span className='text-[14px] text-[#3B3B3BB2] text-opacity-[70%]'>
                    Membership
                  </span>
                  <span className='font-semibold text-[20px] text-darkblue'>
                    13
                  </span>
                </div>
                <div className='flex w-full flex-col items-center gap-2 '>
                  <span className='text-[14px] text-[#3B3B3BB2] text-opacity-[70%]'>
                    Lists
                  </span>
                  <span className='font-semibold text-[20px] text-darkblue'>
                    13
                  </span>
                </div>
                <div className='flex w-full flex-col items-center gap-2 '>
                  <span className='text-[14px] text-[#3B3B3BB2] text-opacity-[70%]'>
                    Products
                  </span>
                  <span className='font-semibold text-[20px] text-darkblue'>
                    13
                  </span>
                </div>
              </div>
              <div className='flex items-center gap-2 mt-7 border-b pb-3'>
                <div className='flex w-full flex-col items-center gap-2 '>
                  <span className='text-[14px] text-[#3B3B3BB2] text-opacity-[70%]'>
                    Check-in
                  </span>
                  <span className='font-semibold text-[20px] text-darkblue'>
                    13
                  </span>
                </div>
                <div className='flex w-full flex-col items-center gap-2 '>
                  <span className='text-[14px] text-[#3B3B3BB2] text-opacity-[70%]'>
                    Callouts
                  </span>
                  <span className='font-semibold text-[20px] text-darkblue'>
                    13
                  </span>
                </div>
                <div className='flex w-full flex-col items-center gap-2 '>
                  <span className='text-[14px] text-[#3B3B3BB2] text-opacity-[70%]'>
                    Tasks
                  </span>
                  <span className='font-semibold text-[20px] text-darkblue'>
                    13
                  </span>
                </div>
              </div>
              <div className='flex items-center justify-between gap-2 mt-7 border-b pb-3'>
                <div className='flex w-full flex-col items-center gap-2 '>
                  <span className='text-[14px] text-[#3B3B3BB2] text-opacity-[70%]'>
                    Country
                  </span>
                  <div className='flex gap-3 items-center'>
                    <img alt='' className='w-5 h-5' src={NIGERIA_FLAG} />
                    <span className='font-semibold text-[20px] text-darkblue'>
                      Nigeria
                    </span>
                  </div>
                </div>
                <div className='flex w-full flex-col items-center gap-2 '>
                  <span className='text-[14px] text-[#3B3B3BB2] text-opacity-[70%]'>
                    Login Type
                  </span>
                  <div className='flex gap-3 items-center'>
                    <img alt='' className='w-5 h-5' src={GOOGLE} />
                    <span className='font-[700] text-[20px] text-black'>
                      Google
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-around gap-2 mt-7 border-b pb-3 cursor-pointer'>
                <span className='text-[16px] font-[700] text-darkblue'>
                  Share Adbul’s profile
                </span>
                <img
                  alt=''
                  className='w-3 h-3 scale-x-[-1]'
                  src={BLUE_ARROW_LEFT}
                />
              </div>
            </div>
          </div>

          {/* end 1 */}
        </div>
        <div className='w-[400px] flex flex-col items-start'>
          <div className='flex flex-col items-start gap-2'>
            <span className='text-xs font-normal text-[#3B3B3BB2] text-opacity-[70%]'>
              {data.name.split(" ")[0]} sold 450 products in the month of March
              for <br /> N200,000, compared to February
            </span>
          </div>
          <div className='mr-8 mt-6'>
            <Barcharts data={barchartData} />

            <div className='flex gap-10'>
              <div className='flex gap-2 items-center'>
                <div className='rounded-full  w-[7px] h-[7px] bg-[#9EAECA]' />
                <span className='text-xs font-normal text-darkblue'>
                  Last month
                </span>
              </div>
              <div className='flex gap-2 items-center'>
                <div className='rounded-full w-[7px] h-[7px] bg-[#9EAECA]' />
                <span className='text-darkblue font-normal text-xs'>
                  This month
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2 mt-5'>
            <span className='text-[20px] font-semibold text-darkblue'>
              Performance metrics
            </span>
            <span className='text-xs font-normal text-[#3B3B3BB2] text-opacity-[70%]'>
              Stats compare to previous month
            </span>
          </div>
          <div className='grid grid-cols-3 mt-5 gap-7'>
            <div className='w-full flex flex-col gap-0 items-center'>
              <span className='text-[16px] font-semibold text-[#3B3B3BB2] text-opacity-[70%]'>
                Profile Visit
              </span>
              <span className='text-[45px] font-[700] text-darkblue'>495</span>
              <div className='flex items-center gap-1'>
                <img alt='' src={GOING_UP} />
                <span className='text-xs text-[#3B3B3BB2] text-opacity-[70%]'>
                  14%
                </span>
              </div>
            </div>
            <div className='w-full flex flex-col gap-0 items-center'>
              <span className='text-[16px] font-semibold text-[#3B3B3BB2] text-opacity-[70%]'>
                Requests in
              </span>
              <span className='text-[45px] font-[700] text-darkblue'>38</span>
              <div className='flex items-center gap-1'>
                <img alt='' src={GOING_UP} />
                <span className='text-xs text-[#3B3B3BB2] text-opacity-[70%]'>
                  78%
                </span>
              </div>
            </div>
            <div className='w-full flex flex-col gap-0 items-center'>
              <span className='text-[16px] font-semibold text-[#3B3B3BB2] text-opacity-[70%]'>
                Total revenue
              </span>
              <span className='text-[45px] font-[700] text-darkblue'>38</span>
              <div className='flex items-center gap-1'>
                <img alt='' src={GOING_UP} />
                <span className='text-xs text-[#3B3B3BB2] text-opacity-[70%]'>
                  78%
                </span>
              </div>
            </div>
            <div className='w-full flex flex-col gap-0 items-center'>
              <span className='text-[16px] font-semibold text-[#3B3B3BB2] text-opacity-[70%]'>
                Stores
              </span>
              <span className='text-[45px] font-[700] text-darkblue'>2</span>
              <div className='flex items-center gap-1'>
                <img alt='' src={COMING_DOWN} />
                <span className='text-xs text-[#3B3B3BB2] text-opacity-[70%]'>
                  87%
                </span>
              </div>
            </div>
            <div className='w-full flex flex-col gap-0 items-center'>
              <span className='text-[16px] font-semibold text-[#3B3B3BB2] text-opacity-[70%]'>
                Deals
              </span>
              <span className='text-[45px] font-[700] text-darkblue'>2</span>
              <div className='flex items-center gap-1'>
                <img alt='' src={COMING_DOWN} />
                <span className='text-xs text-[#3B3B3BB2] text-opacity-[70%]'>
                  87%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[350px] pl-3'>
          <div className='flex flex-col gap-6'>
            {highlitedata.map((data_) => (
              <div className='flex justify-between'>
                <div className='flex item-center  gap-6'>
                  <span className='text-[16px] text-[#3B3B3BB2] text-opacity-[70%] font-[700]'>
                    {data_.analysis}
                  </span>
                  <span
                    className={`text-xs mt-1 text-[#3B3B3BB2] text-opacity-[70%] ${data_.tags === "Top category" ? "" : "ml-5"} `}
                  >
                    {data_.tags}
                  </span>
                </div>
                <span
                  className={`${data_.percentage === "8" ? "text-[#39B54A]" : "text-[#3B3B3BB2] text-opacity-[70%]"} text-xs`}
                >
                  {data_.percentage}%
                </span>
              </div>
            ))}
          </div>
          <div className='flex flex-col gap-6 mt-8 border-b pb-3'>
            <span className='text-xl font-semibold text-darkblue'>Ads</span>

            {Adsdata.map((data_) => (
              <div className='flex justify-between'>
                <div className='flex item-center  gap-6'>
                  <span className='text-[16px] text-[#3B3B3BB2] text-opacity-[70%] font-[700]'>
                    {data_.analysis}
                  </span>
                  <span
                    className={`text-xs mt-1 text-[#3B3B3BB2] text-opacity-[70%] ${data_.id === "1" ? "" : "ml-5"} `}
                  >
                    {data_.tags}
                  </span>
                </div>
                <span
                  className={`${data_.percentage === "8" ? "text-[#39B54A]" : "text-[#3B3B3BB2] text-opacity-[70%]"} text-xs`}
                >
                  {data_.percentage}%
                </span>
              </div>
            ))}
          </div>
          <div
            className='flex justify-between py-3 items-center border-b cursor-pointer'
            onClick={() => setModal(true)}
          >
            <span className='text-[16px] font-[700] text-darkblue'>
              See Products Posted
            </span>
            <img
              alt=''
              className='scale-x-[-1] w-4 h-4'
              src={BLUE_ARROW_LEFT}
            />
          </div>
          <div className='flex justify-between py-3 items-center border-b'>
            <span className='text-[16px] font-[700] text-branded'>
              Blacklist this user
            </span>
            <img alt='' className=' w-4 h-4' src={RED_ARROW} />
          </div>
        </div>
      </div>
      <Modal
        edges='rounded-sm '
        isClose={() => setModal(false)}
        isOpen={modal}
        maxWidth='w-[599px]'
      >
        <div className='flex flex-col gap-6 px-7'>
          {productsListed.map((data_) => (
            <div className='border-b-2 border-[#E7E7E7] pb-3 flex justify-between'>
              <div className='flex gap-3 items-center'>
                <div>
                  <img
                    alt=''
                    className='w-16 h-16 rounded-full border-[4.37px] border-[#C2E0FF]'
                    src={data_.img}
                  />
                </div>
                <div className='flex flex-col items-start'>
                  <span className='font-normal text-[20px] '>{data_.name}</span>
                  <span className='text-[#C4C4C4] text-[16px] font-normal'>
                    {data_.username}
                  </span>
                </div>
              </div>
              <div className='flex flex-col items-end '>
                <ToggleSwitch />
                <div className='flex items-center gap-4'>
                  <span className='text-[14px] text-lightgrey font-semibold'>
                    No of products:
                  </span>
                  <span className='text-[14px] text-lightgrey font-normal'>
                    10
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </main>
  );
}

export default Profile;
