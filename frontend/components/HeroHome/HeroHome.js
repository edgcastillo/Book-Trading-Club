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
  }

  @media ${devices.tablet} {
    h1 {
      align-self: flex-end;
      max-width: 38rem;
    }
  }

  @media ${devices.desktop} {
    h1 {
      align-self: flex-end;
    }
  }
`;

const Hero = () => {
  return (
    <HeroStyles>
      <Heading level="1" primary large>
        Book Trading Club. Connecting people with Books
      </Heading>
      <SearchBar />
    </HeroStyles>
  );
};

export default Hero;
