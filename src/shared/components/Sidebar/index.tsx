/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */

"use client";

import { Transition } from "@headlessui/react";
import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

import { useMediaQuery } from "@/hooks";
import {
  AD_SECTIONS,
  BAR,
  CATEGORIES,
  DASHBOARD_WHITE,
  HELP,
  LOANS,
  LOGO,
  OPPORTUNITY,
  SETTINGS,
  TASK,
  TRANSACTIONS,
  USERS,
} from "@/utils/Exports";

interface SidebarProps {
  open: boolean;
  // onClose: () => void;
}

const Sidebar = (props: SidebarProps) => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", src: DASHBOARD_WHITE, path: "/dashboard" },
    { title: "Opportunities", src: OPPORTUNITY, path: "/opportunities" },
    { title: "Categories", src: CATEGORIES, path: "/categories" },
    { title: "Transactions", src: TRANSACTIONS, path: "/transactions" },
    { title: "Performance", src: TRANSACTIONS, path: "/performance" },
    { title: "Tasks", src: TASK, path: "/tasks" },
    { title: "Ad sections", src: AD_SECTIONS, path: "/ad-sections" },
    { title: "Loans", src: LOANS, path: "/loans" },
    { title: "Users", src: USERS, path: "/users" },
    { title: "Help", src: HELP, path: "/help" },
    { title: "Settings", src: SETTINGS, path: "/settings" },
  ];
  const isMobileView = useMediaQuery("(max-width: 640px)");
  const isTabletView = useMediaQuery("(max-width: 840px)");
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      {isMobileView || isTabletView ? (
        <Transition
          as='div'
          className='fixed z-30 h-full w-56 flex-none bg-brand-light lg:static'
          enter='transition-all ease-in duration-300'
          enterFrom='transform -translate-x-full'
          enterTo='transform -translate-x-0'
          leave='transition-all ease-out duration-300'
          leaveFrom='transform -translate-x-0'
          leaveTo='transform -translate-x-full'
          show={props.open}
        >
          <div className='h-screen'>
            <div
              className={` w-full bg-brand-light h-screen   pt-8 relative duration-300`}
            >
              <div className='flex gap-x-4  px-5 pt-2'>
                <img
                  alt=''
                  className='cursor-pointer duration-500 rotate-[360deg] '
                  src={LOGO}
                />

                <h1
                  className='text-brand font-bold origin-left  text-xl duration-200 
               '
                >
                  Spottr
                </h1>
              </div>

              <ul className={`pt-6  `}>
                {Menus.map((Menu, index) => (
                  <li
                    className={`flex flex-row px-5 rounded-md mt-2 p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4  ${location.pathname === Menu?.path ? "bg-brand text-white" : "text-gray-600"} `}
                    key={Menu.title}
                    onClick={() => navigate(Menu.path)}
                  >
                    <img alt='' className='w-5 h-5' src={Menu.src} />

                    <span className='  origin-left duration-200 '>
                      {Menu.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Transition>
      ) : (
        <div className='flex h-screen'>
          <div
            className={` ${
              open ? "w-60" : "w-24 "
            } bg-brand-light h-screen   pt-8 relative duration-300`}
          >
            <BiChevronRight
              className={`font-bold text-brand absolute cursor-pointer -right-3 top-9 w-7 h-7 border-brand
           border-2 rounded-full  ${!open && "rotate-180 hidden"}`}
              onClick={() => setOpen(!open)}
            />

            <div className='flex gap-x-4  px-5 pt-2'>
              <img
                alt=''
                className={`cursor-pointer duration-500 ${
                  open && "rotate-[360deg]"
                }  ${open && "scale-0 hidden"}`}
                onClick={() => setOpen(!open)}
                src={BAR}
              />
              <img
                alt=''
                className={`cursor-pointer duration-500 ${
                  open && "rotate-[360deg]"
                }  ${!open && "scale-0 "}`}
                src={LOGO}
              />

              <h1
                className={`text-brand font-bold origin-left  text-xl duration-200 ${
                  !open && "scale-0"
                }`}
              >
                Spottr
              </h1>
            </div>

            <ul className={`pt-6 ${open ? "p-5" : ""}`}>
              {Menus.map((Menu) => (
                <li
                  className={`flex  ${open ? "flex-row px-5 rounded-md mt-2" : "flex-col"}  p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${location.pathname === Menu?.path ? "bg-brand text-white" : "text-gray-600"} `}
                  key={Menu.path}
                  onClick={() => navigate(Menu.path)}
                >
                  <img alt='' className='w-5 h-5' src={Menu.src} />
                  {!open && <p className=' text-[8.5px]'>{Menu.title}</p>}
                  <span
                    className={`${!open && "hidden"}  origin-left duration-200 `}
                  >
                    {Menu.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default Sidebar;
