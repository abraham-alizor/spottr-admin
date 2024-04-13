import React from "react";

import { adsData } from "@/fake_data";
import AdsComponent from "@/shared/components/adscomponent";
import ButtonV2 from "@/shared/components/buttonV2";
import PageHeader from "@/shared/components/pageheader";
import { WALLET_1, WALLET_2, WALLET_3 } from "@/utils/Exports";

function AdSections() {
  return (
    <main className='mx-6 my-6'>
      <div className='flex justify-between items-center'>
        <PageHeader
          isSubtitle
          route='/dashboard'
          subtitle='Running Ads'
          title='Ad section'
        />
        <ButtonV2
          btnStyle='border border-[#3670D4] rounded-md mr-9 py-3 text-sm px-4 w-[10vw]'
          handleClick={() => {}}
          textStyle='text-darkblue'
          title='Approvals'
        />
      </div>
      <div className='mt-6 mx-9 flex gap-7 items-center'>
        <AdsComponent
          AdsData={adsData}
          adsName='Map Takeover'
          adsruunin='10'
          headerBgColor='bg-[#FF725F1A]'
          icon={WALLET_1}
        />
        <AdsComponent
          AdsData={adsData}
          adsName='Product List'
          adsruunin='10'
          headerBgColor='bg-[#AED5811A]'
          icon={WALLET_2}
        />
        <AdsComponent
          AdsData={adsData}
          adsName='App Banner'
          adsruunin='10'
          headerBgColor='bg-[#FFCB5F1A]'
          icon={WALLET_3}
        />
      </div>
    </main>
  );
}

export default AdSections;
