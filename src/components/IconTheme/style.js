import styled from 'styled-components';

import { CgDarkMode as Icon } from 'react-icons/cg';

const IconTheme = styled(Icon)`
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.theme.colors.text};
  transform: rotate(${({ theme }) => (theme.mode === 'light' ? 0 : 180)}deg ) !important;
  transition: transform 0.5s ease-in-out;  
  &:hover {
    animation: iconMove 0.45s infinite alternate;
  }

  @keyframes iconMove {
    0% { margin-top: -2.5px }
    100% { margin-top: 2.5px }
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

export default IconTheme;
