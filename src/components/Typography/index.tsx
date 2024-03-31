import { TypographyProps } from "../../types";

/**
 * A function that returns a Text component with some styling.
 * @param {TypographyProps} props - TypographyProps
 * @returns A Text component with a style prop that is an array of styles.
 */
const Typography = (props: TypographyProps) => (
  <p
    className={
      props.variant === "h2"
        ? `font-semibold md:font-bold text-[36px] lg:text-[44px] leading-[40px] lg:leading-[60px] ${props.color} ${props.textStyle}`
        : props.variant === "subheader"
          ? `font-semibold md:font-bold text-[32px] lg:text-[38px] leading-[38px] lg:leading-[54px] ${props.color} ${props.textStyle}`
          : props.variant === "header"
            ? `font-semibold md:font-bold text-[40px] lg:text-[52px] leading-[48px] lg:leading-[70px] ${props.color} ${props.textStyle}`
            : props.variant === "h3"
              ? `font-bold text-[36px] lg:text-2xl leading-[40px] lg:leading-[60px] ${props.color} ${props.textStyle}`
              : props.variant === "h5"
                ? `font-semibold text-[20px] leading-[32px] ${props.color} ${props.textStyle}`
                : props.variant === "h6"
                  ? `text-[16px] leading-[30px] ${props.color} ${props.textStyle}`
                  : props.variant === "body"
                    ? `text-lg  ${props.color} ${props.textStyle}`
                    : props.variant === "caption"
                      ? `font-normal text-[14px] md:text-[10px] leading-[13.02px] ${props.textStyle}`
                      : props.variant === "label"
                        ? `font-400 text-[16px] md:text-[14px] md:leading-[22px] ${props.color} ${props.textStyle}`
                        : props.textStyle
    }
  >
    {props.children}
  </p>
);
export default Typography;
