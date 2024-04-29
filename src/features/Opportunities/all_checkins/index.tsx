/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

import { template } from "@/fake_data";
import CreateBox from "@/features/Opportunities/createbox";
import ButtonV2 from "@/shared/components/buttonV2";
import DeleteModal from "@/shared/components/deletemodal";
import SubNav from "@/shared/components/sub_nav";
import SubHeaders from "@/shared/components/subheaders";
import { BLUE_RIGHT_ARROW } from "@/utils/Exports";

const subnavlinks = [
  {
    label: "Active check-ins",
    state: "active-check-ins",
  },

  {
    label: "Expired check-ins",
    state: "expired-check-ins",
  },
];

function AllCheckins() {
  const [selected, setSelected] = useState("active-check-ins");
  const [onFocusInput, setOnFocusInput] = useState<number | null>(null);
  const inputsRef = [useRef(null), useRef(null), useRef(null)];
  const [modal, setModal] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handlekeydown = (
    event_: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (event_.key === "Enter" || event_.key === "Tab") {
      event_.preventDefault();

      const nextInput = index === inputsRef.length - 1 ? 0 : index + 1;
      // @ts-ignore
      inputsRef[nextInput].current?.focus();
    }
  };
  return (
    <main className='mx-8 mt-6 relative mb-20'>
      <SubHeaders
        placeholder='products'
        route='/opportunities'
        title='All check-ins'
      />
      <div className='mt-9 flex justify-between'>
        <div>
          <SubNav
            gutter='gap-[9rem]'
            handleSelected={setSelected}
            navLinks={subnavlinks}
            selected={selected}
            textsize='text-[11.1px]'
            textStyle='font-semibold'
          />
        </div>
        <div className=' flex gap-7'>
          <ButtonV2
            btnStyle='flex gap-6 items-center border border-[#C2E0FF] border-opacity-15 rounded-lg py-3 px-5'
            handleClick={() => setShowForm(true)}
            iconStyle='text-xs text-[#FF0000] ml-7'
            image={BLUE_RIGHT_ARROW}
            textStyle='text-xs text-[#3670D4] font-semibold'
            title='Create check-in'
          />
          <ButtonV2
            btnStyle='flex gap-6 items-center border border-branded  border-opacity-15 rounded-lg py-3 px-5'
            handleClick={() => setModal(true)}
            icon={<FaTimes />}
            iconStyle='text-[11.1px] text-branded ml-5'
            textStyle='text-[11.1px] text-[#FF4B3E] font-semibold'
            title='Delete check-in'
          />
        </div>
      </div>
      <div className='flex gap-10 items-start'>
        <div className='w-[650px] mt-8'>
          <div className='grid grid-cols-2 gap-3'>
            {template.map((data) => (
              <div className='w-[316px] h-[120px] px-2 py-3 bg-white rounded-sm shadow-blur flex gap-3'>
                <div>
                  <img alt='' src={data.img} />
                </div>
                <div>
                  <span className='text-[15.74px] font-bold text-[#061E48]'>
                    {data.title}
                  </span>
                  <div className='flex flex-col'>
                    <span className='text-[12.24px] font-bold text-[#1569FA]'>
                      {data.service}
                    </span>
                    <span className='text-[10.49px] text-[#061E48] font-semibold'>
                      {data.company}
                    </span>
                  </div>
                  <div className='flex gap-12 mt-5'>
                    <span className='text-xs text-[#AAB4C3] font-semibold'>
                      {data.location}
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
            ))}
          </div>
        </div>
        {showForm && (
          <CreateBox
            btntext='Launch check-in'
            handleclick={() => {}}
            title='Create check-in for Red tees'
          >
            <div className='flex flex-col items-center  gap-9 py-9 '>
              <div className='w-[332.08px] flex flex-col  '>
                {onFocusInput === 0 && (
                  <label
                    className='text-[12px] font-normal text-darkblue translate-y-0 opacity-100 transition-transform duration-300'
                    htmlFor='text'
                  >
                    Enter Quantity
                  </label>
                )}

                <input
                  className='border-b outline-none text-[12px] pb-3 text-[#00000061] text-opacity-[38%]'
                  onBlur={() => setOnFocusInput(null)}
                  onFocus={() => setOnFocusInput(0)}
                  onKeyDown={(event_) => handlekeydown(event_, 0)}
                  placeholder={onFocusInput === 0 ? "" : "Enter Quantity"}
                  ref={inputsRef[0]}
                  type='text'
                />
              </div>
              <div className='w-[332.08px] flex flex-col  '>
                {onFocusInput === 1 && (
                  <label
                    className='text-[12px] font-normal text-darkblue'
                    htmlFor='text'
                  >
                    Enter Amount
                  </label>
                )}

                <input
                  className='border-b outline-none text-[12px] pb-3 text-[#00000061] text-opacity-[38%]'
                  onBlur={() => setOnFocusInput(null)}
                  onFocus={() => setOnFocusInput(1)}
                  onKeyDown={(event_) => handlekeydown(event_, 1)}
                  placeholder={onFocusInput === 1 ? "" : "Enter Amount"}
                  ref={inputsRef[1]}
                  type='text'
                />
              </div>
              <select
                className='w-[332.08px] border-b outline-none text-[12px] pb-3 text-[#00000061] text-opacity-[38%]'
                id=''
                name=''
              >
                <option className=' ' value=''>
                  Enter Unit (hrs, kg, tonnes)
                </option>
                <option value=''>hello</option>
                <option value=''>hello</option>
              </select>
              <div className='w-[332.08px] flex flex-col  '>
                {onFocusInput === 2 && (
                  <label
                    className='text-[12px] font-normal text-darkblue'
                    htmlFor='text'
                  >
                    Enter Description
                  </label>
                )}

                <input
                  className='border-b outline-none text-[12px] pb-3 text-[#00000061] text-opacity-[38%]'
                  onBlur={() => setOnFocusInput(null)}
                  onFocus={() => setOnFocusInput(2)}
                  onKeyDown={(event_) => handlekeydown(event_, 2)}
                  placeholder={onFocusInput === 2 ? "" : " Enter Description"}
                  ref={inputsRef[2]}
                  type='text'
                />
              </div>
            </div>
          </CreateBox>
        )}
      </div>
      <DeleteModal
        close={() => setModal(false)}
        handleDelete={() => {}}
        open={modal}
        text='Do you really want to delete this check-in? This process cannot be undone.'
      />
    </main>
  );
}

export default AllCheckins;
