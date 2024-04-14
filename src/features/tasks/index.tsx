/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable unicorn/prefer-ternary */
/* eslint-disable no-else-return */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-self-compare */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable consistent-return */
import React, { useState } from "react";
import { FaPlus, FaTimes, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { template, users_tasks } from "@/fake_data";
import ActionModal from "@/shared/components/actionmodal";
import ButtonV2 from "@/shared/components/buttonV2";
import Modal from "@/shared/components/Modal";
import PageHeader from "@/shared/components/pageheader";
import ProductComponent from "@/shared/components/product-component";
import SearchFilterComponent from "@/shared/components/search_filter";
import SubNav from "@/shared/components/sub_nav";
import TaskComponent from "@/shared/components/taskcomponent";
import {
  FIRST_POSITION,
  SECOND_POSITION,
  THIRD_POSITION,
  USER_ONE,
  USER_THREE,
  USER_TWO,
} from "@/utils/Exports";

const navLinks = [
  {
    id: 1,
    label: "New",
    state: "new",
  },
  {
    id: 2,
    label: "Active",
    state: "active",
  },
  {
    id: 3,
    label: "Completed",
    state: "completed",
  },
];

function Tasks() {
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState(users_tasks);
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [selectedStatus, setSelectedStatus] = useState<string>("new");
  const [selectorBox, setSelectorkBox] = useState(false);
  const [selectedBoxes, setSelectedBoxes] = useState<any>([]);
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const filteredTasks = taskData.filter(
    (data) => data.status === selectedStatus,
  );
  // const statusUpdate = users_tasks.find((data) => data.status);
  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
  };

  const handleNavigate = () => {
    if (selectedTemplate) {
      navigate("/tasks/create-task");
    } else return null;
  };

  const handleSelector = (id: any) => {
    setSelectedBoxes((prevSelectedBox: any[]) => {
      if (prevSelectedBox.includes(id)) {
        return prevSelectedBox.filter((box_id: any) => box_id !== id);
      } else {
        return [...prevSelectedBox, id];
      }
    });
  };

  const handleDeleteTasks = () => {
    const updatedData = taskData.filter(
      (task) => !selectedBoxes.includes(task.id),
    );
    setTaskData(updatedData);
    setSelectedBoxes([]);
    setDeleteModal(false);
    setSelectorkBox(false);
  };

  return (
    <main className='mx-10 my-5'>
      <div className='flex justify-between items-center'>
        <PageHeader route='/dashboard' title='Tasks' />

        <SearchFilterComponent />
      </div>
      <div className='flex gap-5 relative'>
        <div className='flex flex-col items-center gap-2'>
          <img alt='img' src={USER_ONE} />
          <img
            alt=''
            className='absolute bottom-8'
            height={15}
            src={FIRST_POSITION}
            width={15}
          />
          <div className='flex flex-col items-center'>
            <span className='text-sm font-semibold text-[#061E48]'>
              John Tommy
            </span>
            <p className='text-[9px] text-[#929AA7]'>Lagos, Nigeria</p>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <img alt='img' src={USER_TWO} />
          <img
            alt=''
            className='absolute bottom-8'
            height={15}
            src={SECOND_POSITION}
            width={15}
          />
          <div className='flex flex-col items-center'>
            <span className='text-sm font-semibold text-[#061E48]'>
              John Tommy
            </span>
            <p className='text-[9px] text-[#929AA7]'>Lagos, Nigeria</p>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <img alt='img' src={USER_THREE} />
          <img
            alt=''
            className='absolute bottom-8'
            height={15}
            src={THIRD_POSITION}
            width={15}
          />
          <div className='flex flex-col items-center'>
            <span className='text-sm font-semibold text-[#061E48]'>
              John Tommy
            </span>
            <p className='text-[9px] text-[#929AA7]'>Lagos, Nigeria</p>
          </div>
        </div>
      </div>
      <div className='mt-7 relative flex justify-between items-center'>
        <SubNav
          handleSelected={handleStatusChange}
          navLinks={navLinks}
          selected={selectedStatus}
        />
        <div className='flex gap-10 items-center'>
          {selectorBox ? (
            <>
              <ButtonV2
                btnStyle='flex gap-6 items-center border border-[#FF4B3E]  border-opacity-15 rounded-lg py-3 px-5'
                handleClick={() => setSelectorkBox(false)}
                icon={<FaTimes />}
                iconStyle='text-xs  text-[#FF4B3E] ml-7'
                textStyle='text-sm text-[#FF4B3E]'
                title='Cancel'
              />
              <ButtonV2
                btnStyle='flex gap-6 items-center w-[13vw] border border-[#FF4B3E] border-opacity-15 rounded-lg py-3 px-5'
                handleClick={() => setDeleteModal(true)}
                icon={<FaTrash />}
                iconStyle='text-xs text-[#FF4B3E] '
                textStyle='text-sm text-[#FF4B3E]'
                title='Delete selected'
              />
            </>
          ) : (
            <>
              <ButtonV2
                btnStyle='flex gap-6 items-center border border-[#3670D4] border-opacity-15 rounded-lg py-3 px-5'
                handleClick={() => setModal(true)}
                icon={<FaPlus />}
                iconStyle='text-xs text-[#3670D4]'
                textStyle='text-sm text-[#3670D4]'
                title='Create a new task'
              />
              <ButtonV2
                btnStyle='flex gap-6 items-center w-[13vw] border border-[#FF4B3E] border-opacity-15 rounded-lg py-3 px-5'
                handleClick={() => setSelectorkBox(true)}
                icon={<FaTimes />}
                iconStyle='text-xs text-[#FF4B3E] ml-7'
                textStyle='text-sm text-[#FF4B3E]'
                title='Delete Task'
              />
            </>
          )}
        </div>
      </div>
      <TaskComponent
        handleSelector={handleSelector}
        selectedBox={selectedBoxes}
        selectedStatus={selectedStatus}
        selectorBox={selectorBox}
        setSelectedBox={setSelectedBoxes}
        taskData={filteredTasks}
      />
      <Modal
        closeBtnColor=''
        isBTnTrue
        isClose={() => {
          setModal(false);
          setSelectedTemplate(null);
        }}
        isOpen={modal}
        maxWidth='w-[850px]'
      >
        <div className='my-8 flex flex-col gap-3 items-center'>
          <span className='text-xl font-medium text-lightblue'>
            Choose Available Products
          </span>
          <ProductComponent
            componentStyle='bg-white shadow-lg rounded-lg flex gap-4 p-2 hover:scale-110 transition-all duration-200 cursor-pointer'
            displayStyle='grid-cols-2 gap-7'
            gutter='gap-[6rem]'
            product={template}
            selected={selectedTemplate}
            setSelected={setSelectedTemplate}
          />
          <ButtonV2
            btnStyle='rounded-md bg-darkblue w-[20vw] p-4 mt-10'
            handleClick={handleNavigate}
            icon={undefined}
            iconStyle=''
            textStyle='text-white '
            title='Confirm'
          />
        </div>
      </Modal>
      <ActionModal
        actionTitle1='Delete'
        actionTitle2='Cancel'
        close={() => setDeleteModal(false)}
        handleAction={handleDeleteTasks}
        open={deleteModal}
        title='Delete Tasks'
        warningText='This action cannot be undone'
      />
    </main>
  );
}

export default Tasks;
