import { API } from "@/config";
import { SettingProps } from "@/services/settings/type";

export const SettingsApi = async (data: SettingProps) => {
  const response = await API.patch("/settings", data);
  return response.data;
};
