import { BrowserRouter, Route } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Photography from '../pages/Photography';

import NavBar from './NavBar';
import Footer from './Footer';
const App = ({ children, router }) => {
  return (
    <Box>
      <BrowserRouter>
        <NavBar />
        <Container maxW="container.lg" pt={'100px'}>
          <Route path="/" exact component={About}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/photography" component={Photography}></Route>
        </Container>
        <Footer />
      </BrowserRouter>
    </Box>
  );
};

export default App;
