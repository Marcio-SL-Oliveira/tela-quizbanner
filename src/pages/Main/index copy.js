import React, { Component, Image } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import {
  ContainerApp,
  ContainerAcertosErros,
  AcertosErrosOX,
  ContainerMaosPlacarCapituloAtividade,
  ContainerMaos,
  LogoMaosPositivaNegativa,
  ContainerPlacar,
  TextoPlacarPositivoNegativo,
  ContainerButtonsTop,
  TextoButtonTop,
  ButtonCapitulo,
  ButtonAtividade,
  ButtonNext,
} from './styles.js';
// import Styles from './styles.js';
// import { Container } from './styles';
import iconPositivo from '../../assets/iconpositivo.png';
import iconNegativo from '../../assets/iconnegativo.png';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      placar: [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
      acertoErro: ['X', 'O'],
    };
    console.tron.log(this.state.placar);
  }

  render() {
    const { placar, acertoErro } = this.state;
    console.tron.log('placar: ', placar[0], placar[1]);
    return (
      <ContainerApp>
        <ContainerAcertosErros>
          {placar.map((value, index) => (
            <AcertosErrosOX key={index}>
              <Text>{value === 0 ? acertoErro[0] : acertoErro[1]}</Text>
            </AcertosErrosOX>
          ))}
        </ContainerAcertosErros>

        <ContainerMaosPlacarCapituloAtividade>
          <ContainerMaos>
            <LogoMaosPositivaNegativa source={iconPositivo} />
            <LogoMaosPositivaNegativa source={iconNegativo} />
          </ContainerMaos>
          <ContainerPlacar>
            <TextoPlacarPositivoNegativo>100</TextoPlacarPositivoNegativo>
            <TextoPlacarPositivoNegativo>9</TextoPlacarPositivoNegativo>
          </ContainerPlacar>
          <ContainerButtonsTop>
            <TextoButtonTop>Cap. 21</TextoButtonTop>
            <TextoButtonTop>Ati. 4</TextoButtonTop>
            <TextoButtonTop>Next</TextoButtonTop>
          </ContainerButtonsTop>
        </ContainerMaosPlacarCapituloAtividade>
      </ContainerApp>
    );
  }
}

Main.navigationOptions = {
  title: 'Regra de Sinais',
};
