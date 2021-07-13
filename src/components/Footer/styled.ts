import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray};
    padding: 1rem;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan("medium")`
    grid-template-columns: repeat(4, 1fr);


    `}
  `}
`;

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.white};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`;

export const Copyright = styled.div;
