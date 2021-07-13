import styled, { css } from "styled-components";
import { CoverBannerProps } from "./CoverBanner";
import media from "styled-media-query";

export const Wrapper = styled.section<CoverBannerProps>`
  ${({ theme, backgroundImg }) => css`
    position: relative;
    background-image: url(${backgroundImg});
    height: 23rem;
    background-position: center center;
    background-size: cover;
    display: flex;

    ::after {
      content: "";
      bottom: 0;
      position: absolute;
      width: 100%;
      height: 50%;
      background-color: rgba(0, 0, 0, 0.6);
      background-size: cover;
    }
    ${media.greaterThan("medium")`
    height: 32rem;
    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: ${theme.spacings.large};
    ${media.lessThan("medium")`
    margin: ${theme.spacings.xsmall};

    `}
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    ${media.lessThan("medium")`
    font-size: ${theme.spacings.xsmall};

    `}
  `}
`;

export const SubTitle = styled.h4`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
    color: ${theme.colors.lightGray};
    margin-bottom: ${theme.spacings.xsmall};
    ${media.lessThan("medium")`
    font-size: ${theme.spacings.xsmall};

    `}
  `}
`;

export const ButtonContainer = styled.div``;
