import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    font-family: 'Roboto';
    box-sizing: border-box;
  }
  body {
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.mode.light.body};
  }
  button, a {
    cursor: pointer;
  }
`;

export const FlexBoxCentralize = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default GlobalStyle;