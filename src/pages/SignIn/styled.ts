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
  z-index: -9999;
  ${media.lessThan("medium")`
    display: none;

    `}
  flex: 1;
  ::after {
    content: "";
    bottom: 0;
    position: absolute;
    width: 53.7%;
    height: 100%;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    background-size: cover;
    z-index: -9;
  }
`;

export const BackgroundText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 999;
  height: 100%;
  padding: 2rem;
  color: #fff;

  h1 {
    font-weight: bold;
    margin-bottom: 2rem;
  }
  p {
    color: #e8e8e8;
  }
`;
