import React, { useState } from 'react';
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

export default function Main() {
  const [placar, setPlacar] = useState([
    { id: 0, placarAE: 1 },
    { id: 1, placarAE: 1 },
    { id: 2, placarAE: 0 },
    { id: 3, placarAE: 1 },
    { id: 4, placarAE: 0 },
    { id: 5, placarAE: 0 },
    { id: 6, placarAE: 1 },
    { id: 7, placarAE: 0 },
    { id: 8, placarAE: 1 },
    { id: 9, placarAE: 0 },
  ]);
  const [tmp, setTmp] = useState({
    id: 0,
    acertoErro: ['X', 'O'],
    buttonCap: false,
    placarPositivo: 8,
    placarNegativo: 2,
  });
  const [questoes, setQuestoes] = useState([
    {
      id: 0,
      questao00: 'Primeiro Texto',
      questao01: 'Segundo Texto',
      questao02: 'Terceiro Texto',
      opcaoA: 'Texto A',
      opcaoB: 'Texto B',
      opcaoC: 'Texto C',
      opcaoD: 'Texto D',
      opcaoE: 'Texto E',
      dicas00: 'Minha Primeira Dica',
      dicas01: 'Minha Segunda Dica',
    },
  ]);

  return (
    <ContainerApp>
      <ContainerAcertosErros>
        {placar.map(value => (
          <AcertosErrosOX key={value.id}>
            <Text>
              {value.placarAE === 0 ? tmp.acertoErro[0] : tmp.acertoErro[1]}
            </Text>
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
            {tmp.placarPositivo}
          </TextoPlacarPositivoNegativo>
          <TextoPlacarPositivoNegativo>
            {tmp.placarNegativo}
          </TextoPlacarPositivoNegativo>
        </ContainerPlacar>

        <ContainerButtonsTop>
          <ButtonTop>
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
        <TextoQuestoes>{questoes[0].questao00}</TextoQuestoes>
        <TextoQuestoes>{questoes[0].questao01}</TextoQuestoes>
        <TextoQuestoes>{questoes[0].questao02}</TextoQuestoes>
      </ContainerTextoQuestoes>

      <ContainerAlternativa>
        <BotaoAlternativa>A)</BotaoAlternativa>
        <TextoAlternativa>{questoes[0].opcaoA} </TextoAlternativa>
      </ContainerAlternativa>
      <ContainerAlternativa>
        <BotaoAlternativa>B)</BotaoAlternativa>
        <TextoAlternativa>{questoes[0].opcaoB} </TextoAlternativa>
      </ContainerAlternativa>
      <ContainerAlternativa>
        <BotaoAlternativa>C)</BotaoAlternativa>
        <TextoAlternativa>{questoes[0].opcaoC} </TextoAlternativa>
      </ContainerAlternativa>
      <ContainerAlternativa>
        <BotaoAlternativa>D)</BotaoAlternativa>
        <TextoAlternativa>{questoes[0].opcaoD} </TextoAlternativa>
      </ContainerAlternativa>
      <BordaInferior />
    </ContainerApp>
  );
}
