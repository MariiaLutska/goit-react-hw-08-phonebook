import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import css from './LoginForm.module.css';
import { Input } from '@chakra-ui/react';
import { ContactButton } from '../Button/Button';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <Input variant="filled" type="email" name="email" />
      </label>
      <label>
        Password
        <Input variant="filled" type="password" name="password" />
      </label>
      <ContactButton type="submit">Log In</ContactButton>
    </form>
  );
};
