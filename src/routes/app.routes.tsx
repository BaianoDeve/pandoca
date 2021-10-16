import React from 'react';
import { Home } from '../screens/Home';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

const AppStack = createNativeStackNavigator();

export const AppRoutes = () => {
  const {
    colors: { bgColor },
  } = useTheme();

  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: bgColor },
      }}
    >
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
};
