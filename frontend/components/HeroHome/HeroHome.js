import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import Heading from '../Heading/Heading';
import { devices } from '../MediaQueries';

const HeroStyles = styled.section`
  background: var(--color-secondary);
  height: 100%;
  align-self: center;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;

  h1 {
    align-self: center;
    max-width: 16rem;
    text-align: center;
    font-size: 1.75rem;
  }

  @media ${devices.tablet} {
    & > h1 {
      align-self: flex-end;
      font-size: 3rem;
      max-width: 38rem;
    }
  }

  @media ${devices.desktop} {
    & > h1 {
      align-self: flex-end;
      font-size: 3.5rem;
    }
  }
`;

const Hero = () => {
  return (
    <HeroStyles>
      <Heading level="1" primary>
        Book Trading Club. Connecting people with Books
      </Heading>
      <SearchBar />
    </HeroStyles>
  );
};

export default Hero;
