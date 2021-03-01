import Link from 'next/link';

import {
  BookListCard,
  ImageSection,
  BookListTitle,
  Author,
} from './BookItemStyle';

const BookItem = ({ id, title, author, image, price }) => {
  const { altText } = image;
  const url = image.image.publicUrlTransformed;
  return (
    <BookListCard>
      <ImageSection>
        <img src={url} alt={altText} />
      </ImageSection>
      <BookListTitle>{title}</BookListTitle>
      <Author>{author}</Author>
    </BookListCard>
  );
};

export default BookItem;
