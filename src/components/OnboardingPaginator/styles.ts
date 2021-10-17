import { Animated } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  height: 64px;
`;

export const Dot = styled(Animated.View)`
  ${({ theme }) => css`
    height: 10px;
    border-radius: 5px;
    background-color: ${theme.colors.primary};
    margin: 0 8px;
  `}
`;
