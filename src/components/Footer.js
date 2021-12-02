import { Divider, Container, Box } from '@chakra-ui/react';
import Socials from './Socials';

const Footer = () => {
  return (
    <Container py={10}>
      <Divider my={6} />
      <Socials />
      <Box align="center" opacity={0.4} fontSize="sm" pt={10}>
        &copy; {new Date().getFullYear()} James Hiner. All Rights Reserved.
      </Box>
    </Container>
  );
};

export default Footer;
