import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: flex;
    flex-direction: column;
    padding: 0 0 20px;
  }
`;

export const StyledButton = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.color.blueLagoon};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    filter: brightness(135%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
    cursor: default;
    filter: brightness(100%);
    transition: 0s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 10px;
  }
`;