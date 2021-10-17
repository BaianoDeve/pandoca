import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex: 0.3;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
		font-family: ${theme.fonts.title700}
		font-size: 28px;
		color: ${theme.colors.title};
		text-align: center;
		margin-bottom: 10px;
		margin-top: 10px
	`}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
		font-family: ${theme.fonts.text400}
		font-size: 15px;
		color: ${theme.colors.titleSecondary};
		text-align: center;
		padding: 0 64px;
	`}
`;
