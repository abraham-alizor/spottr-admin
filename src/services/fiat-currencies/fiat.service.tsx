import { API } from "@/config";

export const GetFiatAllCurencies = async () => {
  const response = await API.get("admin/fiat-currencies");
  return response?.data;
};
