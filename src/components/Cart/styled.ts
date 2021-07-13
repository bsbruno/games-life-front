import styled from "styled-components";

export const Wrapper = styled.div`
  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${(props) => props.theme.colors.white};
  }
`;

export const CartIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  position: relative;
  top: -3.8rem;
  left: 1.8rem;
`;
