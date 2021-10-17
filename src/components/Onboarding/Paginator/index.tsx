import React from 'react';
import { Animated, useWindowDimensions } from 'react-native';
import { OnboardingItemProps } from '../SlideItem';
import * as S from './styles';

type Props = {
  data: OnboardingItemProps[];
  scrollX: Animated.Value;
};

export const Paginator = ({ data, scrollX }: Props) => {
  const { width } = useWindowDimensions();

  return (
    <S.Container>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return <S.Dot key={`${i}`} style={{ width: dotWidth, opacity }} />;
      })}
    </S.Container>
  );
};
