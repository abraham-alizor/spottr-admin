/* eslint-disable no-nested-ternary */
import React, { useState } from "react";

import FeedBack from "@/features/notifications/feedback";
import MessageBox from "@/features/notifications/message_box";
import PushNotification from "@/features/notifications/push_notification";
import Reports from "@/features/notifications/reports";
import SubNav from "@/shared/components/sub_nav";
import SubHeaders from "@/shared/components/subheaders";

const subnav = [
  {
    state: "messages",
    label: "Messages",
  },
  {
    state: "feedback",
    label: "Feedback",
  },
  {
    state: "reports",
    label: "Reports",
  },
  {
    state: "push-notification",
    label: "Push Notification",
  },
];
function NotificationCenter() {
  const [selected, setSelected] = useState("messages");

  const components =
    selected === "messages" ? (
      <MessageBox />
    ) : selected === "feedback" ? (
      <FeedBack />
    ) : selected === "reports" ? (
      <Reports />
    ) : selected === "push-notification" ? (
      <PushNotification />
    ) : (
      <PushNotification />
    );
  return (
    <main className='mx-7 mt-6 mb-24'>
      <SubHeaders placeholder='message' route='/dashboard' title='Categories' />
      <div className='mt-7'>
        <SubNav
          gutter='w-[550px] gap-5'
          handleSelected={setSelected}
          navLinks={subnav}
          selected={selected}
          textStyle='text-darkblue font-semibold text-xs'
        />
        {components}
      </div>
    </main>
  );
}

export default NotificationCenter;
