import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';
import { OnboardingItemProps } from '../../components/Onboarding';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex: 3;
`;

export const SkipButton = styled(RectButton)`
  position: absolute;
  bottom: 50px;
  left: 24px;
`;

export const SkipTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.text500};
    color: ${theme.colors.primary};
  `}
`;

export const Slides = styled(
  FlatList as new () => FlatList<OnboardingItemProps>
)``;
