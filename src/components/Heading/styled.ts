import styled, { css } from "styled-components";
import { MyTheme } from "../../styles/MyTheme";
import { HeadingProps } from "./Heading";

const Modifies = {
  line: (theme: MyTheme, lineColor) => css`
    border-left: 0.7rem solid ${theme.colors[lineColor]};
    padding-left: ${theme.spacings.xxsmall};
  `,
};

export const Wrapper = styled.div<HeadingProps>`
  ${({ theme, size, color, line, lineColor }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes[size]};
    font-weight: ${theme.font.bold};

    ${!!line && Modifies.line(theme, lineColor)}
  `}
`;
