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

  &.error {
    outline: 0.1rem solid var(--color-secondary-dark);
    outline-offset: 0.4rem;
  }
`;

const Form = styled.form`
  & > * {
    margin-bottom: 1rem;
  }
`;

const InputRow = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(${props => props.$column}, minmax(auto, 1fr));
`;

const InputGroup = styled.div`
  display: grid;
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

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputRow $column='2'>
        <InputGroup>
          <Label htmlFor='name'>Your Name</Label>
          <Input
            type='text'
            id='name'
            className={errors?.name?.message && 'error'}
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
            type='text'
            id='email'
            className={errors?.email?.message && 'error'}
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Enter a valid email address',
              },
            })}
          />
          {
            <InputError>
              {errors?.email?.message && errors.email.message}
            </InputError>
          }
        </InputGroup>
      </InputRow>

      <InputRow $column='1'>
        <InputGroup>
          <Label htmlFor='message'>How can I help?</Label>
          <TextArea
            rows={4}
            type='text'
            id='message'
            className={errors?.message?.message && 'error'}
            {...register('message', { required: 'This field is required' })}
          />
          {
            <InputError>
              {errors?.message?.message && errors.message.message}
            </InputError>
          }
        </InputGroup>
      </InputRow>
      <ButtonContainer>
        <Button variant='primary-solid'>Submit</Button>
      </ButtonContainer>
    </Form>
  );
}

export default ContactForm;
