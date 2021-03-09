const SingleBook = ({ data }) => {
  const { Book } = data; // this is how the query returns the book "Book"
  return (
    <div>
      <h1>{Book.title}</h1>
    </div>
  );
};

export default SingleBook;
