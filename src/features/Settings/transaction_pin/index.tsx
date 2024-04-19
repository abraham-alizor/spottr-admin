import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

import SettingsLayout from "@/features/Settings/SettingsLayout";
import ButtonV2 from "@/shared/components/buttonV2";

function TransactionPin() {
  const [transactionPin, setTransactionPin] = useState("");
  const [popup, setPopUp] = useState(false);
  const disbledButton = transactionPin === "";
  return (
    <SettingsLayout handleclick={() => {}} routeBtn={false}>
      <div className='flex flex-col items-end'>
        <ButtonV2
          btnStyle={`mt-5  py-1 px-7  rounded-md ${disbledButton ? "  bg-[#DADADA]" : "bg-brand"}`}
          disabled={disbledButton}
          handleClick={() => setPopUp(true)}
          textStyle={`text-sm ${disbledButton ? "text-[#C4C4C4]" : "text-white"}`}
          title='Done'
        />
        <div className='flex flex-col gap-4 w-full'>
          <span className='font-normal text-xs text-darkblue'>
            Set Transaction PIN
          </span>
          <form action='' className='flex flex-col gap-4 mt-5'>
            <span className='text-2xl text-darkblue font-medium'>
              Transaction PIN
            </span>
            <input
              className='bg-[#F8F8F8] w-full px-5 py-4 rounded-md outline-none'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setTransactionPin(event.target.value)
              }
              placeholder='*     *     *      *'
              type='password'
              value={transactionPin}
            />
            <div className='flex self-center text-center mt-3 text-sm text-[#3B3B3BB2] opacity-70'>
              <span>
                Kindly input the transaction PIN you registered while setting up
                your profile
              </span>
            </div>
          </form>
        </div>
      </div>
      {popup && (
        <div className='w-full bg-[#39B54A] flex justify-between items-center gap-2 px-4 py-3 text-[10px] text-white rounded-sm mt-[15rem]'>
          <span>You can now make use of your transaction pin</span>
          <FaTimes className='cursor-pointer' onClick={() => setPopUp(false)} />
        </div>
      )}
    </SettingsLayout>
  );
}

export default TransactionPin;
