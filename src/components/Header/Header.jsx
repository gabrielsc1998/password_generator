import React, { Component } from 'react';

import IconTheme from '../IconTheme';

import { HeaderContainer, HeaderContent, HeaderTitle } from './style';

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderContent>
          <HeaderTitle>
            Password Generator
          </HeaderTitle>
          <IconTheme />
        </HeaderContent>
      </HeaderContainer>
    );
  }
}

export default Header;
