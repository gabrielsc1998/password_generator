import React, { Component } from 'react';
// import PropTypes from "prop-types";

import ButtonComponent from './style';

class Button extends Component {
  componentDidMount() {

  }

  render() {
    const {
      label = '',
      Icon = undefined,
    } = this.props;
    return (
      <ButtonComponent>
        {
          Icon && <Icon color="white" />
        }
        { label }
      </ButtonComponent>
    );
  }
}

export default Button;
