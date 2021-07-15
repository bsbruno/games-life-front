import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(propos) => propos.theme.colors.white};

  display: flex;
  flex-direction: column;
  align-self: start;
  justify-content: space-between;
  width: 100%;
  height: max-content;
`;

export const Footer = styled.span`
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
  align-items: center;

  p {
    font-size: 2rem;
    font-weight: bold;
  }
`;
export const Total = styled.div`
  color: ${(propos) => propos.theme.colors.secondary};
  font-weight: bold;
  font-size: 1.8rem;
`;
