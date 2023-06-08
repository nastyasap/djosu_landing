import React from "react";

const shapes = {
  CircleBorder15: "rounded-[15px]",
  RoundedBorder30: "rounded-[30px]",
  RoundedBorder9: "rounded-[9px]",
  CircleBorder19: "rounded-[19px]",
  CustomBorderTL15:
    "rounded-bl rounded-br-[15px] rounded-tl-[15px] rounded-tr-[15px]",
  CustomBorderTL15_1:
    "rounded-bl-[15px] rounded-br rounded-tl-[15px] rounded-tr-[15px]",
  CircleBorder12: "rounded-[12px]",
  CircleBorder27: "rounded-[27px]",
  RoundedBorder23: "rounded-[23px]",
  icbCircleBorder20: "rounded-[20px]",
  icbCircleBorder27: "rounded-[27px]",
  icbCircleBorder14: "rounded-[14px]",
  icbCustomBorderTL20: "rounded-bl-[20px] rounded-tl-[20px]",
  icbCircleBorder10: "rounded-[10px]",
  icbCircleBorder24: "rounded-[24px]",
} as const;
const variants = {
  OutlineBluegray900: "border border-blue_gray_900 border-solid",
  FillBluegray90004: "bg-blue_gray_900_04 text-white_A700",
  FillPinkA100: "bg-pink_A100",
  OutlineGray800: "border border-gray_800 border-solid",
  FillWhiteA700: "bg-white_A700",
  FillBluegray50: "bg-blue_gray_50",
  GradientLightblueA200Lightblue500: "bg-gradient1 ",
  GradientBlue50Lightblue5002: "bg-gradient3 ",
  GradientBlue5001Lightblue5002: "bg-gradient2 ",
  GradientBlue5002Teal5001: "bg-gradient ",
  GradientLightblue5003Teal5002: "bg-gradient4 ",
  OutlineBluegray6003f: "bg-pink_A100 shadow-bs",
  OutlinePinkA100: "bg-white_A700 border border-pink_A100 border-solid",
  OutlinePinkA100_1: "bg-white_A700_66 border border-pink_A100 border-solid",
  FillRedA10087: "bg-red_A100_87",
  FillTeal30087: "bg-teal_300_87",
  FillDeeppurpleA10087: "bg-deep_purple_A100_87",
  OutlinePinkA100_2: "bg-white_A700 border-2 border-pink_A100 border-solid",
  OutlineOrangeA400: "bg-pink_A100 border border-orange_A400 border-solid",
  OutlineOrange100: "bg-white_A700 border border-orange_100 border-solid",
  icbOutlineWhiteA70001:
    "bg-light_blue_50_04 border-2 border-solid border-white_A700_01",
  icbFillBlack900: "bg-black_900",
  icbOutlineBlack900: "border border-black_900 border-solid",
  icbGradientLightblueA200Lightblue500: "bg-gradient1 ",
  icbFillIndigo600: "bg-indigo_600",
  icbOutlinePinkA100: "bg-white_A700 border border-pink_A100 border-solid",
  icbFillPinkA100: "bg-pink_A100",
  icbOutlineBluegray900b2:
    "bg-white_A700_4c border border-blue_gray_900_b2 border-solid",
} as const;
const sizes = {
  sm: "p-0.5",
  md: "p-[5px]",
  lg: "p-2",
  xl: "p-3",
  "2xl": "p-[15px]",
  "3xl": "p-[22px] sm:px-5",
  smIcn: "p-[5px]",
  mdIcn: "p-[9px]",
  lgIcn: "p-3",
  xlIcn: "p-4",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
    >,
  "onClick"
  > &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
                                                                  children,
                                                                  className = "",
                                                                  leftIcon,
                                                                  rightIcon,
                                                                  shape = "",
                                                                  variant = "",
                                                                  size = "",
                                                                  ...restProps
                                                                }) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
