import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

export const InputGroup = styled.View`
  flex-direction: row;
  align-items: center;
  height: 48px;
  width: 100%;
  border-radius: 5px;
  border-width: 1px;
  margin-bottom: 16px;
`;

export const InputField = styled.TextInput`
  ${({ theme }) => css`
    color: ${theme.colors.title}
    font-family: ${theme.fonts.text400}
    font-size: 15px;
    line-height: 48px;
    flex: 1;
  `}
`;

export const Box = styled.View`
  height: 20px;
  width: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 20px;
`;

export const IconBox = styled(RectButton)`
  padding: 0 8px;
`;
