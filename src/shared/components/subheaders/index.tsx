import React from "react";

import PageHeader from "@/shared/components/pageheader";
import SearchFilterComponent from "@/shared/components/search_filter";

const SubHeaders = ({
  route,
  title,
  placeholder,
}: {
  route: string;
  title: string;
  placeholder: string;
}) => (
  <div className='flex justify-between items-center'>
    <PageHeader route={route} title={title} />
    <SearchFilterComponent title={placeholder} />
  </div>
);

export default SubHeaders;
