import { API } from "@/config";
import { DashboardResponse } from "@/services/dashboard/types";

export const DashboardApi = async () => {
  const response: DashboardResponse = await API.get("admin/dashboard");
  return response.data.data;
};
