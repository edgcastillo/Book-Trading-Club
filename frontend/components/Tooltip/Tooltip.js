import styled from 'styled-components';

const Triangle = styled.div`
  position: absolute;
  left: 97%;
  top: 35px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid var(--white);
`;

const TooltipStyles = styled.div`
  position: absolute;
  border-radius: 5px;
  top: 50px;
  height: 75px;
  left: 91.5%;
  width: 100px;
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
