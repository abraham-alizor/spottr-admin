/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";

import { useDebitQuery } from "@/context/useContext";
import BanksDetails from "@/features/Settings/details_box/bankdetails";
import DebitCard from "@/features/Settings/details_box/debitcard";
import AddCard from "@/features/Settings/details_box/debitcard/addcard";
import SettingsLayout from "@/features/Settings/SettingsLayout";

const detailscontent = [
  {
    label: "Bank Details",
    component: <BanksDetails />,
  },
  {
    label: "Debit Card",
    component: <DebitCard />,
  },
];
function DetailsBox() {
  const { addDebitCard, setAddDebitCard } = useDebitQuery();
  const [selectedBox, setSelectedBox] = useState<any>(<BanksDetails />);

  const [selectedTab, setSelectedTab] = useState("Bank Details");

  const handleRenderContent = (string_: string) => {
    setSelectedTab(string_);
    const renderedComponent = detailscontent.find(
      (item) => item.label === string_,
    )?.component;

    setSelectedBox(renderedComponent || null);
  };

  return (
    <SettingsLayout
      handleclick={() => setAddDebitCard(false)}
      routeBtn
      title={`${addDebitCard ? "Set default debit card" : "Set account number"}  `}
    >
      {addDebitCard ? null : (
        <div className='flex justify-around items-center border-b'>
          {detailscontent.map((cont_) => (
            <span
              className={`text-sm font-medium text-brand cursor-pointer ${selectedTab === cont_.label ? "bg-[#ECF7FF] py-1 px-4" : ""} transition-all duration-300`}
              key={cont_.label}
              onClick={() => handleRenderContent(cont_.label)}
            >
              {cont_.label}
            </span>
          ))}
        </div>
      )}

      <div>{addDebitCard ? <AddCard /> : selectedBox}</div>
    </SettingsLayout>
  );
}

export default DetailsBox;
