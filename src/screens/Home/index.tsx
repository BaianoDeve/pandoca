import React from 'react';
import * as S from './styles';

import { TouchableOpacity } from 'react-native-gesture-handler';

import { RootStackScreenProps } from '../../@types/navigation';
import { useAuth } from '../../contexts/AuthContext';

import { Background } from '../../components/Background';
import { ButtonSearch } from '../../components/ButtonSearch';
import { Profile } from '../../components/Profile';

export const Home = ({ navigation }: RootStackScreenProps<'Home'>) => {
  const { singOut } = useAuth();

  function handleSingOut() {
    singOut();
  }

  return (
    <Background>
      <S.Header>
        <Profile />
        <ButtonSearch onPress={handleSingOut} />
      </S.Header>
    </Background>
  );
};
