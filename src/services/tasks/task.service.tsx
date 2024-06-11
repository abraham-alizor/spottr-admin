import { TaskApiResponse } from "@/services/tasks/types";

import { API } from "../../config";

export const TaskApi = async () => {
  const response: TaskApiResponse = await API.get("admin/tasks");
  return response?.data?.data;
};

export const CreateTaskApi = async (data: any) => {
  const response: TaskApiResponse = await API.post("admin/tasks", data);
  return response?.data;
};
