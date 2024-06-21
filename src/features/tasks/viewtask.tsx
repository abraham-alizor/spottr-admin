/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-nested-ternary */

import { useQuery } from "react-query";
import { useLocation, useSearchParams } from "react-router-dom";

import { ParticipantsData, users_tasks } from "@/fake_data";
import { TaskApi } from "@/services/tasks/task.service";
import ButtonV2 from "@/shared/components/buttonV2";
import PageHeader from "@/shared/components/pageheader";
import ParticipantComponent from "@/shared/components/participantscomponent";
import { COIN, GRAY_DOT, MAP_PIC, SLOT_ICON } from "@/utils/Exports";

const ViewTask = () => {
  const location = useLocation();
  // const getTaskId = location.pathname.split("/").pop();
  const [urlParams] = useSearchParams();
  const getTaskId = urlParams.get("idref");
  const { data: taskdata } = useQuery("tasks", TaskApi);

  const displaydatabyId = users_tasks.filter(
    (taskid) =>
      // @ts-ignore
      taskid === getTaskId,
  );

  const listedParticipant = ParticipantsData.slice(0, 4);
  return (
    <main className='mx-7 mt-6 mb-44'>
      <PageHeader route='/tasks' title='Tasks' />

      <div className='mt-7 flex gap-4'>
        <div className='relative w-full'>
          <div>
            <img alt='' height={350} src={MAP_PIC} width={350} />
          </div>

          {displaydatabyId.map((data) => (
            <div>
              <div className='w-[316px] h-[112px] bg-white absolute shadow-custom top-[7rem] left-4 p-2 flex flex-col gap-1'>
                <div className='flex gap-2 border-b pb-1'>
                  <div>
                    <img alt='' src={data.img} />
                  </div>
                  <div className='flex flex-col gap-3'>
                    <div className='flex flex-col items-start gap-1'>
                      <span className='text-xs font-bold text-[#061E48]'>
                        {data.title}
                      </span>
                      <span className='text-[8px] bg-[#ECF7FF] p-1 rounded-md'>
                        {data.price_tag}
                      </span>
                    </div>
                    <div className='flex justify-between text-[10px] text-lightgrey'>
                      <div className='flex gap-[2px] '>
                        <span>Coin Eqv:</span>
                        <img alt='' src={COIN} />
                        <span>150</span>
                      </div>
                      <span>Hold for more option</span>
                    </div>
                  </div>
                </div>
                <div className='flex justify-between  text-lightgrey'>
                  <div className='flex gap-1 items-center text-[9px]'>
                    <img alt='' height={10} src={SLOT_ICON} width={10} />
                    <span>{data.slot_left}</span>
                    <img alt='' height={5} src={GRAY_DOT} width={5} />
                    <span>{data.time}</span>
                    <img alt='' height={5} src={GRAY_DOT} width={5} />
                    <span>{data.location}</span>
                  </div>
                  {data.status === "new" && (
                    <span className='text-branded text-[12px] font-medium'>
                      02:33min left
                    </span>
                  )}
                </div>
              </div>
              <div className='mt-36 flex justify-center items-center flex-col max-w-[300px]'>
                <div className='flex items-center'>
                  {data.status === "new" && (
                    <span className='text-4xl text-branded font-medium'>
                      02:33min left
                    </span>
                  )}
                </div>
                <div className='mt-6'>
                  <span className='text-xs font-medium'> Instructions:</span>
                  <p className='mt-7 text-xs font-medium text-lightgrey'>
                    For regular goods for good exchange, the exchange area shows
                    a list of goods that have been indicated for trading and
                    then any user who has a new good to be traded for another
                    comes to the exchange and indicates their good.
                  </p>
                </div>
              </div>
              <div className='max-w-[300px]'>
                <div className='flex justify-between  mt-6 text-xs font-medium'>
                  <span>Participants: 52,000</span>

                  <span>View all</span>
                </div>
                <ParticipantComponent data={listedParticipant} />
              </div>
            </div>
          ))}
        </div>
        <div className='w-full bg-white border rounded-lg p-6 '>
          <span className='text-sm text-darkblue font-medium'>
            Participants
          </span>
          <div className='mt-8 max-h-[750px] overflow-y-scroll'>
            <ParticipantComponent data={ParticipantsData} />
          </div>
        </div>
        <div className='w-full bg-white border rounded-lg pt-5 px-10'>
          <span className='text-sm text-darkblue font-medium'>Feedback</span>
          <div className='mt-8 '>
            {displaydatabyId.map((details) => (
              <div className='flex flex-col gap-10'>
                <img alt='' height={300} src={details.img} width={500} />
                <p className='text-sm  text-lightgrey '>
                  For regular goods for good exchange, the exchange area shows a
                  list of goods that have been indicated for trading and then
                  any user who has a new good to be traded for another comes to
                  the exchange and indicates their good.For regular goods for
                  good exchange, the exchange area shows a list of goods that
                  have been indicated for trading and then any user who has a
                  new good to be traded for another comes to the exchange and
                  indicates their good.For regular goods for good exchange, the
                  exchange area shows a list of goods that have been indicated
                  for trading and then any user who has a new good to be traded
                  for another comes to the exchange and indicates their good.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ButtonV2
        btnStyle='border-[#3670D4] border float-right mt-5 px-7 py-3 border-opacity-15 rounded-md font-medium'
        handleClick={() => {}}
        textStyle='text-darkblue'
        title='Mark complete'
      />
    </main>
  );
};

export default ViewTask;
