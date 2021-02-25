import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import { devices } from '../MediaQueries';

const HeroStyles = styled.section`
  background: var(--color-secondary);
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;

  h1 {
    align-self: center;
    color: var(--white);
    font-size: 1.5rem;
    font-weight: 400;
    max-width: 16rem;
    text-align: center;
  }

  @media ${devices.tablet} {
    h1 {
      align-self: flex-end;
      font-size: 3rem;
      max-width: 38rem;
    }
  }

  @media ${devices.desktop} {
    h1 {
      align-self: flex-end;
      font-size: 3.5rem;
    }
  }
`;

const Hero = () => {
  return (
    <HeroStyles>
      <h1>Book Trading Club. Connecting people with Books</h1>
      <SearchBar />
    </HeroStyles>
  );
};

export default Hero;
