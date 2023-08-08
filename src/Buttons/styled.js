import styled from "styled-components";

export const StyledButtons = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 20px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding: 0 0 20px;
  }
`;

export const Button = styled.button`
  border: none;
  background: none;
  color: #007382;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: hsl(187, 100%, 40%);
  }

  &:disabled {
    color: #b9b9b9;
    cursor: default;
  }

  @media (max-width: 767px) {
    padding: 10px;
  }
`;