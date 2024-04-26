/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { filterData } from "@/fake_data";
import ButtonV2 from "@/shared/components/buttonV2";
import { ARROW_DOWN } from "@/utils/Exports";

interface Props {
  title: string;
}

interface FilterProps {
  open: boolean;
  close: () => void;
  data: any;
  handleSelected: (value: string) => void;
  styling: string;
}

export const FilterBox = (props: FilterProps) => {
  const location = useLocation();
  return (
    <Transition
      as='div'
      className={`absolute bg-white flex flex-col gap-2 items-start  rounded-md px-2  ${props.styling} z-50  w-fit pt-4 ${location.pathname === "/userslist" ? "h-[250px] -top-[12rem]" : "h-[200px]"}  shadow-custom`}
      enter='ease-out duration-300'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='ease-in duration-200'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
      show={props.open}
    >
      {props.data.map((filters: any) => (
        <span
          className='border-b pb-2 cursor-pointer hover:text-darkblue font-medium text-sm'
          key={filters.id}
          onClick={() => {
            props.handleSelected(filters.list);
            props.close();
          }}
        >
          {filters.list}
        </span>
      ))}
    </Transition>
  );
};
const BoxHeaders = (props: Props) => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filters, setFilters] = useState(false);
  return (
    <div className='relative flex justify-between'>
      <span className='text-lg font-medium text-darkblue'>{props.title}</span>
      <div>
        <ButtonV2
          btnStyle=' flex items-center gap-4 bg-[#E1EFFB47] bg-opacity-[28%] px-4 py-1 border border-[#BBC4D4] rounded-md'
          handleClick={() => setFilters((previous) => !previous)}
          image={ARROW_DOWN}
          textStyle='text-xs text-darkblue font-medium'
          title={selectedFilter || "Filter by"}
        />
      </div>

      <FilterBox
        close={() => setFilters(false)}
        data={filterData}
        handleSelected={setSelectedFilter}
        open={filters}
        styling='mt-9 right-0'
      />
    </div>
  );
};
function Layout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <main className='w-[390px] h-[595px]  bg-white border border-[#E1EFFB] rounded-md px-3 py-5'>
      <BoxHeaders title={title} />
      <div className='max-h-[500px] overflow-y-scroll'>{children}</div>
    </main>
  );
}

export default Layout;
