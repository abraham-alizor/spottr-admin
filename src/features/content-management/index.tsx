/* eslint-disable no-console */
/* eslint-disable no-new */

/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaCheck, FaPlus, FaTimes } from "react-icons/fa";
import { useMutation, useQuery } from "react-query";

import {
  Informationals,
  Onboarding,
  TermsAndCondition,
  Trays,
} from "@/features/content-management/contents";
import {
  CreateInterestApi,
  DeleteInterestApi,
  GetInterestApi,
} from "@/services/interest/interest.service";
import { CreatetermsAndConditon } from "@/services/terms/service";
import { GetAlTrays } from "@/services/trays/service";
import ButtonV2 from "@/shared/components/buttonV2";
import Modal from "@/shared/components/Modal";
import ModalV2 from "@/shared/components/modalV2";
import SubHeaders from "@/shared/components/subheaders";
import {
  ALERT_ICON,
  DARK_BLUE_ARROW,
  GO_BACK,
  LIGHT_BLUE_ARROW,
  LINE,
  NIGERIA_FLAG,
  TASK_IMAGE,
  UPLOAG_IMAGE_ICON,
} from "@/utils/Exports";

const contents = [
  {
    title: "Terms and Condition",
    component: <TermsAndCondition />,
  },
  {
    title: "Trays",
    component: <Trays />,
  },
  {
    title: "Informationals",
    component: <Informationals />,
  },
  {
    title: "Onboarding",
    component: <Onboarding />,
  },
];
const ContentManagement = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const [text, setText] = useState("");
  const [tipsTab, setTipsTab] = useState(true);
  const [interestTab, setInterestTab] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [modal, setModal] = useState(false);
  const [selectorBox, setSelectorBox] = useState(false);
  const [selectedBox, setSelectedBox] = useState<any>([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>([]);
  // const [previewImage, setPreviewImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const {
    data: interests,
    isLoading,
    refetch,
  } = useQuery("interests", GetInterestApi);
  const { data: adminTrays } = useQuery("trays", GetAlTrays);
  const [data, setData] = useState(interests);
  const termsMutation = useMutation(CreatetermsAndConditon);
  const postInterest = useMutation(CreateInterestApi);
  const deleteInterest = useMutation(DeleteInterestApi);

  const parseUrlToOriginalState = (url: string) => {
    const urlString = new URL(url);
    return decodeURIComponent(urlString.pathname.slice(1));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {
      // VALIDATING ABOVE 1MB

      if (selectedFile.size > 1_000_000) {
        setSelectedImage([]);
      } else {
        setSelectedImage([
          Object.assign(selectedFile, {
            preview: URL.createObjectURL(selectedFile),
          }),
        ]);
      }
    }
  };

  const handleCreateInterest = async () => {
    const formdata = new FormData();

    formdata.append("name", name);

    formdata.append("displayImage", selectedImage[0]);
    try {
      const response = await postInterest.mutateAsync(formdata);
      if (response) {
        toast.success(response?.message);
        setModal(false);
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  const previewimage = selectedImage.map((item: any) => (
    <img alt='' src={item?.preview} />
  ));

  const handleSelector = (id: any) => {
    setSelectedBox((prevboxes: any[]) => {
      if (prevboxes.includes(id)) {
        return prevboxes.filter((box_id) => box_id !== id);
      }
      return [...prevboxes, id];
    });
  };

  const handleDelete = async () => {
    try {
      // wait for all the delete API calls to complete
      await Promise.all(
        selectedBox.map(async (id: string) => {
          const response = await deleteInterest.mutateAsync(id);

          if (response) {
            toast.success(response?.message);
          }
        }),
      );

      // Filter out deleted items from the data
      const updatedData = data?.filter(
        (_data: any) => !selectedBox.includes(_data.id),
      );
      setData(updatedData);

      // Clear selection and other states
      setSelectedBox([]);
      setSelectorBox(false);
      setDeleteModal(false);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleTitleSelect = (title_: string) => {
    setSelectedTab(title_);

    const renderedConponent = contents.find(
      (item) => item.title === title_,
    )?.component;
    // @ts-ignore
    setSelectedComponent(renderedConponent || null);
    setTipsTab(false);
  };

  const createTerms = async () => {
    const formData = new FormData();
    formData.append("text", text);

    try {
      // @ts-ignore
      const response = await termsMutation.mutateAsync(formData);
      if (response) {
        toast.success(response?.message);
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <main className='mx-7 mt-7 mb-28'>
      <SubHeaders
        placeholder='tasks'
        route='/dashboard'
        title='Content Management'
      />
      <div className='flex justify-between items-center'>
        <div className='border-b border-[#C2E0FF] w-[398px] mt-6 flex gap-9'>
          <span
            className={` px-5 pb-3 text-darkblue ${tipsTab ? "border-darkblue  border-b-2" : ""}  font-medium cursor-pointer`}
            onClick={() => {
              setTipsTab(true);
              setInterestTab(false);
            }}
          >
            Tips and feedback
          </span>
          <span
            className={` px-5 pb-3 text-darkblue ${interestTab ? "border-darkblue  border-b-2" : ""}  font-medium cursor-pointer`}
            onClick={() => {
              setInterestTab(true);
              setTipsTab(false);
            }}
          >
            Interests
          </span>
        </div>
        {interestTab && (
          <div className='flex gap-3 mt-4'>
            <ButtonV2
              btnStyle='flex gap-3 items-center border rounded-md border-[#C2E0FF] py-2 px-2'
              handleClick={() => setModal(true)}
              icon={<FaPlus />}
              iconStyle='text-xs text-[#3670D4]'
              textStyle='text-[#3670D4]'
              title='Create new interest'
            />
            <ButtonV2
              btnStyle='flex gap-3 items-center border rounded-md border-branded py-2 px-2'
              handleClick={() => setSelectorBox(true)}
              icon={<FaTimes />}
              iconStyle='text-xs text-branded'
              textStyle='text-branded'
              title='Delete Interest'
            />
          </div>
        )}
      </div>

      <div
        className={`flex justify-between ${interestTab ? "  items-end" : ""} mt-10`}
      >
        <div>
          <div className='flex gap-5 items-center border-b w-[290px] border-[#E7E7E7] pb-4'>
            <div
              className='w-[31px] h-[31px] rounded-full bg-[#ECF7FF] flex justify-center items-center'
              onClick={createTerms}
            >
              <span className='text-darkblue'>+</span>
            </div>
            <img alt='' src={LINE} />
            {/* <span className='text-black text-opacity-70 text-sm'>Add new</span> */}
            <input
              className='text-black text-opacity-70 text-sm outline-none bg-transparent'
              onChange={(event_: React.ChangeEvent<HTMLInputElement>) =>
                setText(event_.target.value)
              }
              placeholder='Add new'
              type='text'
              value={text}
            />
          </div>
          {interestTab ? (
            <div className='mt-4 flex flex-col gap-5'>
              {interests?.data?.map((data_: any) => (
                <div
                  className='flex gap-5 items-center border-b pb-3'
                  key={data_.id}
                >
                  {selectorBox && (
                    <div
                      className='w-5 h-5 rounded-md flex justify-center items-center  border-2 border-darkblue   cursor-pointer'
                      onClick={() => handleSelector(data_.id)}
                    >
                      {selectedBox.includes(data_.id) ? (
                        <span className='text-darkblue text-sm z-30'>
                          <FaCheck />
                        </span>
                      ) : null}
                    </div>
                  )}
                  <div className='w-[31px] h-[31px] bg-[#ECF7FF] rounded-full flex justify-center items-center'>
                    <img
                      alt=''
                      height={20}
                      src={data_.displayImage}
                      width={20}
                    />
                  </div>
                  <span className='font-medium text-darkblue'>
                    {data_.name}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className='mt-5 flex flex-col gap-6'>
              {contents.map((cont_: any) => (
                <div
                  className={`flex justify-between border-b cursor-pointer ${(tipsTab && cont_.title === "Profile setting instruction") || (selectedTab === cont_.title && !tipsTab) ? "border-[#3670D4] border-opacity-40" : ""} pb-3 px-1`}
                  onClick={() => handleTitleSelect(cont_.title)}
                >
                  <span
                    className={`font-medium  ${(tipsTab && cont_.title === "Profile setting instruction") || (selectedTab === cont_.title && !tipsTab) ? "text-[#3670D4]" : "text-darkblue"}`}
                    // @ts-ignore
                  >
                    {cont_.title}
                  </span>
                  {(tipsTab && cont_.title === "Profile setting instruction") ||
                  (selectedTab === cont_.title && !tipsTab) ? (
                    <img alt='' height={10} src={LIGHT_BLUE_ARROW} width={10} />
                  ) : (
                    <img alt='' height={10} src={DARK_BLUE_ARROW} width={10} />
                  )}
                </div>
              ))}
              <div
                className={`flex justify-between border-b cursor-pointer ${tipsTab ? "border-[#3670D4] border-opacity-40" : ""} pb-3 px-1`}
                onClick={() => setTipsTab(true)}
              >
                <span
                  className={`font-medium  ${tipsTab ? "text-[#3670D4]" : "text-darkblue"}`}
                  // @ts-ignore
                >
                  Profile setting instruction
                </span>
                {tipsTab ? (
                  <img alt='' height={10} src={LIGHT_BLUE_ARROW} width={10} />
                ) : (
                  <img alt='' height={10} src={DARK_BLUE_ARROW} width={10} />
                )}
              </div>
            </div>
          )}
        </div>
        <Transition
          as='div'
          enter='transition-transform ease-out duration-300'
          enterFrom='translate-y-full'
          enterTo='translate-y-0'
          leave='transition-transform ease-in duration-200'
          leaveFrom='translate-y-0'
          leaveTo='translate-y-full'
          show={tipsTab || selectedComponent !== null}
        >
          {tipsTab ? (
            <div className='flex gap-10'>
              <div>
                <div className='w-[442px] h-[240px] bg-[#F8F8F8] rounded-md px-4 py-6'>
                  <div className='flex justify-between items-center mb-10'>
                    <span className='text-black font-medium text-sm'>
                      Tips:
                    </span>
                    <span className='text-darkblue font-medium text-sm'>
                      0/200
                    </span>
                  </div>
                  <span className='text-sm text-[#000000B2] '>
                    I’ve worked directly, indirectly with these brands Either
                    part time, full time, campaign, accelerator, branding or
                    product design
                  </span>
                </div>
                <ButtonV2
                  btnStyle='float-right mt-4'
                  handleClick={() => {}}
                  textStyle='text-darkblue font-medium'
                  title='Save'
                />
              </div>
              <div>
                <div className='w-[350px] h-full bg-white border-[6px] border-[#D0D0D0] rounded-xl px-10 py-10'>
                  <div className='flex gap-5'>
                    <img alt='' src={GO_BACK} />
                    <span className='text-sm text-darkblue font-normal'>
                      Profile Settings
                    </span>
                  </div>
                  <div className='flex flex-col items-end gap-10'>
                    <div>
                      <ButtonV2
                        btnStyle='float-right mt-4'
                        handleClick={() => {}}
                        textStyle='text-darkblue font-medium'
                        title='Finish'
                      />
                    </div>
                    <div className='flex justify-start gap-4'>
                      <ButtonV2
                        btnStyle='bg-darkblue px-2 pb-1 rounded-md'
                        handleClick={() => {}}
                        textStyle='text-white font-normal text-[10px]'
                        title='Contact'
                      />
                      <ButtonV2
                        btnStyle='border rounded-md px-2 pb-1 '
                        handleClick={() => {}}
                        textStyle='text-darkblue font-normal text-[10px]'
                        title='Customize Profile'
                      />
                      <ButtonV2
                        btnStyle='border rounded-md px-2 pb-1'
                        handleClick={() => {}}
                        textStyle='text-darkblue font-normal text-[10px]'
                        title='Verification'
                      />
                    </div>
                  </div>
                  <div
                    className='flex justify-center items-center flex-col mt-6 gap-3'
                    onClick={() =>
                      // @ts-ignore
                      document.querySelector(".image-input").click()
                    }
                  >
                    <img alt='' className='rounded-full' src={TASK_IMAGE} />
                    <span className='text-darkblue text-xs'>
                      Upload new photo
                    </span>
                    <input
                      accept='*/image/*'
                      className='image-input'
                      hidden
                      type='file'
                    />
                  </div>
                  <form action='' className='mt-7'>
                    <span className='text-xs font-medium'>Contact Details</span>
                    <div className='flex flex-col gap-4 mt-4'>
                      <input
                        className='bg-[#F8F8F8] outline-none w-full h-full py-3 px-3 rounded-md placeholder:text-xs placeholder:text-[#C4C4C4]'
                        placeholder='Abdul'
                        type='text'
                      />
                      <input
                        className='bg-[#F8F8F8] outline-none w-full h-full py-3 px-3 rounded-md placeholder:text-xs placeholder:text-[#C4C4C4]'
                        placeholder='Mashir'
                        type='text'
                      />
                      <div className=' bg-[#F8F8F8]  w-full h-full py-3 px-3 rounded-md'>
                        <input
                          className='bg-transparent outline-none placeholder:text-xs placeholder:text-[#C4C4C4]'
                          placeholder='adedamolamoses@gmail.com'
                          type='text'
                        />
                        <span className='text-xs text-[#5FC146] font-medium'>
                          verified
                        </span>
                      </div>
                      <div className='flex justify-between'>
                        <div className='flex items-center bg-[#F8F8F8] w-[170.42px] px-2 rounded-md gap-2'>
                          <img alt='' src={NIGERIA_FLAG} />
                          <span className='text-xs font-medium'>+234</span>
                          <input
                            className='bg-transparent outline-none w-full text-xs placeholder:text-xs placeholder:text-[#C4C4C4]'
                            placeholder='8172378079'
                            type='text'
                          />
                        </div>
                        <ButtonV2
                          btnStyle=''
                          handleClick={() => {}}
                          textStyle='text-[7px] text-[#FF4B3E]'
                          title='verify now'
                        />
                      </div>
                    </div>
                    <div className='mt-7 flex items-start gap-2 '>
                      <img alt='' src={ALERT_ICON} />
                      <span className='text-[12px] text-darkblue text-start'>
                        Type in your correct name and use a good photo, make
                        sure it is clear so that it will increases your chance
                        of getting good gigs
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : interestTab ? (
            <div
              className={`flex gap-4 ${selectedBox.length === 0 ? "opacity-35" : "opacity-100"}`}
            >
              <ButtonV2
                btnStyle='border border-[#3670D4] rounded-md py-3 px-6  w-[8vw]'
                handleClick={() => setSelectorBox(false)}
                textStyle='text-darkblue'
                title='Cancel'
              />
              <ButtonV2
                btnStyle='bg-darkblue  rounded-md py-3 px-6 w-[8vw]'
                handleClick={() => setDeleteModal(true)}
                textStyle='text-white'
                title='Finish'
              />
            </div>
          ) : (
            selectedComponent
          )}
        </Transition>
      </div>
      <Modal
        edges='rounded-sm'
        isBTnTrue
        isClose={() => setModal(false)}
        isOpen={modal}
        maxWidth='w-[672px]'
      >
        <div className='px-14 flex flex-col pt-[3rem]'>
          <span className='flex float-left text-darkblue font-medium text-lg'>
            New interest icon
          </span>
          <div
            className='flex justify-center items-center flex-col gap-4 mt-12 cursor-pointer'
            // @ts-ignore
            onClick={() => document.querySelector(".image-input").click()}
          >
            <div className='flex flex-col justify-center items-center w-[50px] h-[50px] rounded-md border border-darkblue'>
              {selectedImage.length > 0 ? (
                previewimage
              ) : (
                <img alt='' height={20} src={UPLOAG_IMAGE_ICON} width={20} />
              )}
            </div>
            {selectedImage.length === 0 && (
              <span className='text-sn font-normal text-darkblue'>
                Upload icon
              </span>
            )}
            <input
              accept='*/image/*'
              className='image-input sr-only'
              onChange={handleImageChange}
              type='file'
            />
          </div>
          <div>
            <input
              className='w-full px-4 outline-none placeholder:text-darkblue text-sm bg-input_color mt-5 py-4 rounded-md'
              name='name'
              onChange={(event_: React.ChangeEvent<HTMLInputElement>) =>
                setName(event_.target.value)
              }
              placeholder='New interest name'
              type='text'
            />
          </div>
          <div>
            <ButtonV2
              btnStyle='bg-darkblue w-[252px] h-[53px] my-12 rounded-md'
              handleClick={handleCreateInterest}
              textStyle='text-white'
              title='Add interest'
            />
          </div>
        </div>
      </Modal>
      <ModalV2
        closeBtnColor=''
        edges='rounded-md'
        isBTnTrue={false}
        isClose={() => setDeleteModal(false)}
        isOpen={deleteModal}
        maxWidth='w-[330px]'
      >
        <div className='flex flex-col gap-5'>
          <span className='text-xl text-darkblue  '>Delete Interest?</span>
          <hr />
          <div className='max-w-[200px] flex self-center'>
            <span className='text-sm text-[#4C596F]'>
              Are you sure you want to delete these interests?
            </span>
          </div>

          <div className='border-t flex'>
            <ButtonV2
              btnStyle='w-full'
              handleClick={() => setDeleteModal(false)}
              textStyle='text-darkblue font-medium'
              title='No'
            />
            <ButtonV2
              btnStyle='w-full bg-darkblue h-[7vh]'
              handleClick={handleDelete}
              textStyle='text-white font-medium'
              title='Yes'
            />
          </div>
        </div>
      </ModalV2>
    </main>
  );
};

export default ContentManagement;
