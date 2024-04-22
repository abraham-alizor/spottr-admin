/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";

import { GO_BACK } from "@/utils/Exports";

interface SettingsProps {
  title?: string;
  children: React.ReactNode;
  routeBtn: boolean;
  handleclick: () => void;
}
function SettingsLayout(props: SettingsProps) {
  return (
    <main className='w-[375px] h-[700px] bg-white shadow-custom rounded-sm mt-11 py-10 px-10'>
      {props.routeBtn && (
        <div className='flex gap-5 items-center mb-9'>
          <img
            alt=''
            className='cursor-pointer'
            onClick={props.handleclick}
            src={GO_BACK}
          />
          <span className='text-brand font-medium'>{props.title}</span>
        </div>
      )}
      <div>{props.children}</div>
    </main>
  );
}

export default SettingsLayout;
