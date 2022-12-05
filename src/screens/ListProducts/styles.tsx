import { TouchableOpacity, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  background-color: #eeeeee;
`;

export const TitleDescription = styled(Text)`
  color: #34495e;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 14px;
`;

export const ContainerInside = styled(ScrollView)`
  flex: 1;
  padding: 28px 14px;
  margin-bottom: 80px;
`;

export const CardContainer = styled(TouchableOpacity)`
  width: 100%;
  align-self: stretch;
  flex-direction: row;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #dcdfe3;
  margin-bottom: 12px;
  min-height: 100px;
`;
export const CardContainerLeft = styled(View)`
  background-color: #5d6d7e;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 12px;
`;

export const CardContainerRight = styled(View)`
  flex: 1;
  padding: 12px;
  justify-content: center;
`;

export const CardTitle = styled(Text)`
  color: #34495e;
  font-size: 14px;
  font-weight: 700;
  text-align: justify;
`;
