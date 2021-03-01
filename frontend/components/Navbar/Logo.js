import { useContext } from 'react';
import Link from 'next/link';
import BookIcon from '../../public/Closed_Book_Icon.svg';
import styled, { ThemeContext } from 'styled-components';
import { devices } from '../MediaQueries';

const LogoStyles = styled.div`
  svg {
    height: 35px;
    width: 35px;
  }
  span {
    display: grid;
    grid-template-columns: 40px 200px;
    align-items: center;
    justify-content: start;
    h1 {
      color: ${({ color }) => color};
      width: 5.6rem;
      cursor: pointer;
      font-weight: 200;
      font-size: 1rem;
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${devices.laptop} {
      h1 {
        font-size: 2rem;
      }
    }
  }
`;

const Logo = ({ name }) => {
  const theme = useContext(ThemeContext);
  return (
    <LogoStyles {...theme}>
      <Link href="/">
        <span>
          <BookIcon />
          <h1>{name}</h1>
        </span>
      </Link>
    </LogoStyles>
  );
};

export default Logo;
