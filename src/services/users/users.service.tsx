import { API } from "@/config";
import { TaskApiResponse } from "@/services/tasks/types";

export const UsersApi = async () => {
  const response: TaskApiResponse = await API.get("admin/users");
  return response?.data?.data;
};
