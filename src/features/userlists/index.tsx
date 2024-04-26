/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Transition } from "@headlessui/react";
import React, { useMemo, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { usersLists } from "@/fake_data";
import SubHeaders from "@/shared/components/subheaders";
import TableComponent from "@/shared/components/Tablecomponent";
import ToggleSwitch from "@/shared/components/toggle_switch";
import { ARROW_DOWN, BLUE_ARROW_DOWN, THREE_DOTS } from "@/utils/Exports";

export const userListsFilters = [
  {
    id: "1",
    list: "Name",
  },
  {
    id: "2",
    list: "Location",
  },
  {
    id: "3",
    list: "Ratings",
  },
  {
    id: "4",
    list: "Lists",
  },
  {
    id: "5",
    list: "Verification",
  },
  {
    id: "6",
    list: "Status",
  },
];
function UserLists() {
  const [currentUserType, setCurrentUserType] = useState("first_type");

  const usertype: any = {
    first_type: "Regular Users",
    second_type: "Corporate Users",
  };

  const handleNextUserType = () => {
    const userKeys = Object.keys(usertype);

    const currentUser = userKeys.indexOf(currentUserType);

    const nextUserType = (currentUser + 1) % userKeys.length;

    setCurrentUserType(userKeys[nextUserType]);
  };

  const handlePreviousUserType = () => {
    const userKeys = Object.keys(usertype);

    const currentUser = userKeys.indexOf(currentUserType);

    const previousUserType =
      (currentUser - 1 + userKeys.length) % userKeys.length;

    setCurrentUserType(userKeys[previousUserType]);
  };

  const userListsColumns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row: any, index: number) => index + 1,
        Cell: ({ value }: any) => (
          <span className='text-[12px] text-[#A4A4A4]'>{value}</span>
        ),
      },
      {
        Header: "Photo",
        accessor: "img",
        Cell: ({ row }: any) => (
          <div className='relative'>
            <img
              alt=''
              className='w-10 h-10 rounded-full border-4 border-[#C2E0FF]'
              src={row.original.img}
            />
          </div>
        ),
      },
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ row }: any) => (
          <div>
            <span className='text-[12px]'>{row.original.name}</span>
          </div>
        ),
      },
      {
        Header: "Username",
        accessor: "username",
        Cell: ({ row }: any) => (
          <div>
            <span className='text-[12px] text-[#929AA7]'>
              {row.original.username.length > 10
                ? `${row.original.username.slice(0, 10)}...`
                : row.original.username}
            </span>
          </div>
        ),
      },
      {
        Header: "Acct No.",
        accessor: "acct_no",
        Cell: ({ row }: any) => (
          <div>
            <span className='text-[12px] '>{row.original.acct_no}</span>
          </div>
        ),
      },
      {
        Header: "Bank",
        accessor: "bank",
        Cell: ({ row }: any) => (
          <div>
            <span className='text-[12px] '>{row.original.bank}</span>
          </div>
        ),
      },
      {
        Header: "Amount W",
        accessor: "amount",
        Cell: ({ row }: any) => (
          <div>
            <span className='text-[12px] '>₦ {row.original.amount}</span>
          </div>
        ),
      },
      {
        Header: "Ratings",
        accessor: "ratings",
        Cell: ({ row }: any) => (
          <div className='flex gap-1  items-center'>
            <span>
              <BsStarFill className='text-darkblue text-[12px]' />{" "}
            </span>
            <span className='text-[12px] text-darkblue'>
              {row.original.ratings}
            </span>
          </div>
        ),
      },
      {
        Header: "Verification",
        accessor: "verification",
        Cell: ({ row }: any) => (
          <div>
            <span className='text-[12px] text-[#3670D4]'>
              {row.original.verification}
            </span>
          </div>
        ),
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ row }: any) => (
          <div>
            <span className='text-[12px] font-semibold text-[#39B54A]'>
              {row.original.status}
            </span>
          </div>
        ),
      },
      {
        Header: "Date",
        accessor: "data",
        Cell: ({ row }: any) => (
          <div>
            <span className='text-[12px] font-semibold text-lightgrey'>
              {row.original.data}
            </span>
          </div>
        ),
      },
      {
        Header: "",
        accessor: "#",
        Cell: ({ row }: any) => {
          const [dropdown, setDropDown] = useState(false);
          const navigate = useNavigate();
          return (
            <div className='relative'>
              <img
                alt=''
                className='w-5 h-5 cursor-pointer'
                onClick={() => setDropDown((previous) => !previous)}
                src={THREE_DOTS}
              />

              <Transition
                as='div'
                className='w-[135px] z-[50] top-5 right-0 shadow-custom absolute h-[350px] bg-white flex flex-col items-start gap-3 px-2 py-2  text-sm rounded-md'
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
                show={dropdown}
              >
                <span className='border-b pb-1 hover:text-darkblue cursor-pointer'>
                  Pin
                </span>
                <span className='border-b pb-1 hover:text-darkblue cursor-pointer'>
                  Send message
                </span>
                <span
                  className='border-b pb-1 hover:text-darkblue cursor-pointer'
                  onClick={() =>
                    navigate("/userslist/user-profile", {
                      state: { data: row?.original },
                    })
                  }
                >
                  Open profile
                </span>
                <span className='border-b pb-1 hover:text-darkblue cursor-pointer'>
                  Assign referral code
                </span>
                <span className='border-b pb-1 hover:text-darkblue cursor-pointer'>
                  Add to list
                </span>
                <span className='border-b pb-1 hover:text-darkblue cursor-pointer'>
                  Verify user
                </span>
                <span className='border-b pb-1 hover:text-darkblue cursor-pointer'>
                  90 days
                </span>
                <span className='border-b pb-1 hover:text-darkblue cursor-pointer'>
                  Blacklist
                </span>
                <span className='border-b pb-1 text-branded cursor-pointer'>
                  Suspend user
                </span>
              </Transition>
            </div>
          );
        },
      },
    ],
    [],
  );

  return (
    <main className='mx-7 mt-7 mb-20'>
      <SubHeaders placeholder='email' route='/dashboard' title='User List' />
      <div className='flex items-center justify-between mt-3 w-full'>
        <div className='flex items-center gap-2'>
          <span className='text-darkblue font-normal text-[14px]'>
            {usertype[currentUserType]}
          </span>
          <div className='flex flex-col gap-1'>
            <img
              alt=''
              className='scale-y-[-1] cursor-pointer'
              height={10}
              onClick={handlePreviousUserType}
              src={BLUE_ARROW_DOWN}
              width={10}
            />
            <img
              alt=''
              className=' cursor-pointer'
              onClick={handleNextUserType}
              src={BLUE_ARROW_DOWN}
            />
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='flex gap-2'>
            <span className='text-lightgrey'>Auto respond</span>
            <img alt='' src={ARROW_DOWN} />
          </div>
          <ToggleSwitch />
        </div>
      </div>
      <div className='mt-3'>
        <TableComponent
          COLUNMS={userListsColumns}
          data={usersLists}
          handleSelectedBox={() => {}}
          selectedbox={undefined}
        />
      </div>
    </main>
  );
}

export default UserLists;
