import React from 'react';

import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';

import { useAuth } from '../../contexts/AuthContext';

import * as S from './styles';

export const SingIn = () => {
  const { signed, singIn } = useAuth();

  function handleSingIn() {
    singIn();
  }

  return (
    <Background>
      <TouchableOpacity
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onPress={handleSingIn}
      >
        <S.Title>Entrar</S.Title>
      </TouchableOpacity>
    </Background>
  );
};
