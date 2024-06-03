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
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import { users_tasks } from "@/fake_data";
import { ProductApi } from "@/services/product/service";
import { TaskApi } from "@/services/tasks/task.service";
import ActionModal from "@/shared/components/actionmodal";
import ButtonV2 from "@/shared/components/buttonV2";
import Modal from "@/shared/components/Modal";
import ProductComponent from "@/shared/components/product-component";
import SubNav from "@/shared/components/sub_nav";
import SubHeaders from "@/shared/components/subheaders";
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
  const { data: allTasks, isLoading, refetch } = useQuery("tasks", TaskApi);
  const { data: allProducts, refetch: productRefetch } = useQuery(
    "products",
    ProductApi,
  );

  // const statusUpdate = users_tasks.find((data) => data.status);
  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
  };

  const handleNavigate = () => {
    if (selectedTemplate) {
      navigate(`/tasks/create-task?idref=${selectedTemplate}`);
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
    <main className='px-4 lg:px-10 my-5 overflow-hidden'>
      <SubHeaders placeholder='tasks' route='/dashboard' title='Tasks' />
      <div className='mt-3 lg:mt-0 flex gap-5 relative overflow-x-auto'>
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
      <div className='mt-7 relative lg:flex justify-between items-center'>
        <SubNav
          gutter='gap-[4rem]'
          handleSelected={handleStatusChange}
          navLinks={navLinks}
          selected={selectedStatus}
        />
        <div className='flex gap-2 lg:gap-10 items-center mt-4 lg:mt-0'>
          {selectorBox ? (
            <>
              <ButtonV2
                btnStyle='flex gap-6 items-center border border-[#FF4B3E]  border-opacity-15 rounded-lg py-3 px-3 lg:px-5'
                handleClick={() => setSelectorkBox(false)}
                icon={<FaTimes />}
                iconStyle='text-xs  text-[#FF4B3E] ml-7'
                textStyle='text-sm text-[#FF4B3E]'
                title='Cancel'
              />
              <ButtonV2
                btnStyle='flex gap-6 items-center lg:w-[13vw] border border-[#FF4B3E] border-opacity-15 rounded-lg py-3 px-3 lg:px-5'
                handleClick={() => setDeleteModal(true)}
                icon={<FaTrash />}
                iconStyle='text-xs text-[#FF4B3E] '
                textStyle='text-xs lg:text-sm text-[#FF4B3E]'
                title='Delete selected'
              />
            </>
          ) : (
            <>
              <ButtonV2
                btnStyle='flex  gap-6 items-center border border-[#3670D4] border-opacity-15 rounded-lg py-3 px-3 lg:px-5'
                handleClick={() => setModal(true)}
                icon={<FaPlus />}
                iconStyle='text-xs text-[#3670D4]'
                textStyle='text-sm text-[#3670D4]'
                title='Create a new task'
              />
              <ButtonV2
                btnStyle='flex gap-6  items-center lg:w-[13vw] border border-[#FF4B3E] border-opacity-15 rounded-lg py-3 px-3 lg:px-5'
                handleClick={() => setSelectorkBox(true)}
                icon={<FaTimes />}
                iconStyle='text-xs text-[#FF4B3E] lg:ml-7'
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
        taskData={allTasks}
      />
      <Modal
        edges='rounded-md'
        isBTnTrue
        isClose={() => {
          setModal(false);
          setSelectedTemplate(null);
        }}
        isOpen={modal}
        maxWidth='w-[850px]'
      >
        <div className='my-8 flex flex-col gap-3 items-center'>
          <span className=' text-xl font-medium text-lightblue'>
            Choose Available Products
          </span>

          {allProducts?.length > 0 && (
            <ProductComponent
              componentStyle='bg-white mb-4 md:mb-0 shadow-lg rounded-lg flex gap-4 p-2 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'
              displayStyle='grid-cols-2 gap-7'
              gutter='gap-[6rem]'
              product={allProducts}
              selected={selectedTemplate}
              setSelected={setSelectedTemplate}
            />
          )}
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
