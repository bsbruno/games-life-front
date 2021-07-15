import styled, { css } from "styled-components";
import media from "styled-media-query";
import * as SMenu from "../../components/Menu/styled";
import * as SCard from "../../components/GameCard/styled";
import { GameCardProps } from "../../components/GameCard/GameCard";
import banner from "../../assets/attBanner.png";
type BackgroundImg = {
  photos: [
    {
      url: string;
    }
  ];
};

export const Wrapper = styled.div`
  ${SMenu.MenuFullMobile} {
    position: fixed;

    height: 100vh;
  }
`;

export const Background = styled.div<BackgroundImg>`
  ${({ theme, photos }) => css`
    background-image: url(${photos != undefined ? photos[0].url : null});

    width: 100%;
    height: 30rem;
    background-position: center center;
    object-fit: cover;

    ::after {
      content: "";
      bottom: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      background-size: cover;
      z-index: -999;
    }
  `}
`;
export const Teste = styled.div``;

export const Content = styled.div`
  span {
    padding: 0.5rem;
  }

  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    display: grid;

    padding: 2rem;

    max-width: 900px;
    margin: 0 auto;
    max-height: 30rem;
    top: -5rem;
    position: relative;

    ${media.lessThan("medium")`
    display: none;

    `}
  `}
`;

export const ContentMobile = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    padding: 2rem;
    display: grid;
    max-height: 100vh;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    z-index: 2;
    ${media.greaterThan("medium")`
    display: none;

    `}
  `}
`;

export const Title = styled.div``;

export const Description = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: bold;
    padding: 1rem;
  `}
`;

export const Price = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    max-width: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    margin-bottom: 1rem;
  `}
`;

export const MoreGamesSection = styled.div`
  padding-top: 2.5rem;
  margin-bottom: 3rem;

  margin-left: 1rem;
  ${SCard.Wrapper} {
    width: 98%;
  }
  ${SCard.BoxImage} {
    margin-top: 1rem;
  }
  ${media.lessThan("medium")`
  ${SCard.Wrapper} {
    width: 320px;
  }
  `}
`;
