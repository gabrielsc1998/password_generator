import React, { Component } from 'react';

import GlobalStyle from './style/global';
import ThemeProvider from './providers/Theme';
import PasswordGenerator from './screens/PasswordGenerator/index';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <GlobalStyle />
        <PasswordGenerator />
      </ThemeProvider>
    );
  }
}

export default App;
