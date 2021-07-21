import styled, { css } from "styled-components";
import { gameCardSlideProps } from ".";
import media from "styled-media-query";
import * as CoverBanner from "../CoverBanner/styled";
type WrappeProps = Pick<gameCardSlideProps, "color">;

export const Wrapper = styled.div<WrappeProps>`
  ${({ theme }) => css`
    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};
      li {
        background: ${theme.colors.white};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;
        &.slick-active {
          background: ${theme.colors.primary};
        }
      }
      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }
    ${media.greaterThan("large")`
      ${CoverBanner.Wrapper} {
        max-width: 104rem;
        margin: 0 auto;
      }
      .slick-dots {

        position: relative;
        display: flex;

        right: 0;
        flex-direction: row;
        height: 100%;
        top: 0;
        margin: 0;
        li {

            margin-top:1rem ;

        }
      }
    `}
  `}
`;
