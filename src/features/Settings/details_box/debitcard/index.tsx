/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";

import { useDebitQuery } from "@/context/useContext";
import ButtonV2 from "@/shared/components/buttonV2";
import { ALERT_ICON, CHECK, DOUBLE_CIRCLE } from "@/utils/Exports";

const cards = [
  {
    id: "1",
    cardColor: "bg-[#1569FA]",
    cardNo: "**** **** **** 4567",
    cardDate: "12/22",
  },
  {
    id: "2",
    cardColor: "bg-[#FFCB5F]",
    cardNo: "**** **** **** 4567",
    cardDate: "12/22",
  },
];
function DebitCard() {
  const { setAddDebitCard } = useDebitQuery();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <main className='mt-7'>
      <div className='flex flex-col items-start gap-5 '>
        <span className='text-xl font-medium text-darkblue'>
          Default debit card
        </span>
        {cards.map((card) => (
          <div
            className={`${card.cardColor} cursor-pointer flex items-end px-8 pb-5 justify-between bg-pattern w-[286px] h-[122px] ${card.id === "1" ? "bg-opacity-25" : ""} border-[0.68px] border-brand rounded-md relative`}
            key={card.id}
            onClick={() => setSelectedCard(card.id)}
          >
            {selectedCard === card.id && (
              <img alt='' className='absolute  -top-2 -right-2' src={CHECK} />
            )}
            <div className='flex flex-col gap-5'>
              <span>{card.cardNo}</span>
              <span>{card.cardDate}</span>
            </div>
            <img alt='' src={DOUBLE_CIRCLE} />
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center flex-col gap-8 mt-16'>
        <ButtonV2
          btnStyle=''
          handleClick={() => setAddDebitCard(true)}
          textStyle='text-darkblue font-medium'
          title='+ Add new card'
        />
        <div className='flex items-start gap-3'>
          <img alt='' src={ALERT_ICON} />
          <p className='text-[10px] text-brand'>
            Swipe left to delete any of this cards. Tap on any of the card to
            edit or make as default.
          </p>
        </div>
      </div>
    </main>
  );
}

export default DebitCard;
