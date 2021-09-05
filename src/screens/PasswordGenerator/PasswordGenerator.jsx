import React, { Component } from 'react';

import { AiOutlineCopy as IconCopy, AiOutlineCheck as IconOk } from 'react-icons/ai';

import { Button, Header, InputSize } from '../../components';

import {
  PasswordGeneratorContainer,
  PasswordGeneratorContainerBody,
  PasswordGeneratorBody,
  PasswordGeneratorShow,
  PasswordGeneratorCopiedTextSuccess,
  PasswordGeneratorShowText,
  PasswordGeneratorButtonContainer,
} from './style';

import Generator from './generator';

class PasswordGenerator extends Component {
  constructor() {
    super();
    this._ctrlTimeout = null;
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
      clearTimeout(this._ctrlTimeout);
      this._ctrlTimeout = setTimeout(() => {
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
              <IconOk style={{ marginRight: '0.25rem' }} />
              Password Copied!
            </PasswordGeneratorCopiedTextSuccess>
            <PasswordGeneratorShow>
              <PasswordGeneratorShowText>
                {this.state.password}
              </PasswordGeneratorShowText>
            </PasswordGeneratorShow>
            <InputSize onChange={this.onChangeInputSize} />
            <PasswordGeneratorButtonContainer>
              <Button
                label="Copy to clipboard"
                Icon={IconCopy}
                onClick={this.copyPassword}
              />
            </PasswordGeneratorButtonContainer>
          </PasswordGeneratorBody>
        </PasswordGeneratorContainerBody>
      </PasswordGeneratorContainer>
    );
  }
}

export default PasswordGenerator;
