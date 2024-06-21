import { API } from "@/config";

export const ReferalsApi = async () => {
  const response = await API.get(
    "/referrals/my-referrals/get?referralTaskId=06240d81-b061-498a-aa42-b97ca1ce187d",
  );
  return response.data;
};
