import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import theme from './themes/theme';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>,
  document.getElementById('root'),
);
