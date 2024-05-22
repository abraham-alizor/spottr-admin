/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

import { listingsdata } from "@/fake_data";
import ButtonV2 from "@/shared/components/buttonV2";
import DeleteModal from "@/shared/components/deletemodal";
import SubNav from "@/shared/components/sub_nav";
import SubHeaders from "@/shared/components/subheaders";
import { BLUE_RIGHT_ARROW, CHECK_2, FORM_CLOSE_BTN } from "@/utils/Exports";

const subnavlinks = [
  {
    label: "Spottr lists",
    state: "Spottr-lists",
  },

  {
    label: "Corporate account lists",
    state: "Corporate-account-lists",
  },
];

const distributionLists = [
  { id: "1", username: "@joseph" },
  { id: "2", username: "@olumide" },
  { id: "3", username: "@joseph" },
  { id: "4", username: "@olumide" },
  { id: "5", username: "@joseph" },
  { id: "6", username: "@gerald" },
  { id: "7", username: "@joseph" },
  { id: "8", username: "@gerald" },
];

function AllLists() {
  const [selected, setSelected] = useState("Spottr-lists");
  const [selectedList, setSelectedList] = useState<string | null>(null);
  const [modal, setModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState<any>(null);
  const [text, setText] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  const maxTextLimit = 300;

  const handleImageChange = (event: any) => {
    // onchange for the image upload
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);

    const reader = new FileReader();

    reader.addEventListener("load", () => {
      if (typeof reader.result === "string") {
        setPreviewImage(reader.result);
      }
    });

    reader.readAsDataURL(imageFile);
  };
  console.log(selectedImage);

  return (
    <main className='mx-8 mt-6 relative mb-20'>
      <SubHeaders
        placeholder='products'
        route='/opportunities'
        title='All lists'
      />
      <div className='mt-9 flex justify-between'>
        <div>
          <SubNav
            gutter='gap-[9rem]'
            handleSelected={setSelected}
            navLinks={subnavlinks}
            selected={selected}
            textsize='text-[11.1px]'
            textStyle='font-semibold'
          />
        </div>
        <div className=' flex gap-7'>
          <ButtonV2
            btnStyle='flex gap-6 items-center border border-[#C2E0FF] border-opacity-15 rounded-lg py-3 px-5'
            handleClick={() => setShowForm(true)}
            iconStyle='text-xs text-[#FF0000] ml-7'
            image={BLUE_RIGHT_ARROW}
            textStyle='text-xs text-[#3670D4] font-semibold'
            title='Create list'
          />
          <ButtonV2
            btnStyle='flex gap-6 items-center border border-branded  border-opacity-15 rounded-lg py-3 px-5'
            handleClick={() => setModal(true)}
            icon={<FaTimes />}
            iconStyle='text-[11.1px] text-branded ml-5'
            textStyle='text-[11.1px] text-[#FF4B3E] font-semibold'
            title='Delete list'
          />
        </div>
      </div>
      <div className='flex gap-20 items-start'>
        <div className='w-[600px] mt-8'>
          <div className='grid grid-cols-2 gap-3'>
            {listingsdata.map((data) => (
              <div className='relative'>
                <img
                  alt=''
                  className='w-[290px] h-[115px]'
                  src={data.bg_image}
                />
                <div className='w-[269.29px] h-[60.24px] top-9 rounded-lg text-white text-[15px] font-bold flex justify-center items-center gap-1 right-4 absolute bg-[#00000040] bg-opacity-[25%] shadow-[0px, 7.2px, 28.78px, 0px, rgba(96, 100, 112, 0.1)]'>
                  <span>{`${data.location}: `}</span> <span> {data.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {showForm && (
          <div className='bg-white w-[377px] h-[600px] overflow-y-scroll rounded-xl mt-6 shadow-blur'>
            <div className='flex flex-col items-end px-7 pt-8 pb-9'>
              <ButtonV2
                btnStyle=''
                handleClick={() => setShowForm(false)}
                image={FORM_CLOSE_BTN}
                textStyle=''
                title=''
              />

              <div className='w-full'>
                <div className='flex flex-col gap-5'>
                  <span className='text-[14px] font-semibold text-darkblue'>
                    Create an launch ad
                  </span>
                  <input
                    className='w-[312px] h-[54px] px-4 outline-none bg-[#F8F8F8] rounded-lg placeholder:text-[#C4C4C4] placeholder:text-xs'
                    placeholder='Duration by number of hours or days'
                    type='text'
                  />
                  <div className='flex flex-col relative'>
                    <textarea
                      className='bg-[#F8F8F8] w-[312px] h-[101px] py-4  outline-none px-4 rounded-lg placeholder:text-[#C4C4C4] placeholder:text-xs'
                      id=''
                      maxLength={maxTextLimit}
                      name=''
                      onChange={handleTextChange}
                      placeholder='Ad Text'
                      value={text}
                    />
                    <span
                      className={`text-[10px] ${text.length >= 250 ? "text-branded" : "text-darkblue"} absolute right-2 -bottom-4`}
                    >
                      {text.length < 10 ? `0${text.length}` : text.length}/
                      {maxTextLimit}
                    </span>
                  </div>
                  {previewImage ? (
                    <img
                      alt=''
                      className='w-[312px] h-[87px] rounded-lg'
                      src={previewImage}
                    />
                  ) : (
                    <div className='border border-[#061E48] overflow-hidden rounded-lg border-dashed w-[312px] h-[87px] flex justify-center items-center'>
                      <span
                        className='w-[236px] break-words text-center text-darkblue text-opacity-[90%] font-normal cursor-pointer'
                        onClick={() =>
                          // @ts-ignore
                          document.querySelector(".image-input").click()
                        }
                      >
                        Click here to upload a picture (Dimension : 200 x 300
                        px)
                      </span>
                      <input
                        accept='*/image/*'
                        className='sr-only image-input'
                        onChange={handleImageChange}
                        type='file'
                      />
                    </div>
                  )}

                  <div className='mt-7 flex flex-col gap-3'>
                    <label
                      className='text-[13.5px] text-darkblue text-opacity-[90%] font-normal'
                      htmlFor='text'
                    >
                      Select interests (optional)
                    </label>
                    <input
                      className='w-[312px] h-[54px] px-4 outline-none bg-[#F8F8F8] rounded-lg placeholder:text-[#C4C4C4] placeholder:text-xs'
                      placeholder='Start typing'
                      type='text'
                    />
                  </div>
                  <div className='flex flex-col gap-3'>
                    <span className='text-[13.5px] text-darkblue text-opacity-[90%] font-normal'>
                      Choose a distribution list to create launch ad
                    </span>
                    <div className='grid grid-cols-2 gap-2'>
                      {distributionLists.map((data_) => (
                        <div
                          className='w-[148px] h-[31px] relative rounded-md bg-[#ECF7FF] flex items-start px-3 pt-2 cursor-pointer'
                          key={data_.id}
                          onClick={() => setSelectedList(data_.id)}
                        >
                          <span className='text-[9px] text-[#C4C4C4]'>
                            {data_.username}
                          </span>
                          {selectedList === data_.id && (
                            <img
                              alt=''
                              className='absolute -right-1 -top-2'
                              src={CHECK_2}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='flex justify-center items-center mt-5'>
                    <span className='text-[13.5px] text-darkblue text-opacity-[90%]'>
                      You are to pay: $5000
                    </span>
                  </div>
                  <div>
                    <ButtonV2
                      btnStyle='w-[311.82px] h-[55px] bg-darkblue rounded-md'
                      handleClick={() => {}}
                      textStyle='text-white text-[16px] font-semibold'
                      title='Submit'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <DeleteModal
        close={() => setModal(false)}
        handleDelete={() => {}}
        open={modal}
        text='Do you really want to delete this listing? This process cannot be undone.'
      />
    </main>
  );
}

export default AllLists;
