import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import { NAV_BG_LIGHT } from '../constants/colors';

const About = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue(NAV_BG_LIGHT, 'whiteAlpha.100')}
      >
        Hello - I&apos;m a full stack developer based in New Jersey!
      </Box>
    </Container>
  );
};

export default About;
