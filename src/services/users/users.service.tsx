import { API } from "@/config";

export const GetAllUsersApi = async () => {
  const response = await API.get("admin/users");
  return response?.data;
};

export const GetUserById = async (id: string) => {
  const response = await API.get(`admin/users/${id}`);
  return response?.data;
};
export const SuspendUserById = async (id: string) => {
  const response = await API.put(`admin/users/${id}/suspend`);
  return response?.data;
};
export const BlacklistUserById = async (id: string) => {
  const response = await API.put(`/admin/users/${id}/blacklist`);
  return response?.data;
};
export const VerifyUserById = async (id: string) => {
  const response = await API.put(`/admin/users/${id}/verify`);
  return response?.data;
};
export const DeactivateUserById = async (id: string) => {
  const response = await API.put(`/admin/users/${id}/deactivated`);
  return response?.data;
};
