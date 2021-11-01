import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Button,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import { AnimatePresence, motion } from 'framer-motion';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

import { Link as RouterLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

import { NAV_BG_LIGHT, NAV_BG_DARK } from '../constants/colors';

/* 
const LinkItem = ({ href, path, children, isExternal }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpa.900');

  return (
    <Link
      href={href}
      p={2}
      bg={active ? 'glassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      isExternal={isExternal}
    >
      {children}
    </Link>
  );
};
*/

const NavBar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue(NAV_BG_LIGHT, NAV_BG_DARK)}
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
        <Flex align="center" mr={10}>
          <Heading as="h1" size="md" letterSpacing="tighter">
            <RouterLink to="/" textDecoration="none">
              <Link
                as="div"
                textDecoration="none"
                display="inline-flex"
                alignItems="center"
                style={{ gap: 15 }}
                pl={2}
              >
                <FontAwesomeIcon icon={faKeyboard} size="md" />
                JamesHiner
              </Link>
            </RouterLink>
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          spacing={10}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <RouterLink to="/projects">
            <Link as="div">Projects</Link>
          </RouterLink>
          <RouterLink to="/photography">
            <Link as="div">Photography</Link>
          </RouterLink>
          <Link
            href="https://www.github.com/jameshiner/dev"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            isExternal
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
            Source
          </Link>
        </Stack>
        <Box flex={1} align="right">
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
              style={{ display: 'inline-block' }}
              key={useColorModeValue('light', 'dark')}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <IconButton
                onClick={toggleColorMode}
                icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                bg={useColorModeValue('blue.500', 'orange.200')}
                color={useColorModeValue(NAV_BG_LIGHT, NAV_BG_DARK)}
                _hover={{ bg: useColorModeValue('blue.600', 'orange.400') }}
              />
            </motion.div>
          </AnimatePresence>
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={RouterLink} to="/">
                  About
                </MenuItem>
                <MenuItem as={RouterLink} to="/works">
                  Works
                </MenuItem>
                <MenuItem as={RouterLink} to="/posts">
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
