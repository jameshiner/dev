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
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import { AnimatePresence, motion } from 'framer-motion';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

import { Link as RouterLink, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

import { NAV_BG_LIGHT, NAV_BG_DARK } from '../constants/colors';

const NavLinkItem = ({ href, children, ...props }) => {
  const { pathname } = useLocation();
  const active = pathname === href;
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const activeColor = 'blue.100';
  return (
    <Link
      as={RouterLink}
      p={2}
      to={href}
      borderRadius="md"
      _focus={{ boxShadow: 'none' }}
      _hover={{
        bg: activeColor,
        color: useColorModeValue(inactiveColor, NAV_BG_DARK),
      }}
      bg={active ? activeColor : undefined}
      color={active ? '#202023' : inactiveColor}
      {...props}
    >
      {children}
    </Link>
  );
};

const NavBar = (props) => {
  const { toggleColorMode } = useColorMode();
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const activeColor = 'blue.100';
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue(NAV_BG_LIGHT, NAV_BG_DARK)}
      style={{ backdropFilter: 'blur(10px)' }}
      boxShadow="lg"
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
        <Flex align="center" mr={6}>
          <Heading as="h1" size="md" letterSpacing="tighter">
            <Link
              as={RouterLink}
              to="/"
              display="inline-flex"
              alignItems="center"
              style={{ gap: 15 }}
              // pl={2}
              p={2}
              _focus={{ boxShadow: 'none' }}
              _hover={{ textDecoration: 'none' }}
            >
              <FontAwesomeIcon icon={faKeyboard} size="lg" />
              JamesHiner
            </Link>
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          spacing={6}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <NavLinkItem text="Projects" href="/projects">
            Projects
          </NavLinkItem>
          <NavLinkItem text="Projects" href="/photography">
            Photography
          </NavLinkItem>
          <Link
            href="https://www.github.com/jameshiner/dev"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            p={2}
            isExternal
            _hover={{
              textDecoration: 'none',
              bg: activeColor,
              borderRadius: 'md',
              color: useColorModeValue(inactiveColor, NAV_BG_DARK),
            }}
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
                aria-label={useColorModeValue('dark-mode', 'light-mode')}
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
                <MenuItem as={RouterLink} to="/projects">
                  Projects
                </MenuItem>
                <MenuItem as={RouterLink} to="/photography">
                  Photography
                </MenuItem>
                <MenuItem as={Link} href="https://www.github.com/jameshiner/dev" isExternal>
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
