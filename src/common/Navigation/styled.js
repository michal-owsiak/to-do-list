import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;

  &.active {
    font-weight: 600;
    transition: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  background: ${({ theme }) => theme.color.blueLagoon};
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 24px;
  margin: 0;
`