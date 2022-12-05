import { TouchableOpacity, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  background-color: #eeeeee;
`;

export const ContainerInside = styled(ScrollView)`
  flex: 1;
  padding: 28px 14px;
  margin-bottom: 80px;
`;

export const CardContainer = styled(View)`
  width: 100%;
  align-self: stretch;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #dcdfe3;
  margin-bottom: 12px;
  padding: 24px;
  justify-content: center;
`;

export const CardTitle = styled(Text)`
  color: #34495e;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Roboto_700Bold';
  margin-bottom: 12px;
`;

export const CardDescription = styled(Text)<any>`
  color: ${(props) => (!props.lg ? '#34495e' : '#28B463')};
  font-size: ${(props) => (props.lg ? '32' : '14')}px;
  font-weight: 400;
  font-family: 'Roboto_400Regular';
  text-align: ${(props) => (props.isCenter ? 'center' : 'left')};
`;

export const Divider = styled(View)`
  width: 100%;
  height: 1px;
  background-color: #eeeeee;
  margin: 14px 0;
`;
