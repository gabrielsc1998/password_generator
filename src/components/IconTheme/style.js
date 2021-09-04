import styled from 'styled-components';

import { CgDarkMode as Icon } from 'react-icons/cg';

const IconTheme = styled(Icon)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
`;

export default IconTheme;
