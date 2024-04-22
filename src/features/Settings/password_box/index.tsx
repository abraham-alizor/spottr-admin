import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

import SettingsLayout from "@/features/Settings/SettingsLayout";
import ButtonV2 from "@/shared/components/buttonV2";

function PasswordBox() {
  const [type, setType] = useState("password");
  const [resetPop, setResetPop] = useState(false);
  const [oldpassword, setOldpassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const disbledButton =
    oldpassword === "" || newpassword === "" || confirmpassword === "";
  return (
    <SettingsLayout handleclick={() => {}} routeBtn={false}>
      <div className='flex flex-col items-end'>
        <ButtonV2
          btnStyle={`mt-5  py-1 px-7  rounded-md ${disbledButton ? "  bg-[#DADADA]" : "bg-brand"}`}
          disabled={disbledButton}
          handleClick={() => setResetPop(true)}
          textStyle={`text-sm ${disbledButton ? "text-[#C4C4C4]" : "text-white"}`}
          title='Done'
        />
        <div className='flex flex-col gap-4 w-full'>
          <span className='font-medium text-darkblue'>Create a password</span>
          <form action='' className='flex flex-col gap-3'>
            <input
              className='bg-[#F8F8F8] w-full px-3 py-2 rounded-md outline-none'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setOldpassword(event.target.value)
              }
              placeholder='*************'
              type='password'
              value={oldpassword}
            />
            <div className='bg-[#F8F8F8] w-full px-3 py-2 rounded-md outline-none flex justify-between items-center'>
              <input
                className='bg-transparent outline-none w-full'
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setNewpassword(event.target.value)
                }
                placeholder='*************'
                type={type}
                value={newpassword}
              />
              {type === "password" ? (
                <FaEye
                  className='text-[#C4C4C4] cursor-pointer'
                  onClick={() => setType("text")}
                />
              ) : (
                <FaEyeSlash
                  className='text-[#C4C4C4] cursor-pointer'
                  onClick={() => setType("password")}
                />
              )}
            </div>
            <input
              className='bg-[#F8F8F8] w-full px-3 py-2 rounded-md outline-none'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmpassword(event.target.value)
              }
              placeholder='*************'
              type='password'
              value={confirmpassword}
            />
          </form>
        </div>
      </div>
      {resetPop && (
        <div className='w-full bg-[#39B54A] flex justify-between items-center gap-2 px-4 py-3 text-[10px] text-white rounded-sm mt-[15rem]'>
          <span>We have sent a reset link to your email</span>
          <FaTimes
            className='cursor-pointer'
            onClick={() => setResetPop(false)}
          />
        </div>
      )}
    </SettingsLayout>
  );
}

export default PasswordBox;
