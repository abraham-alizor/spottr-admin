/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { usertransactions } from "@/fake_data";
import ButtonV2 from "@/shared/components/buttonV2";
import TransactionsModals from "@/shared/components/Multimodals";
import {
  CHECK_MARK,
  EXPORT_ICON,
  HORIZONTAL_DOTS,
  PRINT_ICON,
  ROUND_ARROW_DOWN,
} from "@/utils/Exports";

function TransactionActivities({
  modal,
  setModal,
}: {
  modal: boolean;
  setModal: any;
}) {
  const navigate = useNavigate();
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);
  const [settlementModal, setsettlementModal] = useState(false);
  const [walletModal, setWalletModal] = useState(false);
  const [sendModal, setSendModal] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState("");
  const [setPinModal, setSetPinModal] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  const [inProgressModal, setInProgressModal] = useState(false);

  const handleProceed = () => {
    setModal(false);
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
      navigate("/userslist/user-profile");
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
    <main className='flex gap-7 mt-4'>
      <div className='w-[704px] h-[608px] px-4 py-4 bg-white bg-opacity-[80%] border-[0.2px] border-[#BBC4D4] rounded-md overflow-y-scroll'>
        <div>
          {usertransactions.map((data) => (
            <div
              className='flex justify-between border-b-2 pb-2 pt-2 hover:shadow-custom cursor-pointer hover:px-2 transition-all duration-300'
              onClick={() => setSelectedTransaction(data)}
            >
              <img alt='' src={ROUND_ARROW_DOWN} />
              <div className='flex flex-col items-start gap-2'>
                <span className='text-[14px] font-semibold'>You deposited</span>
                <span className='text-[10px] font-normal text-lightgrey'>
                  Cash
                </span>
              </div>
              <div className='flex flex-col items-start gap-2'>
                <span className='text-[14px] font-semibold'>
                  {data.username}
                </span>
                <span className='text-[10px] font-normal text-lightgrey'>
                  Username:
                </span>
              </div>
              <div className='flex flex-col items-start gap-2'>
                <span className='text-[14px] font-semibold'>
                  {data.transaction_id.length > 15
                    ? `${data.transaction_id.slice(0, 15)}...`
                    : data.transaction_id}
                </span>
                <span className='text-[10px] font-normal text-lightgrey'>
                  Trsanction ID:
                </span>
              </div>
              <div className='flex flex-col items-start gap-2'>
                <span className='text-[14px] font-semibold text-[#39B54A] '>
                  NGN {data.amount}
                </span>
                <span className='text-[10px] font-normal text-lightgrey'>
                  {data.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-[500px] px-10'>
        {selectedTransaction === null ? (
          <span className='flex justify-center items-center break-words font-medium text-lightgrey '>
            click a transaction to view details here 👇
          </span>
        ) : (
          <div className='w-full'>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col items-start gap-2'>
                <div className='flex gap-2 items-center'>
                  <img alt='' src={CHECK_MARK} />
                  <span className='text-[19.75px] text-[#39B54A] font-bold'>
                    Sent
                  </span>
                </div>
                <span className='text-3xl font-semibold text-darkblue'>
                  N{selectedTransaction.amount}
                </span>
              </div>
              <div>
                <img alt='' className='' src={HORIZONTAL_DOTS} />
              </div>
            </div>
            <div className='flex flex-col gap-2 mt-12'>
              <span className='text-lightgrey font-normal text-xs '>
                Recipients
              </span>
              <span className='text-[14.81px] font-semibold text-darkblue'>
                Self
              </span>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col gap-2 mt-7'>
                <span className='text-lightgrey font-normal text-xs '>
                  Username:
                </span>
                <span className='text-[14.81px] font-semibold text-darkblue'>
                  {selectedTransaction.username}
                </span>
              </div>
              <div className='flex flex-col gap-2 mt-7'>
                <span className='text-lightgrey font-normal text-xs '>
                  Transaction Fee
                </span>
                <span className='text-[14.81px] font-semibold text-darkblue'>
                  NGN0
                </span>
              </div>
              <div className='flex flex-col gap-2 mt-7'>
                <span className='text-lightgrey font-normal text-xs '>
                  Payment method
                </span>
                <span className='text-[14.81px] font-semibold text-darkblue'>
                  REFERRAL
                </span>
              </div>
            </div>
            <div className='flex flex-col gap-2 mt-7'>
              <span className='text-lightgrey font-normal text-xs '>
                Trsanction ID:
              </span>
              <span className='text-[14.81px] font-semibold text-darkblue'>
                {selectedTransaction.transaction_id}
              </span>
            </div>
            <div className='flex items-center gap-10 mt-14  justify-start '>
              <ButtonV2
                btnStyle='flex flex-row-reverse gap-3'
                handleClick={() => {}}
                image={PRINT_ICON}
                textStyle='font-semibold text-[18.1px] '
                title='Print'
              />
              <ButtonV2
                btnStyle='flex flex-row-reverse gap-3'
                handleClick={() => {}}
                image={EXPORT_ICON}
                textStyle='font-semibold text-[18.1px] '
                title='Export'
              />
            </div>
          </div>
        )}
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
        setSettleModal={() => setModal(false)}
        settleModal={modal}
        setWalletModal={() => setWalletModal(false)}
        walletModal={walletModal}
      />
    </main>
  );
}

export default TransactionActivities;
