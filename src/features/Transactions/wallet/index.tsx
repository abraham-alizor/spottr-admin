/* eslint-disable react/jsx-no-bind */
/* eslint-disable func-names */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import { FaArrowDown, FaArrowUp, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { deposit } from "@/fake_data";
import { dropdownLinks } from "@/features/Transactions";
import ButtonV2 from "@/shared/components/buttonV2";
import DropDownV2 from "@/shared/components/drop-down-2";
import TransactionsModals from "@/shared/components/Multimodals";
import PageHeader from "@/shared/components/pageheader";
import {
  BLUE_ARROW_DOWN,
  BLUE_BARS,
  CLIP_ICON,
  FUND_ICON,
  ROUND_STAR,
  WALLET,
  WITHDRAW_ICON,
} from "@/utils/Exports";

const Wallet = () => {
  const navigate = useNavigate();

  const [settlementModal, setsettlementModal] = useState(false);
  const [walletModal, setWalletModal] = useState(false);
  const [sendModal, setSendModal] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState("");
  const [setPinModal, setSetPinModal] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  const [inProgressModal, setInProgressModal] = useState(false);

  const handleProceed = () => {
    setsettlementModal(false);
    setWalletModal(true);
  };

  const handleSelectWalletType = (string_: string) => {
    setSelectedWallet(string_);
    if (string_) {
      setSendModal(true);
      setWalletModal(false);
    }
  };

  const handleBack = () => {
    if (sendModal) {
      setWalletModal(true);
      setSendModal(false);
    } else if (setPinModal) {
      setSetPinModal(false);
      setSendModal(true);
    } else if (inProgressModal) {
      setInProgressModal(false);
      navigate("/transactions/wallet");
    } else {
      setSendModal(false);
    }
  };

  const handleSend = () => {
    setSendModal(false);
    setSetPinModal(true);
  };

  const handleProccedToPayment = () => {
    setSetPinModal(false);
    setInProgressModal(true);
  };
  return (
    <main className='mx-8 mt-7 mb-28'>
      <div className='flex justify-between items-center relative'>
        <PageHeader
          isSubtitle
          route='/transactions'
          subtitle='Wallet'
          title='Transactions'
        />
        <div className='flex gap-7'>
          <div className='flex gap-3'>
            <img alt='' src={ROUND_STAR} />
            <span className='text-darkblue'>Arrange Tray</span>
          </div>
          <img
            alt=''
            className='cursor-pointer'
            onClick={() => setDropDown((previous) => !previous)}
            src={BLUE_BARS}
          />
        </div>

        <DropDownV2 data={dropdownLinks} open={dropdown} setState={() => {}} />
      </div>
      <div className='w-[1106px] bg-white border border-[#BBC4D4] h-[804px] rounded-md mt-9 ml-12 py-5 px-10'>
        <span className='font-medium text-darkblue'>Wallet</span>

        <div className='flex justify-between'>
          <div className='mt-6 flex gap-4'>
            <div className='w-[346px] h-[639px]  border border-[#BBC4D4] rounded-md border-opacity-15 py-2 px-6'>
              <div className='w-[304px] h-[107px] bg-[#AED5811A] bg-opacity-10 rounded-md flex justify-between p-6'>
                <div className='flex flex-col items-start gap-1'>
                  <div className='flex gap-3 text-darkblue font-medium'>
                    <img alt='' src={WALLET} />
                    <span>Fiat Wallet</span>
                  </div>
                  <span className='text-xl font-semibold text-darkblue'>
                    N3,847,895
                  </span>
                </div>
                <div className='flex flex-col items-end'>
                  <FaEye className='text-sm text-darkblue' />
                  <div className='flex gap-3 mt-5'>
                    <span className='text-sm text-darkblue'>USD</span>
                    <img alt='' src={BLUE_ARROW_DOWN} />
                  </div>
                </div>
              </div>
              <div className='mt-7 flex flex-col gap-3 max-h-[420px] overflow-y-scroll'>
                {deposit.map((data) => (
                  <div className='flex justify-between border-b border-[#E7E7E7] pb-2'>
                    <div className='flex gap-4 '>
                      <div className='bg-[#C2E0FF] w-[21px] h-[21px] rounded-full flex justify-center items-center mt-1'>
                        <FaArrowDown className='text-[10px] text-white' />
                      </div>
                      <div className='flex flex-col gap-2'>
                        <span className='font-medium'>You deposited</span>
                        <span className='text-xs text-lightgrey'>Cash</span>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <span className='text-[#39B54A] font-medium'>{`NGN ${data.amount}`}</span>
                      <span className='text-xs text-lightgrey'>
                        {data.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex justify-center mt-6'>
                <span className=' font-medium  text-darkblue'>
                  Open full log
                </span>
              </div>
            </div>
            <div className='w-[346px] h-[639px]  border border-[#BBC4D4] rounded-md border-opacity-15 py-2 px-6'>
              <div className='w-[304px] h-[107px] bg-[#FF725F1A] bg-opacity-10 rounded-md flex justify-between p-6'>
                <div className='flex flex-col items-start gap-1'>
                  <div className='flex gap-3 text-darkblue font-medium'>
                    <img alt='' src={CLIP_ICON} />
                    <span>Cliq Token</span>
                  </div>
                  <span className='text-xl font-semibold text-darkblue'>
                    N3,847,895
                  </span>
                </div>
                <div className='flex flex-col items-end'>
                  <FaEye className='text-sm text-darkblue' />
                  <div className='flex gap-3 mt-5'>
                    <span className='text-sm text-darkblue'>USD</span>
                    <img alt='' src={BLUE_ARROW_DOWN} />
                  </div>
                </div>
              </div>
              <div className='mt-7 flex flex-col gap-3 max-h-[420px] overflow-y-scroll'>
                {deposit.map((data) => (
                  <div className='flex justify-between border-b border-[#E7E7E7] pb-2'>
                    <div className='flex gap-4 '>
                      <div className='bg-[#C2E0FF] w-[21px] h-[21px] rounded-full flex justify-center items-center mt-1'>
                        <FaArrowUp className='text-[10px] text-white' />
                      </div>
                      <div className='flex flex-col gap-2'>
                        <span className='font-medium'>You deposited</span>
                        <span className='text-xs text-lightgrey'>Cash</span>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <span className='text-[#39B54A] font-medium'>{`NGN ${data.amount}`}</span>
                      <span className='text-xs text-lightgrey'>
                        {data.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex justify-center mt-6'>
                <span className=' font-medium  text-darkblue'>
                  Open full log
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 mr-6 ml-4'>
            <div className='mt-16 bg-darkblue w-[316px] h-[127px]  rounded-md flex justify-between p-5 items-center'>
              <div className='flex flex-col gap-3'>
                <span className='text-white'>Current Balance</span>
                <span className='font-semibold text-white text-xl'>
                  N3,847,895
                </span>
              </div>
              <FaEye className='text-sm text-white' />
            </div>
            <div className='flex flex-col gap-3 justify-center items-center'>
              <ButtonV2
                btnStyle='w-[184px] flex border-[#F6F6F6] bg-[#ECF7FF] border justify-center items-center gap-3 flex-row-reverse h-[50px] rounded-md'
                handleClick={() => setsettlementModal(true)}
                image={FUND_ICON}
                textStyle=''
                title='Fund'
              />
              <ButtonV2
                btnStyle='w-[184px] flex border-[#F6F6F6] bg-[#ECF7FF] border justify-center items-center gap-3 flex-row-reverse h-[50px]  rounded-md'
                handleClick={() => {}}
                image={WITHDRAW_ICON}
                textStyle=''
                title='withdraw'
              />
            </div>
          </div>
        </div>
      </div>
      <TransactionsModals
        handleBack={handleBack}
        handleClick={handleProceed}
        handleConfirm={handleProccedToPayment}
        handleSelectWallet={handleSelectWalletType}
        handleSend={handleSend}
        processModal={inProgressModal}
        selectedWallet={selectedWallet}
        sendModal={sendModal}
        setPinModal={setPinModal}
        setProcessModal={() => setInProgressModal(false)}
        setSelectedWallet={setSelectedWallet}
        setSendModal={() => setSendModal(false)}
        setSetPinModal={() => setSetPinModal(false)}
        setSettleModal={() => setsettlementModal(false)}
        settleModal={settlementModal}
        setWalletModal={() => setWalletModal(false)}
        walletModal={walletModal}
      />
    </main>
  );
};

export default Wallet;
