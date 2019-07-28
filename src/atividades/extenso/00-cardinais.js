import { sorteiaNumeros, sorteiaFalsos } from '../../utils/sorteio';
import { extensoCardinais } from '../../utils/extenso';

function questaoEmBranco() {
  const questao = [];
  for (let i = 0; i < 10; i++) {
    const tmp = {
      id: i,
      questao00: ``,
      questao01: ``,
      questao02: ``,
      opcaoA: ``,
      opcaoB: ``,
      opcaoC: ``,
      opcaoD: ``,
      opcaoE: ``,
      dicas00: ``,
      dicas01: ``,
    };
    questao.push(tmp);
  }
  return questao;
}

export default function a00Cardinais() {
  const sorteio = sorteiaNumeros(0, 11, 10);
  const ret = questaoEmBranco();
  let f;
  for (let i = 0; i < 10; i++) {
    ret[i].questao00 = 'Observe o seguinte número cardinal:';
    ret[i].questao01 = sorteio[i];
    ret[i].questao02 = 'A sua escrita por extenso é:';
    f = sorteiaFalsos(0, 11, 4, sorteio[i]);
    ret[i].opcaoA = extensoCardinais(f[0]);
    ret[i].opcaoB = extensoCardinais(f[1]);
    ret[i].opcaoC = extensoCardinais(f[2]);
    ret[i].opcaoD = extensoCardinais(f[3]);
  }
  return ret;
}
