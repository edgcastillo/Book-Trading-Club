import styled, { css } from 'styled-components';
import { devices } from '../MediaQueries';

const StyledHeading = styled.div`
  font-weight: 400;
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
`;

const Heading = ({ level = 1, children, ...rest }) => {
  return (
    <StyledHeading as={`h${level}`} {...rest}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
