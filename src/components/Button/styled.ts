import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";
import { MyTheme } from "../../styles/MyTheme";

/* type WrapperProps = {hasIcon:boolean} & Pick<ButtonProps, "" */

const Modifies = {
  small: (theme: MyTheme) => css`
    height: 2.5rem;
    font-size: ${theme.font.sizes.xsmall};
  `,

  medium: (theme: MyTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
  `,

  large: (theme: MyTheme) => css`
    height: 6rem;
    font-size: ${theme.font.sizes.medium};
  `,

  fullWidth: (theme: MyTheme) => css`
    width: 100%;
    font-size: ${theme.font.sizes.large};
  `,
};

export const Wrapper = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  border-radius: 0.3rem;

  ${({ theme, size, color, fullWidth }) => css`
    background-color: ${theme.colors[color]};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xsmall};
    :hover {
      opacity: 0.7;
    }

    ${size == "small" && Modifies.small(theme)}
    ${size == "medium" && Modifies.medium(theme)}
${size == "large" && Modifies.large(theme)}
${!!fullWidth && Modifies.fullWidth(theme)}
  `}
`;
