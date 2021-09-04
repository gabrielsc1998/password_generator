import React, { Component } from 'react';

import { ThemeContext } from '../../providers/Theme';

import { Button, ButtonLabel, ButtonIcon } from './style';

class ButtonComponent extends Component {
  RenderButtonIcon = () => {
    const { Icon } = this.props;
    return (
      Icon && (
        <ButtonIcon>
          <Icon />
        </ButtonIcon>
      )
    );
  }

  render() {
    const { label = '', onClick } = this.props;
    return (
      <Button onClick={onClick}>
        { this.RenderButtonIcon() }
        <ButtonLabel>
          { label }
        </ButtonLabel>
      </Button>
    );
  }
}

ButtonComponent.contextType = ThemeContext;

export default ButtonComponent;
