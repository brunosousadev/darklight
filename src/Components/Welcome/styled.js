import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.background};
`;

export const Title = styled.Text`
  color: ${props => props.theme.color};
  font-size: 32px;
  font-weight: 600;
  text-align: center;
`;
