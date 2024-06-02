import { API } from "@/config";
import { ProductTypesResponse } from "@/services/product/types";

export const ProductApi = async () => {
  const response = await API.get("admin/products");
  return response.data.data;
};
export const ProductByIdApi = async (id: string | null) => {
  const response: ProductTypesResponse = await API.get(`admin/products/${id}`);
  return response.data.data;
};
