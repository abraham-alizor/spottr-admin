import { API } from "@/config";

export const CreatetermsAndConditon = async () => {
  const response = await API.post("/admin/terms-condition");
  return response.data;
};
