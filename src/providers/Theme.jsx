import React, { Component, useContext, createContext } from 'react';

import { ThemeProvider as ThemeProviderStyled } from 'styled-components';

import theme from '../style/theme';

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

class ThemeProvider extends Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProviderStyled theme={theme}>
        { children }
      </ThemeProviderStyled>
    );
  }
}

export default ThemeProvider;
