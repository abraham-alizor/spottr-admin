import { API } from "@/config";

export const GetAllCateGoriesApi = async () => {
  const response = await API.get("/categories/list/get");
  return response.data.data;
};
