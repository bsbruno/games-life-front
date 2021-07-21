import styled from "styled-components";
import banner from "../../assets/attBanner.png";
import * as S from "../../components/Heading/styled";
import media from "styled-media-query";
export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-content: center;
  align-items: center;
  width: 100%;

  span {
    color: #fff;
    margin-top: 1.5rem;
    a {
      text-decoration: none;

      color: #e8e8;
    }
  }

  max-width: 70rem;
  form {
    display: flex;
    flex-direction: column;
    ${media.lessThan("medium")`
   width: 100%;
   padding: 2.25rem;

    `}
    ${S.Wrapper} {
      margin-bottom: 2.25rem;
    }
    a {
      text-decoration: none;
      color: #e8e8;
      margin-bottom: 0.62rem;
    }
    width: 50%;
    input {
      padding: 1.25rem;
      margin-bottom: 1rem;
      border: 0;
      background-color: #eaeaea;
    }
  }
`;

export const ErrorInput = styled.div`
  color: #ff3333;
  font-size: 1.5rem;

  margin-bottom: 0.4rem;
`;

export const Background = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-position: center center;
  z-index: -99;
  opacity: 0.8;
  ${media.lessThan("medium")`
    display: none;

    `}
  flex: 1;
`;

export const BackgroundText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 1;
  z-index: 99;
  height: 100%;
  padding: 2rem;
  color: #fff;

  h1 {
    font-weight: bold;
    margin-bottom: 2rem;
  }
  p {
    color: black;
  }
`;
