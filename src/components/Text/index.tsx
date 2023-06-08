import React from "react";

const variantClasses = {
  h1: "font-normal sm:text-5xl md:text-5xl text-8xl",
  h2: "font-bold text-[9px]",
  h3: "font-light text-[8.88px]",
  h4: "text-[8px]",
  h5: "font-medium text-[7.11px]",
  h6: "font-light text-[7px]",
  body1: "font-normal sm:text-5xl md:text-5xl text-[64px]",
  body2: "font-normal text-[6px]",
  body3: "font-normal sm:text-[38px] md:text-[44px] text-[52px]",
  body4: "font-light text-[5.33px]",
  body5: "text-5xl sm:text-[38px] md:text-[44px]",
  body6: "font-bold sm:text-4xl md:text-[42px] text-[46px]",
  body7: "font-medium sm:text-[33.2px] md:text-[39.2px] text-[43.2px]",
  body8: "font-light text-[4.44px]",
  body9: "font-normal md:text-4xl sm:text-[34px] text-[38px]",
  body10: "text-4xl sm:text-[32px] md:text-[34px]",
  body11: "md:text-3xl sm:text-[28px] text-[32px]",
  body12: "font-medium sm:text-5xl md:text-5xl text-[300px]",
  body13: "sm:text-2xl md:text-[26px] text-[28px]",
  body14: "font-semibold md:text-2xl sm:text-[22px] text-[26px]",
  body15: "font-semibold sm:text-5xl md:text-5xl text-[250px]",
  body16: "text-2xl md:text-[22px] sm:text-xl",
  body17: "text-[22px] sm:text-lg md:text-xl",
  body18: "text-xl",
  body19: "font-normal sm:text-5xl md:text-5xl text-[180px]",
  body20: "font-normal text-[18.81px]",
  body21: "text-lg",
  body22: "font-normal sm:text-5xl md:text-5xl text-[170px]",
  body23: "text-base",
  body24: "font-normal sm:text-5xl md:text-5xl text-[150px]",
  body25: "font-normal text-[15.05px]",
  body26: "text-[15px]",
  body27: "font-medium text-[14.81px]",
  body28: "font-normal text-[14.11px]",
  body29: "text-sm",
  body30: "font-normal sm:text-5xl md:text-5xl text-[120px]",
  body31: "font-medium text-[12.44px]",
  body32: "text-xs",
  body33: "font-normal text-[11.29px]",
  body34: "text-[11px]",
  body35: "font-normal sm:text-5xl md:text-5xl text-[100px]",
  body36: "text-[10px]",
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
