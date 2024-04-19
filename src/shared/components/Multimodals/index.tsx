/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable unicorn/prefer-spread */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from "react";

import { dropdowndata } from "@/fake_data";
import { currencyLists } from "@/features/Settings";
import ButtonV2 from "@/shared/components/buttonV2";
import CurrencyBox from "@/shared/components/currencybox";
import DropDownV3 from "@/shared/components/dropdownV3";
import Modal from "@/shared/components/Modal";
import ModalV2 from "@/shared/components/modalV2";
import {
  ALERT_ICON,
  BLACK_ARROW_DOWN,
  BLUE_ARROW_DOWN,
  BLUE_ARROW_LEFT,
  CLIP_CARD,
  CLIP_ICON,
  HOUR_GLASS,
  REPORT_ICON,
  SHARE_ICON,
  WALLET,
  WALLET_CARD,
} from "@/utils/Exports";

interface MultiModalProps {
  settleModal: boolean;
  walletModal: boolean;
  sendModal: boolean;
  setPinModal: boolean;
  processModal: boolean;
  setSettleModal: () => void;
  setWalletModal: () => void;
  setSendModal: () => void;
  setSetPinModal: () => void;
  setProcessModal: () => void;
  handleClick: () => void;
  selectedWallet: string;
  setSelectedWallet: (string_: string) => void;
  handleSelectWallet: (string_: string) => void;
  handleBack: () => void;
  handleSend: () => void;
  handleConfirm: () => void;
}

