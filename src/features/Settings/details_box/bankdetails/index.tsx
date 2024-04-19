/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

import { BanksData } from "@/fake_data";
import ButtonV2 from "@/shared/components/buttonV2";
import DropDownV3 from "@/shared/components/dropdownV3";
import ToggleSwitch from "@/shared/components/toggle_switch";
import { BLUE_ARROW_DOWN } from "@/utils/Exports";

function BanksDetails() {
  const [dropdown, setDropDown] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");
  const [popup, setPopup] = useState(false);
  const [acctNo, setAcctNo] = useState("");

  const disbledButton = acctNo === "" || selectedBank === "";
  return (
    <main className='relative'>
      <div className='flex flex-col items-end'>
        <ButtonV2
          btnStyle={`mt-5  py-2 px-6  rounded-md ${disbledButton ? "  bg-[#DADADA]" : "bg-brand"}`}
          disabled={disbledButton}
          handleClick={() => setPopup(true)}
          textStyle={`text-sm ${disbledButton ? "text-[#C4C4C4]" : "text-white"}`}
          title='Done'
        />
        <div className='mt-5 flex gap-[14px] items-center'>
          <span className='text-xl font-medium text-darkblue'>
            Enter Bank Details
          </span>
          <div className='flex items-center'>
            <span className='text-xs text-darkblue'>Set default</span>
            <ToggleSwitch />
          </div>
        </div>
      </div>

      <div className='mt-3 flex flex-col gap-3 relative'>
        <div>
          <input
            className='bg-[#F8F8F8] w-full outline-none placeholder:text-[#C4C4C4] placeholder:text-sm px-3 py-3 rounded-md'
            onChange={(event_: React.ChangeEvent<HTMLInputElement>) =>
              setAcctNo(event_.target.value)
            }
            placeholder='03627839332'
            type='phone'
            value={acctNo}
          />
        </div>
        <div
          className='w-full bg-[#ECF7FF]  flex p-3 justify-between rounded-md cursor-pointer'
          onClick={() => setDropDown((previous) => !previous)}
        >
          <span className='text-[#C4C4C4]'>{`${selectedBank || " Select bank"} `}</span>
          <img alt='' src={BLUE_ARROW_DOWN} />
        </div>
        <DropDownV3
          classname='top-[6rem]'
          data={BanksData}
          isClose={() => setDropDown(false)}
          isOpen={dropdown}
          setSelected={setSelectedBank}
          width='w-full'
        />

        <div className='flex gap-2 items-center justify-center'>
          <span className='text-lightgrey'>Beneficiary:</span>
          <span className='text-brand font-medium'> Adewale Adedamola </span>
        </div>
      </div>
      {popup && (
        <div className='w-full bg-[#39B54A] flex justify-center items-center gap-2 px-2 py-3 text-xs text-white rounded-sm mt-[15rem]'>
          <span>You bank details have been saved succesfully</span>
          <FaTimes className='cursor-pointer' onClick={() => setPopup(false)} />
        </div>
      )}
    </main>
  );
}

export default BanksDetails;
