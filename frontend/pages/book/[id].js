// Fetch/query a single item
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import SingleBook from '../../components/Books/SingleBook';

const SINGLE_BOOK_QUERY = gql`
  query SINGLE_BOOK_QUERY($id: ID!) {
    Book(where: { id: $id }) {
      id
      title
      description
      photo {
        id
        altText
        image {
          id
          publicUrlTransformed
        }
      }
      author
      published
    }
  }
`;

const SingleBookPage = ({ query }) => {
  const { id } = query;
  const { data, loading, error } = useQuery(SINGLE_BOOK_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return null;
  const { Book } = data;
  return <SingleBook data={data} />;
};

export default SingleBookPage;
