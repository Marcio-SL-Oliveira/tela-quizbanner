import React, { Component } from 'react';
import { Text } from 'react-native';

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
  ButtonTop,
  TextoButtonTop,
  ContainerTextoQuestoes,
  TextoQuestoes,
  ContainerAlternativa,
  BotaoAlternativa,
  TextoAlternativa,
  BordaInferior,
} from './styles';
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
      buttonCap: false,
      placarPositivo: 6,
      placarNegativo: 4,
    };
    // console.tron.log(this.state.placar);
  }

  onPressButton() {
    this.setState({ buttonCap: true });
    this.setState({ placarPositivo: 3 });
  }

  render() {
    const {
      placar,
      acertoErro,
      buttonCap,
      placarPositivo,
      placarNegativo,
    } = this.state;
    // console.tron.log('placar: ', placar[0], placar[1]);
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
            <TextoPlacarPositivoNegativo>
              {placarPositivo}
            </TextoPlacarPositivoNegativo>
            <TextoPlacarPositivoNegativo>
              {placarNegativo}
            </TextoPlacarPositivoNegativo>
          </ContainerPlacar>

          <ContainerButtonsTop>
            <ButtonTop onPress={this.onPressButton.bind(this)}>
              <TextoButtonTop>Cap. 21</TextoButtonTop>
            </ButtonTop>
            <ButtonTop>
              <TextoButtonTop>Ati. 4</TextoButtonTop>
            </ButtonTop>
            <ButtonTop>
              <TextoButtonTop>Next</TextoButtonTop>
            </ButtonTop>
          </ContainerButtonsTop>
        </ContainerMaosPlacarCapituloAtividade>

        <ContainerTextoQuestoes>
          <TextoQuestoes>
            abcde Texto 01 Texto01a, Texto02a Texto 01 Texto01a, Texto02a Texto
            01 Texto01a, Texto02a Texto 01 Texto01a, Texto02a Texto 01 Texto01a,
            Texto02aTexto 01 Texto01a, Texto02a
          </TextoQuestoes>
          <TextoQuestoes>
            Texto 01 Texto01a, Texto02a Texto 01 Texto01a, Texto02a Texto 01
            Texto01a, Texto02a Texto 01 Texto01a, Texto02a Texto 01 Texto01a,
            Texto02aTexto 01 Texto01a, Texto02a
          </TextoQuestoes>
          <TextoQuestoes>
            Texto 01 Texto01a, Texto02a Texto 01 Texto01a, Texto02a Texto 01 a b
            c d e f g h i j Texto01a, Texto0 2 a b c d e f Texto 01 Texto01a,
            Texto02a Texto 01 Texto01a, Texto02aTexto 01 Texto01a, Texto02a
          </TextoQuestoes>
        </ContainerTextoQuestoes>

        <ContainerAlternativa>
          <BotaoAlternativa>A)</BotaoAlternativa>
          <TextoAlternativa>
            Texto da Alternativa A Texto da Alternativa A Texto da Alternativa A
            xTexto da Alternativa A Texto da Alternativa A Texto da Alternativa
            A yTexto da Alternativa A Texto da Alternativa A
          </TextoAlternativa>
        </ContainerAlternativa>
        <ContainerAlternativa>
          <BotaoAlternativa>B)</BotaoAlternativa>
          <TextoAlternativa>
            Texto da Alternativa B Texto dB BlternBtivB B Texto dB BlternBtivB B
            xTexto dB BlternBtivB B Texto dB BlternBtivB B Texto dB BlternBtivB
            B yTexto dB BlternBtivB B Texto dB BlternBtivB B
          </TextoAlternativa>
        </ContainerAlternativa>
        <ContainerAlternativa>
          <BotaoAlternativa>C)</BotaoAlternativa>
          <TextoAlternativa>
            Texto da Alternativa C Texto dC ClternCtivC C Texto dC ClternCtivC C
            xTexto dC ClternCtivC C Texto dC ClternCtivC C Texto dC ClternCtivC
            C yTexto dC ClternCtivC C Texto dC ClternCtivC C
          </TextoAlternativa>
        </ContainerAlternativa>
        <ContainerAlternativa>
          <BotaoAlternativa>D)</BotaoAlternativa>
          <TextoAlternativa>
            Texto da Alternativa D Texto dD DlternDtivD D Texto dD DlternDtivD D
            xTexto dD DlternDtivD D Texto dD DlternDtivD D Texto dD DlternDtivD
            D yTexto dD DlternDtivD D Texto dD DlternDtivD D
          </TextoAlternativa>
        </ContainerAlternativa>
        <BordaInferior />
      </ContainerApp>
    );
  }
}

Main.navigationOptions = {
  title: 'Regra de Sinais',
};
