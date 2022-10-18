import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Box } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb="16px"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};
