import { Container } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW="container.sm">
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Contact manager welcome!
      </Text>
    </Container>
  );
}
