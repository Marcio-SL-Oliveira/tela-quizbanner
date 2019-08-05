import React, { useState } from 'react';
import { Text } from 'react-native';

// import { Container } from './styles';
import { ContainerAcertosErros, AcertosErrosOX } from './styles';

function placarInicial() {
  const ret = [];
  for (let i = 0; i < 10; i++) {
    const tmp = { id: i, placarAE: -1 };
    ret.push(tmp);
  }
  return ret;
}

function PlacarXO(props) {
  console.log('PlacarXO');
  console.table(props);
  const [placar, setPlacar] = useState(placarInicial());
  const [controler] = useState({ acertoErro: ['X', 'O'] });
  return (
    <ContainerAcertosErros>
      {placar.map(value => (
        <AcertosErrosOX key={value.id}>
          <Text>
            {value.placarAE < 0 ? '' : controler.acertoErro[value.placarAE]}
          </Text>
        </AcertosErrosOX>
      ))}
    </ContainerAcertosErros>
  );
}

export { PlacarXO };
