import { API } from "@/config";

export const GetAllNotificationApi = async () => {
  const response = await API.get("/notifications");
  return response?.data;
};
