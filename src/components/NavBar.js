import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';

import { Link as RouterLink } from 'react-router-dom';

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpa.900');

  return (
    <Link
      href={href}
      p={2}
      bg={active ? 'glassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
    >
      {children}
    </Link>
  );
};

const NavBar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Link href="/">JamesHiner</Link>
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          {/* TODO: pass path in? */}
          <RouterLink to="/projects">
            <LinkItem>Projects</LinkItem>
          </RouterLink>
          <RouterLink to="/photography">
            <LinkItem>Photography</LinkItem>
          </RouterLink>
          <LinkItem href="https://www.github.com/jameshiner/dev" isExternal>
            View Source
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={Link} href="/">
                  About
                </MenuItem>
                <MenuItem as={Link} href="/works">
                  Works
                </MenuItem>
                <MenuItem as={Link} href="/posts">
                  Posts
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://www.github.com/jameshiner/dev"
                  isExternal
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default NavBar;
