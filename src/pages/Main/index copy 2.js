import AsyncStorage from '@react-native-community/async-storage';
import React, { useState, useEffect } from 'react';

import {
  ContainerApp,
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
  FlatTestes,
  FlatTestesButton,
  FlatTestesItem,
  ContainerApp1,
} from './styles';

import { PlacarXO } from './placarXO';
import iconPositivo from '../../assets/iconpositivo.png';
import iconNegativo from '../../assets/iconnegativo.png';
import {
  getListaCapitulos,
  getListaAtividades,
} from '../../capitulos/capitulos';
import {
  setPrefIndexCapitulo,
  setPrefIndexAtividade,
} from '../../config/preferencias';

import { obtemQuestao } from './obtemQuestao';

export default function Main() {
  /*  */
  const [listaCapitulos] = useState(getListaCapitulos);
  const [indexCapitulo, setIndexCapitulo] = useState(0);
  const [flagCarregouCapitulo, setFlagCarregouCapitulo] = useState(false);
  const [clickCapitulo, setClickCapitulo] = useState(false);

  const [listaAtividades, setListaAtividades] = useState(getListaAtividades(0));
  const [indexAtividade, setIndexAtividade] = useState(0);
  const [flagCarregouAtividade, setFlagCarregouAtividade] = useState(false);
  const [clickAtividade, setClickAtividade] = useState(false);

  const [questoes, setQuestao] = useState([]);

  // https://www.robinwieruch.de/react-hooks/
  // 03.08.19 https://www.academind.com/learn/react/react-hooks-introduction/
  useEffect(() => {
    async function carregaCapitulo() {
      setFlagCarregouCapitulo(false);
      const result = await AsyncStorage.getItem('CAPITULO');
      setIndexCapitulo(parseInt(result, 10) + 1);
      setFlagCarregouCapitulo(true);
    }
    carregaCapitulo();

    async function carregaAtividade() {
      setFlagCarregouAtividade(false);
      const result = await AsyncStorage.getItem('ATIVIDADE');
      setIndexAtividade(parseInt(result, 10) + 1);
      setFlagCarregouAtividade(true);
    }
    carregaAtividade();

    async function carregaQuestoes() {
      if (indexCapitulo !== 0 && indexAtividade !== 0) {
        const xx = await obtemQuestao(indexCapitulo - 1, indexAtividade - 1);
        setQuestao(xx);
      }
    }
    carregaQuestoes();
  }, [indexAtividade]);

  const [index, setIndex] = useState(0);
  const [nextView] = useState(false);
  const [placarPositivo, setPlacarPositivo] = useState(0);
  const [placarNegativo, setPlacarNegativo] = useState(0);

  function clicouCapitulo() {
    setClickCapitulo(!clickCapitulo);
    // setNextView(true);
  }

  function clicouListaCapitulos(novoCapitulo) {
    setIndexCapitulo(novoCapitulo + 1);
    setClickCapitulo(false);
    setListaAtividades(getListaAtividades(novoCapitulo));
    setPrefIndexCapitulo(novoCapitulo);
  }

  function clicouAtividade() {
    setClickAtividade(!clickAtividade);
    // setNextView(false);
  }

  function clicouListaAtividades(novaAtividade) {
    setIndexAtividade(novaAtividade + 1);
    setClickAtividade(false);
    setPrefIndexAtividade(novaAtividade);
  }

  function clicouAlternativa(alternativa) {
    console.log(index, questoes[index].opcaoV);
    if (alternativa === questoes[index].opcaoV) {
      setPlacarPositivo(placarPositivo + 1);
    } else {
      setPlacarNegativo(placarNegativo + 1);
    }
    setIndex(index >= 9 ? 0 : index + 1);
  }

  if (!flagCarregouCapitulo || !flagCarregouAtividade) {
    return (
      <ContainerApp>
        <TextoQuestoes>CARREGANDO!</TextoQuestoes>
      </ContainerApp>
    );
  }

  if (clickCapitulo) {
    return (
      <ContainerApp>
        <FlatTestes
          data={listaCapitulos}
          keyExtractor={lista => `${lista.key}`}
          renderItem={({ item }) => (
            <FlatTestesButton onPress={() => clicouListaCapitulos(item.key)}>
              <FlatTestesItem>{item.name}</FlatTestesItem>
            </FlatTestesButton>
          )}
        />
        <BordaInferior />
      </ContainerApp>
    );
  }
  if (clickAtividade) {
    return (
      <ContainerApp>
        <FlatTestes
          data={listaAtividades}
          keyExtractor={lista => `${lista.key}`}
          renderItem={({ item }) => (
            <FlatTestesButton onPress={() => clicouListaAtividades(item.key)}>
              <FlatTestesItem>{item.name}</FlatTestesItem>
            </FlatTestesButton>
          )}
        />
        <BordaInferior />
      </ContainerApp>
    );
  }
  return (
    <ContainerApp>
      <ContainerApp1>
        <PlacarXO x="a" />
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
              <TextoButtonTop>{`Cap. ${indexCapitulo}`}</TextoButtonTop>
            </ButtonTop>
            <ButtonTop onPress={() => clicouAtividade()}>
              <TextoButtonTop>{`Ati. ${indexAtividade}`}</TextoButtonTop>
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
      <BordaInferior />
    </ContainerApp>
  );
}
