import styled from "styled-components";

export const StyledButtons = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: flex;
    flex-direction: column;
    padding: 0 0 20px;
  }
`;

export const Button = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.color.blueLagoon};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    filter: brightness(130%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
    cursor: default;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 10px;
  }
`;