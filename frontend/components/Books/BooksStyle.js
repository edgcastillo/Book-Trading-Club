import styled from 'styled-components';
import { devices } from '../MediaQueries';

export const BooksGrid = styled.div`
  display: grid;
  justify-self: center;
  grid-template-columns: repeat(auto-fit, minmax(13.5rem, 1fr));
  gap: 0.5rem;
`;

export const BookListCard = styled.div`
  height: 29rem;
  background: var(--white);
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  justify-self: center;
`;

export const ImageSection = styled.section`
  background: var(--color-callout);
  border-radius: 5px;
  max-width: 100%;
  border: 1px solid #f0f0f0;
  padding: 0.63rem;
  text-align: center;

  & > img {
    max-width: 100%;
    max-height: 15rem;
  }
`;

export const BookListTitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  text-overflow: ellipsis;
  margin-bottom: 0.25rem;
  width: 13rem;
`;

export const Author = styled.p`
  font-size: 0.95rem;
  margin: 0;
  font-weight: 200;
`;
