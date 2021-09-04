import React, { Component } from 'react';

import { AiOutlineCopy as IconCopy } from 'react-icons/ai';

import { Button, Header, InputSize } from '../../components';

import {
  PasswordGeneratorContainer,
  PasswordGeneratorContainerBody,
  PasswordGeneratorBody,
  PasswordGeneratorShow,
  PasswordGeneratorCopiedTextSuccess,
} from './style';

import Generator from './generator';

class PasswordGenerator extends Component {
  constructor() {
    super();
    this.state = { password: Generator.password(1), copied: false };
  }

  onChangeInputSize = (event) => {
    event.preventDefault();
    const passwordSize = event.target.value;
    this.setState({ password: Generator.password(passwordSize) });
  }

  copyPassword = () => {
    if (navigator.clipboard.writeText(this.state.password)) {
      this.setState({ copied: true });
      setTimeout(() => {
        this.setState({ copied: false });
      }, 2500);
    }
  }

  render() {
    return (
      <PasswordGeneratorContainer>
        <Header />
        <PasswordGeneratorContainerBody>
          <PasswordGeneratorBody>
            <PasswordGeneratorCopiedTextSuccess show={this.state.copied}>
              SENHA COPIADA!
            </PasswordGeneratorCopiedTextSuccess>
            <PasswordGeneratorShow>
              <p>{this.state.password}</p>
            </PasswordGeneratorShow>
            <InputSize onChange={this.onChangeInputSize} />
            <Button
              label="Copy"
              Icon={IconCopy}
              onClick={this.copyPassword}
            />
          </PasswordGeneratorBody>
        </PasswordGeneratorContainerBody>
      </PasswordGeneratorContainer>
    );
  }
}

export default PasswordGenerator;
