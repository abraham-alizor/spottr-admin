import React from "react";

import { CLIP_ICON, WALLET } from "@/utils/Exports";

interface Props {
  title: string;
  fiatToken: string | number;
  clipToken: string | number;
  fiatPayment: string | number;
  fiatWithdraw: string | number;
  clipPayment: string | number;
  clipWithdraw: string | number;
}
const Banner = ({
  title,
  fiatToken,
  clipToken,
  fiatPayment,
  fiatWithdraw,
  clipPayment,
  clipWithdraw,
}: Props) => (
  <main className='w-[583px] bg-white h-[230px] border border-[#E1EFFB] rounded-md p-7'>
    <div className='flex flex-col gap-5'>
      <div className='flex justify-between items-center '>
        <span className='font-semibold text-darkblue'>{title}</span>
        <span className='font-medium text-darkblue'>See all</span>
      </div>
      <div>
        <div className='flex justify-between items-center'>
          <div>
            <div className='w-[244.69px] bg-[#AED5811A] bg-opacity-10 h-[82.68px] p-4 flex flex-col gap-[10px] rounded-md'>
              <div className='flex gap-4'>
                <img alt='' src={WALLET} />
                <span className='text-sm font-medium text-darkblue'>
                  Fiat Wallet
                </span>
              </div>
              <span className='text-xl font-semibold text-darkblue'>
                {`N${fiatToken}`}
              </span>
            </div>
            <div className='mt-3 flex justify-between'>
              <div className='flex flex-col gap-1  text-darkblue text-sm'>
                <span>Payment</span>
                <span>Withdrawal</span>
              </div>
              <div className='flex flex-col gap-1 text-sm text-right'>
                <span className='text-[#39B54A]'>{`N${fiatPayment}`}</span>
                <span className='text-branded'>{`N${fiatWithdraw}`}</span>
              </div>
            </div>
          </div>
          <div>
            <div className='w-[244.69px] bg-[#FF725F1A] bg-opacity-10 h-[82.68px] p-4 flex flex-col gap-[10px] rounded-md'>
              <div className='flex gap-4'>
                <img alt='' src={CLIP_ICON} />
                <span className='text-sm font-medium text-darkblue'>
                  Cliq Token
                </span>
              </div>
              <span className='text-xl font-semibold text-darkblue'>
                {`N${clipToken}`}
              </span>
            </div>
            <div className='mt-3 flex justify-between'>
              <div className='flex flex-col gap-1  text-darkblue text-sm'>
                <span>Payment</span>
                <span>Withdrawal</span>
              </div>
              <div className='flex flex-col gap-1 text-sm text-right'>
                <span className='text-[#39B54A]'>{`N${clipPayment}`}</span>
                <span className='text-branded'>{`N${clipWithdraw}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Banner;
