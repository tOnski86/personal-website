import styled from 'styled-components';

import ContactForm from '../features/contact/ContactForm';
import Heading from '../ui/Heading';

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(auto, 1fr));
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          officiis expedita aperiam dignissimos impedit deleniti dolorum
          repellat.
        </p>
        <p>
          Quidem laborum, soluta consectetur placeat obcaecati qui quis quisquam
          illo cupiditate nostrum? Sequi.
        </p>
      </div>
      <ContactForm />
    </Row>
  );
}

export default Contact;
