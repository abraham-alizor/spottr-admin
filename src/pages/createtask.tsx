/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";

import ButtonV2 from "@/shared/components/buttonV2";
import ModalV2 from "@/shared/components/modalV2";
import PageHeader from "@/shared/components/pageheader";
import SuccessModal from "@/shared/components/sucessmodal";
import NonLinearSlider from "@/shared/slider";
import {
  GRAY_DOT,
  GRAY_POLYGON,
  MAP_PIC,
  POLYGON,
  RING_BLUE,
  TASK_IMAGE,
} from "@/utils/Exports";

const CreateTask = () => {
  const [modal, setModal] = useState(false);
  const [sucess, setSucess] = useState(true);
  return (
    <main className='mx-6 mt-5 mb-64'>
      <PageHeader title='Tasks' />
      <div className='flex gap-5  mt-5'>
        <div className='relative max-w-[350px] h-full'>
          <img alt='' height={350} src={MAP_PIC} width={350} />
          <div className='bg-white w-[21vw] h-[20vh] shadow-lg absolute right-7 top-0 mt-[8rem] rounded-md p-4 '>
            <div className='border-b py-3'>
              <div className='flex gap-2'>
                <img alt='' height={30} src={RING_BLUE} width={30} />
                <div className='flex flex-col gap-1'>
                  <span className='text-sm font-medium'>Camry</span>
                  <span className='text-[10px] text-lightgrey'>Searches</span>
                </div>
              </div>
              <div className='absolute right-3 -top-3 flex flex-col justify-center items-center'>
                <img
                  alt=''
                  className='rounded-full border-4 border-[#C2E0FF]'
                  height={50}
                  src={TASK_IMAGE}
                  width={50}
                />
                <span className='text-xs'>Godstime John</span>
              </div>
            </div>
            <div className='flex gap-1 mt-1 items-center'>
              <span className='text-[10px] text-lightgrey'>Lagos, Nigeria</span>
              <img alt='' height={5} src={GRAY_DOT} width={5} />

              <span className='text-[10px] text-lightgrey'>
                03 Aug 2020 : 01:05PM
              </span>

              <span className='text-darkblue text-[10px] bg-[#274B893D] p-1 ml-4 rounded-md'>
                Accepted
              </span>
            </div>
          </div>
          <div className='mt-36 flex justify-center items-center flex-col'>
            <div className='flex items-center'>
              <span className='text-3xl text-darkblue font-medium'>
                N4,800,000
              </span>
              <span className='text-sm text-lightgrey'>/ Kg</span>
            </div>
            <div className='mt-6'>
              <span className='text-xs font-medium'>Description:</span>
              <p className='mt-7 text-sm text-lightgrey'>
                For regular goods for good exchange, the exchange area shows a
                list of goods that have been indicated for trading and then any
                user who has a new good to be traded for another comes to the
                exchange and indicates their good.
              </p>
            </div>
          </div>
        </div>
        <div className='bg-white border border-[#E1EFFB] w-full h-full p-7 rounded-md'>
          <form action='' className='flex flex-col gap-7'>
            <div className='flex flex-col gap-6'>
              <label className='text-xs text-darkblue' htmlFor='text'>
                Task Title
              </label>
              <input
                className='w-full h-[54px] bg-[#F8F8F8] px-3 rounded-md outline-none placeholder:text-lg placeholder:text-[#C4C4C4]'
                placeholder='Type a good name'
                type='text'
              />
            </div>

            <span>
              Use something quite Straightforward to help your users find you
              quickier. E.g: PlayStation 3
            </span>
            <div className='mt-6 flex flex-col gap-6'>
              <label className='flex justify-between text-sm text-darkblue'>
                <span>Instructions/Descriptions</span>
                <span>0/500</span>
              </label>
              <textarea
                className='outline-none bg-[#F8F8F8] w-full p-5 placeholder:text-lg placeholder:text-[#C4C4C4] rounded-md'
                cols={30}
                name=''
                placeholder='Write something...'
                rows={10}
              />
            </div>

            <span>
              Make sure you are descriptive and detailed as it assure trust with
              users
            </span>
          </form>
        </div>
        <div className='bg-white border border-[#E1EFFB] w-full p-7 rounded-md flex flex-col gap-6 '>
          <span className='text-xs text-darkblue'>Input task reward fee</span>
          <div className='mt-6 flex justify-center items-center flex-col  gap-10'>
            <div className='flex justify-center items-end  gap-5'>
              <span className='text-6xl'>0</span>
              <div className='flex items-center gap-1'>
                <span className='font-medium'>susd</span>
                <img alt='' height={8} src={POLYGON} width={8} />
              </div>
            </div>
            <div>
              <button
                className='px-5 rounded-md text-sm bg-[#E1EFFB47] bg-opacity-15 py-1 flex gap-4 border items-center'
                type='button'
              >
                <span>/ day</span>
                <img alt='arrow_down' height={10} src={POLYGON} width={10} />
              </button>
            </div>
          </div>
          <div>
            <div className='flex justify-between  text-sm text-darkblue font-medium'>
              <span>Complete Task info</span>
              <span>Cancel</span>
            </div>
            <div className='mt-5 gap-4 flex flex-col'>
              <div className='bg-[#ECF7FF] w-full flex justify-between p-4 rounded-md'>
                <span className='text-[#C4C4C4]'>Task Type</span>
                <img alt='' height={10} src={GRAY_POLYGON} width={10} />
              </div>
              <div className='bg-[#ECF7FF] w-full flex justify-between p-4 rounded-md'>
                <span className='text-[#C4C4C4]'>Set max participant</span>
                <img alt='' height={10} src={GRAY_POLYGON} width={10} />
              </div>
              <div className='bg-[#ECF7FF] w-full flex justify-between p-4 rounded-md'>
                <span className='text-[#C4C4C4]'>Set Location</span>
                <img alt='' height={10} src={GRAY_POLYGON} width={10} />
              </div>
            </div>
            <div className='mt-2'>
              <span className='text-sm font-medium text-darkblue '>
                For how many days?
              </span>
              <div className='flex justify-center items-center mt-7'>
                <NonLinearSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='float-end my-6 flex gap-4'>
        <ButtonV2
          btnStyle='border border-[#3670D4] rounded-md py-3 px-6  w-[8vw]'
          handleClick={() => {}}
          icon={undefined}
          iconStyle=''
          textStyle='text-darkblue'
          title='Cancel'
        />
        <ButtonV2
          btnStyle='bg-darkblue  rounded-md py-3 px-6 w-[8vw]'
          handleClick={() => setModal(true)}
          icon={undefined}
          iconStyle=''
          textStyle='text-white'
          title='Next'
        />
      </div>
      <ModalV2
        closeBtnColor=''
        isBTnTrue={false}
        isClose={() => setModal(false)}
        isOpen={modal}
        maxWidth='w-[330px]'
      >
        <div className='flex flex-col gap-5'>
          <span className='text-xl text-darkblue  '>Post Task Now?</span>
          <hr />
          <div>
            <span className='text-sm text-[#4C596F]'>
              Are you sure you want to post this ad to users to paritcipate?
            </span>
          </div>

          <div className='border-t flex'>
            <ButtonV2
              btnStyle='w-full'
              handleClick={() => setModal(false)}
              textStyle='text-darkblue font-medium'
              title='No'
            />
            <ButtonV2
              btnStyle='w-full bg-darkblue h-[7vh]'
              handleClick={() => {}}
              textStyle='text-white font-medium'
              title='Yes'
            />
          </div>
        </div>
      </ModalV2>

      <SuccessModal open={sucess} close={() => setSucess(false)} />
    </main>
  );
};

export default CreateTask;
