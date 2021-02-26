import { useQuery } from '@apollo/client';
import gql from 'graphql-tag'; // turn our string in a proper graphql query
import styled from 'styled-components';

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
  console.log(data, error, loading);
  return (
    <div>
      <p>All Books</p>
    </div>
  );
};

export default Books;
