import {
  Box,
  Image,
  Stack,
  Text,
  Heading,
  Link,
  Center,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { NAV_BG_DARK } from '../constants/colors';
const { PUBLIC_URL } = process.env;

const ProjectCard = ({ title, alt, img, gif, url, sourceUrl, description }) => {
  const gradientBottom = useColorModeValue('blue.100', NAV_BG_DARK);
  const gradientTop = useColorModeValue('white', 'gray.800');

  return (
    <Center pb={10}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bgGradient={`linear(to-t, ${gradientBottom}, ${gradientTop})`}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(PUBLIC_URL + img)`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Link href={url} isExternal>
            <Image
              alt={alt}
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={PUBLIC_URL + img}
            />
          </Link>
        </Box>
        <Stack pt={7} align={'center'}>
          <Heading pb={3} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text>{description}</Text>
          </Stack>
          <Box>
            <Stack direction="row" spacing={4} pt={5}>
              <Link href={url} isExternal>
                <Button colorScheme="blue" variant="solid">
                  <Text decoration="none">Demo</Text>
                </Button>
              </Link>
              <Link href={sourceUrl} isExternal decoration="none">
                <Button colorScheme="blue" variant="outline">
                  Source
                </Button>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Center>
  );
};

export default ProjectCard;
