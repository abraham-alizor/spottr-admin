/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Edit from "./features/edit";
import Home from "./features/home";
import { useAppSelector } from "./hooks";
import { selectAllTasks } from "./states/slices/taskSlice";

function App() {
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
  // eslint-disable-next-line no-console
  console.log(allTask);

  return (
    <>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Edit />} path='/edit' />
      </Routes>
      <Toaster position='top-right' reverseOrder={false} />
    </>
  );
}

export default App;
