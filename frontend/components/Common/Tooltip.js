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
    right: 27%;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid var(--white);
  }
  position: absolute;
  font-size: 0.88rem;
  height: 65px;
  width: 85px;
  top: 10px;
  right: -25px;
  box-shadow: -1px 0px 5px 7px rgb(0 0 0 / 11%);
`;

const BookMenuTooltip = styled(BaseTooltip)`
  &:before {
    position: absolute;
    content: '';
    right: 51%;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid var(--white);
  }
  position: absolute;
  font-size: 0.8rem;
  height: 332px;
  width: 416px;
  display: grid;
  top: 63px;
  right: 22.5%;
  box-shadow: -1px 0px 5px 7px rgb(0 0 0 / 11%);
`;

export { LoginTooltip, BookMenuTooltip };
