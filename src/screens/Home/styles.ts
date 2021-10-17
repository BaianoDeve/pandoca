import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Header = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${`${getStatusBarHeight() + 26}px`};
  margin-bottom: 42px;
`;
