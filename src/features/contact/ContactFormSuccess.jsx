import styled from 'styled-components';
import { HiCheckBadge, HiHome } from 'react-icons/hi2';

import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import ButtonRow from '../../ui/ButtonRow';
import { Link } from 'react-router-dom';

const StyledContactFormSuccess = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-radius: 0.4rem;
  border: var(--border-sm);
  padding: 2rem 2.4rem;
`;

const StyledHeading = styled(Heading)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function ContactFormSuccess({ onSuccess }) {
  return (
    <StyledContactFormSuccess>
      <StyledHeading as='h2'>
        <HiCheckBadge />
        <span>Message Sent</span>
      </StyledHeading>
      <p>Thank you for reaching out! I'll be in touch as soon as I can.</p>
      <div>
        <ButtonRow spacing='gap-sm'>
          <Button variant='primary-outline' onClick={() => onSuccess(false)}>
            <span>Submit Another</span>
          </Button>

          <Link to='/about'>
            <Button variant='primary-solid'>
              <HiHome />
              <span>Back to Home</span>
            </Button>
          </Link>
        </ButtonRow>
      </div>
    </StyledContactFormSuccess>
  );
}

export default ContactFormSuccess;
