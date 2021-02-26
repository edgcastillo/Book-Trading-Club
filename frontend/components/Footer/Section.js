import styled from 'styled-components';

// Not being used for now
const Section = ({ title, list }) => {
  return (
    <>
      <Section>
        <h4>{title}</h4>
        <ul>
          {list.elements.map((element, i) => {
            <li key={i}>
              <p></p>
              {element.name}
            </li>;
          })}
        </ul>
      </Section>
    </>
  );
};

export default Section;
