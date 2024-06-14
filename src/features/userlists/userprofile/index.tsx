/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

import TransactionActivities from "@/features/userlists/transaction_act";
import UserActivities from "@/features/userlists/user_act";
import Profile from "@/features/userlists/userprofile/profile";
import { GetUserById } from "@/services/users/users.service";
import ButtonV2 from "@/shared/components/buttonV2";
import PageHeader from "@/shared/components/pageheader";
import SubNav from "@/shared/components/sub_nav";
import { ROUND_BLUE_ARROW } from "@/utils/Exports";

const subnavLinks = [
  {
    state: "user-profile",
    label: "Profile",
  },
  {
    state: "user-transactions",
    label: "Transaction activities",
  },
  {
    state: "user-activities ",
    label: "User Activities ",
  },
];
function UserProfile() {
  const [selected, setSelected] = useState("user-profile");
  const [modal, setModal] = useState(false);
  const [urlParams] = useSearchParams();
  const userid = urlParams.get("idref");
  const { data: userId, refetch: userIRefetch } = useQuery(
    ["userId", userid],
    () =>
      // @ts-ignore
      GetUserById(userid),
  );

  console.log(userId);

  const sections =
    selected === "user-profile" ? (
      <Profile userId={userId?.data} />
    ) : selected === "user-transactions" ? (
      <TransactionActivities
        modal={modal}
        setModal={setModal}
        userId={userId?.data}
      />
    ) : selected === "user-activities" ? (
      <UserActivities />
    ) : (
      <UserActivities />
    );
  return (
    <main className='mt-7 mx-7 mb-20'>
      <PageHeader route='/userslist' />

      <div className='flex items-center justify-between mt-5'>
        <SubNav
          gutter=''
          handleSelected={setSelected}
          navLinks={subnavLinks}
          selected={selected}
          textsize='text-[12px] font-semibold'
        />
        {selected === "user-profile" ? (
          <>
            <span className='text-[20px] flex-1 ml-[7rem] text-darkblue font-semibold'>
              Performance
            </span>
            <span className='text-xl flex-1 ml-[7rem] font-semibold text-darkblue mb-3'>
              Highlights
            </span>
          </>
        ) : selected === "user-transactions" ? (
          <ButtonV2
            btnStyle='flex flex-row-reverse items-center gap-4'
            handleClick={() => setModal(true)}
            image={ROUND_BLUE_ARROW}
            textStyle='font-[700] text-[19.75px] text-darkblue'
            title='Make Settlement'
          />
        ) : null}
      </div>

      {sections}
    </main>
  );
}

export default UserProfile;
