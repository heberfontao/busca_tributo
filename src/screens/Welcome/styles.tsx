import { TouchableOpacity, Text, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

export const Container = styled(ImageBackground).attrs({
  resizeMode: 'cover',
})`
  flex: 1;
`;

export const ContainerInside = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
  padding: 18px;
  margin-bottom: 80px;
`;

export const ContainerMain = styled(View)`
  align-self: center;
  width: 100%;
`;

export const DividerColor = styled(View)`
  width: 100%;
  height: 6px;
  background-color: #00ced1;
`;

export const TitleMain = styled(Text)`
  width: 100%;
  font-size: 44px;
  /* font-size: 48px; */
  font-weight: 700;
  font-family: 'Oswald_700Bold';
  color: #fff;
  text-transform: uppercase;
  text-align: left;
`;

export const TitleDescription = styled(Text)`
  font-size: 16px;
  color: #fff;
  font-weight: 400;
  font-family: 'Roboto_400Regular';
  text-align: left;
  text-transform: uppercase;
`;

export const ButtonAction = styled(TouchableOpacity)`
  width: 100%;
  align-self: center;
  padding: 12px;
  background-color: rgba(0, 206, 209, 0.8);
  margin-top: 32px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonActionTitle = styled(Text)`
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  font-family: 'Oswald_700Bold';
  text-align: left;
  text-transform: uppercase;
`;

export const ContainerFooter = styled(View)`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TextSign = styled(Text)`
  font-weight: 400;
  font-family: 'Roboto_400Regular';
  color: #f5f5f5;
  font-size: 12px;
  margin-bottom: 6px;
`;
