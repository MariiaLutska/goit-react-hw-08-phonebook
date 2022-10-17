import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
// import css from './RegisterForm.module.css';
import { Input } from '@chakra-ui/react';
import { ContactButton } from '../Button/Button';

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
      <label>
        Username
        <Input variant="filled" type="text" name="name" />
      </label>
      <label>
        Email
        <Input variant="filled" type="email" name="email" />
      </label>
      <label>
        Password
        <Input variant="filled" type="password" name="password" />
      </label>
      <ContactButton type="submit">Register</ContactButton>
    </form>
  );
};
