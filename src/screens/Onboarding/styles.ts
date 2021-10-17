import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { ItemProps } from '../../components/OnboardingItem';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex: 3;
`;

export const Slides = styled(FlatList as new () => FlatList<ItemProps>)``;