const TransactionsModals = ({
  settleModal,
  walletModal,
  sendModal,
  setPinModal,
  processModal,
  setProcessModal,
  setSettleModal,
  setWalletModal,
  setSetPinModal,
  setSendModal,
  handleClick,
  selectedWallet,
  setSelectedWallet,
  handleSelectWallet,
  handleBack,
  handleSend,
  handleConfirm,
}: MultiModalProps) => {
  const [pin, setPin] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const [selectedPaymentType, setSelectedPaymentType] = useState("");
  const [amount, setAmount] = useState("200");
  const [currencydrop, setCurrencyDrop] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");
  const handlePinChange = (event_: React.ChangeEvent<HTMLInputElement>) => {
    const enteredpin = event_.target.value;
    setPin(enteredpin);
  };

  const placeholder =
    pin.length > 0
      ? "*".repeat(pin.length)
      : "*           *           *           *";

  return (
    <>
      <Modal
        edges='rounded-sm'
        isBTnTrue
        isClose={setSettleModal}
        isOpen={settleModal}
        maxWidth='w-[672px]'
      >
        <>
          <div className='mt-7 flex flex-col items-start px-16 gap-5 relative'>
            <span className='text-xl font-medium text-darkblue text-'>
              Make Settlement
            </span>
            <div className='flex flex-col items-start gap-5'>
              <div className='w-[496px] bg-[#F8F8F8] items-start flex h-[54px] p-4 rounded-md'>
                <input
                  className='bg-transparent outline-none placeholder:text-[#C4C4C4] w-full'
                  placeholder='Input wallet address/username'
                  type='text'
                />
              </div>
              <div
                className='w-[496px] bg-[#ECF7FF]  flex h-[54px] p-4 justify-between rounded-md cursor-pointer'
                onClick={() => setDropDown((previous) => !previous)}
              >
                <span className='text-[#C4C4C4]'>{`${selectedPaymentType || " Select payment method"} `}</span>
                <img alt='' src={BLUE_ARROW_DOWN} />
              </div>
              <DropDownV3
                classname='top-[10.5rem]'
                data={dropdowndata}
                isClose={() => setDropDown(false)}
                isOpen={dropDown}
                setSelected={setSelectedPaymentType}
                width='w-[496px]'
              />
              <div className='flex items-start  gap-3 text-darkblue'>
                <div className='mt-1'>
                  <img alt='' height={20} src={ALERT_ICON} width={20} />{" "}
                </div>
                <p className='text-start text-sm'>
                  Lorem impsum donor sit a met short information about the
                  chosen role impsum donor sit a met short information about the
                  chosen role
                </p>
              </div>
            </div>
          </div>
          <div>
            <ButtonV2
              btnStyle='w-[252px] h-[53px] bg-darkblue mt-7 rounded-md my-6'
              handleClick={handleClick}
              textStyle='text-white'
              title='Proceed'
            />
          </div>
        </>
      </Modal>
      <ModalV2
        closeBtnColor=''
        edges='rounded-2xl'
        isClose={setWalletModal}
        isOpen={walletModal}
        maxWidth='w-[377px]'
      >
        <>
          <div className='flex flex-col px-10 pt-3 relative'>
            <div className='flex justify-between '>
              <span className='text-sm text-darkblue'>Select wallet</span>
              <div className='flex gap-1'>
                <span className='text-sm text-darkblue'>
                  {selectedCurrency}
                </span>
                <img
                  alt=''
                  onClick={() => setCurrencyDrop((previous) => !previous)}
                  src={BLUE_ARROW_DOWN}
                />
              </div>
              <CurrencyBox
                close={() => setCurrencyDrop(false)}
                data={currencyLists}
                open={currencydrop}
                setSelected={setSelectedCurrency}
              />
            </div>
            <div className='mt-[3rem] flex flex-col gap-6'>
              <div
                className='flex justify-between border-b pb-4 cursor-pointer'
                onClick={() => handleSelectWallet("fiat-wallet")}
              >
                <div className='flex gap-4 items-center'>
                  <img alt='' src={WALLET_CARD} />
                  <span className='text-darkblue font-semibold'>Fiat</span>
                </div>
                <span className='text-darkblue font-medium'>N345,684,909</span>
              </div>
              <div
                className='flex justify-between border-b pb-4 cursor-pointer'
                onClick={() => handleSelectWallet("clip-token")}
              >
                <div className='flex gap-4 items-center'>
                  <img alt='' src={CLIP_CARD} />
                  <span className='text-darkblue font-semibold'>
                    Cliq token
                  </span>
                </div>
                <span className='text-darkblue font-medium'>N150 Fee</span>
              </div>
            </div>
            <div>
              <ButtonV2
                btnStyle='my-9'
                handleClick={setWalletModal}
                textStyle='text-darkblue text-sm font-medium '
                title='cancel'
              />
            </div>
          </div>
        </>
      </ModalV2>
      <Modal
        edges='rounded-2xl'
        isClose={setSendModal}
        isOpen={sendModal}
        maxWidth='w-[672px]'
      >
        <>
          <div className='flex flex-col px-20 gap-5'>
            <div className='flex justify-between'>
              <div className='flex text-lg font-medium text-darkblue gap-4'>
                <>
                  {selectedWallet === "clip-token" ? (
                    <img alt='' height={20} src={CLIP_ICON} width={20} />
                  ) : (
                    <img alt='' height={20} src={WALLET} width={20} />
                  )}
                </>
                {selectedWallet === "clip-token" ? (
                  <span>Send Cliq Token</span>
                ) : (
                  <span>Send With Fiat Wallet</span>
                )}
              </div>
              <ButtonV2
                btnStyle=''
                handleClick={handleBack}
                textStyle='text-darkblue font-medium text-sm'
                title='Back'
              />
            </div>
            <div className='text-start text-lg font-medium text-darkblue'>
              {selectedWallet === "clip-token" ? (
                <span>Input Amount of coins</span>
              ) : (
                <span>Input Amount</span>
              )}
            </div>
            <div className='flex justify-center items-center flex-col mt-5 gap-4'>
              <div className='flex gap-4 items-end'>
                {/* <span className='font-medium text-5xl '>200</span> */}
                <input
                  className='outline-none bg-transparent text-5xl font-medium w-[6vw]'
                  onChange={(event_: React.ChangeEvent<HTMLInputElement>) =>
                    setAmount(event_.target.value)
                  }
                  type='text'
                  value={amount}
                />
                <div className='flex items-center gap-2'>
                  <>
                    {selectedWallet === "clip-token" ? (
                      <span>units</span>
                    ) : (
                      <span>ngn</span>
                    )}
                    <img alt='' className='pt-1' src={BLACK_ARROW_DOWN} />
                  </>
                </div>
              </div>
              <div className='mt-4 flex justify-center flex-col items-center'>
                <div className='flex gap-1 items-center'>
                  <span className='text-sm text-lightgrey'>Fee:</span>
                  <span className='text-darkblue font-medium'>N0</span>
                </div>
                <div>
                  <span className='text-sm text-lightgrey'>
                    You are sending:{" "}
                  </span>
                  {selectedWallet === "clip-token" ? (
                    <span className='text-darkblue font-medium'>
                      200 clip token
                    </span>
                  ) : (
                    <span className='text-darkblue font-medium'>
                      200 fiat cash
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div>
              <ButtonV2
                btnStyle='w-[482px] h-[55px] bg-darkblue mt-4 rounded-md mb-6'
                handleClick={handleSend}
                textStyle='text-white font-medium '
                title='Continue'
              />
            </div>
          </div>
        </>
      </Modal>
      <Modal
        edges='rounded-2xl'
        isBTnTrue
        isClose={setSetPinModal}
        isOpen={setPinModal}
        maxWidth='w-[672px]'
      >
        <>
          <div className='flex flex-col px-20 gap-5 mt-16'>
            <div className='flex justify-between'>
              <div className='flex font-normal text-darkblue gap-4'>
                <span>Transaction Confirmation</span>
              </div>
              <ButtonV2
                btnStyle=''
                handleClick={handleBack}
                textStyle='text-darkblue font-medium text-sm'
                title='Back'
              />
            </div>
            <div className='text-start text-lg font-medium text-darkblue'>
              <span>Transaction PIN</span>
            </div>
            <div className='flex justify-center items-center flex-col mt-5 gap-4'>
              <div className='w-[480.83px] bg-[#F8F8F8] h-[54px] ml-8 rounded-md'>
                <input
                  className='bg-transparent pt-4 outline-none text-lg placeholder:text-lightgrey w-full pl-16'
                  onChange={handlePinChange}
                  placeholder={placeholder}
                  type='password'
                  value={pin.split("/").join("")}
                />
              </div>
              <div className='mt-6 max-w-xs'>
                <span className='text-xs font-normal text-[#3B3B3BB2]'>
                  Kindly input the transaction PIN you registered while setting
                  up your profile
                </span>
              </div>
            </div>
            <div>
              <ButtonV2
                btnStyle='w-[482px] h-[55px] bg-darkblue mt-4 rounded-md mb-6'
                handleClick={handleConfirm}
                textStyle='text-white font-medium '
                title='Continue'
              />
            </div>
          </div>
        </>
      </Modal>
      <Modal
        edges='rounded-2xl'
        isClose={setProcessModal}
        isOpen={processModal}
        maxWidth='w-[418.66px]'
      >
        <div className='px-7'>
          <div className='flex flex-col '>
            <div className='flex justify-between items-end'>
              <div className='flex gap-2 items-center'>
                <div className='bg-[#FFB211] bg-opacity-25 w-[32.81px] h-[32.81px] flex justify-center items-center rounded-full'>
                  <img alt='' src={HOUR_GLASS} />
                </div>
                <span className='text-2xl font-medium text-[#FFB211]'>
                  In progress
                </span>
              </div>
              <span className='text-[10px] text-darkblue '>
                awaiting confirmation
              </span>
            </div>
            <span className='flex self-start text-4xl mt-5 font-medium text-darkblue '>
              N20000
            </span>
            <ButtonV2
              btnStyle='bg-[#DA43320F] bg-opacity-5 w-[83px] h-[30.92px] flex gap-3 items-center flex-row-reverse float-right justity-end self-end pr-3 rounded-sm my-6'
              handleClick={() => {}}
              image={REPORT_ICON}
              textStyle='text-branded text-xs'
              title='Report'
            />
          </div>
          <div className='flex flex-col items-start gap-5'>
            <div className='flex flex-col gap-2 items-start'>
              <span className='text-xs text-darkblue'>Recipients</span>
              <span className='text-xl font-medium text-darkblue'>Self</span>
            </div>
            <div className='flex flex-col gap-2 items-start'>
              <span className='text-xs text-darkblue'>Username:</span>
              <span className='text-xl font-medium text-darkblue'>
                @adedamola456
              </span>
            </div>
            <div className='flex gap-10'>
              <div className='flex flex-col gap-2 items-start'>
                <span className='text-xs text-darkblue'>Transaction Fee</span>
                <span className='text-xl font-medium text-darkblue'>NGN0</span>
              </div>
              <div className='flex flex-col gap-2 items-start'>
                <span className='text-xs text-darkblue'>Payment method</span>
                <span className='text-xl font-medium text-darkblue'>
                  Cliq token
                </span>
              </div>
            </div>
            <div className='flex flex-col gap-2 items-start'>
              <span className='text-xs text-darkblue'>Trsanction ID:</span>
              <span className='text-xl font-medium text-darkblue'>
                tdg87wdgh7udh32bd3dh3b
              </span>
            </div>
          </div>
          <div className='my-8 flex justify-between'>
            <ButtonV2
              btnStyle='flex gap-2 items-center flex-row-reverse'
              handleClick={handleBack}
              image={BLUE_ARROW_LEFT}
              textStyle='text-darkblue'
              title='Go back'
            />
            <ButtonV2
              btnStyle='flex gap-2 items-center flex-row-reverse'
              handleClick={() => {}}
              image={SHARE_ICON}
              textStyle='text-darkblue'
              title='Share'
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TransactionsModals;
