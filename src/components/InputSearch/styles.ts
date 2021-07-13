import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 1rem;
  display: flex;

  input {
    padding: 1.2rem;
    border: 0;
    background-color: #202020;
    font-size: 1.5rem;
    color: white;
    margin-left: 3rem;
    display: flex;
    width: 300px;
  }
`;

export const IconSearch = styled.button`
  background-color: #202020;
  border: 0;
  width: 50px;
  svg {
    color: white;
    font-size: 1.5rem;
  }
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
