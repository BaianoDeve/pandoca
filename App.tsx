import 'react-native-gesture-handler';
import React from 'react';

import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useLoadFonts } from './src/hooks/useLoadFonts';

import { AuthProvider } from './src/contexts/AuthContext';
import { ThemeProvider } from 'styled-components/native';

import { theme } from './src/styles/theme';
import { Routes } from './src/routes';
import { Background } from './src/components/Background';

export default function App() {
  const fontLoaded = useLoadFonts();

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Background>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Background>
    </ThemeProvider>
  );
}
