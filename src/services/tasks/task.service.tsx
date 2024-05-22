import { TaskApiResponse } from "@/services/tasks/types";

import { API } from "../../config";

export const TaskApi = async () => {
  const response: TaskApiResponse = await API.get("admin/tasks");
  return response?.data?.data;
};
