/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Form, Formik } from "formik";
import { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import Button from "../../components/button";
import Input from "../../components/form/Input";
import { useAppSelector } from "../../hooks";
import {
  addTask,
  removeTask,
  selectAllTasks,
  Task,
  toggleTaskDone,
} from "../../states/slices/taskSlice";

function Edit() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const allTask = useAppSelector(selectAllTasks);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const task = searchParams.get("task");
  const date = new Date();
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const data = allTask?.filter((item: Task) => item.task === task);

  const handleDelete = () => {
    dispatch(removeTask(data[0].task));

    toast.success("task deleted successfully", {
      duration: 7000,
    });
    navigate("/");
  };

  return (
    <div className='flex flex-col pb-6 mx-auto w-full shadow-sm bg-zinc-100 max-w-[480px] h-screen relative overflow-hidden '>
      <div className='py-6  pl-8 w-full bg-brand shadow-sm'>
        <p className='text-center text-white font-semibold'>Edit task</p>
      </div>

      <div className='overflow-y-auto flex flex-col px-4 mt-5 w-full text-base font-medium'>
        <Zoom>
          <Formik
            initialValues={{
              task: data[0]?.task ?? "",
            }}
            onSubmit={async (values) => {
              const payload = { task: values.task, id: date };
              try {
                dispatch(toggleTaskDone(data[0].id));

                setOpen(false);
                toast.success("Task completed");
                navigate("/");
              } catch {
                toast.error("Could not add tasks");
                dispatch(addTask(payload));
              }
            }}
          >
            {({ handleSubmit }) => (
              <Form className='h-full flex flex-col  justify-between pt-3 md:pt-4 px-2 md:px-2 lg:py-6'>
                <p className='font-bold text-xs'>Task name</p>
                <div className='flex justify-between items-center flex-wrap '>
                  <div className='flex flex-col pt-2  w-full'>
                    <Input
                      name='task'
                      placeholder='Enter  a new task'
                      type='text'
                    />
                  </div>
                </div>
                <div className='flex justify-between items-center w-full mt-[80%]'>
                  <Button
                    bgColor='bg-[#AB3535]'
                    className=' mb-2  mt-4  w-28 lg:w-28 py-4 !rounded-lg'
                    onClick={handleDelete}
                    textColor='text-white'
                    title='Delete'
                    type='button'
                  />
                  <Button
                    bgColor='bg-brand'
                    className=' mb-2  mt-4  w-40 lg:w-60 py-4 !rounded-lg'
                    onClick={handleSubmit}
                    textColor='text-white'
                    title={data[0].isDone ? "undo completion" : "complete"}
                    type='button '
                  />
                </div>
              </Form>
            )}
          </Formik>
        </Zoom>
      </div>
    </div>
  );
}

export default Edit;
