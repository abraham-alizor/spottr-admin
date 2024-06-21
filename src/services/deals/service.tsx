import { API } from "@/config";

export const DealsApi = async () => {
  const response = await API.get("/deals/:dealId/user/product-deals");
  return response.data;
};
