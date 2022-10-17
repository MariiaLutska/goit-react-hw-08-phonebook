import {
  Button,
  // ButtonGroup
} from '@chakra-ui/react';

export const ContactButton = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <Button
      colorScheme="pink"
      // variant="outline"
      m={2}
      size="md"
      type={type}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
