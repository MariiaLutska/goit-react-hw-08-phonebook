import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Box } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Box w="100%" h="100%" bgGradient="linear(to-l, #7928CA, #FF0080)">
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </Box>
  );
};
