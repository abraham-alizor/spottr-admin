/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

import { TransactionChartData } from "@/fake_data";
import ButtonV2 from "@/shared/components/buttonV2";
import ChartComponent from "@/shared/components/chart";
import DropDownV2 from "@/shared/components/drop-down-2";
import Banner from "@/shared/components/funds_component/banner";
import PageHeader from "@/shared/components/pageheader";
import {
  BLUE_BARS,
  DARK_BLUE_ARROW,
  GREEN_ARROW,
  LIGHT_BLUE_ARROW,
  ROUND_STAR,
} from "@/utils/Exports";

export const dropdownLinks = [
  {
    id: 1,
    label: "Generate Statement",
  },
  {
    id: 2,
    label: "Pending transactions",
  },
  {
    id: 3,
    label: "See all trasnaction activity",
  },
];
function Transactions() {
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();
  return (
    <main className='mx-8 mt-7 mb-28'>
      <div className='flex justify-between items-center relative'>
        <PageHeader route='/dashboard' title='Transactions' />
        <div className='flex gap-7'>
          <div className='flex gap-3'>
            <img alt='' src={ROUND_STAR} />
            <span className='text-darkblue'>Arrange Tray</span>
          </div>
          <img
            alt=''
            className='cursor-pointer'
            onClick={() => setShowDropDown((previous) => !previous)}
            src={BLUE_BARS}
          />
        </div>

        <DropDownV2
          data={dropdownLinks}
          open={showDropDown}
          setState={() => {}}
        />
      </div>

      <div className='mt-6 flex justify-between items-center'>
        <div className='flex gap-5'>
          <div className='flex gap-4 bg-darkblue text-white justify-center items-center w-[288px] h-[48.28px] rounded-md'>
            <span className='text-xs'>Income Overall</span>
            <span className='text-xl font-semibold'>N345,847,895</span>
          </div>
          <div className='flex gap-4 bg-branded text-white justify-center items-center w-[288px] h-[48.28px] rounded-md'>
            <span className='text-xs'>Outpaid Overall</span>
            <span className='text-xl font-semibold'>N56,847,895</span>
          </div>
        </div>
        <div className='flex gap-4'>
          <ButtonV2
            btnStyle='w-[160px] h-[48px] flex justify-center items-center gap-3 border border-[#DBEDCE] rounded-md'
            handleClick={() => navigate("/transactions/wallet")}
            image={DARK_BLUE_ARROW}
            textStyle='text-darkblue font-medium'
            title='View Wallet '
          />
          <ButtonV2
            btnStyle='w-[160px] h-[48px] flex justify-center items-center gap-3 border border-[#C2E0FF] rounded-md'
            handleClick={() => {}}
            image={LIGHT_BLUE_ARROW}
            textStyle='text-[#3670D4] font-medium'
            title='Make withdrawal'
          />
          <ButtonV2
            btnStyle='w-[160px] h-[48px] flex justify-center items-center gap-3 border border-[#DBEDCE] rounded-md'
            handleClick={() => {}}
            image={GREEN_ARROW}
            textStyle='text-[#5FC146] font-medium'
            title='Add funds '
          />
        </div>
      </div>
      <div className='flex gap-5 '>
        <Zoom>
          <div className='mt-5 flex flex-col gap-4'>
            <ChartComponent
              data={TransactionChartData}
              title='Regular Users'
              totalStat1='Total Paid'
              totalStat2='Total Withdraw'
            />
            <ChartComponent
              data={TransactionChartData}
              title='Coporate Users'
              totalStat1='Total Paid'
              totalStat2='Total Spent'
            />
          </div>
        </Zoom>
        <div className='mt-5 flex flex-col gap-5'>
          <Banner
            clipPayment='789,906'
            clipToken='3,847,895'
            clipWithdraw='56,784'
            fiatPayment='789,906'
            fiatToken='3,847,895'
            fiatWithdraw='56,784'
            title='Fiat and Debit Cards'
          />
          <Banner
            clipPayment='789,906'
            clipToken='3,847,895'
            clipWithdraw='56,784'
            fiatPayment='789,906'
            fiatToken='3,847,895'
            fiatWithdraw='56,784'
            title='Logistics'
          />
          <Banner
            clipPayment='789,906'
            clipToken='3,847,895'
            clipWithdraw='56,784'
            fiatPayment='789,906'
            fiatToken='3,847,895'
            fiatWithdraw='56,784'
            title='Ads'
          />
        </div>
      </div>
    </main>
  );
}

export default Transactions;
