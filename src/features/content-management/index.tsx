/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Transition } from "@headlessui/react";
import React, { useState } from "react";

import {
  Informationals,
  Onboarding,
  TermsAndCondition,
  Trays,
} from "@/features/content-management/contents";
import ButtonV2 from "@/shared/components/buttonV2";
import SubHeaders from "@/shared/components/subheaders";
import {
  ALERT_ICON,
  DARK_BLUE_ARROW,
  GO_BACK,
  LIGHT_BLUE_ARROW,
  LINE,
  NIGERIA_FLAG,
  TASK_IMAGE,
} from "@/utils/Exports";

const contents = [
  {
    title: "Terms and Condition",
    component: <TermsAndCondition />,
  },
  {
    title: "Trays",
    component: <Trays />,
  },
  {
    title: "Informationals",
    component: <Informationals />,
  },
  {
    title: "Onboarding",
    component: <Onboarding />,
  },
];
const ContentManagement = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const [tipsTab, setTipsTab] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleTitleSelect = (title: string) => {
    setSelectedTab(title);

    const renderedConponent = contents.find(
      (item) => item.title === title,
    )?.component;
    // @ts-ignore
    setSelectedComponent(renderedConponent || null);
    setTipsTab(false);
  };
  return (
    <main className='mx-7 mt-7 mb-28'>
      <SubHeaders
        placeholder='tasks'
        route='/dashboard'
        title='Content Management'
      />
      <div className='border-b border-[#C2E0FF] w-[398px] pb-3 mt-6'>
        <span
          className={` px-5 pb-3 text-darkblue ${tipsTab ? "border-darkblue  border-b-2" : ""}  font-medium cursor-pointer`}
          onClick={() => setTipsTab(true)}
        >
          Tips and feedback
        </span>
      </div>
      <div className='flex justify-between mt-10'>
        <div>
          <div className='flex gap-5 items-center border-b w-[290px] border-[#E7E7E7] pb-4'>
            <div className='w-[31px] h-[31px] rounded-full bg-[#ECF7FF] flex justify-center items-center'>
              <span className='text-darkblue'>+</span>
            </div>
            <img alt='' src={LINE} />
            <span className='text-black text-opacity-70 text-sm'>Add new</span>
          </div>
          <div className='mt-5 flex flex-col gap-6'>
            {contents.map((cont_: any) => (
              <div
                className={`flex justify-between border-b cursor-pointer ${(tipsTab && cont_.title === "Profile setting instruction") || (selectedTab === cont_.title && !tipsTab) ? "border-[#3670D4] border-opacity-40" : ""} pb-3 px-1`}
                onClick={() => handleTitleSelect(cont_.title)}
              >
                <span
                  className={`font-medium  ${(tipsTab && cont_.title === "Profile setting instruction") || (selectedTab === cont_.title && !tipsTab) ? "text-[#3670D4]" : "text-darkblue"}`}
                  // @ts-ignore
                >
                  {cont_.title}
                </span>
                {(tipsTab && cont_.title === "Profile setting instruction") ||
                (selectedTab === cont_.title && !tipsTab) ? (
                  <img alt='' height={10} src={LIGHT_BLUE_ARROW} width={10} />
                ) : (
                  <img alt='' height={10} src={DARK_BLUE_ARROW} width={10} />
                )}
              </div>
            ))}
            <div
              className={`flex justify-between border-b cursor-pointer ${tipsTab ? "border-[#3670D4] border-opacity-40" : ""} pb-3 px-1`}
              onClick={() => setTipsTab(true)}
            >
              <span
                className={`font-medium  ${tipsTab ? "text-[#3670D4]" : "text-darkblue"}`}
                // @ts-ignore
              >
                Profile setting instruction
              </span>
              {tipsTab ? (
                <img alt='' height={10} src={LIGHT_BLUE_ARROW} width={10} />
              ) : (
                <img alt='' height={10} src={DARK_BLUE_ARROW} width={10} />
              )}
            </div>
          </div>
        </div>
        <Transition
          as='div'
          enter='transition-transform ease-out duration-300'
          enterFrom='translate-y-full'
          enterTo='translate-y-0'
          leave='transition-transform ease-in duration-200'
          leaveFrom='translate-y-0'
          leaveTo='translate-y-full'
          show={tipsTab || selectedComponent !== null}
        >
          {tipsTab ? (
            <div className='flex gap-10'>
              <div>
                <div className='w-[442px] h-[240px] bg-[#F8F8F8] rounded-md px-4 py-6'>
                  <div className='flex justify-between items-center mb-10'>
                    <span className='text-black font-medium text-sm'>
                      Tips:
                    </span>
                    <span className='text-darkblue font-medium text-sm'>
                      0/200
                    </span>
                  </div>
                  <span className='text-sm text-[#000000B2] '>
                    I’ve worked directly, indirectly with these brands Either
                    part time, full time, campaign, accelerator, branding or
                    product design
                  </span>
                </div>
                <ButtonV2
                  btnStyle='float-right mt-4'
                  handleClick={() => {}}
                  textStyle='text-darkblue font-medium'
                  title='Save'
                />
              </div>
              <div>
                <div className='w-[350px] h-full bg-white border-[6px] border-[#D0D0D0] rounded-xl px-10 py-10'>
                  <div className='flex gap-5'>
                    <img alt='' src={GO_BACK} />
                    <span className='text-sm text-darkblue font-normal'>
                      Profile Settings
                    </span>
                  </div>
                  <div className='flex flex-col items-end gap-10'>
                    <div>
                      <ButtonV2
                        btnStyle='float-right mt-4'
                        handleClick={() => {}}
                        textStyle='text-darkblue font-medium'
                        title='Finish'
                      />
                    </div>
                    <div className='flex justify-start gap-4'>
                      <ButtonV2
                        btnStyle='bg-darkblue px-2 pb-1 rounded-md'
                        handleClick={() => {}}
                        textStyle='text-white font-normal text-[10px]'
                        title='Contact'
                      />
                      <ButtonV2
                        btnStyle='border rounded-md px-2 pb-1 '
                        handleClick={() => {}}
                        textStyle='text-darkblue font-normal text-[10px]'
                        title='Customize Profile'
                      />
                      <ButtonV2
                        btnStyle='border rounded-md px-2 pb-1'
                        handleClick={() => {}}
                        textStyle='text-darkblue font-normal text-[10px]'
                        title='Verification'
                      />
                    </div>
                  </div>
                  <div
                    className='flex justify-center items-center flex-col mt-6 gap-3'
                    onClick={() =>
                      // @ts-ignore
                      document.querySelector(".image-input").click()
                    }
                  >
                    <img alt='' className='rounded-full' src={TASK_IMAGE} />
                    <span className='text-darkblue text-xs'>
                      Upload new photo
                    </span>
                    <input
                      accept='*/image/*'
                      className='image-input'
                      hidden
                      type='file'
                    />
                  </div>
                  <form action='' className='mt-7'>
                    <span className='text-xs font-medium'>Contact Details</span>
                    <div className='flex flex-col gap-4 mt-4'>
                      <input
                        className='bg-[#F8F8F8] outline-none w-full h-full py-3 px-3 rounded-md placeholder:text-xs placeholder:text-[#C4C4C4]'
                        placeholder='Abdul'
                        type='text'
                      />
                      <input
                        className='bg-[#F8F8F8] outline-none w-full h-full py-3 px-3 rounded-md placeholder:text-xs placeholder:text-[#C4C4C4]'
                        placeholder='Mashir'
                        type='text'
                      />
                      <div className=' bg-[#F8F8F8]  w-full h-full py-3 px-3 rounded-md'>
                        <input
                          className='bg-transparent outline-none placeholder:text-xs placeholder:text-[#C4C4C4]'
                          placeholder='adedamolamoses@gmail.com'
                          type='text'
                        />
                        <span className='text-xs text-[#5FC146] font-medium'>
                          verified
                        </span>
                      </div>
                      <div className='flex justify-between'>
                        <div className='flex items-center bg-[#F8F8F8] w-[170.42px] px-2 rounded-md gap-2'>
                          <img alt='' src={NIGERIA_FLAG} />
                          <span className='text-xs font-medium'>+234</span>
                          <input
                            className='bg-transparent outline-none w-full text-xs placeholder:text-xs placeholder:text-[#C4C4C4]'
                            placeholder='8172378079'
                            type='text'
                          />
                        </div>
                        <ButtonV2
                          btnStyle=''
                          handleClick={() => {}}
                          textStyle='text-[7px] text-[#FF4B3E]'
                          title='verify now'
                        />
                      </div>
                    </div>
                    <div className='mt-7 flex items-start gap-2 '>
                      <img alt='' src={ALERT_ICON} />
                      <span className='text-[12px] text-darkblue text-start'>
                        Type in your correct name and use a good photo, make
                        sure it is clear so that it will increases your chance
                        of getting good gigs
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            selectedComponent
          )}
        </Transition>
      </div>
    </main>
  );
};

export default ContentManagement;
