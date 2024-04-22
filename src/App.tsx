/* eslint-disable prettier/prettier */
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import Settings from "@/features/Settings";
import MainRoutes from "@/Routes";
import { PrivateRoutes } from "@/Routes/private";

import Login from "./features/auth/Login";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Login />} path='/' />
        <Route
          element={
            <PrivateRoutes>
              <MainRoutes />
            </PrivateRoutes>
          }
          path='/*'
        />

        <Route element={<Settings />} path='/settings' />
      </Routes>
      <Toaster position='top-right' reverseOrder={false} />
    </>
  );
}

export default App;
