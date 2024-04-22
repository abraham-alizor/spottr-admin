/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

import { TABLE_DATA } from "@/fake_data";
import ReferalsTable from "@/features/referrals-system/referrals_table";
// import ReferalsTable from "@/features/referrals-system/referrals_table";
import ButtonV2 from "@/shared/components/buttonV2";
import SubHeaders from "@/shared/components/subheaders";
import { BLUE_ARROW_DOWN } from "@/utils/Exports";

const tablelists = [
  "Photo",
  "Username",
  "Rating",
  "Referral code",
  "Total amount",
  "No. of People",
  "Level",
  "Last withdrawal",
  "Status",
];
const ReferralsSystem = () => {
  const [currentUserType, setCurrentUserType] = useState("first_type");

  const usertype: any = {
    first_type: "Regular Users",
    second_type: "Corporate Users",
  };

  const handleNextUserType = () => {
    const userKeys = Object.keys(usertype);

    const currentUser = userKeys.indexOf(currentUserType);

    const nextUserType = (currentUser + 1) % userKeys.length;

    setCurrentUserType(userKeys[nextUserType]);
  };

  const handlePreviousUserType = () => {
    const userKeys = Object.keys(usertype);

    const currentUser = userKeys.indexOf(currentUserType);

    const previousUserType =
      (currentUser - 1 + userKeys.length) % userKeys.length;

    setCurrentUserType(userKeys[previousUserType]);
  };
  return (
    <main className='mt-7 mx-7 mb-28'>
      <SubHeaders placeholder='email' route='/dashboard' title='Referrals' />
      <div className='flex flex-col items-center '>
        <div className='flex items-center justify-between mt-3 w-full'>
          <div className='flex items-center gap-2'>
            <span className='text-darkblue font-normal text-[14px]'>
              {usertype[currentUserType]}
            </span>
            <div className='flex flex-col gap-1'>
              <img
                alt=''
                className='scale-y-[-1] cursor-pointer'
                height={10}
                onClick={handlePreviousUserType}
                src={BLUE_ARROW_DOWN}
                width={10}
              />
              <img
                alt=''
                className=' cursor-pointer'
                onClick={handleNextUserType}
                src={BLUE_ARROW_DOWN}
              />
            </div>
          </div>

          <div>
            <ButtonV2
              btnStyle=' flex items-center w-full h-full py-3 px-2 gap-3 rounded-md border  border-[#C2E0FF] '
              handleClick={() => {}}
              icon={<FaPlus />}
              iconStyle='text-[#3670D4] text-[10px]'
              textStyle='text-[#3670D4] text-[12px] font-medium'
              title='Create referral task'
            />
          </div>
        </div>
        <div>
          <ReferalsTable data={TABLE_DATA} />
        </div>
      </div>
    </main>
  );
};

export default ReferralsSystem;
