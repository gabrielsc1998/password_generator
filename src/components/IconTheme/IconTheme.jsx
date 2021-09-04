import React, { Component } from 'react';

import { ThemeContext } from '../../providers/Theme';

import IconTheme from './style';

class IconThemeComponent extends Component {
  changeTheme = () => {
    this.context.changeMode();
  }

  showTheme = () => (this.context.mode === 'light' ? 'Light' : 'Dark');

  render() {
    return <IconTheme onClick={this.changeTheme} />;
  }
}

IconThemeComponent.contextType = ThemeContext;

export default IconThemeComponent;
