import React, { Component, createContext } from 'react';

import { ThemeProvider as ThemeProviderStyled } from 'styled-components';

import theme from '../style/theme';

export const MODES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const ThemeContext = createContext();
class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: MODES.LIGHT };
  }

  changeMode = () => {
    const { mode } = this.state;
    mode === MODES.LIGHT
      ? this.setState({ mode: MODES.DARK })
      : this.setState({ mode: MODES.LIGHT });
  }

  render() {
    const { children } = this.props;
    return (
      <ThemeContext.Provider value={{ changeMode: this.changeMode, mode: this.state.mode }}>
        <ThemeProviderStyled theme={{ theme, mode: this.state.mode }}>
          { children }
        </ThemeProviderStyled>
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
