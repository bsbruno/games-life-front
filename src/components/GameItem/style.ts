import styled, { css } from "styled-components";
import media from "styled-media-query";
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #ececec;
  ${({ theme }) => css`
    padding: 1.8rem;
  `}
  ${media.lessThan("medium")`
  width: 100%;
  `}
`;

export const Content = styled.div`
  display: flex;
  h2 {
    padding-bottom: 1rem;
    opacity: 0.9;
    color: ${(props) => props.theme.colors.mainBg};
  }
  span {
    background-color: ${(props) => props.theme.colors.terciary};
    padding: 0.5rem;
    border-radius: 1rem;
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
  }
`;

export const GameImage = styled.div`
  margin-right: 2rem;
  img {
    width: 150px;
    height: 71px;
    object-fit: cover;
  }
`;

export const GameText = styled.div``;
