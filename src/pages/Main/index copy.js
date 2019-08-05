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
import { setPrefIndexCapitulo } from '../../config/preferencias';

import getQuestao from '../../atividades/extenso/00-cardinais';

export default function Main() {
  /*  */
  const [listaCapitulos] = useState(getListaCapitulos);
  const [indexCapitulo, setIndexCapitulo] = useState(0);
  const [flagCarregouCapitulo, setFlagCarregouCapitulo] = useState(false);
  // https://www.robinwieruch.de/react-hooks/
  useEffect(() => {
    async function carregaCapitulo() {
      setFlagCarregouCapitulo(false);
      const result = await AsyncStorage.getItem('CAPITULO');
      setIndexCapitulo(parseInt(result, 10) + 1);
      setFlagCarregouCapitulo(true);
    }
    carregaCapitulo();
  }, []);
  const [clickCapitulo, setClickCapitulo] = useState(false);

  const [listaAtividades, setListaAtividades] = useState(getListaAtividades(0));
  const [txtAtividade, setTxtAtividade] = useState('Ati. 1');
  const [clickAtividade, setClickAtividade] = useState(false);

  const [questoes] = useState(getQuestao);
  const [index, setIndex] = useState(0);
  const [nextView, setNextView] = useState(false);
  const [placarPositivo, setPlacarPositivo] = useState(0);
  const [placarNegativo, setPlacarNegativo] = useState(0);

  function clicouCapitulo() {
    setClickCapitulo(!clickCapitulo);
    setNextView(true);
  }

  function clicouListaCapitulos(novoCapitulo) {
    setIndexCapitulo(novoCapitulo + 1);
    setClickCapitulo(false);
    setListaAtividades(getListaAtividades(novoCapitulo));
    setPrefIndexCapitulo(novoCapitulo);
  }

  function clicouAtividade() {
    setClickAtividade(!clickAtividade);
    setNextView(false);
  }

  async function clicouListaAtividades(novaAtividade) {
    setTxtAtividade(`Xti. ${novaAtividade + 1}`);
    setClickAtividade(false);
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
  if (!flagCarregouCapitulo) {
    return (
      <ContainerApp>
        <TextoQuestoes>CARREGANDO X!</TextoQuestoes>
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
              <TextoButtonTop>{`CapA. ${indexCapitulo}`}</TextoButtonTop>
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
      <BordaInferior />
    </ContainerApp>
  );
}
