/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/no-extraneous-dependencies */
import { Transition } from "@headlessui/react";
import React, { useMemo, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { usePagination, useTable } from "react-table";

import { THREE_DOTS } from "@/utils/Exports";

function ReferalsTable({ data }: { data: any }) {
  const columns = useMemo(
    () => [
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
            <span className='text-lightgrey text-sm'>
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
            <span className='text-sm '>{row.original.ratings}</span>
          </div>
        ),
      },
      {
        Header: " No. of People",
        accessor: " referal_code",
        Cell: ({ row }: any) => (
          <div>
            <span className='font-medium'>{row.original.referal_code}</span>
          </div>
        ),
      },

      {
        Header: "Total amount ",
        accessor: "total_amnt",
        Cell: ({ row }: any) => (
          <div>
            <span className='font-medium'> ₦ {row.original.total_amnt}</span>
          </div>
        ),
      },
      {
        Header: "No. of People",
        accessor: "people",
        Cell: ({ row }: any) => (
          <div>
            <span className='font-medium'> {row.original.people}</span>
          </div>
        ),
      },

      {
        Header: "Level",
        accessor: "level",
        Cell: ({ row }: any) => (
          <div>
            <span className='font-medium'> {row.original.level}</span>
          </div>
        ),
      },
      {
        Header: "Last withdrawal",
        accessor: "date",
        Cell: ({ row }: any) => (
          <div>
            <span className=' text-lightgrey'> {row.original.date}</span>
          </div>
        ),
      },
      {
        Header: "status",
        accessor: "status",
        Cell: ({ row }: any) => (
          <div>
            <span className='font-normal text-[#39B54A]'>
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
                <span className='border-b pb-1 hover:text-darkblue cursor-pointer'>
                  Blacklist
                </span>
                <span className='border-b pb-1 text-branded cursor-pointer'>
                  Delete record
                </span>
              </Transition>
            </div>
          );
        },
      },
    ],
    [],
  );

  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination,
  );

  // const { pageIndex, gotoPage } = state;
  return (
    <div className='w-full'>
      <table className='w-full' {...getTableProps}>
        <thead className=''>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()} className='pb-4'>
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps()}
                  className='px-2 pb-6 font-medium'
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className=''>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className='text-center my-8 rounded-sm border-b-4 border-white '
              >
                {row.cells.map((cell: any) => (
                  <td
                    {...cell.getCellProps()}
                    className='px-5  bg-[#F6F6F6] py-2 whitespace-nowrap rounded-sm'
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className='flex justify-between px-2 mt-4 text-darkblue text-sm font-medium'>
        <div>
          <button className=' ' type='button'>
            View all
          </button>
        </div>
        <div className='flex gap-4 items-center'>
          <button
            disabled={!canPreviousPage}
            onClick={() => previousPage()}
            type='button'
          >
            prev
          </button>
          {/* <span>
            page
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span> */}
          {pageOptions.map((page_: any, index: number) => (
            <button
              className={`${pageIndex === index ? "border border-darkblue rounded-md" : ""} px-[6px]`}
              onClick={() => nextPage(index)}
              type='button'
            >
              {index + 1}
            </button>
          ))}
          {pageIndex.length > 3 ? (
            <button
              disabled={!canNextPage}
              onClick={() => nextPage()}
              type='button'
            >
              Next
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ReferalsTable;
