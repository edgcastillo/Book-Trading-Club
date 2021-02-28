import styled, { css } from 'styled-components';

export const RoundButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  &:focus {
    outline: 0;
  }

  ${(props) =>
    props.search &&
    css`
      background: var(--red-primary);
    `}
  ${(props) =>
    props.close &&
    css`
      color: var(--color-secondary);
      background: var(--color-light-gray);
    `}
`;

export const NavButton = styled.button`
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }

  ${(props) =>
    props.primary &&
    css`
      background: var(--color-secondary);
    `}
  ${(props) =>
    props.secondary &&
    css`
      background: var(--color-light-gray);
      color: var(--color-secondary);
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 50%;
      z-index: 1;
    `}
`;
