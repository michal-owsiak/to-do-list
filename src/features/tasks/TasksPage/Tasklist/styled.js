import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledTasks = styled.ul`
  padding: 0;
  margin: 0;
`;

export const List = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1.5px solid #ddd;
  word-break: break-word;

  ${({ hidden }) => hidden && css`
    display: none;
  `}
`;

export const Item = styled.span`
  ${({ $done }) => $done && css`
    text-decoration: line-through;
  `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  transition: 0.25s;

  &:hover {
    color: ${({ theme }) => theme.color.silver};;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 8px;
  transition: 0.5s;
  cursor: pointer;

  &:active {
    border: 1.5px solid ${({ theme }) => theme.color.black};
    border-radius: 2px;
  }
`;

export const ToggleDoneButton = styled(Button)`
  background: ${({ theme }) => theme.color.forestGreen};

  &:hover {
    filter: brightness(120%);
  }
`;

export const RemoveButton = styled(Button)`
  background: ${({ theme }) => theme.color.alizarinCrimson};
  font-weight: 400;

  &:hover {
    filter: brightness(130%);
  }
`;