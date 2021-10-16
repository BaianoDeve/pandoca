import React from 'react';
import { SingIn } from '../screens/SingIn';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

const AuthStack = createNativeStackNavigator();

export const AuthRoutes = () => {
  const {
    colors: { bgColor },
  } = useTheme();

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: bgColor },
      }}
    >
      <AuthStack.Screen name="SingIn" component={SingIn} />
    </AuthStack.Navigator>
  );
};
