import { Container, Button, Box, Stack, Link, useColorModeValue } from '@chakra-ui/react';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLink = ({ url, icon, text }) => {
  const buttonColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  return (
    <Link href={url} isExternal>
      <Button
        variant="ghost"
        color={buttonColor}
        leftIcon={<FontAwesomeIcon icon={icon} size="lg" />}
      >
        {text}
      </Button>
    </Link>
  );
};

const Socials = () => {
  return (
    <Container>
      <Box align="center" fontSize="sm" opacity={0.8}>
        <Stack direction={['column', 'row']} spacing={['0px', '24px']}>
          <SocialLink url="https://www.github.com/jameshiner" icon={faGithub} text="@jameshiner" />
          <SocialLink url="https://www.twitter.com/jhinerdev" icon={faTwitter} text="@jhinerdev" />
          <SocialLink
            url="https://www.linkedin.com/in/jameshiner/"
            icon={faLinkedin}
            text="@James Hiner"
          />
        </Stack>
      </Box>
    </Container>
  );
};

export default Socials;
