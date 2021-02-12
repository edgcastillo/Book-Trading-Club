import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: grid;
  height: 15vh;
  grid-template-columns: 1fr 1fr 1fr;
  background: var(--color-beige);
`;

const Footer = () => {
  return (
    <FooterStyles>
      <section className="footer-box">
        <h4>Project</h4>
        <ul>
          <li>
            <p>A FreeCodeCamp full-stack project</p>
          </li>
          <li>
            <p>
              Project requirements{' '}
              <a href="https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/manage-a-book-trading-club">
                here
              </a>
            </p>
          </li>
        </ul>
      </section>
      <section className="footer-box">
        <h4>Tech Stack</h4>
        <ul>
          <li>
            <p>Front-end: React + Apollo + CSS in JS</p>
          </li>
          <li>
            <p>Back-end: GraphQL + MongoDB + KeystoneJS</p>
          </li>
        </ul>
      </section>
      <section className="footer-box">
        <h4>Developer</h4>
        <p>Edwin Castillo</p>
      </section>
    </FooterStyles>
  );
};

export default Footer;
