export interface TypographyProps {
  children?: JSX.Element | string;
  variant?:
    | "h2"
    | "h3"
    | "h5"
    | "h6"
    | "body"
    | "body_2"
    | "caption"
    | "label"
    | "header"
    | "subheader";
  textStyle?: string;
  color?: string;
}

export interface AnalyticsDataTypes {
  dateRange: null | string;
  data: {
    name: string;
    uv: number;
  }[];
  bgColor: string;
  textColor: string;
}

export interface PartyInfoTypes {
  title?: string;
  name: string;
  phone_number: string;
  whatsapp_number: string;
  email: string;
  type: string;
  address: string;
  id?: any;
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
