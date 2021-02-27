import styled from 'styled-components';

const BaseTooltip = styled.div`
  position: absolute;
  border-radius: 5px;
  background: var(--white);
  padding: 6px 14px;
`;

const LoginTooltip = styled(BaseTooltip)`
  &:before {
    position: absolute;
    content: '';
    right: 35%;
    top: -15px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid var(--white);
  }
  font-size: 0.88rem;
  top: 50px;
  height: 65px;
  right: 10%;
  width: 85px;
`;

const BookMenuTooltip = styled(BaseTooltip)`
  &:before {
    position: absolute;
    content: '';
    right: 35%;
    top: -15px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid var(--white);
  }
  font-size: 0.8rem;
  height: 332px;
  width: 416px;
  display: grid;
`;

export { LoginTooltip, BookMenuTooltip };
