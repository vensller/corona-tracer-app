import React from 'react';
import {
  Image
} from 'react-native';

import { Container, WelcomeDesc, WelcomeText } from './styles';
import Button from '~/components/Button';

import Home from '~/assets/img/home.png';

export default function Main({navigation}) {
  function handlePressButton() {
    navigation.navigate('Permissions')
  }

  return (
    <Container>      
      <Image 
        source={Home} 
      />
      <WelcomeText>Bem vindo</WelcomeText>
      <WelcomeDesc>Estamos aqui para ajudar você e outras pessoas a se protegerem do avanço do COVID-19</WelcomeDesc>      
      <Button text="Entrar" onPress={handlePressButton} />
    </Container>
  )
};

Main.navigationOptions = () => ({
  header: () => false  
})