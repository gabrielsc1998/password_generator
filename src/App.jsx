import React, { Component } from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './style/theme';
import GlobalStyle from './style/global';
import PasswordGenerator from './screens/PasswordGenerator/index';

class App extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <PasswordGenerator />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
