import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { MaterialIcons } from '@expo/vector-icons';

import * as S from './styles';
import { useTheme } from 'styled-components/native';

export function ButtonSearch({ ...props }: RectButtonProps) {
  const { colors } = useTheme();

  return (
    <S.Container {...props}>
      <MaterialIcons name="search" color={colors.heading} size={24} />
    </S.Container>
  );
}
