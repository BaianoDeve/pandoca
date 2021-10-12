import React from 'react';
import * as S from './styles';

import { Header } from '../../components/Header';
import { RootStackScreenProps } from '../../@types/navigation';

export const Home = ({ navigation }: RootStackScreenProps<'Home'>) => {
  return (
    <S.Container>
      <S.Title>Home</S.Title>
    </S.Container>
  );
};
