import styled from 'styled-components';

import { FlexBoxCentralize, BreakPoints } from '../../style/global';

export const PasswordGeneratorContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
  width: 100%;
  height: 100vh;
`;

export const PasswordGeneratorContainerBody = styled.div`
  width: 100%;
  ${FlexBoxCentralize};
`;

export const PasswordGeneratorBody = styled.div`
  width: 90%;
  ${FlexBoxCentralize};
  flex-direction: column;
`;

export const PasswordGeneratorShow = styled.div`
  width: 100%;
  overflow: auto;
  padding: 0.5rem;
  margin-bottom: 2rem;
  word-break: break-all;
  white-space: pre-wrap;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 3px 0px ${(props) => {
    const { theme, mode } = props.theme;
    return theme.colors.mode[mode].shadow;
  }};

  @media (min-width: 0) {
    max-height: 125px;
  };

  @media (min-width: ${BreakPoints.mobile_M}) {
    max-height: 150px;
  };

  /* @media (max-width: ${BreakPoints.mobile_L}) {
    max-height: 100px;
  }; */
`;

export const PasswordGeneratorShowText = styled.p`
  font-size: 1rem;
  color: ${(props) => {
    const { theme, mode } = props.theme;
    return theme.colors.mode[mode].text;
  }};
`;

export const PasswordGeneratorCopiedTextSuccess = styled.p`
  right: 2.5%;
  bottom: 2.5%;
  position: absolute;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.theme.colors.success.text};
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.theme.colors.success.background};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const PasswordGeneratorButtonContainer = styled.div`
  width: 50%;
  min-width: 250px;
  margin-top: 2rem;
`;
