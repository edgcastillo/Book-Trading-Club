import { useRef, useState } from 'react';
import Link from 'next/link';

import handleClickOutside from '../handleClickOutside';
import { bookTopicsList } from '../../lib/bookTopicsList';
import { NavButton } from '../Button/Button';
import { BookMenuTooltip } from '../Tooltip/Tooltip';
import BookMenuStyles from './BookNavStyles';

const BookMenuDropdown = ({ data, handleClick }) => {
  return (
    <BookMenuStyles>
      {data.map((topic) => {
        const name = Object.keys([topic][0])[0];
        const id = [topic][0][name].address;
        const address = id === 'books' ? `/${id}` : `/categories/${id}`;
        return (
          <li key={name}>
            <Link href={address}>
              <a
                id={name}
                className="link-title"
                onClick={(e) => handleClick(e)}
              >
                {name}
              </a>
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

  const handleClick = (e) => {
    setOpen(!isOpen);
  };

  handleClickOutside(node, () => {
    setOpen(false);
  });

  return (
    <div ref={node}>
      <NavButton primary onClick={() => setOpen(!isOpen)}>
        <p style={{ color: 'white' }}>Browse</p>
      </NavButton>
      {isOpen && (
        <BookMenuTooltip>
          <BookMenuDropdown data={bookTopicsList} handleClick={handleClick} />
        </BookMenuTooltip>
      )}
    </div>
  );
};

export default BookNavButton;
