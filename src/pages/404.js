import { Box, Divider, Center, Heading, Text, Link, Container, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container>
      <Center>
        <Heading pb={5}>Uh-oh</Heading>
      </Center>
      <Center>
        <Text fontSize="lg">The page you are looking for doesn&apos;t exist.</Text>
      </Center>
      <Divider my={6} />
      <Box my={6} align="center">
        <Link
          as={RouterLink}
          p={2}
          to="/"
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Button>Return Home</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFound;
