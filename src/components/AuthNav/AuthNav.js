import { NavLink } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <Flex>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </Flex>
  );
};
