import styled from 'styled-components';
import { BasedButton } from './Button';

const RequestButton = styled(BasedButton)`
  background: #bf1f49;
  width: 100%;
  height: 35px;
  border-radius: 25px;
  border: none;
  &:focus {
    outline: 0;
  }
  &:hover {
    cursor: pointer;
  }
  & > p {
    font-size: 1.1rem;
    color: var(--white);
    margin-left: 5px;
  }
`;

export default RequestButton;
