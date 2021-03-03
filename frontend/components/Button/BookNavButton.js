import { useRef, useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Link from 'next/link';

import handleClickOutside from '../handleClickOutside';
import { bookTopicsList } from '../../lib/bookTopicsList';
import { NavButton } from './Button';
import { BookMenuTooltip } from '../Common/Tooltip';
import { BookMenuStyles } from './ButtonStyles';

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
  const theme = useContext(ThemeContext);
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
      <NavButton {...theme} onClick={() => setOpen(!isOpen)}>
        <p style={{ color: theme.color }}>Browse</p>
      </NavButton>
      {isOpen && (
        <div className="book-tooltip">
          <BookMenuTooltip>
            <BookMenuDropdown data={bookTopicsList} handleClick={handleClick} />
          </BookMenuTooltip>
        </div>
      )}
    </div>
  );
};

export default BookNavButton;
