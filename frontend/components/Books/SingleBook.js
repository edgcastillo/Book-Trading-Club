import { Grid, Title, Aside, Action, Description } from '../Grid/Grid';
import Heading from '../Heading/Heading';
const SingleBook = ({ data }) => {
  const { Book } = data; // this is how the query returns the book "Book"
  return (
    <Grid>
      <Title>
        <Heading level="1" secondary>
          {Book.title}
        </Heading>
      </Title>
      <Aside>
        <h1>Image Section</h1>
      </Aside>
      <Action>
        <h1>Action Section</h1>
      </Action>
      <Description>
        <h1>Description Section</h1>
      </Description>
    </Grid>
  );
};

export default SingleBook;
