import React, { useState, useRef, useCallback } from 'react';
import { Animated, ViewToken } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import { slides } from '../../utils/onboardingSlide';
import { OnboardingItem } from '../../components/OnboardingItem';
import { Paginator } from '../../components/OnboardingPaginator';
import { NextButton } from '../../components/OnboardingNextButton';

type ViewableItemsChangedProps = {
  viewableItems: ViewToken[];
};

export const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const { navigate } = useNavigation();

  const viewableItemsChanged = useRef(
    ({ viewableItems }: ViewableItemsChangedProps) => {
      setCurrentIndex(viewableItems[0].index);
    }
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigate('SingIn');
    }
  };

  return (
    <S.Container>
      <S.Content>
        <S.Slides
          data={slides}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <OnboardingItem data={item} />}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </S.Content>

      <Paginator data={slides} scrollX={scrollX} />
      <NextButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / slides.length)}
      />
			<S.Title></S.Title>
    </S.Container>
  );
};
