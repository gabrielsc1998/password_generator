import React, { Component } from 'react';

import { ThemeContext } from '../../providers/Theme';

import ButtonComponent from './style';

class Button extends Component {
  componentDidMount() {
    console.log('.', this.context);
  }

  changeTheme = () => {
    this.context.changeMode();
  }

  render() {
    const {
      label = '',
      Icon = undefined,
    } = this.props;
    return (
      <ButtonComponent
        onClick={this.changeTheme}
      >
        {
          Icon && <Icon color="white" />
        }
        { label }
      </ButtonComponent>
    );
  }
}

Button.contextType = ThemeContext;

export default Button;
