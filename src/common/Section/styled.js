import styled from "styled-components";

export const StyledSection = styled.section`
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
  margin: 10px 0;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  border-bottom: 1.5px solid ${({ theme }) => theme.color.alto};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: flex;
    flex-direction: column;
  };
`;

export const Title = styled.h1`
  padding: 20px;
  font-size: 20px;
  margin: 0;
`;