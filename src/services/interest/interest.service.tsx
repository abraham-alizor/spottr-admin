import { API } from "@/config";

export const CreateInterestApi = async (data: any) => {
  const response = await API.post("admin/interests", data);
  return response?.data;
};
export const GetInterestApi = async () => {
  const response = await API.get("admin/interests");
  return response?.data;
};
export const DeleteInterestApi = async (id: string) => {
  const response = await API.delete(`admin/interests/${id}`);
  return response?.data;
};
