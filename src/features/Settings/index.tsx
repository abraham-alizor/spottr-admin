/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import Corporate from "@/features/Settings/corporate";
import DashboardAnalytics from "@/features/Settings/dashboard-analytics";
import DetailsBox from "@/features/Settings/details_box";
import PasswordBox from "@/features/Settings/password_box";
import TransactionPin from "@/features/Settings/transaction_pin";
import { GetFiatAllCurencies } from "@/services/fiat-currencies/fiat.service";
import { SettingsApi } from "@/services/settings/service";
import CurrencyBox from "@/shared/components/currencybox";
import ToggleSwitch from "@/shared/components/toggle_switch";
import { BLUE_ARROW_DOWN, BLUE_ARROW_LEFT, GO_BACK } from "@/utils/Exports";

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
    "corporate",
  );
  const [showDashboardAnalytics, setShowDashboardAnalytics] = useState(false);

  const [SelectedCurrency, setSelectedCurrency] = useState("NGN");
  const [pushNotifications, setPushNotication] = useState(false);
  const [allowBiometrics, setAllowBiometrics] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [sounds, setSounds] = useState(false);
  const [hideAmount, setHideAmount] = useState(false);

  const handleSpanClick = (component: string) => {
    setSelectedComponent(component);
  };

  const {
    data: currencies,
    isLoading,
    refetch,
  } = useQuery("currencies", GetFiatAllCurencies);

  const settingsMutation = useMutation(SettingsApi);

  const handleSettings = async (updatedSettings: any) => {
    try {
      const settingsData = {
        currency: SelectedCurrency,
        allowBiometrics,
        pushNotifications,
        emailNotifications,
        hideAmount,
        sounds,
        ...updatedSettings,
      };

      const response = await settingsMutation.mutateAsync(settingsData);
      if (response) {
        toast.success(response?.message);
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleToggle =
    (setter: React.Dispatch<React.SetStateAction<boolean>>, key: string) =>
    (event: React.ChangeEvent<HTMLInputElement>, value: boolean) => {
      setter(value);
      handleSettings({ [key]: value });
    };

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
    handleSettings(currency);
  };
  return (
    <main className=' h-full  mt-6 mb-[20rem]'>
      {/* <div className='flex justify-between items-center'>
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
      </div> */}
      <div className='flex flex-col '>
        <button
          className='flex gap-6 items-center ml-[15rem]'
          onClick={() => navigate("/dashboard")}
          type='button'
        >
          <img alt='back' height={15} src={GO_BACK} width={15} />
          <span className='text-sm text-darkblue font-medium'>Go back</span>
        </button>
        {showDashboardAnalytics ? (
          <DashboardAnalytics close={() => setShowDashboardAnalytics(false)} />
        ) : (
          <div className='flex gap-6 justify-center '>
            <div className='ml-12 flex flex-col gap-6 '>
              <div className='w-[420px] h-[700px] mt-[43.5px] bg-white shadow-custom rounded-sm py-9 px-10 relative'>
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
                        data={currencies}
                        open={menu}
                        setSelected={handleCurrencyChange}
                      />
                    </div>
                    <div className='flex flex-col gap-8 mt-3 border-b pb-3'>
                      <div className='flex justify-between'>
                        <span className='text-sm text-darkblue font-medium'>
                          Push Notifications
                        </span>
                        <ToggleSwitch
                          checked={pushNotifications}
                          onchange={handleToggle(
                            setPushNotication,
                            "pushNotifications",
                          )}
                        />
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-sm text-darkblue font-medium'>
                          Email Notifications
                        </span>
                        <ToggleSwitch
                          checked={emailNotifications}
                          onchange={handleToggle(
                            setEmailNotifications,
                            "emailNotifications",
                          )}
                        />
                      </div>
                    </div>
                    <div className='flex flex-col gap-8 mt-3 border-b pb-3'>
                      <div className='flex justify-between'>
                        <span className='text-sm text-darkblue font-medium'>
                          Sounds
                        </span>
                        <ToggleSwitch
                          checked={sounds}
                          onchange={handleToggle(setSounds, "sounds")}
                        />
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
                    <ToggleSwitch
                      checked={allowBiometrics}
                      onchange={handleToggle(
                        setAllowBiometrics,
                        "allowBiometrics",
                      )}
                    />
                  </div>
                  <div className='flex flex-col gap-5 mt-3 border-b pb-3'>
                    <span className='font-medium text-[10px] '>Data</span>
                    <div className='flex flex-col gap-8'>
                      <div
                        className='flex justify-between items-center cursor-pointer'
                        onClick={() => setShowDashboardAnalytics(true)}
                      >
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
              ) : selectedComponent === "corporate" ? (
                <Corporate />
              ) : null}
            </Transition>
          </div>
        )}
      </div>
    </main>
  );
}

export default Settings;
