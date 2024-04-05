/* eslint-disable react/no-array-index-key */
import React from "react";
import { Route, Routes } from "react-router-dom";

import AdSections from "@/features/adSections";
import Categories from "@/features/Categories";
import Dashboard from "@/features/Dashboard";
import Help from "@/features/Help";
import Loans from "@/features/Loans";
import Opportunities from "@/features/Opportunities";
import Settings from "@/features/Settings";
import Tasks from "@/features/tasks";
import Transactions from "@/features/Transactions";
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
    { title: "Settings", path: "settings", component: Settings },
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
