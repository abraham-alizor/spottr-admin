import React from "react";

import PageHeader from "@/shared/components/pageheader";
import SearchFilterComponent from "@/shared/components/search_filter";

const SubHeaders = ({
  route,
  title,
  placeholder,
  isthereroutes,
  showRoutes,
}: {
  route: string;
  title: string;
  placeholder: string;
  isthereroutes?: boolean;
  showRoutes?: () => void;
}) => (
  <div className='flex justify-between items-center'>
    <PageHeader
      multiroutes={isthereroutes}
      route={route}
      setRoutes={showRoutes}
      title={title}
    />
    <SearchFilterComponent title={placeholder} />
  </div>
);

export default SubHeaders;
