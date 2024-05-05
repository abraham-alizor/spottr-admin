/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

import { currencyLists } from "@/features/Settings";
import AlertModal from "@/shared/components/alert_modal";
import ButtonV2 from "@/shared/components/buttonV2";
import CurrencyBox from "@/shared/components/currencybox";
import ModalV2 from "@/shared/components/modalV2";
import {
  BLUE_ARROW_DOWN,
  CLIP_CARD,
  TROPHY,
  WALLET_CARD,
} from "@/utils/Exports";

const blahblahdata = [
  {
    id: "1",
    title: "Corporate does",
  },
  {
    id: "2",
    title: "Corporate does",
  },
  {
    id: "3",
    title: "Corporate does",
  },
  {
    id: "4",
    title: "Corporate does",
  },
];

function Corporate() {
  const [success, setSuccess] = useState(false);
  const [selectedbox, setSelectedBox] = useState<any>([]);
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");
  const [currencyDrop, setCurrencyDrop] = useState(false);
  const [paymentMethodModal, setPaymentMethodModal] = useState(false);
  const handleSelectedBoxClick = (rowid: any) => {
    setSelectedBox((previousSelectedBox: any) => {
      if (previousSelectedBox.includes(rowid)) {
        return previousSelectedBox.filter((box_id: any) => box_id !== rowid);
      }
      return [...previousSelectedBox, rowid];
    });
  };
  return (
    <main className='w-[375px] h-[700px] bg-white rounded-md mt-10 shadow-custom'>
      <div className='flex items-center justify-center flex-col pt-16 py-24 gap-10'>
        <div className='w-[228.13px] h-[400px] bg-ring bg-no-repeat bg-[#2FAB481B] bg-opacity-[10.59%] rounded-xl flex flex-col pt-7 pb-9 gap-7'>
          <div className='flex justify-center items-center'>
            <img alt='' src={TROPHY} />
          </div>
          <div className='flex flex-col items-start gap-5 pl-4'>
            {blahblahdata.map((data) => (
              <div className='flex items-center gap-3'>
                <div
                  className='w-[13.16px] h-[13.16px] border-[1.46px] rounded border-[#3B3B3BB2] border-opacity-[70%] flex justify-center items-center cursor-pointer'
                  onClick={() => handleSelectedBoxClick(data.id)}
                >
                  {selectedbox.includes(data.id) && (
                    <FaCheck className='text-[#3B3B3BB2] text-opacity-[70%] text-[10px]' />
                  )}
                </div>
                <span className='text-xs font-bold text-[#3B3B3BB2] text-opacity-[70%]'>
                  {data.title}
                </span>
              </div>
            ))}
          </div>
          <div>
            <span className='text-[#061E48] font-bold text-[21.94px] flex justify-center items-center'>
              Corporate $99
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <ButtonV2
            btnStyle='w-[311.82px] h-[55px] rounded-md bg-darkblue'
            handleClick={() => setPaymentMethodModal(true)}
            textStyle='font-semibold text-white text-sm'
            title='Activate'
          />
          <ButtonV2
            btnStyle='w-[311.82px] h-[55px] rounded-md '
            handleClick={() => {}}
            textStyle='font-semibold text-black text-sm'
            title='Deactivate'
          />
        </div>
      </div>
      <ModalV2
        closeBtnColor=''
        edges='rounded-2xl'
        isClose={() => setPaymentMethodModal(false)}
        isOpen={paymentMethodModal}
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
                open={currencyDrop}
                setSelected={setSelectedCurrency}
              />
            </div>
            <div className='mt-[3rem] flex flex-col gap-6'>
              <div
                className='flex justify-between border-b pb-4 cursor-pointer'
                // onClick={() => handleSelectWallet("fiat-wallet")}
              >
                <div
                  className='flex gap-4 items-center'
                  onClick={() => {
                    setSuccess(true);
                    setPaymentMethodModal(false);
                  }}
                >
                  <img alt='' src={WALLET_CARD} />
                  <span className='text-darkblue font-semibold'>Fiat</span>
                </div>
                <span className='text-darkblue font-medium'>N345,684,909</span>
              </div>
              <div
                className='flex justify-between border-b pb-4 cursor-pointer'
                // onClick={() => handleSelectWallet("clip-token")}
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
                handleClick={() => {}}
                textStyle='text-darkblue text-sm font-medium '
                title='cancel'
              />
            </div>
          </div>
        </>
      </ModalV2>
      <AlertModal
        btntext='Perform Another Transaction'
        close={() => setSuccess(false)}
        confirmationText='Transaction successful!'
        details='Florem  impsum donor sit ament a Florem  impsum donor sit ament a'
        handleclick={() => {}}
        open={success}
      />
    </main>
  );
}

export default Corporate;
