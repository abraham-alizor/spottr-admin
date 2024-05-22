/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
import React from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { COIN, GRAY_DOT, SLOT_ICON } from "@/utils/Exports";

interface TaskData {
  id: string | number;
  title: string;
  img: string;
  price_tag: string;
  slot_left: string;
  time: string;
  location: string;
  pending: string;
  status: string;
}
interface Props {
  taskData: any;
  selectedStatus: string;
  selectorBox: boolean;
  selectedBox: any;
  setSelectedBox: (id: any) => void;
  handleSelector: (id: any) => void;
}
const TaskComponent = ({
  taskData,
  selectedStatus,
  handleSelector,
  selectorBox,
  selectedBox,
  setSelectedBox,
}: Props) => {
  const navigate = useNavigate();

  // eslint-disable-next-line no-console
  console.log(selectedStatus);

  // eslint-disable-next-line no-console
  console.log(setSelectedBox);

  return (
    <main className='grid grid-cols-3 gap-5 mt-5 '>
      {taskData.map((data: TaskData) => (
        <div
          className='bg-white border-2 rounded-lg relative hover:cursor-pointer'
          key={data.status}
        >
          <div className='flex flex-col gap-3 py-3 px-3'>
            <div className='flex gap-4 border-b-2 pb-1'>
              <div>
                <img alt='' height={80} src={data.img} width={80} />
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex flex-col items-start'>
                  <span className='font-semibold'>{data.title}</span>
                  <span className='text-[10px] bg-[#ECF7FF] p-1 rounded-md'>
                    {data.price_tag}
                  </span>
                </div>
                {selectorBox && (
                  <div
                    className='w-5 h-5 rounded-md flex justify-center items-center  border-2 border-darkblue absolute right-0 top-0 cursor-pointer'
                    onClick={() => handleSelector(data.id)}
                  >
                    {selectedBox.includes(data.id) ? (
                      <span className='text-darkblue text-sm z-30'>
                        <FaCheck />
                      </span>
                    ) : null}
                  </div>
                )}
                <div className='flex justify-between '>
                  <div className='flex gap-3 items-center'>
                    <span className='text-[12px] text-lightgrey'>
                      Coin Eqv:
                    </span>
                    <div className='flex items-center gap-1'>
                      <img alt='' height={8} src={COIN} width={8} />
                      <span className='text-[12px] text-lightgrey'>150</span>
                    </div>
                  </div>
                  <span
                    className='text-[12px] text-lightgrey'
                    onClick={() => navigate(`/tasks/task-review/${data.id}`)}
                  >
                    Hold for more option
                  </span>
                </div>
              </div>
            </div>

            <div className='flex justify-between'>
              <div className='flex items-center gap-2'>
                <img alt='' height={10} src={SLOT_ICON} width={10} />
                <span className='text-[10px] text-lightgrey'>
                  {data.slot_left}
                </span>
                <img alt='' height={5} src={GRAY_DOT} width={5} />
                <span className='text-[10px] text-lightgrey'>{data.time}</span>
                <img alt='' height={5} src={GRAY_DOT} width={5} />
                <span className='text-[10px] text-lightgrey'>
                  {data.location}
                </span>
              </div>
              <div>
                {data.status === "new" ? (
                  <span className='text-[#FF4B3E] text-sm font-medium'>
                    02:33min left
                  </span>
                ) : data.status === "active" ? (
                  <span className='text-brown bg-lightbrown bg-opacity-15 text-sm p-2 rounded-lg'>
                    Active
                  </span>
                ) : data.status === "completed" ? (
                  <span className='text-dimgreen bg-lightergreen bg-opacity-15 text-sm p-1 rounded-lg'>
                    Completed
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default TaskComponent;
