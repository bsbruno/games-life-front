import styled from "styled-components";
import media from "styled-media-query";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  width: 400px;
  height: 100%;
  h4 {
    font-size: 1.8rem;
    margin-top: 1rem;
  }
  ${media.lessThan("medium")`
  width: 250px;
  `}
`;
