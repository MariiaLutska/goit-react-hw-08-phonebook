import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Input } from '@chakra-ui/react';
import { ContactButton } from '../Button/Button';
import { FormLabel } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormLabel>
        Username
        <Input variant="filled" type="text" name="name" />
      </FormLabel>
      <FormLabel>
        Email
        <Input variant="filled" type="email" name="email" />
      </FormLabel>
      <FormLabel>
        Password
        <Input variant="filled" type="password" name="password" />
      </FormLabel>
      <ContactButton type="submit">Register</ContactButton>
    </form>
  );
};
