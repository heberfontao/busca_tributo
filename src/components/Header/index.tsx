import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, ContainerInside, TitleHeader } from './styles';

export const Header: React.FC<{ headerTitle?: string }> = ({
  headerTitle = '',
}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerInside>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <MaterialCommunityIcons
            name="arrow-left-circle"
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <TitleHeader>{headerTitle}</TitleHeader>
      </ContainerInside>
    </Container>
  );
};
