/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";

import { faketray } from "@/fake_data";
import BoxContainer from "@/shared/components/boxcontainer";
import InputLayout from "@/shared/components/inputLayout";
import Inputs from "@/shared/components/inputLayout/Inputs";
import TextArea from "@/shared/components/inputLayout/Textarea";

function Trays() {
  return (
    <main className='flex gap-10'>
      <BoxContainer data={faketray} title='Trays' Title='Title' />
      <InputLayout title='Publish new tray update '>
        <div className='flex flex-col gap-4'>
          <Inputs name='' placeholder='Tray page' type='text' />
          <Inputs name='' placeholder='Title' type='text' />
          <TextArea name='' placeholder='Text + media' />
        </div>
      </InputLayout>
    </main>
  );
}

export default Trays;
