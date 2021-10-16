import React from 'react';
import * as S from './styles';

import { TouchableOpacity } from 'react-native-gesture-handler';

import { RootStackScreenProps } from '../../@types/navigation';
import { useAuth } from '../../contexts/AuthContext';
import { Background } from '../../components/Background';

export const Home = ({ navigation }: RootStackScreenProps<'Home'>) => {
  const { singOut } = useAuth();

  function handleSingOut() {
    singOut();
  }

  return (
    <Background>
      <TouchableOpacity
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onPress={handleSingOut}
      >
        <S.Title>Sair</S.Title>
      </TouchableOpacity>
    </Background>
  );
};
