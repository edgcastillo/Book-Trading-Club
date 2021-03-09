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
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 50%;
      z-index: 1;
    `}
`;

export const NavButton = styled.button`
  border: none;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
`;

export const BasedButton = styled.button`
  height: 2.31rem;
  width: 11.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
