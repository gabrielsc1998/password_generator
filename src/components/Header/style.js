import styled from 'styled-components';

import { FlexBoxCentralize } from '../../style/global';

const HeaderContainer = styled.header`
  width: 100%;
  min-height: 100px;
  background-color: ${({ theme }) => theme.colors.background};
  ${FlexBoxCentralize};
`;

export const HeaderContent = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.p`
  font-weight: 400;
  font-size: 2rem;
`;

export default HeaderContainer;
