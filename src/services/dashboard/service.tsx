import { API } from "@/config";

export const DashboardApi = async () => {
  const response = await API.get("admin/dashboard");
  return response.data.data;
};
