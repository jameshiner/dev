import { BrowserRouter, Route } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Photography from '../pages/Photography';

import NavBar from './NavBar';
const App = ({ children, router }) => {
  return (
    <Box>
      {/* TODO: pass path to router, use redux? */}

      <BrowserRouter>
        <NavBar />
        <Container maxW="container.md" pt={14}>
          <Route path="/" exact component={About}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/photography" component={Photography}></Route>
        </Container>
      </BrowserRouter>
    </Box>
  );
};

export default App;
