/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

import { faketray } from "@/fake_data";
import { CreateTraysApi } from "@/services/trays/service";
import BoxContainer from "@/shared/components/boxcontainer";
import InputLayout from "@/shared/components/inputLayout";
import Inputs from "@/shared/components/inputLayout/Inputs";
import TextArea from "@/shared/components/inputLayout/Textarea";

function Trays() {
  const formdata = {
    title: "",
    text: "",
    page: "",
  };
  const [initialData, setInitialData] = useState(formdata);
  const createtraymutation = useMutation(CreateTraysApi);

  const handleChange = (
    event_: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event_.target;
    setInitialData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const createtray = async () => {
    try {
      const payload = {
        title: initialData.title,
        text: initialData.text,
        page: initialData.page,
      };
      console.log("page has been set", payload);
      // @ts-ignore
      const response = await createtraymutation.mutateAsync(payload);

      if (response) {
        toast.success(response?.message);
        setInitialData({
          page: "",
          text: "",
          title: "",
        });
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <main className='flex gap-10'>
      <BoxContainer data={faketray} title='Trays' Title='Title' />
      <InputLayout handleClick={createtray} title='Publish new tray update'>
        <div className='flex flex-col gap-4'>
          <Inputs
            name='page'
            onchange={handleChange}
            placeholder='Tray page'
            type='text'
            value={initialData.page}
          />
          <Inputs
            name='title'
            onchange={handleChange}
            placeholder='Title'
            type='text'
            value={initialData.title}
          />
          <TextArea
            name='text'
            onchange={handleChange}
            placeholder='Text + media'
            value={initialData.text}
          />
        </div>
      </InputLayout>
    </main>
  );
}

export default Trays;
