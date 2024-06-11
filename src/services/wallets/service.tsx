import { API } from "@/config";

export const GetAllWallets = async () => {
  const response = await API.get("/wallet-types");
  return response?.data;
};
