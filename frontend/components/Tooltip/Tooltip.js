import styled from 'styled-components';

const TooltipStyles = styled.div`
  position: absolute;
  top: 50px;
  height: 70px;
  width: 85px;
  background: var(--white);

  .tooltip-container {
    padding: 5px;
  }
`;

const Tooltip = ({ children }) => {
  return (
    <TooltipStyles>
      <div className="tooltip-container">{children}</div>
    </TooltipStyles>
  );
};

export default Tooltip;
