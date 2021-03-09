import { BooksGrid } from './BooksStyle';
import BookItem from './BookItem';

const Books = ({ data }) => {
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
