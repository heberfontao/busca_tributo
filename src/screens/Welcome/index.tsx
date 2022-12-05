import { View, Text, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// styles
import {
  Container,
  ContainerInside,
  ContainerMain,
  ContainerFooter,
  DividerColor,
  TitleMain,
  TitleDescription,
  ButtonAction,
  ButtonActionTitle,
  TextSign,
} from './styles';

export const WelcomePage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container source={require('../../assets/images/bg-executive.png')}>
        <ContainerInside>
          <View />
          <ContainerMain>
            <DividerColor />
            {/* <TitleMain>Sistema Consulta Tributação</TitleMain> */}
            <TitleMain>Busca Tributo</TitleMain>
            <TitleDescription>
              Faça sua busca por NCM, CEST ou palavra chave
            </TitleDescription>
            <ButtonAction onPress={() => navigation.navigate('Search')}>
              <ButtonActionTitle>BUSCAR</ButtonActionTitle>
            </ButtonAction>
          </ContainerMain>
          <ContainerFooter>
            <TextSign>Informações: sistemaapurador@gmail.com</TextSign>
            <TextSign>Desenvolvido por PJI310-GRUPO-013</TextSign>
            <TextSign>V1.0.0</TextSign>
          </ContainerFooter>
        </ContainerInside>
      </Container>
    </>
  );
};
