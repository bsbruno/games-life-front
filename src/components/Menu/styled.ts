import styled, { css } from "styled-components";
import { MenuProps } from "./Menu";
import media from "styled-media-query";
import { LinkProps, Link } from "react-router-dom";

export const Wrapper = styled.menu<MenuProps>`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `}
`;

export const MenuNavDesktop = styled.nav`
  ${({ theme }) => css`
    display: flex;
    margin-top: 1rem;
    position: relative;
    left: 300px;

    a {
      padding: ${theme.spacings.xsmall};
      text-decoration: none;
      color: ${theme.colors.white};

      :hover {
        opacity: 0.5;
      }
    }
    ${media.lessThan("medium")`
display: none;

    `}
  `}
`;

export const WrapperLogo = styled(Link)`
  :hover {
    opacity: 0.7;
  }
`;

export const MenuNavMobile = styled.div`
  display: flex;
  text-align: center;
  span {
    position: relative;
    top: -10px;
  }

  align-self: center;
`;
export const MenulinkIcon = styled.div`
  color: #fff;
  font-size: 2rem;
  margin-top: 1.5rem;
  ${media.greaterThan("medium")`

display: none;
`}
`;

export const Menulink = styled(Link)`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.white};
    text-decoration: none;
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }

    ${media.greaterThan("medium")`

    display: none;
    `}
  `}
`;

type isOpenProps = {
  isOpen: boolean;
};

export const CloseMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  font-size: 3rem;
  cursor: pointer;
`;

export const MenuFullMobile = styled.nav<isOpenProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: ${theme.colors.white};
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    position: fixed;
    overflow: hidden;
    z-index: 999;
    opacity: ${isOpen ? 1 : 0};
    padding-bottom: 20rem;
    pointer-events: ${isOpen ? "all" : "none"};
    ${Menulink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: 2.5rem;
    }
  `}
`;

export const MenuLogin = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-bottom: 18rem;

  position: absolute;
  width: 100%;
  bottom: 0;

  span {
    padding: 1rem;
  }
`;
export const ButtonSearch = styled.button`
  background-color: transparent;
  color: white;
  border: 0;
  svg {
    font-size: 2rem;
  }
  ${media.greaterThan("medium")`
  display:none
  `}
`;

export const ButtonSearchDesktop = styled.button`
  margin-bottom: 2rem;
  background-color: transparent;
  color: white;
  border: 0;
  cursor: pointer;
  svg {
    font-size: 2rem;
  }
  :hover {
    opacity: 0.7;
  }
`;

export const CartButton = styled.div`
  margin-top: 0.4rem;

  svg {
    font-size: 2rem;
  }
`;

export const InputSearch = styled.div`
  align-self: center;
  display: inline-flex;
  justify-content: center;
  margin-bottom: 1.8rem;
  padding: 0 1rem;
  input {
    border: 0;
    padding: 0.5rem;
  }
`;

export const CartDropDownMobile = styled.div`
  position: relative;
  left: 20px;
  top: 3px;
`;
