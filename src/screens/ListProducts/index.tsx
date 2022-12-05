import { useRoute, useNavigation } from '@react-navigation/native';

// components
import { Header } from '../../components/Header';

// styles
import {
  Container,
  ContainerInside,
  CardContainer,
  CardContainerLeft,
  CardContainerRight,
  CardTitle,
  TitleDescription,
} from './styles';

// types
import { ProductProps } from '../../types/products.types';

type RouteParams = {
  values: ProductProps;
};

export const ListProducts: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { values } = route.params as RouteParams;
  return (
    <>
      <Header headerTitle="Lista de produtos" />
      <Container>
        <ContainerInside showsVerticalScrollIndicator={false}>
          <TitleDescription>
            Selecione um dos produtos para mais detalhes
          </TitleDescription>
          {values &&
            values.dados.map((value) => (
              <CardContainer
                key={value.id}
                onPress={() =>
                  navigation.navigate('ShowProduct', { values: value })
                }
              >
                <CardContainerLeft />
                <CardContainerRight>
                  <CardTitle>{value.descricao}</CardTitle>
                </CardContainerRight>
              </CardContainer>
            ))}
        </ContainerInside>
      </Container>
    </>
  );
};
