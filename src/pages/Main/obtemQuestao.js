import getQuestao from '../../atividades/extenso/00-cardinais';
import regraDeSinais from '../../atividades/regraDeSinais/01-regraDeSinais';

const enumera = array => {
  for (let i = 0; i < array.length; i++) {
    array[i].questao00 = `${i + 1}. ${array[i].questao00}`;
    array[i].opcaoV = 'a';
  }
  return array;
};

const obtemQuestao = (capitulo, atividade) => {
  let ret = null;
  console.log(capitulo, atividade);
  if (capitulo === 0) ret = getQuestao(atividade);
  if (capitulo === 1) ret = regraDeSinais(atividade);
  if (ret === null) ret = getQuestao(0);
  if (ret[0] === 1) {
    // Sorteia as questoes
  }
  ret[1] = enumera(ret[1]);
  return ret[1];
};

export { obtemQuestao };
