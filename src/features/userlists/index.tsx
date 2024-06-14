/* eslint-disable consistent-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Transition } from "@headlessui/react";
import React, { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { BsStarFill } from "react-icons/bs";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import Actionmodal from "@/features/userlists/actionmodal";
import {
  BlacklistUserById,
  DeactivateUserById,
  GetAllUsersApi,
  SuspendUserById,
  VerifyUserById,
} from "@/services/users/users.service";
import ButtonV2 from "@/shared/components/buttonV2";
import Modal from "@/shared/components/Modal";
import SubHeaders from "@/shared/components/subheaders";
import TableComponent from "@/shared/components/Tablecomponent";
import ToggleSwitch from "@/shared/components/toggle_switch";
import {
  ALERT_ICON,
  ARROW_DOWN,
  BLUE_ARROW_DOWN,
  THREE_DOTS,
} from "@/utils/Exports";

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
  const [modal, setModal] = useState(false);
  const suspendusermutation = useMutation(SuspendUserById);
  const blacklistusermutation = useMutation(BlacklistUserById);
  const verifyusermutation = useMutation(VerifyUserById);
  const deactivateusermutation = useMutation(DeactivateUserById);
  const [suspenduserModal, setSuspenduserModal] = useState(false);
  const [verifyuserModal, setVerifyuserModal] = useState(false);
  const [blaklistuserModal, setBlaklistuserModal] = useState(false);
  const [deactivateModal, setDeactivateModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const {
    data: usersList,
    isLoading,
    refetch,
  } = useQuery("users", GetAllUsersApi);

  console.log(usersList);

  const usertype: any = {
    first_type: "Regular Users",
    second_type: "Corporate Users",
  };

  const actionstexts = suspenduserModal
    ? " Are you sure you want to suspend this user"
    : blaklistuserModal
      ? " Are you sure you want to blacklist this user"
      : verifyuserModal
        ? " Are you sure you want to verify this user"
        : deactivateModal
          ? "Are you sure you want to deactivate this user"
          : "";

  const title = suspenduserModal
    ? "suspend user"
    : blaklistuserModal
      ? "blacklist user"
      : verifyuserModal
        ? "verify user"
        : deactivateModal
          ? "deactivate user"
          : "";

  const closemodal = () => {
    if (suspenduserModal) {
      setSuspenduserModal(false);
    } else if (verifyuserModal) {
      setVerifyuserModal(false);
    } else if (blaklistuserModal) {
      setBlaklistuserModal(false);
    } else if (deactivateModal) {
      setDeactivateModal(false);
    } else return null;
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

  const suspenduser = async () => {
    try {
      if (selectedUser) {
        const response = await suspendusermutation.mutateAsync(selectedUser);
        toast.success(response?.message, {
          duration: 10_000,
        });
        setSuspenduserModal(false);
      } else {
        toast.error("no selected user");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };
  const blacklistuser = async () => {
    try {
      if (selectedUser) {
        const response = await blacklistusermutation.mutateAsync(selectedUser);
        toast.success(response?.message, {
          duration: 10_000,
        });
        setBlaklistuserModal(false);
      } else {
        toast.error("no selected user");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };
  const verifyuser = async () => {
    try {
      if (selectedUser) {
        const response = await verifyusermutation.mutateAsync(selectedUser);
        toast.success(response?.message, {
          duration: 10_000,
        });
        setVerifyuserModal(false);
      } else {
        toast.error("no selected user");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };
  const deactivateuser = async () => {
    try {
      if (selectedUser) {
        const response = await deactivateusermutation.mutateAsync(selectedUser);
        toast.success(response?.message, {
          duration: 10_000,
        });
        setDeactivateModal(false);
      } else {
        toast.error("no selected user");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  const actions = suspenduserModal
    ? suspenduser
    : blaklistuserModal
      ? blacklistuser
      : verifyuserModal
        ? verifyuser
        : deactivateModal
          ? deactivateuser
          : null;
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
              src={row?.original?.avatar}
            />
          </div>
        ),
      },
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ row }: any) => (
          <div className='text-start'>
            <span className='text-[12px]'>{row?.original?.fullName}</span>
          </div>
        ),
      },
      {
        Header: "Username",
        accessor: "username",
        Cell: ({ row }: any) => (
          <div className='text-start'>
            <span className='text-[12px] text-[#929AA7]'>
              {row?.original?.username?.length > 10
                ? `${row?.original?.username?.slice(0, 10)}...`
                : row?.original?.username}
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
              {row?.original?.verified ? "verified" : "Not verified"}
            </span>
          </div>
        ),
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ row }: any) => (
          <div>
            <span
              className={`text-[12px] font-semibold text-[#39B54A] ${row.original.status === "Suspended" ? "text-branded" : row?.original.status === "Blacklisted" ? "text-black" : ""}`}
            >
              {row.original.status === "Suspended"
                ? "Suspended"
                : row.original.status}
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
                className='w-[135px] z-[50] top-5 right-0 shadow-custom absolute h-[380px] bg-white flex flex-col items-start gap-3 px-2 py-2  text-sm rounded-md'
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
                    navigate(
                      `/userslist/user-profile?idref=${row?.original?.id}`,
                      {
                        state: { data: row?.original },
                      },
                    )
                  }
                >
                  Open profile
                </span>
                <span
                  className='border-b pb-1 hover:text-darkblue cursor-pointer'
                  onClick={() => {
                    setModal(true);
                    setDropDown(false);
                  }}
                >
                  Assign referral code
                </span>
                <span className='border-b pb-1 hover:text-darkblue cursor-pointer'>
                  Add to list
                </span>
                <span
                  className='border-b pb-1 hover:text-darkblue cursor-pointer'
                  onClick={() => {
                    setSelectedUser(row.original.id);
                    setDeactivateModal(true);
                    setDropDown(false);
                  }}
                >
                  Deactivate user
                </span>
                <span
                  className='border-b pb-1 hover:text-darkblue cursor-pointer'
                  onClick={() => {
                    setVerifyuserModal(true);
                    setSelectedUser(row?.original?.id);
                    setDropDown(false);
                  }}
                >
                  Verify user
                </span>
                <span className='border-b pb-1 hover:text-darkblue cursor-pointer'>
                  90 days
                </span>
                <span
                  className='border-b pb-1 hover:text-darkblue cursor-pointer'
                  onClick={() => {
                    setBlaklistuserModal(true);
                    setSelectedUser(row?.original?.id);
                    setDropDown(false);
                  }}
                >
                  Blacklist
                </span>
                <span
                  className='border-b pb-1 text-branded cursor-pointer'
                  onClick={() => {
                    setSuspenduserModal(true);
                    setSelectedUser(row?.original?.id);
                    setDropDown(false);
                  }}
                >
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
        {usersList?.data?.length > 0 && (
          <TableComponent
            COLUNMS={userListsColumns}
            data={usersList?.data}
            handleSelectedBox={() => {}}
            selectedbox={undefined}
          />
        )}
      </div>
      <Modal
        edges='rounded-sm'
        isBTnTrue
        isClose={() => setModal(false)}
        isOpen={modal}
        maxWidth='w-[672px]'
      >
        <div className='flex items-start flex-col gap-6 px-10 pt-9 pb-8'>
          <span className='text-[20px] font-semibold text-darkblue'>
            Generate and assign referral code
          </span>
          <form action='' className='flex flex-col gap-5'>
            <input
              className='w-[496px] h-full py-4 px-4 rounded-md bg-[#F8F8F8] placeholder:text-[#C4C4C4] font-normal placeholder:text-[16.86px]'
              placeholder='type username with @'
              type='text'
            />
            <input
              className='w-[496px] h-full py-4 px-4 rounded-md bg-[#F8F8F8] placeholder:text-[#C4C4C4] font-normal placeholder:text-[16.86px]'
              placeholder='2Y388GFD'
              type='text'
            />
          </form>

          <div className='flex justify-start items-center gap-3'>
            <img alt='' src={ALERT_ICON} />
            <span className='text-[14px] text-darkblue font-normal text-start  '>
              Lorem impsum donor sit a met short information about the chosen
              role impsum donor sit a met short information about the chosen
              role
            </span>
          </div>
        </div>
        <ButtonV2
          btnStyle='bg-darkblue w-[252px] h-[53px] rounded-md mt-5 mb-4'
          handleClick={() => {}}
          textStyle='text-white'
          title='Finish'
        />
      </Modal>
      <Actionmodal
        actionText={actionstexts}
        handleAction={actions}
        isClose={closemodal}
        isOpen={
          suspenduserModal ||
          blaklistuserModal ||
          verifyuserModal ||
          deactivateModal
        }
        title={title}
      />
    </main>
  );
}

export default UserLists;
