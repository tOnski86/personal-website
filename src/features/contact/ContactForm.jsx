import styled, { css } from 'styled-components';

import Button from '../../ui/Button';
import { useForm } from 'react-hook-form';

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

const Form = styled.form`
  & > * {
    margin-bottom: 1rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const InputError = styled.span`
  text-align: right;
  height: 2rem;
  font-size: 1.1rem;
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
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  function onSubmit() {}

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <Label htmlFor='name'>Your Name</Label>
        <Input
          type='text'
          id='name'
          {...register('name', { required: 'This field is required' })}
        />
        {
          <InputError>
            {errors?.name?.message && errors.name.message}
          </InputError>
        }
      </InputGroup>

      <InputGroup>
        <Label htmlFor='email'>Email Address</Label>
        <Input
          type='email'
          id='email'
          {...register('email', { required: 'This field is required' })}
        />
        {
          <InputError>
            {errors?.email?.message && errors.email.message}
          </InputError>
        }
      </InputGroup>

      <InputGroup>
        <Label htmlFor='message'>How can I help?</Label>
        <TextArea
          rows={4}
          type='text'
          id='message'
          {...register('message', { required: 'This field is required' })}
        />
        {
          <InputError>
            {errors?.message?.message && errors.message.message}
          </InputError>
        }
      </InputGroup>

      <ButtonContainer>
        <Button variant='primary-solid'>Submit</Button>
      </ButtonContainer>
    </Form>
  );
}

export default ContactForm;
