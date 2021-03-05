import { useQuery } from '@apollo/client';
import gql from 'graphql-tag'; // turn our string in a proper graphql query

import { BooksGrid } from './BooksStyle';
import BookItem from './BookItem';

const ALL_BOOKS_QUERY = gql`
  query ALL_BOOKS_QUERY {
    allBooks {
      id
      title
      description
      photo {
        id
        image {
          id
          filename
          publicUrlTransformed
        }
        altText
      }
      author
      price
    }
  }
`;

const Books = () => {
  const { data, error, loading } = useQuery(ALL_BOOKS_QUERY);
  if (loading) return null;
  return (
    <BooksGrid>
      {data.allBooks.map((book) => {
        return (
          <BookItem
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            image={book.photo}
            price={book.price}
          />
        );
      })}
    </BooksGrid>
  );
};

export default Books;
