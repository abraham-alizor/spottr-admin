import { API } from "@/config";

export const ADsApi = async () => {
  const response = await API.get("admin/ads");
  return response?.data;
};
