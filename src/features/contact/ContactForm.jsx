import styled from 'styled-components';

const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputError = styled.span`
  font-size: 1.2rem;
  color: var(--color-secondary-dark);
`;

const StyledInput = styled.input`
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

function ContactForm() {
  return (
    <InputRow>
      <label htmlFor='name'>Your Name</label>
      <StyledInput type='text' id='name' required />
      <InputError>This field is required</InputError>
    </InputRow>
  );
}

export default ContactForm;
