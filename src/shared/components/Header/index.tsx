/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { dummyMessage } from "@/fake_data";
import { MenuDropdown } from "@/shared/components/dropdown/MenuDropDown";
import NotificationBox from "@/shared/components/noticationbox";
import { INDICATOR } from "@/utils/Exports";

interface HeaderTypes {
  onMenu?: () => void;
}

function Header(props: HeaderTypes) {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [openMessagePopup, setMessagePopUp] = useState(false);
  const [openFeedBackPopup, setFeedBackPopUp] = useState(false);

  const navigate = useNavigate();

  return (
    <div className='w-full pt-6 bg-white px-4 12 lg:px-8 relative'>
      <div>
        <div className='w-full flex justify-between items-start'>
          <div className='flex justify-start gap-10'>
            <div>
              <p className='text-brand text-2xl font-semibold'>
                Dashboard Overview
              </p>
              <p className='text-gray-500 text-xs'> Welcome Admin</p>
            </div>
            <form>
              <div className='relative w-60'>
                <div className='pointer-events-none absolute inset-y-0 right-2 flex items-center pl-3'>
                  <BiSearch className='text-brand' />
                </div>
                <input
                  className='block h-[44px] w-full rounded-lg border border-[#E1EFFB] bg-white  p-4 pl-10 text-sm text-gray-900 focus:outline-none'
                  id='default-search'
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder='Type a keyword'
                  required
                  type='search'
                  value={search}
                />
              </div>
            </form>
          </div>

          <div className='flex justify-end items-center gap-4 relative'>
            <div className='relative'>
              <FaBell
                className='text-2xl text-brand cursor-pointer'
                onClick={() => {
                  setFeedBackPopUp((previous) => !previous);
                }}
              />
              {dummyMessage.length > 0 && (
                <img
                  alt=''
                  className='absolute  right-0 -top-1 w-3 h-3'
                  src={INDICATOR}
                />
              )}
            </div>

            <div className='relative'>
              <BsEnvelopeFill
                className='text-2xl text-brand cursor-pointer'
                onClick={() => {
                  setMessagePopUp((previous) => !previous);
                }}
              />
              {dummyMessage.length > 0 && (
                <>
                  <img
                    alt=''
                    className='absolute  -right-3 -top-3 w-6 h-6'
                    src={INDICATOR}
                  />
                  <span className='text-[11.1px] text-white -top-2 -right-[5px] z-50 font-semibold absolute'>
                    {dummyMessage.length}
                  </span>
                </>
              )}
            </div>
            <MenuDropdown />
          </div>
        </div>
        <NotificationBox
          data={dummyMessage}
          handleClick={() => {
            navigate("/notification-center");
            setMessagePopUp(false);
          }}
          newMessageLength='2'
          open={openMessagePopup}
          style='right-[9rem] z-40 '
          title='Feedback'
        />
        <NotificationBox
          data={dummyMessage}
          handleClick={() => {
            navigate("/notification-center");
            setFeedBackPopUp(false);
          }}
          newMessageLength='2'
          open={openFeedBackPopup}
          style='right-[11rem] z-40 '
          title='Notifcations'
        />

        <div className=''>
          <AiOutlineMenu
            className='h-10 text-4xl lg:hidden'
            onClick={props.onMenu}
          />
        </div>
      </div>

      <div className='hidden h-16 items-center justify-between  border-b border-b-[#C2E0FF]   px-8 lg:flex'>
        <div className='flex flex-row items-center gap-4 border-b'>
          <Link
            className={`cursor-pointer px-3 py-5 text-base ${location.pathname === "/dashboard" ? "text-brand border-b-2 border-b-brand " : "text-gray-500"}`}
            to='/dashboard'
            type='button'
          >
            Home
          </Link>

          <Link
            className={`cursor-pointer px-3 py-5 text-base ${location.pathname === "/userslist" || location.pathname === "/userslist/user-profile" ? "text-brand border-b-2 border-b-brand" : "text-gray-500 "}`}
            to='/userslist'
            type='button'
          >
            Users List
          </Link>

          <Link
            className={`cursor-pointer px-3 py-5 text-base ${location.pathname === "/content-management" ? "text-brand border-b-2 border-b-brand" : "text-gray-500"}`}
            to='/content-management'
            type='button'
          >
            Content Management
          </Link>

          <Link
            className={`cursor-pointer px-3 py-5 text-base ${location.pathname === "/referrals-system" ? "text-brand border-b-2 border-b-brand" : "text-gray-500"}`}
            to='/referrals-system'
            type='button'
          >
            Referrals System
          </Link>
        </div>

        <div className='flex justify-end gap-10'>
          <a className='text-sm font-bold text-brand'>+ Create task</a>
          <a className='text-sm font-bold text-brand '>+ add new categories</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
