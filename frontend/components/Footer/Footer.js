import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const FooterStyles = styled.footer`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 5px 0;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
  background: var(--color-beige);

  .author-name {
    margin: 0;
    font-weight: 300;
  }

  .links-block {
    display: flex;
    justify-content: space-around;

    svg {
      height: 1.2rem;
      width: 1.2rem;
    }
  }
  /* text-align: center; */

  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */

  /* .footer-box {
    background: var(--color-beige);
  } */
`;

const Footer = () => {
  return (
    <FooterStyles>
      <h6 className="author-name">Edwin Castillo</h6>
      <div className="links-block">
        <GitHubIcon />
        <LinkedInIcon />
      </div>
    </FooterStyles>
    // <FooterStyles>
    //   <section className="footer-box">
    //     <h4>Project</h4>
    //     <ul>
    //       <li>
    //         <p>A FreeCodeCamp full-stack project</p>
    //       </li>
    //       <li>
    //         <p>
    //           Project requirements{' '}
    //           <a href="https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/manage-a-book-trading-club">
    //             here
    //           </a>
    //         </p>
    //       </li>
    //     </ul>
    //   </section>
    //   <section className="footer-box">
    //     <h4>Tech Stack</h4>
    //     <ul>
    //       <li>
    //         <p>Front-end: React + Apollo + CSS in JS</p>
    //       </li>
    //       <li>
    //         <p>Back-end: GraphQL + MongoDB + KeystoneJS</p>
    //       </li>
    //     </ul>
    //   </section>
    //   <section className="footer-box">
    //     <h4>Developer</h4>
    //     <p>Edwin Castillo</p>
    //   </section>
    // </FooterStyles>
  );
};

export default Footer;
