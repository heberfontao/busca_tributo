import { Text, View, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

const isIos = Platform.OS === 'ios';

export const Container = styled(SafeAreaView)`
  width: 100%;
  background-color: #34495e;
`;

export const ContainerInside = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 14px;
  padding-bottom: ${isIos ? '2' : '14'}px;
  padding-left: 12px;
  padding-right: 12px;
`;

export const TitleHeader = styled(Text)`
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  text-transform: uppercase;
  margin-left: 16px;
`;
