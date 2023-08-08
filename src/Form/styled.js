import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  border: 1.5px solid #ddd;
  padding: 10px;
`;

export const Button = styled.button`
  background: #007382;
  border: none;
  color: white;
  padding: 10px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: hsl(187, 100%, 30%);
    transform: scale(1.05);
  };

  &:active {
    border: 1.5px solid black;
    border-radius: 2px;
  };
`;