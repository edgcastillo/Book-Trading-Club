import styled from 'styled-components';

const BookMenuStyles = styled.ul`
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

export default BookMenuStyles;
