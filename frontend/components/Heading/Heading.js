import styled, { css } from 'styled-components';
import { devices } from '../MediaQueries';

const StyledHeading = styled.div`
  font-weight: 400;
  font-size: 1.75rem;
  ${({ primary }) =>
    primary &&
    css`
      color: var(--white);
    `}
  ${({ secondary }) =>
    secondary &&
    css`
      color: #000;
    `}
  @media ${devices.tablet} {
    & {
      font-size: 3rem;
    }
  }
  @media ${devices.desktop} {
    & {
      font-size: 3.5rem;
    }
  }
`;

const Heading = ({ level = 1, children, ...rest }) => {
  return (
    <StyledHeading as={`h${level}`} {...rest}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
