import { type } from "os";
import React, { AnchorHTMLAttributes } from "react";
import { ButtonHTMLAttributes } from "react";
import * as S from "./styled";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "terciary";
  icon?: JSX.Element;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;

  as?: React.ElementType;
} & ButtonTypes;

export default function Button({
  children,
  color = "primary",
  icon,

  size,
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper size={size} color={color} fullWidth={fullWidth} {...props}>
      {children}
    </S.Wrapper>
  );
}
