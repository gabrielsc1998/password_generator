import styled from 'styled-components';

import { FlexBoxCentralize } from '../../style/global';

export const InputSize = styled.input`
  width: 100%;
  cursor: pointer;
`;

export const InputSizeLabel = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => {
    const { theme, mode } = props.theme;
    return theme.colors.mode[mode].text;
  }};
`;

export const InputSizeContainer = styled.div`
  width: 100%;
  ${FlexBoxCentralize};
  flex-direction: column;
  align-items: flex-start;
`;
