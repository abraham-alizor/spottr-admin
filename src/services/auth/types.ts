export interface UserPayload {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  whatsapp_number: string;
  email_verified_at: string;
  scn: string;
  profile_photo: null | string;
  token: string;
  call_to_bar_certificate: string;
  gender: string;
  stamp_photo: null | string;
}

export interface RegisterResponsePayload {
  data: {
    success: boolean;
    message: string;
    data: {
      first_name: string;
      last_name: string;
      email: string;
      phone_number: string;
      whatsapp_number: string;
      scn: string;
      gender: string;
      address: string;
      alternative_email: string;
      call_to_bar_certificate: string;
      role: number;
      id: string;
      updated_at: string;
      created_at: string;
    };
  };
}
export interface RegisterRequestPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
  whatsapp_number: string;
  scn: string;
  gender: string;
  address: string;
  alternative_email: string;
  call_to_bar_certificate: any;
}
export interface RegisterRequestFirmPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
  whatsapp_number: string;
  scn: string;
  gender: string;
  address: string;
  alternative_email: string;
  call_to_bar_certificate: any;
  firm_name: string;
  firm_email: string;
  firm_address: string;
  firm_phone_number: string;
  firm_whatsapp_number: string;
}

export interface ButtonPropertyTypes {
  onClick?: any;
  bgColor?: string;
  hoverColor?: string;
  textColor?: string;
  className?: string;
  title?: string;
  icons?: string;
  iconClassName?: string;
  type?: any;
  isLoading?: boolean;
}

export interface LoginResponseTypes {
  data: {
    success: boolean;
    message: string;
    data: {
      id: string;
      first_name: string;
      last_name: string;
      email: string;
      phone_number: string;
      whatsapp_number: string;
      email_verified_at: string;
      scn: string;
      profile_photo: null | string;
      token: string;
      call_to_bar_certificate: string;
      role: string;
      gender: string;
      stamp_photo: null | string;
    };
  };
}
export interface LoginPayloadTypes {
  email: string;
  password: string;
}

interface VerifyUser {
  id: string;
  first_name: string;
  last_name: string;
  other_name: string | null;
  email: string;
  alternative_email: string | null;
  phone_number: string;
  whatsapp_number: string;
  email_verified_at: string;
  role: number;
  gender: string;
  age: number | null;
  call_to_bar_certificate: string;
  scn: string;
  address: string;
  firm_id: string;
  stamp_photo: string | null;
  profile_photo: string | null;
  created_at: string;
  updated_at: string;
}

interface VerifyDataTypes {
  id: string;
  user_id: string;
  token: string;
  type: number;
  expired_at: string;
  created_at: string;
  updated_at: string;
  user: VerifyUser;
}

export interface VerifyResponsePayloadTypes {
  data: { success: boolean; message: string; data: VerifyDataTypes };
}
export interface VerifyRequestPayloadTypes {
  token: string;
  type: "REGISTER" | "PASSWORD RESET";
}
export interface ResendResponsePayloadTypes {
  data: { success: boolean; message: string; data: [] };
}
export interface ResendRequestPayloadTypes {
  email: string | null;
  type: "REGISTER" | "PASSWORD RESET";
}
