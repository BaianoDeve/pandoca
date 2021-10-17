import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    position: absolute;
    background-color: ${theme.colors.primary};
    border-radius: 100px;
    padding: 20px;
  `}
`;
