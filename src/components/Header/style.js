import styled from 'styled-components';

import { FlexBoxCentralize } from '../../style/global';

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 100px;
  background-color: ${({ theme }) => theme.theme.colors.background};
  ${FlexBoxCentralize};
`;

export const HeaderContent = styled.div`
  width: 90%;
  height: 100px;
  ${FlexBoxCentralize};
  justify-content: space-between;
`;

export const HeaderTitle = styled.p`
  font-weight: 400;
  font-size: 2rem;
  color: ${({ theme }) => theme.theme.colors.text};
`;
