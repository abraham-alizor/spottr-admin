import React from "react";

import { faketray } from "@/fake_data";
import BoxContainer from "@/shared/components/boxcontainer";
import InputLayout from "@/shared/components/inputLayout";
import Inputs from "@/shared/components/inputLayout/Inputs";
import TextArea from "@/shared/components/inputLayout/Textarea";

function Informationals() {
  return (
    <main className='flex gap-10'>
      <BoxContainer data={faketray} Page='Page' title='Informational' />
      <InputLayout title='Publish new info '>
        <div className='flex flex-col gap-4'>
          <Inputs
            name=''
            onchange={() => {}}
            placeholder='Info target page'
            type='text'
            value=''
          />
          <TextArea
            name=''
            onchange={() => {}}
            placeholder='Text + media'
            value=''
          />
        </div>
      </InputLayout>
    </main>
  );
}

export default Informationals;
