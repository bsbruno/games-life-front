import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const LinkGameCard = styled(Link)`
  cursor: pointer;
`;

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
  `}
`;

export const BoxImage = styled.div`
  height: 14rem;
  width: 100%;
  background: #f6f7f8;
  background-size: 80rem 14rem;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #f6f7f6 20%,
    #f6f7f4 40%,
    #e8e8e8 100%
  );
  animation: placeholderShimmer 1s linear infinite forwards;

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
  justify-content: space-between;
  :hover {
    opacity: 0.8;
  }
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 1.8rem;
    margin: 0.7rem;
  `}
`;

export const SubTitle = styled.h5`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    opacity: 0.8;
    font-size: 1.2rem;
  `}
`;

export const PriceBox = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
    margin-bottom: 0.5rem;
    span {
      padding-right: ${theme.spacings.xxsmall};
      text-decoration: line-through;
      color: ${theme.colors.lightGray};
      font-weight: ${theme.font.bold};
    }
  `}
`;

export const Price = styled.div`
  ${({ theme }) => css`
    display: flex;

    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    align-items: center;
    font-weight: ${theme.font.bold};
    height: 2rem;
    padding-right: ${theme.spacings.small};
    height: 2.8rem;

    p {
      position: relative;
      left: 10px;
      color: ${theme.colors.white};
    }
  `}
`;
