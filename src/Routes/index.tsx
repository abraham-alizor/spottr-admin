/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { Route, Routes } from "react-router-dom";

import AdSections from "@/features/adSections";
import Categories from "@/features/Categories";
import ContentManagement from "@/features/content-management";
import Dashboard from "@/features/Dashboard";
import Help from "@/features/Help";
import Loans from "@/features/Loans";
import NotificationCenter from "@/features/notifications";
import Opportunities from "@/features/Opportunities";
import AllCheckins from "@/features/Opportunities/all_checkins";
import AllDeals from "@/features/Opportunities/all_deals";
import AllLists from "@/features/Opportunities/all_lists";
import PerformancePage from "@/features/Performance";
import ReferralsSystem from "@/features/referrals-system";
import Settings from "@/features/Settings";
import Tasks from "@/features/tasks";
import CreateTask from "@/features/tasks/createtask";
import ViewTask from "@/features/tasks/viewtask";
import Transactions from "@/features/Transactions";
import Wallet from "@/features/Transactions/wallet";
import UserLists from "@/features/userlists";
import TransactionActivities from "@/features/userlists/transaction_act";
import UserActivities from "@/features/userlists/user_act";
import UserProfile from "@/features/userlists/userprofile";

import DashboardLayout from "../shared/Layouts/DashboardLayout";

function MainRoutes() {
  const Menus = [
    { title: "Dashboard", path: "dashboard", component: Dashboard },
    { title: "Opportunities", path: "opportunities", component: Opportunities },
    { title: "Categories", path: "categories", component: Categories },
    { title: "Transactions", path: "transactions", component: Transactions },
    { title: "Tasks", path: "tasks", component: Tasks },
    { title: "Ad sections", path: "ad-sections", component: AdSections },
    { title: "Loans", path: "loans", component: Loans },
    { title: "Users", path: "users", component: UserLists },
    { title: "Help", path: "help", component: Help },
    // { title: "Settings", path: "settings", component: Settings },
    { title: "performance", path: "performance", component: PerformancePage },
    { title: "create-task", path: "/tasks/create-task", component: CreateTask },
    {
      title: "view-task",
      path: "/tasks/task-review",
      component: ViewTask,
    },
    {
      title: "transaction-wallet",
      path: "/transactions/wallet",
      component: Wallet,
    },
    {
      title: "referral-system",
      path: "/referrals-system",
      component: ReferralsSystem,
    },
    {
      title: "content-management",
      path: "/content-management",
      component: ContentManagement,
    },
    {
      title: "user_list",
      path: "/userslist",
      component: UserLists,
    },
    {
      title: "user_list",
      path: "/userslist/user-profile",
      component: UserProfile,
    },
    {
      title: "user_list",
      path: "/userslist/user-transactions",
      component: TransactionActivities,
    },
    {
      title: "user_list",
      path: "/userslist/user-activities",
      component: UserActivities,
    },
    {
      title: "all_lists",
      path: "/opportunities/all-lists",
      component: AllLists,
    },
    {
      title: "all_deals",
      path: "/opportunities/all-deals",
      component: AllDeals,
    },
    {
      title: "all_chekins",
      path: "/opportunities/all-check-ins",
      component: AllCheckins,
    },
    {
      title: "notification_center",
      path: "/notification-center",
      component: NotificationCenter,
    },
    {
      title: "settings",
      path: "/settings",
      component: Settings,
    },
  ];
  return (
    <div>
      <DashboardLayout>
        <Routes>
          {Menus.map((item) => (
            <Route
              // @ts-ignore
              element={<item.component />}
              key={item.title}
              path={item.path}
            />
          ))}
        </Routes>
      </DashboardLayout>
    </div>
  );
}

export default MainRoutes;
