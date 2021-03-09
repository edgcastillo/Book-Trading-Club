import styled from 'styled-components';

export const UserMenuStyles = styled.ul`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: var(--color-dark-text);

  li:first-child {
    margin-bottom: 5px;
  }
`;

export const BookMenuStyles = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .link-title {
    color: var(--color-dark-text);
  }

  & > li {
    margin: 0.25rem 0.25rem;
  }
`;
