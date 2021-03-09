import { useQuery } from '@apollo/client';
import gql from 'graphql-tag'; // turn our string in a proper graphql query
import Books from '../components/Books/Books';

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

const BooksPage = () => {
  const { data, loading, error } = useQuery(ALL_BOOKS_QUERY);
  if (loading) return null;
  return <Books data={data} />;
};

export default BooksPage;
