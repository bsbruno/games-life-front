import styled from "styled-components";
import * as S from "../../components/GameCard/styled";
import * as Smenu from "../../components/Menu/styled";
import * as SbannerSlider from "../../components/CoverBanner/styled";
import media from "styled-media-query";

export const Wrapper = styled.div`
  padding-top: 1rem;

  ${Smenu.MenuFullMobile} {
    position: fixed;
  }
`;

export const Content = styled.div`
  padding-top: 5rem;
  max-width: 98rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  ${media.greaterThan("medium")`

${SbannerSlider.Wrapper} {
    height: 400px;

  }
`}
`;

export const GamesSectorOne = styled.div`
  width: 100%;
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.lightGray};
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 90%);

  margin-top: 4rem;

  padding-left: 1.5rem;
  margin-bottom: 5rem;
  ${S.Wrapper} {
    max-height: 217px;
    width: 293px;
    margin-top: 1rem;
  }
`;

export const GamesSectorTwo = styled.section`
  padding: 1rem;
  margin-bottom: 3rem;
  ${S.Wrapper} {
    margin-top: 2rem;
    max-height: 217px;
    max-width: 350px;
    background-color: white;
    width: 98%;
  }
`;

export const GamesSectorTree = styled.section`
  padding: 1rem;
  ${S.Wrapper} {
    margin-top: 2rem;
    max-height: 217px;
    max-width: 350px;
    margin-bottom: 5rem;

    background-color: none;
  }
`;
