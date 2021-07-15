import styled from "styled-components";
import media from "styled-media-query";
export const Wrapper = styled.div`
  background-color: ${(propos) => propos.theme.colors.lightGray};
  width: 50%;
  display: flex;
  flex-direction: column;
  ${media.lessThan("medium")`
  width: 100%;
  `}
`;

export const FormPayment = styled.div`
  display: flex;
  justify-content: center;

  form {
    width: 100%;
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input[type="number"] {
      -moz-appearance: textfield;
      appearance: textfield;
    }

    input {
      padding: 1rem;
      width: 100%;
      border-radius: 5px;
      border: 0;
      :focus {
        outline: #4578f5;
        box-shadow: 0 0 0 2pt #4578f5;
      }
    }
  }
`;

export const Teste = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  gap: 1rem;
  div {
    display: flex;
    flex-direction: column;
    input {
      padding: 1rem;
      width: 100%;
    }
    label {
      margin-top: 1rem;
      color: gray;
      font-weight: bold;
    }
  }
`;

export const CardTitle = styled.div`
  margin-top: 3rem;
  margin-left: 2rem;
  span {
    position: relative;
    bottom: 10px;
    margin-left: 1rem;
  }
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;
