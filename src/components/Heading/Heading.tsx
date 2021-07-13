import React from "react";
import * as S from "./styled";

export type HeadingProps = {
  children: React.ReactNode;
  color?: "white" | "black";
  line?: boolean;
  size?: "xsmall" | "small" | "medium" | "large";
  lineColor?: "primary" | "secondary";
};

export default function Heading({
  children,
  line = true,
  color = "black",
  size = "medium",
  lineColor = "primary",
}: HeadingProps) {
  return (
    <S.Wrapper color={color} size={size} line={line} lineColor={lineColor}>
      {children}
    </S.Wrapper>
  );
}
