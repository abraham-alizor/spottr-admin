/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import DetailsBox from "@/features/Settings/details_box";
import PasswordBox from "@/features/Settings/password_box";
import TransactionPin from "@/features/Settings/transaction_pin";
import ButtonV2 from "@/shared/components/buttonV2";
import CurrencyBox from "@/shared/components/currencybox";
import ToggleSwitch from "@/shared/components/toggle_switch";
import {
  BLUE_ARROW_DOWN,
  BLUE_ARROW_LEFT,
  CHAT_ICON,
  GO_BACK,
  ROUND_BLUE,
  SEARCH_ICON,
  USER_REQUEST_ICON,
  WALLET_ACCT,
  WHITE_PLUS,
} from "@/utils/Exports";

export const currencyLists = [
  {
    id: "1",
    label: "NGN",
  },
  {
    id: "2",
    label: "USD",
  },
  {
    id: "3",
    label: "ZAR",
  },
  {
    id: "4",
    label: "GBP",
  },
];
function Settings() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null,
  );

  const [SelectedCurrency, setSelectedCurrency] = useState("NGN");

  const handleSpanClick = (component: string) => {
    setSelectedComponent(component);
  };
  return (
    <main className='bg-[#fbfcfe] h-full w-[100vw] py-10 px-24'>
      <div className='flex justify-between items-center'>
        {/* <div className='bg-white w-[30px] h-[30px] rounded-full shadow-md flex justify-center items-center p-[0.45rem]'>
          <img alt='' src={BLUE_BARS} />
        </div> */}
        <div className='flex gap-6'>
          <div className='w-[262px] bg-white flex items-center justify-between h-[44px] px-3 border-[0.68px] border-[#E1EFFB]'>
            <input
              className='bg-transparent outline-none placeholder:text-sm placeholder:text-[#929AA7]'
              placeholder='Type a keyword'
              type='search'
            />
            <img alt='' src={SEARCH_ICON} />
          </div>
          <div className='flex gap-7 items-center'>
            <div className='flex flex-col items-center'>
              <div className='w-[19.63px] h-[19.63px] rounded-full border-4 border-darkblue flex items-center justify-center '>
                <img alt='' src={ROUND_BLUE} />
              </div>

              <span className='text-sm font-semibold text-darkblue'>
                Discover
              </span>
            </div>
            <div className='flex flex-col items-center'>
              <img alt='' height={20} src={USER_REQUEST_ICON} width={20} />
              <span className='text-sm font-semibold text-darkblue'>
                Request
              </span>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <img alt='' height={20} src={WALLET_ACCT} width={20} />
              <span className='text-sm font-semibold text-darkblue'>
                Wallet
              </span>
            </div>
          </div>
        </div>
        <div className='flex  items-center gap-8 mr-6'>
          <FaBell className='text-xl text-brand' />
          <div className='flex items-center gap-3'>
            <img alt='' src={CHAT_ICON} />
            <span className='text-brand text-sm font-medium'>Messages</span>
          </div>
          <div>
            <ButtonV2
              btnStyle='bg-brand flex gap-2 flex-row-reverse items-center py-2 px-2 rounded-md '
              handleClick={() => {}}
              image={WHITE_PLUS}
              textStyle='text-white text-xs'
              title='Add new'
            />
          </div>
        </div>
      </div>
      <div className='flex gap-6 justify-center mt-6'>
        <div className='ml-12 flex flex-col gap-6 '>
          <button
            className='flex gap-6 items-center'
            onClick={() => navigate("/dashboard")}
            type='button'
          >
            <img alt='back' height={15} src={GO_BACK} width={15} />
            <span className='text-sm text-darkblue font-medium'>Go back</span>
          </button>

          <div className='w-[420px] h-[700px]  bg-white shadow-custom rounded-sm py-9 px-10 relative'>
            <div className='max-h-[650px] overflow-y-scroll flex flex-col gap-7 '>
              <div>
                <span className='text-[10px] font-medium'>Preferences</span>
                <div className='flex justify-between mt-4 border-b pb-3'>
                  <span className='text-sm text-darkblue font-medium'>
                    Set Currency
                  </span>
                  <div
                    className='flex items-center gap-1 cursor-pointer'
                    onClick={() => setMenu((previous) => !previous)}
                  >
                    <span className='text-xs text-brand'>
                      {SelectedCurrency}
                    </span>
                    <img alt='' src={BLUE_ARROW_DOWN} />
                  </div>
                  <CurrencyBox
                    close={() => setMenu(false)}
                    data={currencyLists}
                    open={menu}
                    setSelected={setSelectedCurrency}
                  />
                </div>
                <div className='flex flex-col gap-8 mt-3 border-b pb-3'>
                  <div className='flex justify-between'>
                    <span className='text-sm text-darkblue font-medium'>
                      Push Notifications
                    </span>
                    <ToggleSwitch />
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-sm text-darkblue font-medium'>
                      Email Notifications
                    </span>
                    <ToggleSwitch />
                  </div>
                </div>
                <div className='flex flex-col gap-8 mt-3 border-b pb-3'>
                  <div className='flex justify-between'>
                    <span className='text-sm text-darkblue font-medium'>
                      Sounds
                    </span>
                    <ToggleSwitch />
                  </div>
                  <div className='flex justify-between items-center cursor-pointer'>
                    <span className='text-sm text-darkblue font-medium'>
                      Manage brands
                    </span>
                    <img
                      alt=''
                      className='scale-x-[-1] mr-3'
                      height={20}
                      src={BLUE_ARROW_LEFT}
                      width={20}
                    />
                  </div>
                </div>
                <div className='flex flex-col mt-3 border-b pb-3'>
                  <div className='flex justify-between items-center cursor-pointer'>
                    <div className='flex gap-10 items-center '>
                      <span className='text-sm text-darkblue font-medium'>
                        Subscription
                      </span>
                      <span className='text-[10px] text-[#AD3923C7] opacity-75 bg-[#E9776194] bg-opacity-[59.04%] py-[1px] px-[4px] rounded-sm'>
                        Basic
                      </span>
                    </div>
                    <img
                      alt=''
                      className='scale-x-[-1] mr-3'
                      height={20}
                      src={BLUE_ARROW_LEFT}
                      width={20}
                    />
                  </div>
                </div>
              </div>
              <div>
                <span className='text-[10px] font-medium'>Wallet</span>
                <div
                  className='flex justify-between items-center mt-3 border-b pb-3 cursor-pointer'
                  onClick={() => handleSpanClick("details-box")}
                >
                  <span className='text-sm text-darkblue font-medium'>
                    Wallet Settings
                  </span>
                  <img
                    alt=''
                    className='scale-x-[-1] mr-3'
                    height={20}
                    src={BLUE_ARROW_LEFT}
                    width={20}
                  />
                </div>
              </div>
              <div className='flex flex-col gap-5 mt-3 border-b pb-3 '>
                <span className='font-medium text-[10px] '>Security</span>
                <div className='flex flex-col gap-8 '>
                  <div
                    className='flex justify-between items-center cursor-pointer'
                    onClick={() => handleSpanClick("password-box")}
                  >
                    <span className='text-sm text-darkblue font-medium'>
                      Password
                    </span>
                    <img
                      alt=''
                      className='scale-x-[-1] mr-3'
                      height={20}
                      src={BLUE_ARROW_LEFT}
                      width={20}
                    />
                  </div>
                  <div
                    className='flex justify-between items-center cursor-pointer'
                    onClick={() => handleSpanClick("transaction-pin")}
                  >
                    <span className='text-sm text-darkblue font-medium'>
                      Set Transaction PIN
                    </span>
                    <img
                      alt=''
                      className='scale-x-[-1] mr-3'
                      height={20}
                      src={BLUE_ARROW_LEFT}
                      width={20}
                    />
                  </div>
                </div>
              </div>
              <div className='flex justify-between items-center '>
                <span className='font-medium opacity-30 text-brand'>
                  Allow Biometrics
                </span>
                <ToggleSwitch />
              </div>
              <div className='flex flex-col gap-5 mt-3 border-b pb-3'>
                <span className='font-medium text-[10px] '>Data</span>
                <div className='flex flex-col gap-8'>
                  <div className='flex justify-between items-center cursor-pointer'>
                    <span className='text-sm text-darkblue font-medium'>
                      Dashboard Analysis
                    </span>
                    <img
                      alt=''
                      className='scale-x-[-1] mr-3'
                      height={20}
                      src={BLUE_ARROW_LEFT}
                      width={20}
                    />
                  </div>
                  <div className='flex justify-between items-center cursor-pointer'>
                    <span className='text-sm text-darkblue font-medium'>
                      Deactivate account
                    </span>
                    <img
                      alt=''
                      className='scale-x-[-1] mr-3'
                      height={20}
                      src={BLUE_ARROW_LEFT}
                      width={20}
                    />
                  </div>
                </div>
              </div>
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
          show={selectedComponent !== null}
        >
          {selectedComponent === "password-box" ? (
            <PasswordBox />
          ) : selectedComponent === "details-box" ? (
            <DetailsBox />
          ) : selectedComponent === "transaction-pin" ? (
            <TransactionPin />
          ) : null}
        </Transition>
      </div>
    </main>
  );
}

export default Settings;
