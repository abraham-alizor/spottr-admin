/* eslint-disable react/no-array-index-key */
import React from "react";
import { Route, Routes } from "react-router-dom";

import AdSections from "@/features/adSections";
import Categories from "@/features/Categories";
import ContentManagement from "@/features/content-management";
import Dashboard from "@/features/Dashboard";
import Help from "@/features/Help";
import Loans from "@/features/Loans";
import Opportunities from "@/features/Opportunities";
import PerformancePage from "@/features/Performance";
import ReferralsSystem from "@/features/referrals-system";
import Tasks from "@/features/tasks";
import CreateTask from "@/features/tasks/createtask";
import ViewTask from "@/features/tasks/viewtask";
import Transactions from "@/features/Transactions";
import Wallet from "@/features/Transactions/wallet";
import Users from "@/features/Users";

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
    { title: "Users", path: "users", component: Users },
    { title: "Help", path: "help", component: Help },
    // { title: "Settings", path: "settings", component: Settings },
    { title: "performance", path: "performance", component: PerformancePage },
    { title: "create-task", path: "/tasks/create-task", component: CreateTask },
    { title: "view-task", path: "/tasks/task-review/:id", component: ViewTask },
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
  ];
  return (
    <div>
      <DashboardLayout>
        <Routes>
          {Menus.map((item) => (
            <Route
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
