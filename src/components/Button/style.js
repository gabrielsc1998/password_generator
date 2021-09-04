import styled from 'styled-components';

import { FlexBoxCentralize } from '../../style/global';

const ButtonComponent = styled.button`
  width: 100%;
  min-height: 2rem;
  background-color: ${({ theme }) => theme.theme.colors.background};
  ${FlexBoxCentralize};
  &:hover {
    opacity: 0.8;
  }
`;

export default ButtonComponent;
