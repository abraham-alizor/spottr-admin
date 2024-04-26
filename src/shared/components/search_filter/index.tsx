import React, { useState } from "react";

import { filterData } from "@/fake_data";
import { FilterBox } from "@/features/Performance/layout";
import { ARROW_DOWN } from "@/utils/Exports";

const SearchFilterComponent = ({ title }: { title: string }) => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className='flex gap-6'>
      <input
        className='w-[433px] bg-[#C4C4C4] bg-opacity-15 placeholder:text-[#929AA7] py-3 px-3 outline-none'
        placeholder={`Search ${title}`}
        type='search'
      />
      <div className='flex gap-4 items-center relative'>
        <span>Filter by:</span>
        <button
          className='px-5 rounded-md text-sm bg-[#E1EFFB47] bg-opacity-15 py-[0.006rem] flex gap-4 border items-center'
          onClick={() => setOpen((previous) => !previous)}
          type='button'
        >
          <span>{selectedFilter || "None"}</span>
          <img alt='arrow_down' height={10} src={ARROW_DOWN} width={10} />
        </button>

        <FilterBox
          close={() => setOpen(false)}
          data={filterData}
          handleSelected={setSelectedFilter}
          open={open}
          styling='mt-[15rem] right-0'
        />
      </div>
    </div>
  );
};

export default SearchFilterComponent;
