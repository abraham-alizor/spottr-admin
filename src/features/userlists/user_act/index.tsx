/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { Link } from "react-router-dom";

import { userActivities } from "@/fake_data";

function UserActivities() {
  return (
    <main className='mt-7'>
      <div className='w-[670px] h-[500px] flex flex-col gap-5 overflow-y-scroll '>
        {userActivities.map((data_) => (
          <div className='flex justify-between border-b pb-4'>
            <div className='flex flex-col gap-1'>
              <span className='text-xs font-bold '>{data_.title}</span>
              <div className='text-xs font-semibold w-[500px]'>
                <span>{data_.details}</span>
                {"  "}
                <Link
                  className='text-darkblue underline'
                  // @ts-ignore
                  to={data_.link}
                >
                  {data_.link ?? ""}
                </Link>
              </div>
            </div>
            <span className='text-xs'>{data_.date}</span>
          </div>
        ))}
      </div>
    </main>
  );
}

export default UserActivities;
