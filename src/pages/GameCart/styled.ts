import styled from "styled-components";
import media from "styled-media-query";
import * as S from "../../components/GameCard/styled";
import * as Spayment from "../../components/PaymentOptions/styled";
export const Wrapper = styled.div``;

export const Container = styled.div`
  max-width: 98rem;
  margin: 0 auto;
  padding: 1rem;
  ${media.greaterThan("medium")`


`}
`;
export const Info = styled.div`
  margin: 3rem;
  span {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  grid-gap: 3rem;
  ${media.lessThan("medium")`

  grid-template-columns: 1fr


  `}
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

export const Payment = styled.div`
  ${Spayment.Wrapper} {
    width: 100%;
  }
`;
