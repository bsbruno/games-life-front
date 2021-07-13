import styled, { css } from "styled-components";
import * as S from "../../components/GameCard/styled";
import media from "styled-media-query";

export const Wrapper = styled.div`
  height: 100vh;
  margin-bottom: 6.25rem;
  margin-top: 1rem;
`;

export const Content = styled.div`
  display: grid;
  margin-top: 5rem;
  grid-template-areas: "filter gamecard gamecard";
  margin-bottom: 6.25rem;
  ${media.lessThan("medium")`

margin-right:15px ;
margin-top:15px ;

`}
  ul {
    list-style: none;
    padding: 1rem;
    margin-top: 1rem;
    li {
      margin-top: 1rem;
      padding: 1rem;
      button {
        background-color: transparent;
        color: white;
        border: 0;
        cursor: pointer;
        :hover {
          opacity: 0.7;
        }
      }
    }
  }
`;

export const FilterDesktop = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  grid-area: filter;
  ${media.lessThan("medium")`
  display: none;
  `}
`;

export const FilterMobileIcon = styled.div`
  position: absolute;
  top: 85px;
  right: -1px;
  margin-right: 18px;
  ${media.greaterThan("medium")`
  display: none;
  `}
`;

type MenuMobileProps = {
  isOpen: boolean;
};

export const FilterMobile = styled.div<MenuMobileProps>`
  ${({ theme, isOpen }) => css`
    background-color: ${theme.colors.darkGray};
    ul {
      li {
        a {
          text-decoration: none;
          color: ${theme.colors.white};
        }
      }
    }
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 5rem;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    display: ${isOpen ? "block" : "none"};

    svg {
      position: absolute;
      top: 0;
      right: 0;

      font-size: 4rem;
    }
  `}
`;

export const Card = styled.div`
  width: 100%;
  ${media.lessThan("medium")`
justify-content: center;
margin-left:0.8rem ;
`}
  display: flex;
  grid-area: gamecard;
  justify-content: flex-start;
  gap: 1rem;
  flex: 2;
  margin-top: 6rem;
  flex-wrap: wrap;
  ${S.Wrapper} {
    width: 320px;
    height: 230px;
  }
`;
export const ButttonViewMore = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  margin-left: 25rem;
  ${media.lessThan("medium")`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  margin-left: 1rem;
  `}
  span {
    display: flex;
    font-size: 1.5rem;
  }
  button {
    padding: 1rem;
    border: 0;
    background-color: transparent;
    color: white;
    font-weight: bold;
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
    svg {
      font-size: 5rem;
    }
  }
`;
export const InputSearch = styled.div`
  position: absolute;
  right: 120px;
  ${media.lessThan("medium")`
  position: absolute;
right: 50px;

  `}
`;
