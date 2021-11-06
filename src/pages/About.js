import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import { NAV_BG_LIGHT } from '../constants/colors';
import Section from '../components/Section';

const About = () => {
  return (
    <Container>
      <Section delay={0.1}>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue(NAV_BG_LIGHT, 'whiteAlpha.100')}
        >
          Hello - I&apos;m a full stack developer based in New Jersey!
        </Box>
      </Section>
    </Container>
  );
};

export default About;
