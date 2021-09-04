import styled from 'styled-components';

import { FlexBoxCentralize } from '../../style/global';

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
  padding: 0.5rem;
  min-height: 100px;
  word-break: break-all;
  white-space: pre-wrap;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 6px 0px #b1b1b1;
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
