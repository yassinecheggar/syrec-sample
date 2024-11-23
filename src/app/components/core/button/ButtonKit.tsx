import {
  AntButtonTypesEnum,
  appButtonTypesEnum,
  ExtendedButtonTypes,
} from "@/types/theme";
import { Button, ButtonProps } from "antd";
import { ButtonType } from "antd/es/button";
import classNames from "classnames";
import React from "react";

interface CustomButtonProps extends ButtonProps {
  text?: string;
  [key: string]: any;
  btnType: ExtendedButtonTypes;
}

function getAntButtonType(value: string): ButtonType {
  return Object.values(AntButtonTypesEnum).includes(value)
    ? (value as ButtonType)
    : "default";
}

function iSCustomButtonType(value: string): boolean {
  return Object.values(appButtonTypesEnum).includes(value);
}

function ButtonKit(props: CustomButtonProps) {
  const {
    text,
    children,
    className,
    loading,
    type,
    btnType,
    onClick,
    ...rest
  } = props;

  const classes = classNames(iSCustomButtonType(btnType), {
    [`btn-${btnType}`]: btnType,
  });

  return (
    <Button
      loading={loading}
      {...rest}
      onClick={onClick}
      className={classes}
      type={getAntButtonType(btnType)}
    >
      {children}
    </Button>
  );
}

export default ButtonKit;
