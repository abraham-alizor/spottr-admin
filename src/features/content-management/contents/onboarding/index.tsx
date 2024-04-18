/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";

import { faketray } from "@/fake_data";
import BoxContainer from "@/shared/components/boxcontainer";
import InputLayout from "@/shared/components/inputLayout";
import Inputs from "@/shared/components/inputLayout/Inputs";

function Onboarding() {
  return (
    <main className='flex gap-10'>
      <BoxContainer data={faketray} Title='Title' title='Onboarding' />
      <InputLayout title='Publish onboarding info  '>
        <div className='flex flex-col gap-4'>
          <Inputs name='' placeholder='Title' type='text' />
          <Inputs name='' placeholder='Title' type='text' />
          <Inputs name='' placeholder='Text' type='text' />
        </div>
      </InputLayout>
    </main>
  );
}

export default Onboarding;
