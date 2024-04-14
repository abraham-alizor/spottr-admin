import React from "react";

import { ARROW_DOWN } from "@/utils/Exports";

const SearchFilterComponent = () => (
  <div className='flex gap-6'>
    <input
      className='w-[433px] bg-[#C4C4C4] bg-opacity-15 placeholder:text-[#929AA7] py-3 px-3 outline-none'
      placeholder='Search task'
      type='search'
    />
    <div className='flex gap-4 items-center'>
      <span>Filter by:</span>
      <button
        className='px-5 rounded-md text-sm bg-[#E1EFFB47] bg-opacity-15 py-[0.006rem] flex gap-4 border items-center'
        type='button'
      >
        <span>None</span>
        <img alt='arrow_down' height={10} src={ARROW_DOWN} width={10} />
      </button>
    </div>
  </div>
);

export default SearchFilterComponent;
