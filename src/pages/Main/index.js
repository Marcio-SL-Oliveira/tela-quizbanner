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
  ButtonAlternativa,
  TextoButtonAlternativa,
  TextoAlternativa,
  BordaInferior,
  ListaCapAti,
  FlatTestes,
  FlatTestesButton,
  FlatTestesItem,
  ContainerApp1,
} from './styles';

import getQuestao from '../../atividades/extenso/00-cardinais';
import {
  getListaCapitulos,
  getListaAtividades,
} from '../../capitulos/capitulos';
// import Styles from './styles.js';
// import { Container } from './styles';
import iconPositivo from '../../assets/iconpositivo.png';
import iconNegativo from '../../assets/iconnegativo.png';

export default function Main() {
  const [placar] = useState([
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
  const [controler] = useState({ acertoErro: ['X', 'O'] });
  /* Busca Lista de Capítulos e Atividades
   Define Quantidade Máxima de Capítulos e Atividades,
   Define o Capítulo e Atividade Atual
   Verificar se é melhor salvar em disco e depois buscar em disco no formato JSON
  */
  const [mostraLista, setMostraLista] = useState(false);
  const [listaCapitulos] = useState(getListaCapitulos);
  const [txtCapitulo, setTxtCapitulo] = useState('Cap. 1');
  const [clickCapitulo, setClickCapitulo] = useState(false);

  const [listaAtividades, setListaAtividades] = useState(getListaAtividades(0));

  const [questoes, setQuestoes] = useState(getQuestao);
  const [clickAtividade, setClickAtividade] = useState(false);
  const [txtAtividade, setTxtAtividade] = useState('Ati. 1');
  const [index, setIndex] = useState(0);
  const [nextView, setNextView] = useState(false);
  const [placarPositivo, setPlacarPositivo] = useState(0);
  const [placarNegativo, setPlacarNegativo] = useState(0);

  function clicouCapitulo() {
    setClickCapitulo(!clickCapitulo);
    setMostraLista(true);
    setNextView(true);
  }

  function clicouListaCapitulos(novoCapitulo) {
    setTxtCapitulo(`Cap. ${novoCapitulo + 1}`);
    setClickCapitulo(false);
    setMostraLista(false);
    setListaAtividades(getListaAtividades(novoCapitulo));
  }

  function clicouAtividade() {
    setClickAtividade(!clickAtividade);
    setMostraLista(true);
    setNextView(false);
  }

  function clicouListaAtividades(novaAtividade) {
    setTxtAtividade(`Ati. ${novaAtividade + 1}`);
    setClickAtividade(false);
    setMostraLista(false);
  }

  function clicouAlternativa(alternativa) {
    if (alternativa === 'a') {
      setPlacarPositivo(placarPositivo + 1);
    }
    if (alternativa === 'b') {
      setPlacarNegativo(placarNegativo + 1);
    }
    if (alternativa === 'c') {
      setPlacarNegativo(placarNegativo + 1);
    }
    if (alternativa === 'd') {
      setPlacarNegativo(placarNegativo + 1);
    }
    setIndex(index >= 9 ? 0 : index + 1);
  }

  return (
    <ContainerApp>
      {!mostraLista && (
        <ContainerApp1>
          <ContainerAcertosErros>
            {placar.map(value => (
              <AcertosErrosOX key={value.id}>
                <Text>
                  {value.placarAE < 0
                    ? ''
                    : controler.acertoErro[value.placarAE]}
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

          <ContainerTextoQuestoes>
            <TextoQuestoes>{questoes[index].questao00}</TextoQuestoes>
            <TextoQuestoes>{questoes[index].questao01}</TextoQuestoes>
            <TextoQuestoes>{questoes[index].questao02}</TextoQuestoes>
          </ContainerTextoQuestoes>

          <ContainerAlternativa>
            <ButtonAlternativa onPress={() => clicouAlternativa('a')}>
              <TextoButtonAlternativa>A)</TextoButtonAlternativa>
            </ButtonAlternativa>
            <TextoAlternativa>{questoes[index].opcaoA} </TextoAlternativa>
          </ContainerAlternativa>

          <ContainerAlternativa>
            <ButtonAlternativa onPress={() => clicouAlternativa('b')}>
              <TextoButtonAlternativa>B)</TextoButtonAlternativa>
            </ButtonAlternativa>
            <TextoAlternativa>{questoes[index].opcaoB} </TextoAlternativa>
          </ContainerAlternativa>

          <ContainerAlternativa>
            <ButtonAlternativa onPress={() => clicouAlternativa('c')}>
              <TextoButtonAlternativa>C)</TextoButtonAlternativa>
            </ButtonAlternativa>
            <TextoAlternativa>{questoes[index].opcaoC} </TextoAlternativa>
          </ContainerAlternativa>

          <ContainerAlternativa>
            <ButtonAlternativa onPress={() => clicouAlternativa('d')}>
              <TextoButtonAlternativa>D)</TextoButtonAlternativa>
            </ButtonAlternativa>
            <TextoAlternativa>{questoes[index].opcaoD} </TextoAlternativa>
          </ContainerAlternativa>
        </ContainerApp1>
      )}

      {clickCapitulo && (
        <FlatTestes
          data={listaCapitulos}
          keyExtractor={lista => `${lista.key}`}
          renderItem={({ item }) => (
            <FlatTestesButton onPress={() => clicouListaCapitulos(item.key)}>
              <FlatTestesItem>{item.name}</FlatTestesItem>
            </FlatTestesButton>
          )}
        />
      )}

      {clickAtividade && (
        <FlatTestes
          data={listaAtividades}
          keyExtractor={lista => `${lista.key}`}
          renderItem={({ item }) => (
            <FlatTestesButton onPress={() => clicouListaAtividades(item.key)}>
              <FlatTestesItem>{item.name}</FlatTestesItem>
            </FlatTestesButton>
          )}
        />
      )}

      <BordaInferior />
    </ContainerApp>
  );
}
