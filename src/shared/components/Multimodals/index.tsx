/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable unicorn/prefer-spread */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from "react";

import { cryptoLists, dropdowndata } from "@/fake_data";
import { currencyLists } from "@/features/Settings";
import useCopyToClipboard from "@/hooks/CopyHook";
import ButtonV2 from "@/shared/components/buttonV2";
import CurrencyBox from "@/shared/components/currencybox";
import DropDownV3 from "@/shared/components/dropdownV3";
import Modal from "@/shared/components/Modal";
import ModalV2 from "@/shared/components/modalV2";
import {
  ALERT_ICON,
  ATM_CARD,
  BANK_ICON,
  BLACK_ARROW_DOWN,
  BLUE_ARROW_DOWN,
  BLUE_ARROW_LEFT,
  CLIP_CARD,
  CLIP_ICON,
  COPY_ICON,
  HOUR_GLASS,
  PROVIDUS_BANK,
  REPORT_ICON,
  SHARE_ICON,
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
  const [paymentMethodModal, setPaymentMethodModal] = useState(false);
  const [selectedPaymentType, setSelectedPaymentType] = useState("");
  const [amount, setAmount] = useState("200");
  const [currencydrop, setCurrencyDrop] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");
  const [TransferModal, setTransferModal] = useState(false);
  const [isCopied, copyToClipboard] = useCopyToClipboard();
  const [cliptokensModal, setClipTokensModal] = useState(false);

  const handlecryptosModal = () => {
    setSetPinModal();
    setClipTokensModal(true);
  };
  const handlePinChange = (event_: React.ChangeEvent<HTMLInputElement>) => {
    const enteredpin = event_.target.value;
    setPin(enteredpin);
  };

  const placeholder =
    pin.length > 0
      ? "*".repeat(pin.length)
      : "*           *           *           *";
  const handlePaymentMethodModal = () => {
    if (sendModal) {
      setPaymentMethodModal(true);
      setSendModal();
    } else {
      setSendModal();
    }
  };

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
        maxWidth={`${selectedWallet === "clip-token" ? "w-[672px]" : "w-[377px]"}  `}
      >
        <>
          {selectedWallet === "clip-token" ? (
            <div className='flex flex-col px-20 gap-5'>
              <div className='flex justify-between'>
                <div className='flex text-lg font-medium text-darkblue gap-4'>
                  <img alt='' height={20} src={CLIP_ICON} width={20} />

                  <span>Send Cliq Token</span>
                </div>
                <ButtonV2
                  btnStyle=''
                  handleClick={handleBack}
                  textStyle='text-darkblue font-medium text-sm'
                  title='Back'
                />
              </div>
              <div className='text-start text-lg font-medium text-darkblue'>
                <span>Input Amount of coins</span>
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
                    <span>units</span>

                    <img alt='' className='pt-1' src={BLACK_ARROW_DOWN} />
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

                    <span className='text-darkblue font-medium'>
                      200 clip token
                    </span>
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
          ) : (
            <div>
              <div className='px-8 '>
                <div className='flex flex-col gap-5 items-start'>
                  <span className='text-[20px] text-darkblue font-semibold'>
                    Input Amount
                  </span>
                  <span className='text-[12px] font-normal text-[#3B3B3BB2] text-opacity-[70%]'>
                    How much would you like to fund your wallet?
                  </span>
                </div>
                <div className='mt-6 flex items-center gap-3 justify-center relative'>
                  <input
                    className='w-[5vw] outline-none text-[48px] text-black'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setAmount(event.target.value)
                    }
                    type='text'
                    value={amount}
                  />
                  <div className='flex items-center gap-2'>
                    <span className='text-[13px] font-semibold'>
                      {selectedCurrency}
                    </span>
                    <img
                      alt=''
                      onClick={() => setCurrencyDrop(true)}
                      src={BLACK_ARROW_DOWN}
                    />
                  </div>
                  <CurrencyBox
                    close={() => setCurrencyDrop(false)}
                    data={currencyLists}
                    open={currencydrop}
                    setSelected={setSelectedCurrency}
                  />
                </div>
              </div>
              <div>
                <ButtonV2
                  btnStyle='w-[328px] h-[55px] bg-darkblue mt-12 rounded-md mb-6'
                  handleClick={handlePaymentMethodModal}
                  textStyle='text-white font-medium '
                  title='Continue'
                />
              </div>
            </div>
          )}
        </>
      </Modal>
      <ModalV2
        closeBtnColor=''
        edges='rounded-2xl'
        isClose={() => setPaymentMethodModal(false)}
        isOpen={paymentMethodModal}
        maxWidth='w-[377px]'
      >
        <>
          <div className='flex flex-col px-14 pt-[4rem] pb-[7rem] relative'>
            <div className='flex justify-between mb-3'>
              <span className='text-sm text-darkblue'>
                Select payment method
              </span>
              <span className='text-darkblue font-[700] text-[12px] cursor-pointer'>
                Back
              </span>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex justify-between border-b pb-4 cursor-pointer'>
                <div className='flex gap-4 items-center'>
                  <img alt='' src={ATM_CARD} />
                  <span className='text-darkblue font-semibold'>
                    Pay with card
                  </span>
                </div>
                <span className='text-darkblue font-medium'>N150 Fee</span>
              </div>
              <div
                className='flex justify-between border-b pb-4 cursor-pointer '
                onClick={() => {
                  setTransferModal(true);
                  setPaymentMethodModal(false);
                }}
              >
                <div className='flex gap-4 items-center'>
                  <img alt='' src={BANK_ICON} />
                  <span className='text-darkblue font-semibold'>
                    Bank Transfer
                  </span>
                </div>
                <span className='text-darkblue font-medium'>N52 charges</span>
              </div>
            </div>
          </div>
        </>
      </ModalV2>
      <Modal
        edges='rounded-xl'
        isClose={() => setTransferModal(false)}
        isOpen={TransferModal}
        maxWidth='w-[435px]'
      >
        <div>
          <div className='px-10'>
            <div className='flex justify-between items-center'>
              <span className='font-normal text-[12px] text-darkblue'>
                Bank Transfer
              </span>
              <span
                className='font-[700] text-[12px] text-darkblue cursor-pointer'
                onClick={() => {
                  setTransferModal(false);
                  setPaymentMethodModal(true);
                }}
              >
                Back
              </span>
            </div>
            <div className='mt-10  flex justify-between items-start'>
              <div className='flex gap-5 items-start'>
                <img alt='' src={PROVIDUS_BANK} />
                <div className='flex flex-col items-start gap-4'>
                  <div className='flex flex-col items-start'>
                    <span className='text-[25px] font-[700] text-darkblue'>
                      008761112226
                    </span>
                    <span className='text-[17px] text-darkblue font-normal'>
                      Providus Bank
                    </span>
                  </div>
                  <div className='flex gap-2 text-[15px] text-darkblue'>
                    <span className='font-normal'>Beneficiary: </span>
                    <span className='font-[700]'>SpottR Limited</span>
                  </div>
                </div>
              </div>
              <img
                alt=''
                className='cursor-pointer'
                // @ts-ignore
                onClick={() => copyToClipboard("008761112226")}
                src={COPY_ICON}
              />

              {isCopied && (
                <span className='absolute right-0 bg-white text-green-400 rounded-md p-2 shadow-custom'>
                  copied to clipboard
                </span>
              )}
            </div>
            <div className='mt-[5rem]  flex justify-center'>
              <span className='text-[#3B3B3BB2] text-opacity-[70%] font-normal text-xs'>
                Kindly make this transaction in 20mins, make sure yiu keep the
                transaction evidence screenshot incase of any issue
              </span>
            </div>
          </div>
          <div className='mt-9'>
            <ButtonV2
              btnStyle='w-[378.46px] h-[55px] bg-darkblue mt-12 rounded-md mb-6'
              handleClick={() => {
                setTransferModal(false);
                handleConfirm();
              }}
              textStyle='text-white font-medium '
              title='I have made the Transfer'
            />
          </div>
        </div>
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
                handleClick={handlecryptosModal}
                textStyle='text-white font-medium '
                title='Continue'
              />
            </div>
          </div>
        </>
      </Modal>
      <Modal
        edges='rounded-xl'
        isClose={() => setClipTokensModal(false)}
        isOpen={cliptokensModal}
        maxWidth='w-[377px]'
      >
        <div>
          <div className='px-4'>
            <div className='flex justify-between items-center'>
              <span className='text-xs font-normal text-darkblue'>
                Pay with Crypto
              </span>
              <span
                className='text-xs font-[700] text-darkblue'
                onClick={() => {
                  setClipTokensModal(false);
                }}
              >
                Back
              </span>
            </div>
            <div className='mt-5 flex flex-col gap-3 relative'>
              {cryptoLists.map((data_) => (
                <div className='flex justify-between items-center border-b pb-2 '>
                  <div className='flex flex-col gap-1'>
                    <img alt='' src={data_.img} />
                    <span className='text-xs text-textcolor text-opacity-[70%]'>
                      {data_.name}
                    </span>
                  </div>
                  <div className=' w-[186px]'>
                    <p className=' text-[17px] font-[700] text-darkblue break-words'>
                      {data_.address}
                    </p>
                  </div>
                  <img
                    alt=''
                    className='cursor-pointer'
                    // @ts-ignore
                    onClick={() => copyToClipboard(data_.address)}
                    src={COPY_ICON}
                  />
                </div>
              ))}
              {isCopied && (
                <span className='absolute text-[#39B54A] right-0 bg-white rounded-md p-2 shadow-custom'>
                  copied to clipboard
                </span>
              )}
            </div>
            <div className='mt-16 text-xs text-textcolor text-opacity-[70%]  px-7 flex justify-center'>
              <span className='w-[228px]'>
                Click on the camera icon to add an image for your new service.
                You can add a maximum of 3 images.
              </span>
            </div>
          </div>
          <div>
            <ButtonV2
              btnStyle='w-[328px] h-[55px] bg-darkblue mt-16 rounded-md mb-6'
              handleClick={() => {
                handleConfirm();
                setClipTokensModal(false);
              }}
              textStyle='text-white font-medium '
              title='Continue'
            />
          </div>
        </div>
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
