import styled from 'styled-components';

const HeroStyles = styled.section`
  background: var(--color-secondary);
  height: 85vh;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  h1 {
    align-self: center;
    color: var(--white);
    font-size: 4rem;
    font-weight: 400;
    max-width: 51.51rem;
    text-align: center;
  }
`;

const Hero = () => {
  return (
    <HeroStyles>
      <h1>Book Trading Club. Connecting people with Books</h1>
    </HeroStyles>
  );
};

export default Hero;
