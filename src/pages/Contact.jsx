import styled from 'styled-components';

import ContactForm from '../features/contact/ContactForm';
import Heading from '../ui/Heading';

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(auto, 1fr));
  justify-content: center;
  align-items: start;
  row-gap: 6rem;
  column-gap: 2rem;
  margin-bottom: 8rem;

  @media (min-width: 768px) {
    grid-template-columns: minmax(auto, 24rem) minmax(auto, 60rem);
  }
`;

const GridHeading = styled(Heading)`
  grid-column: 1 / -1;
`;

function Contact() {
  return (
    <Row>
      <GridHeading as='h1'>Let's Chat.</GridHeading>
      <div>Something Else</div>
      <ContactForm />
    </Row>
  );
}

export default Contact;
