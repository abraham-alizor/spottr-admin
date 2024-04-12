import React from "react";
import { useNavigate } from "react-router-dom";

import { GO_BACK } from "@/utils/Exports";

interface Props {
  title: string;
}
const PageHeader = ({ title }: Props) => {
  const navigate = useNavigate();
  return (
    <div className='flex gap-5'>
      <button
        className='flex gap-6 items-center'
        onClick={() => navigate("/dashboard")}
        type='button'
      >
        <img alt='back' height={15} src={GO_BACK} width={15} />
        <span className='text-sm text-darkblue'>Go back</span>
      </button>
      <span className='text-lg text-darkblue font-semibold'>{title}</span>
    </div>
  );
};

export default PageHeader;
