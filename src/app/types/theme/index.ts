import { AvatarProps } from "antd";

export interface Theme {
  colors: any;
  fontSizes: {
    [key: string]: string;
  };
  fontWeights: {
    [key: string]: number;
  };
  fonts: {
    [key: string]: string;
  };
}

export interface CustomAntTokenTheme {
  colors: {
    [key: string]: string;
  };
  fontSizes: {
    [key: string]: string;
  };
  fontWeights: {
    [key: string]: number;
  };
  fonts: {
    [key: string]: string;
  };
}

// i re-used the one  from ant ButtonType
// export const AntButtonTypes = ["default", "primary", "dashed", "link", "text"];
// export const ButtonTypes = [...AntButtonTypes] as const;
// const ExtendedButtonTypes = [...ButtonTypes, "custom", "special"] as const;
// export type ExtendedButtonType = (typeof ExtendedButtonTypes)[number];

export enum AntButtonTypesEnum {
  "default",
  "primary",
  "dashed",
  "link",
  "text",
}
export enum appButtonTypesEnum {
  "secondary",
}
export type ExtendedButtonTypes =
  | keyof typeof AntButtonTypesEnum
  | keyof typeof appButtonTypesEnum;
export const ExtendedButtonTypes = {
  ...AntButtonTypesEnum,
  ...appButtonTypesEnum,
};

export interface avatarprops extends AvatarProps {
  children?: React.ReactNode;
}
