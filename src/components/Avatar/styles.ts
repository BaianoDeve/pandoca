import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 22px;
`;

export const AvatarImg = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 8px;
`;
