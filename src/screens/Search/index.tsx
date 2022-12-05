import React, { useState, useCallback } from 'react';
import { Platform, Keyboard, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import { api } from '../../services/api';

import {
  Container,
  ContainerInside,
  TouchableInside,
  InputSearchMasked,
  ButtonSumit,
  ButtonSubmitText,
  ContainerSearch,
  TextTitleSearch,
  TextDescriptions,
  TypeSearchButtons,
} from './styles';

export const Search: React.FC = () => {
  const navigation = useNavigation();

  const [typeSearch, setTypeSearch] = useState<string | boolean>(false);
  const [ncmValue, setNcmValue] = useState<string>('');
  const [loader, setLoader] = useState<boolean>(false);

  const handleChangeType = (type: 'ncm' | 'cest' | 'descr') => {
    setNcmValue('');
    setTypeSearch(type);
  };

  const handleSubmit = useCallback(async () => {
    try {
      setLoader(true);
      const response = await api.get(`/${typeSearch}/${ncmValue}`);
      setLoader(false);
      const countItems = response.data?.dados ? response.data.dados.length : 0;

      if (countItems === 0) {
        Toast.show({
          type: 'error',
          text1: 'Nenhum resultado foi encontrado',
        });
        return;
      }

      navigation.navigate('ListProducts', { values: response.data });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Ocorreu um erro na API',
      });
      setLoader(false);
    }
  }, [ncmValue]);

  return (
    <Container>
      <ContainerInside behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableInside onPress={() => Keyboard.dismiss()}>
          <>
            <TextTitleSearch>SELECIONE UM TIPO DE BUSCA</TextTitleSearch>
            <TextDescriptions>
              Produtos apenas relacionados ao estado de SP
            </TextDescriptions>
            <ContainerSearch>
              <TypeSearchButtons
                color="#4682B4"
                onPress={() => handleChangeType('ncm')}
              >
                <ButtonSubmitText>NCM</ButtonSubmitText>
              </TypeSearchButtons>
              <TypeSearchButtons
                color="#5F9EA0"
                onPress={() => handleChangeType('cest')}
              >
                <ButtonSubmitText>CEST</ButtonSubmitText>
              </TypeSearchButtons>
              <TypeSearchButtons
                color="#00CED1"
                onPress={() => handleChangeType('descr')}
              >
                <ButtonSubmitText>PALAVRA CHAVE</ButtonSubmitText>
              </TypeSearchButtons>
            </ContainerSearch>

            {typeSearch === 'ncm' && (
              <InputSearchMasked
                placeholder="Digite os 4 primeiros números de um NCM"
                keyboardType="numeric"
                placeholderTextColor="#999"
                onChangeText={(value) => setNcmValue(value)}
                onSubmitEditing={handleSubmit}
                value={ncmValue}
                mask={[/\d/, /\d/, /\d/, /\d/]}
              />
            )}

            {typeSearch === 'cest' && (
              <InputSearchMasked
                placeholder="Digite o CEST do produto, Ex: 00.000.00"
                keyboardType="numeric"
                placeholderTextColor="#999"
                onChangeText={(value) => setNcmValue(value)}
                onSubmitEditing={handleSubmit}
                value={ncmValue}
                mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/]}
              />
            )}

            {typeSearch === 'descr' && (
              <InputSearchMasked
                placeholder="Digite uma palavra chave, Ex: cerveja"
                keyboardType="default"
                placeholderTextColor="#999"
                onChangeText={(value) => setNcmValue(value)}
                onSubmitEditing={handleSubmit}
                value={ncmValue}
              />
            )}
          </>
        </TouchableInside>

        {typeSearch && (
          <ButtonSumit onPress={handleSubmit} disabled={loader}>
            {loader ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <ButtonSubmitText>BUSCAR</ButtonSubmitText>
            )}
          </ButtonSumit>
        )}
      </ContainerInside>
    </Container>
  );
};
