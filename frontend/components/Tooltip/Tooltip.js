import styled from 'styled-components';

const BaseTooltip = styled.div`
  border-radius: 5px;
  background: var(--white);
  padding: 6px 14px;
`;

const LoginTooltip = styled(BaseTooltip)`
  &:before {
    position: absolute;
    content: '';
    right: 42%;
    top: -15px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid var(--white);
  }
  position: absolute;
  font-size: 0.88rem;
  height: 65px;
  width: 85px;
  top: 50px;
  left: 45%;
`;

const BookMenuTooltip = styled(BaseTooltip)`
  &:before {
    position: absolute;
    content: '';
    right: 50%;
    top: -15px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid var(--white);
  }
  position: absolute;
  font-size: 0.8rem;
  height: 332px;
  width: 416px;
  display: grid;
  top: 50px;
  right: -125px;
`;

export { LoginTooltip, BookMenuTooltip };
