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
