import styled from 'styled-components';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import { HiCheckBadge } from 'react-icons/hi2';

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
        <Button variant='primary-outline' onClick={() => onSuccess(false)}>
          <span>Submit Another</span>
        </Button>
      </div>
    </StyledContactFormSuccess>
  );
}

export default ContactFormSuccess;
