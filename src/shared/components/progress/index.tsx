import React from "react";

// this is specially made by me

interface Props {
  totalCount: number;
  customwidth: string;
  customheight: string;
  textSize: string;
  styling?: string;
  unit?: string;
}
function Progress(props: Props) {
  // const percentage = (count / props.totalCount) * 100;
  const radius = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (props.totalCount / 100) * circumference;
  return (
    <div
      className={`relative  ${props.customwidth} ${props.customheight} ${props.styling} `}
    >
      <div className='absolute inset-0 flex justify-center items-center'>
        <span
          className={props.textSize}
        >{`${props.totalCount}${props.unit || ""}`}</span>
      </div>
      <svg className='w-full h-full' viewBox='0 0 32 32'>
        <circle
          cx='16'
          cy='16'
          fill='none'
          r='15'
          stroke='#f3f4f6'
          strokeWidth='2'
        />
        <circle
          cx='16'
          cy='16'
          fill='none'
          r='15'
          stroke='#C2E0FF'
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap='round'
          strokeWidth='2'
        />
      </svg>
    </div>
  );
}

export default Progress;
