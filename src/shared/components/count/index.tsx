import React from "react";

import { COUNT } from "@/utils/Exports";

interface CountTypes {
  text?: string;
}

function Count(props: CountTypes) {
  const { text } = props;
  return (
    <div className='relative w-full'>
      <img
        alt=''
        className='mt-3 aspect-[1.03] w-[58px] mx-auto'
        loading='lazy'
        src={COUNT}
      />
      <span className='absolute top-7 right-[43%]'>{text}</span>
    </div>
  );
}

export default Count;
