import React, { useState } from 'react';
import { Platform, ScrollView } from 'react-native';

import { useAuth } from '../../contexts/AuthContext';
import { validateEmail, validatePassword } from '../../utils/validators';
import { RootStackScreenProps } from '../../@types/navigation';

import * as S from './styles';
import IllustartionImg from '../../assets/illustration.png';
import { Background } from '../../components/Background';
import { Input } from '../../components/Form';

export const SingIn = ({ navigation }: RootStackScreenProps<'SingIn'>) => {
  const [hidePassword, setHidePassword] = useState(true);
  const { singIn } = useAuth();

  function handleSingIn() {
    singIn();
  }

  function handleNavigateToRegister() {
    navigation.navigate('SingUp');
  }

  function handleNavigateToForgotPassword() {
    navigation.navigate('ForgotPassword');
  }

  function toggleHidePassword() {
    setHidePassword(!hidePassword);
  }

  return (
    <S.Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Background>
        <ScrollView>
          <S.ImageContainer source={IllustartionImg} resizeMode="stretch">
            <S.Content>
              <S.Title>Conecte-se e acompanhe novos lançamentos</S.Title>
            </S.Content>
          </S.ImageContainer>

          <S.Form>
            <S.InputGroup>
              <Input
                icon="mail"
                validator={validateEmail}
                placeholder="Usuario ou Email"
                autoCorrect={false}
              />

              <Input
                icon={hidePassword ? 'lock' : 'unlock'}
                validator={validatePassword}
                placeholder="Senha"
                secureTextEntry={hidePassword}
                autoCorrect={false}
                onClickIcon={toggleHidePassword}
              />
            </S.InputGroup>

            <S.ForgotPassword onPress={handleNavigateToForgotPassword}>
              <S.Text>Esqueceu sua senha?</S.Text>
            </S.ForgotPassword>

            <S.ButtonSubmit onPress={handleSingIn}>
              <S.TextButton>Entrar</S.TextButton>
            </S.ButtonSubmit>

            <S.NotAccount>
              <S.Question>Ainda não tem conta?</S.Question>
              <S.Register onPress={handleNavigateToRegister}>
                <S.Text>Register</S.Text>
              </S.Register>
            </S.NotAccount>
          </S.Form>
        </ScrollView>
      </Background>
    </S.Container>
  );
};
