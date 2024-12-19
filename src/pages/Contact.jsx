import styled from 'styled-components';

import ContactForm from '../features/contact/ContactForm';
import Heading from '../ui/Heading';

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(auto, 1fr));
  height: 100%;
  justify-content: center;
  align-items: start;
  row-gap: 4rem;
  column-gap: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: minmax(20rem, 24rem) minmax(auto, 50rem);
  }
`;

const GridHeading = styled(Heading)`
  grid-column: 1 / -1;
`;

function Contact() {
  return (
    <Row>
      <GridHeading as='h1'>Let's Chat.</GridHeading>
      <div>
        <p>
          Whether you’re looking to collaborate on a web development project, or
          discuss growth strategies, I’d love to hear from you.
        </p>
        <p>
          I’m always open to conversations about how we can turn ideas into
          actionable solutions. Feel free to reach out, and let’s connect!
        </p>
      </div>
      <ContactForm />
    </Row>
  );
}

export default Contact;
