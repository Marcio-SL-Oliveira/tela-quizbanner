import React, { useState, useEffect } from 'react';
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
  ButtonAlternativa,
  TextoButtonAlternativa,
  TextoAlternativa,
  BordaInferior,
} from './styles';
// import Styles from './styles.js';
// import { Container } from './styles';
import iconPositivo from '../../assets/iconpositivo.png';
import iconNegativo from '../../assets/iconnegativo.png';

export default function Main() {
  const [placar, setPlacar] = useState([
    { id: 0, placarAE: -1 },
    { id: 1, placarAE: -1 },
    { id: 2, placarAE: -1 },
    { id: 3, placarAE: -1 },
    { id: 4, placarAE: -1 },
    { id: 5, placarAE: 0 },
    { id: 6, placarAE: 1 },
    { id: 7, placarAE: 0 },
    { id: 8, placarAE: 1 },
    { id: 9, placarAE: -1 },
  ]);
  const [controler, setControler] = useState({
    id: 0,
    index: 0,
    acertoErro: ['X', 'O'],
    buttonCap: false,
    placarPositivo: 7,
    placarNegativo: 3,
  });
  const [questoes, setQuestoes] = useState([
    {
      id: 0,
      questao00: 'Primeiro Texto X Y Z',
      questao01: 'Segundo Texto',
      questao02: 'Terceiro Texto',
      opcaoA: 'Texto AAAA',
      opcaoB: 'Texto BBB',
      opcaoC: 'Texto C',
      opcaoD: 'Texto D',
      opcaoE: 'Texto E',
      dicas00: 'Minha Primeira Dica',
      dicas01: 'Minha Segunda Dica',
    },
  ]);
  const [meuIndex, setMeuIndex] = useState(0);
  function clicouIndex(alternativa) {
    console.log('1. clicouIndex', meuIndex, alternativa);
    setMeuIndex(3);
    console.log('2. clicouIndex', meuIndex, alternativa);
    controler.placarPositivo += 9;
    setControler(controler);
  }
  useEffect(() => {
    console.log('useEffect index', controler.index);
  }, [controler]);
  const local = { index: 0, placarPositivo: 0, placarNegativo: 0 };
  const [index, setIndex] = useState(0);
  const [nextView, setNextView] = useState(false);
  const [placarPositivo, setPlacarPositivo] = useState(0);
  const [placarNegativo, setPlacarNegativo] = useState(0);
  function clicouAlternativa(alternativa) {
    local.index = index + 1;
    if (alternativa === 'a') {
      local.placarPositivo = placarPositivo + 1;
      setPlacarPositivo(local.placarPositivo);
    }
    if (alternativa === 'b') {
      setPlacarPositivo(placarPositivo - 1);
    }
    if (alternativa === 'c') {
      setPlacarNegativo(placarNegativo + 1);
    }
    if (alternativa === 'd') {
      setPlacarNegativo(placarNegativo - 1);
    }
  }

  return (
    <ContainerApp>
      <ContainerAcertosErros>
        {placar.map(value => (
          <AcertosErrosOX key={value.id}>
            <Text>
              {value.placarAE < 0 ? '' : controler.acertoErro[value.placarAE]}
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
            {placarPositivo}
          </TextoPlacarPositivoNegativo>
          <TextoPlacarPositivoNegativo>
            {placarNegativo}
          </TextoPlacarPositivoNegativo>
        </ContainerPlacar>

        <ContainerButtonsTop>
          <ButtonTop onPress={() => setNextView(true)}>
            <TextoButtonTop>Cap. 21</TextoButtonTop>
          </ButtonTop>
          <ButtonTop onPress={() => setNextView(false)}>
            <TextoButtonTop>Ati. 4</TextoButtonTop>
          </ButtonTop>
          {nextView && (
            <ButtonTop>
              <TextoButtonTop>Next</TextoButtonTop>
            </ButtonTop>
          )}
        </ContainerButtonsTop>
      </ContainerMaosPlacarCapituloAtividade>

      <ContainerTextoQuestoes>
        <TextoQuestoes>{questoes[0].questao00}</TextoQuestoes>
        <TextoQuestoes>{questoes[0].questao01}</TextoQuestoes>
        <TextoQuestoes>{questoes[0].questao02}</TextoQuestoes>
      </ContainerTextoQuestoes>

      <ContainerAlternativa>
        <ButtonAlternativa onPress={() => clicouAlternativa('a')}>
          <TextoButtonAlternativa>A)</TextoButtonAlternativa>
        </ButtonAlternativa>
        <TextoAlternativa>{questoes[0].opcaoA} </TextoAlternativa>
      </ContainerAlternativa>
      <ContainerAlternativa>
        <ButtonAlternativa onPress={() => clicouAlternativa('b')}>
          <TextoButtonAlternativa>B)</TextoButtonAlternativa>
        </ButtonAlternativa>
        <TextoAlternativa>{questoes[0].opcaoB} </TextoAlternativa>
      </ContainerAlternativa>
      <ContainerAlternativa>
        <ButtonAlternativa onPress={() => clicouAlternativa('c')}>
          <TextoButtonAlternativa>C)</TextoButtonAlternativa>
        </ButtonAlternativa>
        <TextoAlternativa>{questoes[0].opcaoC} </TextoAlternativa>
      </ContainerAlternativa>
      <ContainerAlternativa>
        <ButtonAlternativa onPress={() => clicouAlternativa('d')}>
          <TextoButtonAlternativa>D)</TextoButtonAlternativa>
        </ButtonAlternativa>
        <TextoAlternativa>{questoes[0].opcaoD} </TextoAlternativa>
      </ContainerAlternativa>
      <BordaInferior />
    </ContainerApp>
  );
}
