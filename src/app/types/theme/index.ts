import { AvatarProps } from "antd";
import { MenuProps } from "rc-menu";

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

export interface MenuItemProps {
  label: string;
  count: number;
}
export type MenuItem = Required<MenuProps>["items"][number];

