import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';

// components
import { Header } from '../../components/Header';

// styles
import {
  Container,
  ContainerInside,
  CardContainer,
  CardTitle,
  CardDescription,
  Divider,
} from './styles';

// types
import { ProductProps } from '../../types/products.types';

type RouteParams = {
  values: any;
};

export const ShowProduct: React.FC = () => {
  const route = useRoute();
  const { values } = route.params as RouteParams;

  return (
    <>
      <Header headerTitle="Destalhes do produto" />
      <Container>
        <ContainerInside showsVerticalScrollIndicator={false}>
          <CardContainer>
            <CardTitle>Segmento</CardTitle>
            <CardDescription>{values.segmento}</CardDescription>
            <Divider />

            <CardTitle>Descrição</CardTitle>
            <CardDescription>{values.descricao}</CardDescription>
            <Divider />

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
            >
              <View>
                <CardTitle>NCM</CardTitle>
                <CardDescription>{values.ncm}</CardDescription>
              </View>
              <View>
                <CardTitle>CEST</CardTitle>
                <CardDescription>{values.cest}</CardDescription>
              </View>
            </View>
            <Divider />

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
            >
              <View style={{ alignSelf: 'center' }}>
                <CardTitle>Alíquota Interna</CardTitle>
                <CardDescription isCenter lg>
                  {values.aliquota}%
                </CardDescription>
              </View>
              <View>
                <CardTitle>MVA Original</CardTitle>
                <CardDescription isCenter lg>
                  {values.mva}%
                </CardDescription>
              </View>
            </View>

            <Divider />
            <CardTitle>Base legal da ST</CardTitle>
            <CardDescription>{values.fundamentacao}</CardDescription>
            <Divider />
          </CardContainer>
        </ContainerInside>
      </Container>
    </>
  );
};
