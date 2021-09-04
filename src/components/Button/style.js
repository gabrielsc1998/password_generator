import styled from 'styled-components';

import { FlexBoxCentralize } from '../../style/global';

export const Button = styled.button`
  width: 100%;
  min-height: 2.5rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.theme.colors.background};
  ${FlexBoxCentralize};
  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonLabel = styled.p`
  font-size: 1rem;
  color: ${(props) => {
    const { theme, mode } = props.theme;
    return theme.colors.mode[mode].buttonLabel;
  }};
  ${FlexBoxCentralize};
`;

export const ButtonIcon = styled(ButtonLabel)`
  margin-right: 0.25rem;
`;
