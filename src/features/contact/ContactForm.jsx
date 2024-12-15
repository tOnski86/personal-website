import styled, { css } from 'styled-components';

import Button from '../../ui/Button';

const sharedInputStyles = css`
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 0.2rem;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: 0.1rem solid var(--color-primary-light);
    outline-offset: 0.4rem;
  }

  &:focus:invalid {
    outline: 0.1rem solid var(--color-secondary-dark);
  }
`;

const InputRow = styled.div`
  & > * {
    margin-bottom: 1rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputError = styled.span`
  font-size: 1.2rem;
  color: var(--color-secondary-dark);
`;

const StyledInput = styled.input`
  ${sharedInputStyles}
`;

const StyledTextArea = styled.textarea`
  ${sharedInputStyles}
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

function ContactForm() {
  return (
    <>
      <InputRow>
        <InputGroup>
          <label htmlFor='name'>Your Name</label>
          <StyledInput type='text' id='name' required />
          <InputError>This field is required</InputError>
        </InputGroup>

        <InputGroup>
          <label htmlFor='email'>Email Address</label>
          <StyledInput type='email' id='email' required />
          <InputError>This field is required</InputError>
        </InputGroup>

        <InputGroup>
          <label htmlFor='message'>How can I help?</label>
          <StyledTextArea type='text' id='message' required rows={5} />
          <InputError>This field is required</InputError>
        </InputGroup>

        <ButtonContainer>
          <Button variant='primary solid'>Submit</Button>
        </ButtonContainer>
      </InputRow>
    </>
  );
}

export default ContactForm;
