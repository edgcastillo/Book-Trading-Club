import styled, { css } from 'styled-components';
import { devices } from '../MediaQueries';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 11rem 22rem 1fr 15rem;
  grid-template-areas:
    'title-section'
    'aside-section'
    'action-section'
    'description-section';

  @media ${devices.laptop} {
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
    grid-template-rows: 1fr auto 2fr;
    grid-template-areas:
      'aside-section title-section'
      'aside-section action-section'
      'aside-section description-section';
  }
`;

const Title = styled.section`
  background: lightblue;
`;

const Aside = styled.aside`
  background: gray;
  @media ${devices.laptop} {
    grid-row: span 3;
  }
`;

const Action = styled.section`
  background: #ff5733;
`;

const Description = styled.section`
  background: #6dc2f1;
`;

const Grid = styled(StyledGrid)`
  ${Title} {
    grid-area: title-section;
  }
  ${Aside} {
    grid-area: aside-section;
  }
  ${Action} {
    grid-area: action-section;
  }
  ${Description} {
    grid-area: description-section;
  }
`;

export { Grid, Title, Aside, Action, Description };
