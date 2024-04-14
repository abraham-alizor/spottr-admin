import React from "react";

interface DataProps {
  name: string;
  email: string;
  profile_image: any;
}

interface Props {
  data: DataProps[];
}
const ParticipantComponent = ({ data }: Props) => (
  <div className='flex flex-col gap-4 mt-3'>
    {data.map((lists) => (
      <div className='bg-[#ECF7FF] border border-[#F6F6F6] flex items-center gap-3 px-4 py-2'>
        <img alt='' src={lists.profile_image} />
        <div className='flex flex-col '>
          <span className='text-sm text-darkblue font-medium'>
            {lists.name}
          </span>
          <span className='text-xs text-lightgrey'>{lists.email}</span>
        </div>
      </div>
    ))}
  </div>
);
export default ParticipantComponent;
