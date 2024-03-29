import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.color.blueLagoon};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.color.white};
  padding: 10px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    filter: brightness(115%);
    transform: scale(1.05);
  };

  &:active {
    border: 1.5px solid ${({ theme }) => theme.color.black};
  };
`;