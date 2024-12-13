/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable unicorn/prefer-switch */
/* eslint-disable consistent-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { AdsTemplate } from "@/fake_data";
import RoutesDrop from "@/features/Opportunities/routesdrop";
import ActionModal from "@/shared/components/actionmodal";
import ButtonV2 from "@/shared/components/buttonV2";
import DropDownV2 from "@/shared/components/drop-down-2";
import ProductComponent from "@/shared/components/product-component";
import SubNav from "@/shared/components/sub_nav";
import SubHeaders from "@/shared/components/subheaders";
import { ARROW_DOWN } from "@/utils/Exports";

const navLinks = [
  {
    id: 1,
    label: "Product lists",
    state: "product",
  },
  {
    id: 2,
    label: "Map pins",
    state: "mappins",
  },
  {
    id: 3,
    label: "Location callout",
    state: "location",
  },
  {
    id: 4,
    label: "Launch ads",
    state: "launch",
  },
];

const dropdownlinks = [
  { id: 1, label: "Approve ads" },
  { id: 2, label: "Stop Ad" },
  { id: 3, label: "Decline ads" },
];

const sublinks = [
  {
    route: "/opportunities/all-deals",
    label: "All deals",
  },
  {
    route: "/opportunities/all-lists",
    label: "All lists",
  },
  {
    route: "/opportunities/all-check-ins",
    label: "All check-ins",
  },
];
function Opportunities() {
  const [action, setAction] = useState(false);
  const [selectorBox, setSelectorBox] = useState(false);
  const [selectedBox, setSelectedBox] = useState<any>([]);
  const [selected, setSelected] = useState<string | null>("product");
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [dropDown, setDropDown] = useState(false);
  const [adsData, setAdsData] = useState(AdsTemplate);
  const [statusUpdate, setStatusUpdate] = useState<string | null>(null);
  const [routes, setRoutes] = useState(false);
  const navigate = useNavigate();

  const handleSelectedAction = (act: string) => {
    if (act) {
      setSelectedAction(act);
      setAction(true);
    } else return false;
  };

  const handleSelectedBoxes = (id: any) => {
    setSelectedBox((previousSelectedBox: any[]) => {
      if (previousSelectedBox.includes(id)) {
        return previousSelectedBox.filter((_id) => _id !== id);
      }
      return [...previousSelectedBox, id];
    });
  };

  const performActions = () => {
    const updatedAds = adsData.map((ads_data) => {
      if (selectedBox.includes(ads_data.id)) {
        return { ...ads_data }; // updates the selected boxes
      }
      return ads_data;
    });
    setAdsData(updatedAds);
  };

  const handleActions = () => {
    if (selectedAction === "Approve ads") {
      performActions();
      setStatusUpdate("approve");
      setSelectorBox(false);
      setAction(false);
      setDropDown(false);
    } else if (selectedAction === "Stop Ad") {
      performActions();
      setStatusUpdate("stop");
      setSelectorBox(false);
      setAction(false);
      setDropDown(false);
    } else if (selectedAction === "Decline ads") {
      performActions();
      setStatusUpdate("decline");
      setSelectorBox(false);
      setAction(false);
      setDropDown(false);
    } else {
      return null;
    }
  };

  const handleSelected = (parameter: any) => {
    setSelected(parameter);
  };
  return (
    <main className='mx-8 mt-6 relative'>
      <SubHeaders
        isthereroutes
        placeholder='products'
        route='/dashboard'
        showRoutes={() => setRoutes((previous) => !previous)}
        title='Opportunities'
      />

      <RoutesDrop data={sublinks} open={routes} setState={navigate} />

      <div className='mt-16 relative flex justify-between items-center'>
        <SubNav
          gutter='gap-[4rem]'
          handleSelected={handleSelected}
          navLinks={navLinks}
          selected={selected}
        />
        <div className='flex gap-10 items-center'>
          {selectorBox ? (
            <div className='flex-row-reverse flex gap-7'>
              <ButtonV2
                btnStyle='flex gap-6 items-center border border-lightgrey border-opacity-15 rounded-lg py-3 px-5'
                handleClick={() => setDropDown((previous) => !previous)}
                iconStyle='text-xs text-[#FF0000] ml-7'
                image={ARROW_DOWN}
                textStyle='text-sm text-lightgrey'
                title='Proceed'
              />
              <ButtonV2
                btnStyle='flex gap-6 items-center border border-[#FF4B3E]  border-opacity-15 rounded-lg py-3 px-5'
                handleClick={() => {
                  setSelectorBox(false);
                  setDropDown(false);
                  setSelectedBox([]);
                }}
                icon={<FaTimes />}
                iconStyle='text-xs  text-[#FF4B3E] ml-5'
                textStyle='text-sm text-[#FF4B3E]'
                title='Cancel'
              />
            </div>
          ) : (
            <ButtonV2
              btnStyle='flex gap-6 items-center border border-[#3670D4] border-opacity-15 rounded-lg py-3 px-5'
              handleClick={() => setSelectorBox(true)}
              icon={<FaCheckCircle />}
              iconStyle='text-xs text-[#3670D4]'
              textStyle='text-sm text-[#3670D4]'
              title='Mark products'
            />
          )}
        </div>
        {dropDown && (
          <DropDownV2
            data={dropdownlinks}
            open={dropDown}
            setState={handleSelectedAction}
          />
        )}
      </div>
      <div className='mt-8 mb-20'>
        <ProductComponent
          componentStyle='bg-white shadow-lg rounded-lg flex gap-2 py-2 px-3 hover:scale-105 transition-all duration-200 cursor-pointer relative'
          displayStyle='grid-cols-4 gap-4'
          fontWeight='semibold'
          gutter='gap-[2rem]'
          handleSelector={handleSelectedBoxes}
          // @ts-ignore
          performedAction={statusUpdate}
          product={adsData}
          selected=''
          // @ts-ignore
          selectedAction={selectedAction}
          selectedBox={selectedBox}
          selectorBox={selectorBox}
          setSelected={() => {}}
        />
      </div>
      {selectedAction === "Approve ads" ? (
        <ActionModal
          actionTitle1='Cancel'
          actionTitle2='Approve'
          close={handleActions}
          handleAction={() => setAction(false)}
          open={action}
          title='Approve ads'
          warningText='Approve all selected ads'
        />
      ) : selectedAction === "Stop Ad" ? (
        <ActionModal
          actionTitle1='Stop'
          actionTitle2='Cancel'
          close={() => setAction(false)}
          handleAction={handleActions}
          open={action}
          title='Stop Ad'
          warningText='Stop these Ads and send the user a notification'
        />
      ) : selectedAction === "Decline ads" ? (
        <ActionModal
          actionTitle1='Stop'
          actionTitle2='Cancel'
          close={() => setAction(false)}
          handleAction={handleActions}
          open={action}
          title='Decline Ads'
          warningText='Stop these Ads and send the user a notification'
        />
      ) : null}
    </main>
  );
}

export default Opportunities;
