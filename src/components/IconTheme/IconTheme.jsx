import React, { Component } from 'react';

import { ThemeContext, MODES } from '../../providers/Theme';

import { IconTheme } from './style';

class IconThemeComponent extends Component {
  changeTheme = () => {
    this.context.changeMode();
  }

  showTheme = () => (this.context.mode === MODES.LIGHT ? 'Light' : 'Dark');

  render() {
    return <IconTheme onClick={this.changeTheme} />;
  }
}

IconThemeComponent.contextType = ThemeContext;

export default IconThemeComponent;
