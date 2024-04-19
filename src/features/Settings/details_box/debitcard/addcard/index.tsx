import React, { useState } from "react";

import { useDebitQuery } from "@/context/useContext";
import ButtonV2 from "@/shared/components/buttonV2";
import ToggleSwitch from "@/shared/components/toggle_switch";
import { ALERT_ICON, DOUBLE_CIRCLE } from "@/utils/Exports";

function AddCard() {
  const { setAddDebitCard } = useDebitQuery();
  const [inputCVC, setInputCVC] = useState("");
  const [inputCardDate, setInputCardDate] = useState("");
  const [inputCardNo, setInputCardNo] = useState("");
  const disbledButton =
    inputCVC === "" || inputCardDate === "" || inputCardNo === "";
  return (
    <main>
      <div className='flex flex-col items-end'>
        <div>
          <ButtonV2
            btnStyle={`mt-5  py-2 px-6  rounded-md ${disbledButton ? "  bg-[#DADADA]" : "bg-brand"}`}
            disabled={disbledButton}
            handleClick={() => {}}
            textStyle={`text-sm ${disbledButton ? "text-[#C4C4C4]" : "text-white"}`}
            title='Done'
          />
        </div>
        <div className='flex gap-[5.7rem] items-center mt-6'>
          <span className='text-xl font-medium text-darkblue'>Add Card</span>
          <div className='flex items-center'>
            <span className='text-xs text-darkblue font-normal'>
              Set default
            </span>
            <ToggleSwitch />
          </div>
        </div>
      </div>
      <div className='mt-5 flex flex-col gap-3'>
        <div className='w-full h-full bg-[#F8F8F8] flex justify-between items-center py-3 px-3 rounded-md'>
          <input
            className='bg-transparent outline-none w-full  placeholder:text-[#C4C4C4]'
            onChange={(event_: React.ChangeEvent<HTMLInputElement>) =>
              setInputCardNo(event_.target.value)
            }
            placeholder='Card Number'
            type='text'
            value={inputCardNo}
          />
          <img alt='' src={DOUBLE_CIRCLE} />
        </div>
        <div className='flex gap-3 '>
          <input
            className='w-full px-3 rounded-md h-[54px] bg-[#F8F8F8] outline-none  placeholder:text-[#C4C4C4]'
            onChange={(event_: React.ChangeEvent<HTMLInputElement>) =>
              setInputCardDate(event_.target.value)
            }
            placeholder='MM-YY'
            type='text'
            value={inputCardDate}
          />
          <input
            className='w-full px-3 rounded-md h-[54px] bg-[#F8F8F8] outline-none  placeholder:text-[#C4C4C4]'
            onChange={(event_: React.ChangeEvent<HTMLInputElement>) =>
              setInputCVC(event_.target.value)
            }
            placeholder='CVC'
            type='text'
            value={inputCVC}
          />
        </div>
      </div>
      <div className='mt-12 flex flex-col gap-8'>
        <div className='flex items-start gap-3'>
          <img alt='' src={ALERT_ICON} />
          <p className='text-[10px] text-darkblue '>
            To test that you own this card, we will deduct N10 from your account
            and reverse it back to your bank account.
          </p>
        </div>
        <ButtonV2
          btnStyle='bg-darkblue w-full py-3 px-3 rounded-md '
          handleClick={() => setAddDebitCard(false)}
          textStyle='text-white'
          title='Cancel'
        />
      </div>
    </main>
  );
}

export default AddCard;
