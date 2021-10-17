import React from 'react';
import { View } from 'react-native';
import { Avatar } from '../Avatar';

import * as S from './styles';

export function Profile() {
  return (
    <S.Container>
      <Avatar urlImage="https://github.com/BaianoDeve.png" />

      <View>
        <S.User>
          <S.Greeting>Óla,</S.Greeting>
          <S.Username>Renan</S.Username>
        </S.User>

        <S.Message>Hoje é dia de vitória</S.Message>
      </View>
    </S.Container>
  );
}
