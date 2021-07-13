import styled from "styled-components";
import * as S from "../CartList/styled";
import media from "styled-media-query";
export const Wrapper = styled.div`
  margin-top: 1.2rem;

  ${S.Wrapper} {
    width: 50rem;
    overflow-y: scroll;
    height: 50rem;
    ${media.lessThan("medium")`
    width: 30rem
    `}
  }
`;
