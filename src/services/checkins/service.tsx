import { API } from "@/config";

export const ChcekinsApi = async () => {
  const response = await API.get(
    "/checkin-calls?fullMode=false&lat=333&lng=999",
  );
  return response.data;
};
