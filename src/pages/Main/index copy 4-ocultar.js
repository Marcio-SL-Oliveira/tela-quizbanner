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
  ListaCapAti,
  FlatTestes,
  FlatTestesButton,
  FlatTestesItem,
} from './styles';

import getQuestao from '../../questoes/tabuada/tab00';
import {
  getListaCapitulos,
  getListaAtividades,
  getQtdeCapitulos,
  getQtdeAtividades,
} from '../../capitulos/capitulos';
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
  /* Busca Lista de Capítulos e Atividades
   Define Quantidade Máxima de Capítulos e Atividades,
   Define o Capítulo e Atividade Atual
   Verificar se é melhor salvar em disco e depois buscar em disco no formato JSON
  */
  const [listaCapitulos] = useState(getListaCapitulos);
  const [indexCapitulo, setIndexCapitulo] = useState(0);
  const [maximoCapitulos, setMaximoCapitulos] = useState(getQtdeCapitulos);
  const [txtCapitulo, setTxtCapitulo] = useState('Cap. 1');
  const [clickCapitulo, setClickCapitulo] = useState(false);

  const [atividades, setAtividades] = useState(getListaAtividades);
  const [minhaAtividade, setMinhaAtividade] = useState(0);
  const [maxAtividade, setMaxAtividade] = useState(getQtdeAtividades);
  const [questoes, setQuestoes] = useState(getQuestao);
  const [meuIndex, setMeuIndex] = useState(0);
  const [clickAtividade, setClickAtividade] = useState(false);
  const [txtAtividade, setTxtAtividade] = useState('Ati. 1');
  function clicouIndex(alternativa) {
    setMeuIndex(3);
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

  function clicouCapitulo() {
    setClickCapitulo(!clickCapitulo);
    setNextView(true);
  }
  function clicouListaCapitulos(sequencia) {
    setTxtCapitulo(`Cap. ${sequencia + 1}`);
    setClickCapitulo(false);
  }
  function clicouAtividade() {
    setClickAtividade(!clickAtividade);
    setNextView(false);
  }
  function mudouCapitulo() {
    setClickCapitulo(!clickCapitulo);
    setNextView(true);
  }
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
      {!clickCapitulo && (
        <ContainerAcertosErros>
          {placar.map(value => (
            <AcertosErrosOX key={value.id}>
              <Text>
                {value.placarAE < 0 ? '' : controler.acertoErro[value.placarAE]}
              </Text>
            </AcertosErrosOX>
          ))}
        </ContainerAcertosErros>
      )}

      {!clickCapitulo && (
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
            <ButtonTop onPress={() => clicouCapitulo()}>
              <TextoButtonTop>{txtCapitulo}</TextoButtonTop>
            </ButtonTop>
            <ButtonTop onPress={() => clicouAtividade()}>
              <TextoButtonTop>{txtAtividade}</TextoButtonTop>
            </ButtonTop>
            {nextView && (
              <ButtonTop>
                <TextoButtonTop>Next</TextoButtonTop>
              </ButtonTop>
            )}
          </ContainerButtonsTop>
        </ContainerMaosPlacarCapituloAtividade>
      )}

      {!clickCapitulo && (
        <ContainerTextoQuestoes>
          <TextoQuestoes>{questoes[0].questao00}</TextoQuestoes>
          <TextoQuestoes>{questoes[0].questao01}</TextoQuestoes>
          <TextoQuestoes>{questoes[0].questao02}</TextoQuestoes>
        </ContainerTextoQuestoes>
      )}

      {!clickCapitulo && (
        <ContainerAlternativa>
          <ButtonAlternativa onPress={() => clicouAlternativa('a')}>
            <TextoButtonAlternativa>A)</TextoButtonAlternativa>
          </ButtonAlternativa>
          <TextoAlternativa>{questoes[0].opcaoA} </TextoAlternativa>
        </ContainerAlternativa>
      )}

      {!clickCapitulo && (
        <ContainerAlternativa>
          <ButtonAlternativa onPress={() => clicouAlternativa('b')}>
            <TextoButtonAlternativa>B)</TextoButtonAlternativa>
          </ButtonAlternativa>
          <TextoAlternativa>{questoes[0].opcaoB} </TextoAlternativa>
        </ContainerAlternativa>
      )}

      {!clickCapitulo && (
        <ContainerAlternativa>
          <ButtonAlternativa onPress={() => clicouAlternativa('c')}>
            <TextoButtonAlternativa>C)</TextoButtonAlternativa>
          </ButtonAlternativa>
          <TextoAlternativa>{questoes[0].opcaoC} </TextoAlternativa>
        </ContainerAlternativa>
      )}

      {!clickCapitulo && (
        <ContainerAlternativa>
          <ButtonAlternativa onPress={() => clicouAlternativa('d')}>
            <TextoButtonAlternativa>D)</TextoButtonAlternativa>
          </ButtonAlternativa>
          <TextoAlternativa>{questoes[0].opcaoD} </TextoAlternativa>
        </ContainerAlternativa>
      )}
      {clickCapitulo && (
        <FlatTestes
          data={listaCapitulos}
          keyExtractor={cap => cap.key}
          renderItem={({ item }) => (
            <FlatTestesButton onPress={() => clicouListaCapitulos(item.key)}>
              <FlatTestesItem>{item.name}</FlatTestesItem>
            </FlatTestesButton>
          )}
        />
      )}

      <BordaInferior />
    </ContainerApp>
  );
}
