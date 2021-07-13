import styled from "styled-components";
import * as S from "../../components/GameCard/styled";
export const Wrapper = styled.div``;

export const Container = styled.div`
  max-width: 98rem;
  margin: 0 auto;
  padding: 1rem;
`;
export const Info = styled.div`
  margin: 3rem;
  span {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
`;

export const MoreGames = styled.div``;
export const Line = styled.div`
  width: 100%;
  border: 1px solid white;
  margin-bottom: 4rem;
`;

export const GameSlider = styled.div`
  ${S.Wrapper} {
    margin-top: 2rem;
    max-height: 217px;

    width: 98%;
  }
`;

export const Payment = styled.div``;
