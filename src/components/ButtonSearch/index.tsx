import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as S from './styles';
import { useTheme } from 'styled-components/native';

export function ButtonAdd({ ...props }: RectButtonProps) {
  const { colors } = useTheme();

  return (
    <S.Container {...props}>
      <MaterialCommunityIcons name="plus" color={colors.heading} size={24} />
    </S.Container>
  );
}
