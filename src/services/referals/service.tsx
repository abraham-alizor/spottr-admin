import { API } from "@/config";

export const GetReferalsApi = async () => {
  const response = await API.get(
    "/referrals/my-referrals/get?referralTaskId=<string>",
  );
  return response.data;
};
