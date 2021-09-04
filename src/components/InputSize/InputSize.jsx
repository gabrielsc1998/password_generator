import React, { Component } from 'react';

import { InputSize, InputSizeLabel, InputSizeContainer } from './style';

const inputsDefinitions = {
  type: 'range',
  min: '1',
  max: '255',
  step: '1',
};

class InputSizeComponent extends Component {
  constructor() {
    super();
    this.state = { size: 1 };
  }

  updateSize = (event) => {
    event.preventDefault();
    const size = event.target.value;
    this.setState({ size });
  }

  renderLabelInput = () => `Size: ${this.state.size}`;

  render() {
    const { onChange } = this.props;
    return (
      <InputSizeContainer>
        <InputSize
          {...inputsDefinitions}
          value={this.state.size}
          onChange={(e) => { this.updateSize(e); onChange(e); }}
        />
        <InputSizeLabel>
          {this.renderLabelInput()}
        </InputSizeLabel>
      </InputSizeContainer>
    );
  }
}

export default InputSizeComponent;
