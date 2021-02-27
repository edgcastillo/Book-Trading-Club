import { useRef, useState } from 'react';
import Link from 'next/link';
import handleClickOutside from '../handleClickOutside';

import { bookTopicsList } from '../../lib/bookTopicsList';
import { NavButton } from '../Button/Button';
import { BookMenuTooltip } from '../Tooltip/Tooltip';
import BookMenuStyles from './BookNavStyles';

const BookTopics = (data) => {
  return (
    <BookMenuStyles>
      {bookTopicsList.map((topic) => {
        const name = Object.keys([topic][0])[0];
        const id = [topic][0][name].address;
        return (
          <li key={name}>
            <Link href={`/categories/${id}`}>
              <a>{name}</a>
            </Link>
          </li>
        );
      })}
    </BookMenuStyles>
  );
};

const BookNavButton = () => {
  const [isOpen, setOpen] = useState(false);
  const node = useRef();

  handleClickOutside(node, () => {
    setOpen(false);
  });

  return (
    <>
      <NavButton ref={node} onClick={() => setOpen(!isOpen)}>
        Browse
      </NavButton>
      {isOpen && (
        <BookMenuTooltip>
          <BookTopics data={bookTopicsList} />
        </BookMenuTooltip>
      )}
    </>
  );
};

export default BookNavButton;
