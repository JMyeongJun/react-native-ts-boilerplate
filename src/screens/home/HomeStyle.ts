import styled from 'styled-components/native';
import { palette } from '@theme/themes';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${palette.primary};
`;

export const Btn = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 20px;
  border-radius: 10px;
`;
