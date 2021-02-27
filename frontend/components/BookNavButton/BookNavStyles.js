import styled from 'styled-components';

const BookMenuStyles = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  & > li {
    margin: 0.25rem 0.25rem;
    & > a {
      color: var(--color-dark-text);
    }
  }
`;

export default BookMenuStyles;
