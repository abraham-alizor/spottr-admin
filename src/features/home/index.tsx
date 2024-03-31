/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Form, Formik } from "formik";
import { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Button from "../../components/button";
import Input from "../../components/form/Input";
import Modal from "../../components/modal/modal";
import { useAppSelector } from "../../hooks";
import { addTask, selectAllTasks, Task } from "../../states/slices/taskSlice";

function Home() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const allTask = useAppSelector(selectAllTasks);
  const date = new Date();
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className='flex flex-col pb-6 mx-auto w-full shadow-sm bg-zinc-100 max-w-[480px] h-screen relative overflow-hidden '>
      <div className='py-2 pr-20 pl-8 w-full bg-brand shadow-sm'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
          <div className='flex flex-col w-[19%] max-md:ml-0 max-md:w-full'>
            <img
              alt=''
              className='shrink-0 rounded-full aspect-square w-[50px]'
              loading='lazy'
              srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/a16a3e59b291668a99aa4d2decf1a81c98be8dfeffdb0d13eb027543c04b6dc7?apiKey=bb278f95022541509fa4b766a9320e21&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a16a3e59b291668a99aa4d2decf1a81c98be8dfeffdb0d13eb027543c04b6dc7?apiKey=bb278f95022541509fa4b766a9320e21&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a16a3e59b291668a99aa4d2decf1a81c98be8dfeffdb0d13eb027543c04b6dc7?apiKey=bb278f95022541509fa4b766a9320e21&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a16a3e59b291668a99aa4d2decf1a81c98be8dfeffdb0d13eb027543c04b6dc7?apiKey=bb278f95022541509fa4b766a9320e21&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a16a3e59b291668a99aa4d2decf1a81c98be8dfeffdb0d13eb027543c04b6dc7?apiKey=bb278f95022541509fa4b766a9320e21&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a16a3e59b291668a99aa4d2decf1a81c98be8dfeffdb0d13eb027543c04b6dc7?apiKey=bb278f95022541509fa4b766a9320e21&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a16a3e59b291668a99aa4d2decf1a81c98be8dfeffdb0d13eb027543c04b6dc7?apiKey=bb278f95022541509fa4b766a9320e21&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a16a3e59b291668a99aa4d2decf1a81c98be8dfeffdb0d13eb027543c04b6dc7?apiKey=bb278f95022541509fa4b766a9320e21&'
            />
          </div>
          <div className='flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full'>
            <div className='flex flex-col grow  text-white'>
              <div className='text-base font-medium'>Hello, Jhon</div>
              <div className='mt-1 text-lg italic font-thin leading-7'>
                What are your plans <br />
                for today?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-6 pb-4 w-full bg-[#cde53d] border-2 border-[#cde53d] border-solid shadow-sm'>
        <div className='flex justify-between lg:gap-5  '>
          <div className='flex flex-col w-[17%] mt-4 '>
            <img
              alt=''
              className='lg:grow shrink-0  aspect-[1.3] w-16 lg:w-[53px]'
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/ef66921149ce34715f4aa3ba9a32aca6d926eef196879458f6eba9969d0ae375?apiKey=bb278f95022541509fa4b766a9320e21&'
            />
          </div>
          <div className='flex flex-col lg:ml-5 mt-4 lg:w-[62%] '>
            <div className='lg:self-stretch my-auto text-base font-bold leading-5 text-blue-950'>
              Go Pro Upgrade Now
            </div>
          </div>
          <div className='flex flex-col ml-5 w-[15%] '>
            <div className='justify-center items-center text-center px-4 py-4 w-full text-base font-medium leading-5 text-amber-300 whitespace-nowrap bg-blue-950 -mt-1'>
              $1
            </div>
          </div>
        </div>
      </div>
      <div className='overflow-y-auto flex flex-col px-4 mt-5 w-full text-base font-medium'>
        {allTask?.map((item: Task) => (
          <div>
            {item.isDone ? (
              <div className='flex gap-5 justify-between px-5 py-6 w-full bg-white rounded-md border border-solid border-neutral-200 mb-6'>
                <div className='flex gap-4 self-start mt-1 leading-[100%] text-neutral-400'>
                  <img
                    alt=''
                    className='shrink-0 w-8 aspect-square'
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/c9dedfeb4faa557ff6d72f5db25294d5818f6f7ce89fd7ee951ea1aec6c20e81?apiKey=bb278f95022541509fa4b766a9320e21&'
                  />
                  <div className='flex-auto my-auto'>{item.task}</div>
                </div>
                <Link
                  className='justify-center px-3 py-4 whitespace-nowrap bg-white rounded border border-solid border-blue-950 text-blue-950'
                  to={`/edit?task=${item.task}`}
                >
                  Edit
                </Link>
              </div>
            ) : (
              <div className='flex gap-5 justify-between px-5 py-6 mb-6 w-full bg-white rounded-md border border-solid border-neutral-200 text-blue-950'>
                <div className='flex gap-4 self-start mt-1 leading-[100%]'>
                  <div className='shrink-0 w-8 h-8 bg-white border-2 border-solid border-blue-950 rounded-[51px]' />
                  <div className='flex-auto my-auto'>{item?.task}</div>
                </div>
                <Link
                  className='cursor-pointer justify-center px-3 py-4 whitespace-nowrap bg-white rounded border border-solid border-blue-950'
                  to={`/edit?task=${item.task}`}
                >
                  Edit
                </Link>
              </div>
            )}
          </div>
        ))}

        <div
          className=' absolute bottom-4  right-4 flex justify-center items-center self-end px-5 mt-72 text-4xl text-white whitespace-nowrap bg-blue-800 border-2 border-blue-800 border-solid shadow h-[61px] rounded-[100px] w-[61px]'
          onClick={openModal}
        >
          +
        </div>
      </div>

      <Modal close={closeModal} maxWidth='xs' open={open}>
        <Zoom>
          <p className='text-center font-bold text-base'>Add a new task</p>
          <Formik
            initialValues={{
              task: "",
            }}
            onSubmit={async (values) => {
              const payload = { task: values.task, id: date };
              try {
                dispatch(addTask(payload));

                setOpen(false);
                toast.success("Task added successfully");
              } catch {
                toast.error("Could not add tasks");
                dispatch(addTask(payload));
              }
            }}
          >
            {({ handleSubmit }) => (
              <Form className='flex flex-col pt-3 md:pt-4 px-8 md:px-8 lg:py-6'>
                <div className='flex justify-between items-center flex-wrap '>
                  <div className='flex flex-col pt-2  w-full'>
                    <Input
                      name='task'
                      placeholder='Enter  a new task'
                      type='text'
                    />
                  </div>
                </div>
                <div className='flex justify-between items-center w-full'>
                  <Button
                    bgColor='bg-[#CACACA]'
                    className=' mb-2  mt-4 w-28  lg:w-40 py-4 rounded-2xl'
                    onClick={closeModal}
                    textColor='text-black'
                    title='Cancel'
                    type='button'
                  />
                  <Button
                    bgColor='bg-brand'
                    className=' mb-2  mt-4 w-28  lg:w-40 py-4 rounded-2xl'
                    onClick={handleSubmit}
                    textColor='text-white'
                    title='Submit'
                    type='button'
                  />
                </div>
              </Form>
            )}
          </Formik>
        </Zoom>
      </Modal>
    </div>
  );
}

export default Home;
