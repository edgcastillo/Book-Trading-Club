import styled from 'styled-components';

const Triangle = styled.div`
  position: absolute;
  right: 65%;
  top: 35px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid var(--white);
`;

const TooltipStyles = styled.div`
  position: absolute;
  font-size: 0.88rem;
  border-radius: 5px;
  top: 50px;
  height: 65px;
  right: 10%;
  width: 85px;
  background: var(--white);

  .tooltip-container {
    height: 100%;
    padding: 5px;
  }
`;

const Tooltip = ({ children }) => {
  return (
    <>
      <Triangle />
      <TooltipStyles>
        <div className="tooltip-container">{children}</div>
      </TooltipStyles>
    </>
  );
};

export default Tooltip;
