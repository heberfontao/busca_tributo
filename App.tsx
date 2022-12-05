import { StatusBar, View, ActivityIndicator } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Oswald_700Bold } from '@expo-google-fonts/oswald';
import Toast from 'react-native-toast-message';

import { Routes } from './src/routes';

export default function App() {
  const [loaderFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Oswald_700Bold,
  });

  return loaderFonts ? (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Routes />
      <Toast position="top" />
    </>
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#34495e',
      }}
    >
      <ActivityIndicator color="#ffffff" />
    </View>
  );
}
