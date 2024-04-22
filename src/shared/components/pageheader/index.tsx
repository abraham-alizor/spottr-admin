import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { GO_BACK } from "@/utils/Exports";

interface Props {
  title?: string;
  route: string;
  isSubtitle?: boolean;
  subtitle?: string;
}
const PageHeader = ({ title, route, isSubtitle, subtitle }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const lastTab = location.pathname.split("/")[2];
  return (
    <div className='flex gap-5 items-center'>
      <button
        className='flex gap-6 items-center'
        onClick={() => navigate(route)}
        type='button'
      >
        <img alt='back' height={15} src={GO_BACK} width={15} />
        <span className='text-sm text-darkblue'>Go back</span>
      </button>
      <span
        className={`${lastTab ? "text-sm" : "text-lg"}   text-darkblue font-semibold `}
      >
        {title}
      </span>
      {isSubtitle && (
        <span className='text-lg text-darkblue font-semibold'>{subtitle}</span>
      )}
    </div>
  );
};

export default PageHeader;
