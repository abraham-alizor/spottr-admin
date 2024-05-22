import { API } from "../../config";
import { LoginPayloadTypes } from "./types";

export const LoginApi = async (data: LoginPayloadTypes) => {
  const response = await API.post("admin/auth/sign-in", data);
  return response.data;
};
