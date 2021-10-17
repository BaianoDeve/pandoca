import React from 'react';

import * as S from './styles';
import { useTheme } from 'styled-components/native';

type AvatarProps = {
  urlImage: string;
};

export function Avatar({ urlImage }: AvatarProps) {
  const {
    colors: { primary, primaryActive },
  } = useTheme();

  return (
    <S.Container colors={[primary, primaryActive]}>
      <S.AvatarImg source={{ uri: urlImage }} />
    </S.Container>
  );
}
