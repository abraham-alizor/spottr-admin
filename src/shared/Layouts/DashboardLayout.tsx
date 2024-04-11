/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

"use client";

import { useEffect, useState } from "react";

import { useMediaQuery } from "@/hooks";
import Header from "@/shared/components/Header";
import Sidebar from "@/shared/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobileView = useMediaQuery("(max-width: 640px)");
  const isTabletView = useMediaQuery("(max-width: 840px)");
  const [isSideNavVisible, setSideNavVisible] = useState(true);

  useEffect(() => {
    if (isMobileView) {
      setSideNavVisible(false);
    } else {
      setSideNavVisible(true);
    }
  }, [isMobileView]);
  return (
    <div className='h-screen w-full overflow-hidden lg:flex'>
      {isMobileView || isTabletView ? (
        <div
          className={`fixed bottom-0 left-0 top-0 z-20 w-full bg-gray-800/60 ${
            isSideNavVisible ? "" : "hidden"
          }`}
          onClick={() => setSideNavVisible(false)}
        />
      ) : null}
      <Sidebar
        {...{ open: isSideNavVisible, onClose: () => setSideNavVisible(false) }}
      />
      <div className='flex-1 lg:w-[80%] bg-[#fbfcfe]'>
        <div className=''>
          <Header onMenu={() => setSideNavVisible(true)} />
        </div>
        <div className='[@media(max-width:767px)]:scrollbar-hide h-screen overflow-auto bg-[#fbfcfe] lg:pb-20'>
          {children}
        </div>
      </div>
    </div>
  );
}
