import {
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Pressable,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';
import MaskInput from 'react-native-mask-input';

type TypeSearchButtonsProps = {
  color: '#4682B4' | '#5F9EA0' | '#00CED1';
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #eeeeee;
`;

export const ContainerInside = styled(KeyboardAvoidingView)`
  flex: 1;
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

export const TouchableInside = styled(Pressable)`
  width: 100%;
`;

export const InputSearch = styled(TextInput)`
  width: 100%;
  height: 54px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 8px;
`;

export const InputSearchMasked = styled(MaskInput)`
  width: 100%;
  height: 54px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 8px;
`;

export const ButtonSumit = styled(TouchableOpacity)`
  align-self: stretch;
  height: 54px;
  background-color: #34495e;
  justify-content: center;
  border-radius: 12px;
  margin-top: 12px;
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
`;
export const ButtonSubmitText = styled(Text)`
  color: #ffffff;
  align-self: center;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Roboto_700Bold';
`;

export const CardContainer = styled(View)`
  align-self: stretch;
  padding: 12px;
`;

export const ContainerSearch = styled(View)`
  width: 100%;
  margin-bottom: 32px;
`;

export const TextTitleSearch = styled(Text)`
  font-size: 16px;
  text-align: center;
  color: #34495e;
  margin-bottom: 12px;
  font-weight: 700;
  font-family: 'Roboto_700Bold';
`;

export const TypeSearchButtons = styled(
  TouchableOpacity,
)<TypeSearchButtonsProps>`
  align-items: stretch;
  padding: 12px;
  border-radius: 8px;
  background-color: ${(props) => props.color};
  margin-bottom: 12px;
`;

export const TextDescriptions = styled(Text)`
  font-size: 14px;
  text-align: center;
  color: #34495e;
  margin-bottom: 12px;
  font-weight: 400;
  font-family: 'Roboto_400Regular';
`;
