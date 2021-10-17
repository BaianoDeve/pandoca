import React from 'react';
import { useWindowDimensions } from 'react-native';
import { SvgProps } from 'react-native-svg';
import * as S from './styles';

export type OnboardingItemProps = {
  id: string;
  title: string;
  subtitle: string;
  image: React.FC<SvgProps>;
};

type Props = {
  data: OnboardingItemProps;
};

export const OnboardingItem = ({
  data: { image: Image, title, subtitle },
}: Props) => {
  const { width } = useWindowDimensions();

  return (
    <S.Container style={{ width }}>
      <Image width={width} height={245} />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Content>
    </S.Container>
  );
};
