import { API } from "@/config";
import { DataTypes } from "@/services/trays/type";

export const GetAlTrays = async () => {
  const response = await API.get("admin/trays");
  return response?.data?.data;
};
export const CreateTraysApi = async (data: DataTypes) => {
  const response = await API.post("admin/trays", data);
  return response?.data;
};
