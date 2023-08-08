import styled, { css } from "styled-components";

export const StyledTasks = styled.ul`
    padding: 20px;
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
   ${({ done }) => done && css`
       text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: #1a7b1e;
    font-weight: 600;
    width: 30px;
    height: 30px;
    border: none;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      background: hsl(122, 65%, 35%);
    }

    &:active {
      border: 1.5px solid black;
      border-radius: 2px;
    }

    ${({ remove }) => remove && css`
      background: #ec293a;
      font-weight: 400;

      &:hover {
        background: hsl(355, 84%, 65%);
      }
    `}
`;