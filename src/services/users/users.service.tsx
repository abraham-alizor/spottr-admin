import { API } from "@/config";

export const GetAllUsersApi = async () => {
  const response = await API.get("admin/users");
  return response.data;
};
