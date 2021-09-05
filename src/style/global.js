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
    background-color: ${(props) => {
    const { theme, mode } = props.theme;
    return theme.colors.mode[mode].body;
  }};
  }
  button, a {
    border: none;
    cursor: pointer;
    box-shadow: none;
  }
`;

export const FlexBoxCentralize = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default GlobalStyle;

export const BreakPoints = {
  mobile_S: '320px',
  mobile_M: '375px',
  mobile_L: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptop_L: '1440px',
};
