import styled from 'styled-components';

import { CgDarkMode as Icon } from 'react-icons/cg';

import { MODES } from '../../providers/Theme';

export const IconTheme = styled(Icon)`
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.theme.colors.text};
  transform: rotate(${({ theme }) => (theme.mode === MODES.LIGHT ? 0 : 180)}deg );
  transition: transform 0.5s ease-in-out;  
  
  &:hover {
    font-size: 2.2rem;
    animation: iconMove 0.35s infinite alternate;
  }

  @keyframes iconMove {
    0% { margin-top: -3.5px }
    100% { margin-top: 3.5px }
  }
`;

export const IconThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconThemeLabel = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.theme.colors.text};
`;
