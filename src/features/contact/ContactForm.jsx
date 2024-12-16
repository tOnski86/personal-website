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

const Input = styled.input`
  ${sharedInputStyles}
`;

const TextArea = styled.textarea`
  ${sharedInputStyles}
  resize: none;
`;

const Label = styled.label`
  font-weight: 500;
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
          <Label htmlFor='name'>Your Name</Label>
          <Input type='text' id='name' required />
          <InputError>This field is required</InputError>
        </InputGroup>

        <InputGroup>
          <Label htmlFor='email'>Email Address</Label>
          <Input type='email' id='email' required />
          <InputError>This field is required</InputError>
        </InputGroup>

        <InputGroup>
          <Label htmlFor='message'>How can I help?</Label>
          <TextArea type='text' id='message' required rows={5} />
          <InputError>This field is required</InputError>
        </InputGroup>

        <ButtonContainer>
          <Button variant='primary-solid'>Submit</Button>
        </ButtonContainer>
      </InputRow>
    </>
  );
}

export default ContactForm;
