import React, { Component } from 'react';

import { AiOutlineCopy as IconCopy } from 'react-icons/ai';

import Header from '../../components/Header';
import Button from '../../components/Button';

class PasswordGenerator extends Component {
  render() {
    return (
      <>
        <Header />
        <Button
          label="Copiar"
          Icon={IconCopy}
        />
      </>
    );
  }
}

export default PasswordGenerator;
