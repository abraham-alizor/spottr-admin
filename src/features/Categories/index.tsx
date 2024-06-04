/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import { FaCheck, FaPlus } from "react-icons/fa";
import { useQuery } from "react-query";

import { dropdowndata } from "@/fake_data";
import { GetAllCateGoriesApi } from "@/services/categories/service";
import ButtonV2 from "@/shared/components/buttonV2";
import DropDownV3 from "@/shared/components/dropdownV3";
import Modal from "@/shared/components/Modal";
import ModalV2 from "@/shared/components/modalV2";
import SubHeaders from "@/shared/components/subheaders";
import {
  BLUE_ARROW_DOWN,
  RED_ARROW_RIGHT,
  UPLOAG_IMAGE_ICON,
  WEB_SYMBOL,
} from "@/utils/Exports";

function Categories() {
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [check, setCheck] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const { data: CategoriesData } = useQuery("categories", GetAllCateGoriesApi);

  // eslint-disable-next-line no-console
  console.log(CategoriesData);

  return (
    <main className='mx-7 mt-7 mb-40'>
      <SubHeaders placeholder='tasks' route='/dashboard' title='Categories' />
      <div className='flex float-right mt-6 gap-7'>
        <ButtonV2
          btnStyle='flex items-center gap-3 border border-[#C2E0FF] py-3 px-3 rounded-md'
          handleClick={() => setModal(true)}
          icon={<FaPlus />}
          iconStyle='text-[10px] text-[#3670D4]'
          textStyle='text-sm text-[#3670D4] font-medium'
          title='Create new category'
        />
        <ButtonV2
          btnStyle='flex items-center gap-3 border-[#FF4B3E] border py-3 px-3 rounded-md'
          handleClick={() => setDeleteModal(true)}
          iconStyle='text-xs text-[#FF4B3E] ml-7'
          image={RED_ARROW_RIGHT}
          textStyle='text-sm text-[#FF4B3E] font-medium'
          title='Delete Category'
        />
      </div>
      <div className='grid grid-cols-6 max-w-[670px] mt-[6rem] gap-5 mb-9'>
        {CategoriesData?.map((data: any) => (
          <div
            className='border border-[#9A9FBF40] border-opacity-25 flex flex-col gap-3 bg-white items-center justify-center py-3 rounded-md'
            key={data.id}
          >
            <img alt='' height={30} src={data.displayImage} width={30} />
            <span className='text-sm text-[#061E48] font-medium'>
              {data.name.length >= 5
                ? `${data.name.slice(0, 5)}...`
                : data.name}
            </span>
          </div>
        ))}
        <button
          className='bg-[#E1EFFB] rounded-md flex flex-col gap-3 items-center justify-center py-3 '
          type='button'
        >
          <img alt='' src={WEB_SYMBOL} />
          <span className='text-[#3670D4] font-medium text-sm '>
            Add title +
          </span>
        </button>
      </div>

      <div className='float-end mb-20  flex gap-4'>
        <ButtonV2
          btnStyle='border border-[#3670D4] rounded-md py-3 px-6  w-[8vw]'
          handleClick={() => {}}
          icon={undefined}
          iconStyle=''
          textStyle='text-darkblue'
          title='Cancel'
        />
        <ButtonV2
          btnStyle='bg-darkblue  rounded-md py-3 px-6 w-[8vw]'
          handleClick={() => {}}
          icon={undefined}
          iconStyle=''
          textStyle='text-white'
          title='Finish'
        />
      </div>
      <Modal
        edges='rounded-sm'
        isBTnTrue
        isClose={() => setModal(false)}
        isOpen={modal}
        maxWidth='w-[672px]'
      >
        <div className='flex flex-col px-10 py-14 ml-5'>
          <div className='self-start flex'>
            <span className='text-darkblue font-medium text-lg'>
              Add Category
            </span>
          </div>
          <div className='flex justify-center items-center flex-col gap-4'>
            <div
              className='w-[50px] h-[50px] border border-darkblue flex justify-center items-center rounded-md cursor-pointer'
              // @ts-ignore
              onClick={() => document.querySelector(".image-input").click()}
            >
              <img alt='' src={UPLOAG_IMAGE_ICON} />
            </div>
            <input
              accept='*/image/*'
              className='image-input'
              hidden
              type='file'
            />
            <span className='text-sm text-darkblue'>Upload images</span>
          </div>
          <div className='flex flex-col items-start mt-7 gap-5  relative'>
            <div className='w-[496px] h-[54px] bg-input_color flex items-start pt-4 px-12 rounded-md'>
              <input
                className='bg-transparent w-full outline-none placeholder:text-darkblue'
                placeholder='Category name'
                type='text'
              />
            </div>
            <div
              className='w-[496px] h-[54px] bg-input_color flex justify-between items-center  px-12 rounded-md cursor-pointer'
              onClick={() => setDropdown((previous) => !previous)}
            >
              <span className='text-darkblue'>{`${selectedCategory || " Specify parent catergory"}`}</span>
              <img alt='' src={BLUE_ARROW_DOWN} />
            </div>
            <DropDownV3
              classname='top-[7rem]'
              data={dropdowndata}
              isClose={() => setDropdown(false)}
              isOpen={dropdown}
              setSelected={setSelectedCategory}
              width='w-[496px]'
            />
            <div className='flex items-center gap-4'>
              <div
                className='w-[19px] h-[18px] flex justify-center items-center rounded-md border-darkblue border-2 cursor-pointer'
                onClick={() => setCheck((previous) => !previous)}
              >
                {check ? (
                  <span>
                    <FaCheck className='text-xs text-darkblue' />
                  </span>
                ) : null}
              </div>
              <span className='text-lg font-medium text-darkblue'>Premium</span>
            </div>
          </div>
          <div className='my-5'>
            <ButtonV2
              btnStyle='w-[252px] h-[53px] bg-darkblue mt-4 rounded-md'
              handleClick={() => {}}
              textStyle='text-white font-medium '
              title='Add category'
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
          <span className='text-xl text-darkblue  '>Delete Categories?</span>
          <hr />
          <div className='max-w-[200px] flex self-center'>
            <span className='text-sm text-[#4C596F]'>
              Are you sure you want to these categories?
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
              handleClick={() => {}}
              textStyle='text-white font-medium'
              title='Yes'
            />
          </div>
        </div>
      </ModalV2>
    </main>
  );
}

export default Categories;
