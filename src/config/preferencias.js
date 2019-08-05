import AsyncStorage from '@react-native-community/async-storage';

const setPrefIndexCapitulo = async indexCapitulo => {
  try {
    await AsyncStorage.setItem('CAPITULO', `${indexCapitulo}`);
  } catch (error) {
    console.log('Erro ao definir o índice do Capítulo', error.message);
  }
  console.log('setPrefIndexCapitulo', indexCapitulo);
};

const setPrefIndexAtividade = async indexAtividade => {
  try {
    await AsyncStorage.setItem('ATIVIDADE', `${indexAtividade}`);
  } catch (error) {
    console.log('Erro ao definir o índice da Atividade', error.message);
  }
  console.log('setPrefIndexAtividade', indexAtividade);
};

export { setPrefIndexCapitulo, setPrefIndexAtividade };
