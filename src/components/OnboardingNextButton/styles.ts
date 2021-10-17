import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    position: absolute;
    background-color: ${theme.colors.primary};
    border-radius: 100px;
    padding: 20px;
  `}
`;
