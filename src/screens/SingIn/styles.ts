import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Content = styled.View`
  padding: 0 34px;
`;

export const ImageContainer = styled.ImageBackground`
  width: 100%;
  height: 360px;
  margin-top: ${getStatusBarHeight() + 20}px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    text-align: center;
    font-size: 40px;
    margin-bottom: 16px;
    font-family: ${theme.fonts.title700};
    line-height: 40px;
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.titleSecondary};
    text-align: center;
    font-size: 15px;
    font-family: ${theme.fonts.text500};
    line-height: 25px;
  `}
`;

export const Form = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 50px;
`;

export const InputGroup = styled.View``;

export const ForgotPassword = styled(RectButton)`
  width: 100%;
  align-items: flex-end;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.text400};
    font-size: 15px;
    color: ${theme.colors.primary};
  `}
`;

export const ButtonSubmit = styled(RectButton)`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 50px;
    padding: 16px;
    align-items: center;
    border-radius: 8px;
    background-color: ${theme.colors.primary};
  `}
`;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.text500};
    font-size: 15px;
    color: ${theme.colors.title};
  `}
`;

export const NotAccount = styled.View`
  flex-direction: row;
  margin: 10px 0;
`;

export const Question = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.text400};
    font-size: 15px;
    color: ${theme.colors.title};
    padding-right: 5px;
  `}
`;

export const Register = styled(RectButton)``;
