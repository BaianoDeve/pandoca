import React from 'react';
import { SingIn } from '../screens/SingIn';
import { Onboarding } from '../screens/Onboarding';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

const AuthStack = createNativeStackNavigator();

export const AuthRoutes = () => {
  const {
    colors: { bgColor },
  } = useTheme();

  return (
    <AuthStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: bgColor },
      }}
    >
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="SingIn" component={SingIn} />
      <AuthStack.Screen name="SingUp" component={SingIn} />
      <AuthStack.Screen name="ForgotPassword" component={SingIn} />
    </AuthStack.Navigator>
  );
};
