import { Container, Center, IconButton, HStack, Link } from '@chakra-ui/react';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLink = ({ url, icon, aria }) => {
  return (
    <Link href={url} isExternal>
      <IconButton
        aria-label={aria}
        variant="ghost"
        icon={<FontAwesomeIcon icon={icon} size="lg" />}
      />
    </Link>
  );
};

const Socials = () => {
  return (
    <Container>
      <Center>
        <HStack align="center" fontSize="sm" opacity={0.8}>
          <SocialLink url="https://www.github.com/jameshiner/" icon={faGithub} aria="Github" />
          <SocialLink url="https://www.twitter.com/jhinerdev/" icon={faTwitter} aria="Twitter" />
          <SocialLink
            url="https://www.linkedin.com/in/jameshiner/"
            icon={faLinkedin}
            aria="LinkedIn"
          />
        </HStack>
      </Center>
    </Container>
  );
};

export default Socials;
