import Link from 'next/link';
import LocalMallIcon from '@material-ui/icons/LocalMall';

import {
  BookListCard,
  ImageSection,
  BookListTitle,
  Author,
} from './BooksStyle';
import RequestButton from '../Button/RequestButton';

const BookItem = ({ id, title, author, image, price }) => {
  const { altText } = image;
  const url = image.image.publicUrlTransformed;
  return (
    <BookListCard>
      <ImageSection>
        <img src={url} alt={altText} />
      </ImageSection>
      <BookListTitle>
        <Link href="#">
          <a className="book-link">{title}</a>
        </Link>
      </BookListTitle>
      <Author>{author}</Author>
      <RequestButton>
        <LocalMallIcon style={{ color: 'white' }} />
        <p>Request Trade</p>
      </RequestButton>
    </BookListCard>
  );
};

export default BookItem;
