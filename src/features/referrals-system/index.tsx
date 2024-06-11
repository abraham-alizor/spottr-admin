/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Transition } from "@headlessui/react";
import React, { useMemo, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { FaCheck, FaPlus } from "react-icons/fa";
import { useQuery } from "react-query";

import { TABLE_DATA } from "@/fake_data";
import { GetReferalsApi } from "@/services/referals/service";
import ActionModal from "@/shared/components/actionmodal";
// import ReferalsTable from "@/features/referrals-system/referrals_table";
import ButtonV2 from "@/shared/components/buttonV2";
import Modal from "@/shared/components/Modal";
import SubHeaders from "@/shared/components/subheaders";
import TableComponent from "@/shared/components/Tablecomponent";
import { BLUE_ARROW_DOWN, THREE_DOTS } from "@/utils/Exports";

const ReferralsSystem = () => {
  const [currentUserType, setCurrentUserType] = useState("first_type");
  const [selectedBox, setSelectedBox] = useState<any>([]);
  const [modal, setModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const {
    data: referals,
    isLoading,
    refetch,
  } = useQuery("referals", GetReferalsApi);

  // eslint-disable-next-line no-console
  console.log(referals);

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

  const handleSelectedBoxClick = (rowid: any) => {
    setSelectedBox((previousSelectedBox: any) => {
      if (previousSelectedBox.includes(rowid)) {
        return previousSelectedBox.filter((box_id: any) => box_id !== rowid);
      }
      return [...previousSelectedBox, rowid];
    });
  };

  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "boxes",
        Cell: ({ row }: any) => (
          <div
            className='absolute bg-transparent z-50 -left-7   w-[19px] h-[19px]  rounded-md border-2 border-darkblue flex items-center justify-center cursor-pointer'
            onClick={() => setSelectedBox(row.id)}
          >
            {selectedBox.includes(row.id) && (
              <FaCheck className='text-darkblue text-xs' />
            )}
          </div>
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
        Header: "Username",
        accessor: "username",
        Cell: ({ row }: any) => (
          <div>
            <span className='text-lightgrey text-[12px]'>
              {row.original.username.length > 10
                ? `${row.original.username.slice(0, 10)}...`
                : row.original.username}
            </span>
          </div>
        ),
      },
      {
        Header: "Rating",
        accessor: "ratings",
        Cell: ({ row }: any) => (
          <div className='flex gap-1  items-center'>
            <span>
              <BsStarFill className='text-darkblue text-[12px]' />{" "}
            </span>
            <span className='text-[12px] text-darkblue '>
              {row.original.ratings}
            </span>
          </div>
        ),
      },
      {
        Header: " No. of People",
        accessor: " referal_code",
        Cell: ({ row }: any) => (
          <div>
            <span className='font-normal text-[12px]'>
              {row.original.referal_code}
            </span>
          </div>
        ),
      },

      {
        Header: "Total amount ",
        accessor: "total_amnt",
        Cell: ({ row }: any) => (
          <div>
            <span className='font-normal text-[12px]'>
              {" "}
              ₦ {row.original.total_amnt}
            </span>
          </div>
        ),
      },
      {
        Header: "No. of People",
        accessor: "people",
        Cell: ({ row }: any) => (
          <div>
            <span className='font-normal text-[12px]'>
              {" "}
              {row.original.people}
            </span>
          </div>
        ),
      },

      {
        Header: "Level",
        accessor: "level",
        Cell: ({ row }: any) => (
          <div>
            <span className='font-normal text-[12px]'>
              {" "}
              {row.original.level}
            </span>
          </div>
        ),
      },
      {
        Header: "Last withdrawal",
        accessor: "date",
        Cell: ({ row }: any) => (
          <div>
            <span className=' text-lightgrey font-normal text-[12px]'>
              {" "}
              {row.original.date}
            </span>
          </div>
        ),
      },
      {
        Header: "status",
        accessor: "status",
        Cell: ({ row }: any) => (
          <div>
            <span className='font-normal text-[12px] text-[#39B54A]'>
              {" "}
              {row.original.status}
            </span>
          </div>
        ),
      },
      {
        Header: "",
        accessor: "button",
        Cell: () => {
          const [dropdown, setDropdown] = useState(false);
          const [deleteAct, setDeleteAct] = useState(false);
          const [blackListAct, setBlackListAct] = useState(false);
          return (
            <div className='flex gap-4 items-center relative'>
              <span className='text-[#C4C4C4] text-sm'>Select action</span>
              <img
                alt=''
                className='w-4 h-4 cursor-pointer'
                onClick={() => setDropdown((previous) => !previous)}
                src={THREE_DOTS}
              />

              <Transition
                as='div'
                className='w-full z-[50] top-5 -right-4 shadow-custom absolute h-[158px] bg-white flex flex-col items-start gap-3 px-2 py-2  text-sm rounded-md'
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
                show={dropdown}
              >
                <span className='border-b pb-1 hover:text-darkblue cursor-pointer'>
                  Open Profile
                </span>
                <span className='border-b pb-1 hover:text-darkblue cursor-pointer'>
                  Clear record
                </span>
                <span
                  className='border-b pb-1 hover:text-darkblue cursor-pointer'
                  onClick={() => setBlackListAct(true)}
                >
                  Blacklist
                </span>
                <span
                  className='border-b pb-1 text-branded cursor-pointer'
                  onClick={() => setDeleteAct(true)}
                >
                  Delete record
                </span>
              </Transition>
              {/* in this section, you make the close funtion be the action to approve the action assigned, while the handleaction be for the close */}
              <ActionModal
                actionTitle1='Cancel'
                actionTitle2='Approve'
                close={() => setBlackListAct(false)}
                handleAction={() => {}}
                open={blackListAct}
                title='Blacklist'
                warningText='Blacklist selected users?'
              />
              <ActionModal
                actionTitle1='Cancel'
                actionTitle2='Approve'
                close={() => setDeleteAct(false)}
                handleAction={() => {}}
                open={deleteAct}
                title='Delete'
                warningText='Delete selected users?'
              />
            </div>
          );
        },
      },
    ],
    [selectedBox],
  );

  return (
    <main className='mt-7 mx-7 mb-28'>
      <SubHeaders placeholder='email' route='/dashboard' title='Referrals' />
      <div className='flex flex-col items-center '>
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

          <div>
            <ButtonV2
              btnStyle=' flex items-center w-full h-full py-3 px-2 gap-3 rounded-md border  border-[#C2E0FF] '
              handleClick={() => setModal(true)}
              icon={<FaPlus />}
              iconStyle='text-[#3670D4] text-[10px]'
              textStyle='text-[#3670D4] text-[12px] font-medium'
              title='Create referral task'
            />
          </div>
        </div>
        <div>
          <TableComponent
            COLUNMS={columns}
            data={TABLE_DATA}
            handleSelectedBox={handleSelectedBoxClick}
            selectedbox={selectedBox}
          />
        </div>
      </div>
      <Modal
        edges='rounded-sm'
        isBTnTrue
        isClose={() => setModal(false)}
        isOpen={modal}
        maxWidth='w-[672px]'
      >
        <div>
          <div className='flex items-start flex-col mt-[3rem] pl-10 pr-7'>
            <span className='text-[20px] font-semibold text-darkblue'>
              Create Sign up Referral task
            </span>
            <form action='' className='w-full flex flex-col gap-5 mt-4'>
              <input
                className='w-full bg-[#F8F8F8] py-4  placeholder:text-[#C4C4C4] px-5 placeholder:text-[16.86px] rounded-md '
                placeholder='No. of CT'
                type='text'
              />
              <input
                className='w-full bg-[#ECF7FF] py-4 placeholder:text-[#C4C4C4]  px-5 placeholder:text-[16.86px] rounded-md '
                placeholder='No. of people'
                type='text'
              />
              <div className='flex items-center gap-10'>
                {/* <div>

                <input
                  className='w-full bg-[#ECF7FF] py-4 placeholder:text-[#C4C4C4]  px-5 placeholder:text-[16.86px] rounded-md '
                  placeholder='Start date'
                  type='text'
                />
                </div> */}
                <input
                  className='w-full bg-[#ECF7FF] text-lightgrey py-4 placeholder:text-[#C4C4C4]   px-5 placeholder:text-[16.86px] rounded-md '
                  onChange={(event_: React.ChangeEvent<HTMLInputElement>) =>
                    setStartDate(event_.target.value)
                  }
                  type='date'
                  value={startDate}
                />
                <span className='font-[700] text-[16.86px] text-[#C4C4C4]'>
                  -
                </span>
                <input
                  className='w-full bg-[#ECF7FF] text-lightgrey py-4 placeholder:text-[#C4C4C4]  px-5 placeholder:text-[16.86px] rounded-md '
                  onChange={(event_: React.ChangeEvent<HTMLInputElement>) =>
                    setEndDate(event_.target.value)
                  }
                  type='date'
                  value={endDate}
                />
              </div>
              <input
                className='w-full bg-[#ECF7FF] py-4 px-5 placeholder:text-[#C4C4C4]  placeholder:text-[16px] rounded-md '
                placeholder='Location'
                type='text'
              />
            </form>
          </div>
          <div className='my-8'>
            <ButtonV2
              btnStyle='bg-darkblue w-[252px] h-[53px] rounded-md  '
              handleClick={() => {}}
              textStyle='text-[16px] font-semibold text-white'
              title='Create Referral'
            />
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default ReferralsSystem;
