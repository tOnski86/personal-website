import { Helmet } from 'react-helmet';
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
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>tOnski | Let's Chat!</title>
        <meta
          name='description'
          content='Get in touch to discuss web development projects, or your own strategy. Bring your ideas to life with modern solutions.'
        />
        <link rel='canonical' href='https://tonski.vercel.app/contact' />
      </Helmet>

      <Row>
        <GridHeading as='h1'>Let's Chat.</GridHeading>
        <div>
          <p>
            Whether you’re looking to collaborate on a web development project,
            discuss growth strategies, or explore project management solutions,
            I’d love to hear from you.
          </p>
          <p>
            I’m always open to conversations about turning ideas into
            actionable, measurable outcomes. Feel free to reach out, and let’s
            connect to drive your next project forward!
          </p>
        </div>
        <ContactForm />
      </Row>
    </>
  );
}

export default Contact;
