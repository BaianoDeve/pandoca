import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import * as S from './styles';
import Svg, { G, Circle } from 'react-native-svg';
import { useTheme } from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

type Props = {
  percentage: number;
  scrollTo: () => void;
};

export const NextButton = ({ percentage, scrollTo }: Props) => {
  const size = 128;
  const strokeWidth = 3;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const {
    colors: { primary, titleSecondary },
  } = useTheme();

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue: number) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener((value) => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100;

      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });

    return () => {
      progressAnimation.removeAllListeners();
    };
  });

  return (
    <S.Container>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke={titleSecondary}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />

          <Circle
            ref={progressRef}
            stroke={primary}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <S.Button onPress={scrollTo}>
        <AntDesign name="arrowright" size={32} color="#fff" />
      </S.Button>
    </S.Container>
  );
};
