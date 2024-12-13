/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { FaCheck, FaCheckCircle } from "react-icons/fa";

import { DENIED_ICON, STOP_ICON } from "@/utils/Exports";
import { formatCurrency } from "@/utils/functions";

interface Props {
  product: any;
  displayStyle: string;
  selected?: any;
  setSelected: ((id: any) => void) | any;
  componentStyle: string;
  gutter: string;
  fontWeight?: string;
  selectorBox?: boolean;
  handleSelector?: any;
  selectedBox?: any;
  performedAction?: string;
  // selectedAction?: string;
}
const ProductComponent = ({
  product,
  displayStyle,
  selected,
  setSelected,
  componentStyle,
  gutter,
  fontWeight,
  selectorBox,
  selectedBox,
  handleSelector,
  performedAction,
}: Props) => (
  <div className={`md:grid ${displayStyle} relative`}>
    {product?.map((data: any) => (
      <div
        className={`${componentStyle} ${selected === data?.id ? "scale-110" : ""} `}
        onClick={() => setSelected(data?.id)}
      >
        {data?.images?.length > 0 && (
          <div>
            <img alt='' height={65} src={data?.images[0]} width={65} />
          </div>
        )}
        {selectorBox === true ? (
          <div
            className='w-5 h-5 rounded-md flex justify-center items-center  border-2 border-darkblue absolute right-0 top-0 cursor-pointer z-30'
            onClick={() => handleSelector(data?.id)}
          >
            {selectedBox.includes(data?.id) ? (
              <span className='text-darkblue text-sm z-30'>
                <FaCheck />
              </span>
            ) : null}
          </div>
        ) : (
          <div>
            {selected === data.id && (
              <div className='text-green-500 absolute right-2'>
                <FaCheckCircle />
              </div>
            )}
          </div>
        )}

        <div className='absolute right-1'>
          {performedAction === "approve" && selectedBox.includes(data?.id) ? (
            <span className='text-green-500'>
              {" "}
              <FaCheckCircle />
            </span>
          ) : performedAction === "stop" && selectedBox.includes(data?.id) ? (
            <img alt='' height={20} src={STOP_ICON} width={20} />
          ) : performedAction === "decline" &&
            selectedBox.includes(data?.id) ? (
            <img alt='' height={20} src={DENIED_ICON} width={20} />
          ) : null}
        </div>

        <div className='flex flex-col items-start'>
          <span className=' font-semibold text-[#061E48]'>{data?.name}</span>
          <div className='flex flex-col items-start'>
            <span className={`text-[10px] text-skyblue font-${fontWeight} `}>
              Food Service
            </span>
            <span className='text-[10px]'>Coker & Sons Ltd.</span>
          </div>
          <div className={`mt-5 flex ${gutter} `}>
            <span className={`text-[10px] text-[#AAB4C3] font-${fontWeight} `}>
              {data?.address}
            </span>
            <span className={`text-[10px] font-${fontWeight} `}>
              {data?.currency && (
                <span className='bg-[#DDE6F6] text-darkblue p-1 rounded-md'>
                  {formatCurrency({
                    iso: "en-ng",
                    slug: data?.currency,
                  }).format(data?.amount || 0)}
                </span>
              )}
              <span className='text-[#AAB4C3] ml-[2px]'> {" / day"}</span>
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProductComponent;
