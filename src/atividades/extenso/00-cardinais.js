import {
  sorteiaNumeros,
  sorteiaFalsos,
  multiplosDez,
} from '../../utils/sorteio';
import { extensoCardinais } from '../../utils/extenso';
import { questaoEmBranco } from '../../utils/questoesEmBranco';

export default function a00Cardinais(tipo = 0) {
  const mTipo = tipo + 1;
  const ret = questaoEmBranco();
  let f;
  const vMin = [0, 0, 10, 20, 40, 1];
  const vMax = [0, 10, 20, 50, 100, 10];
  let sorteio = sorteiaNumeros(vMin[mTipo], vMax[mTipo], 10);
  if (mTipo === 5) sorteio = multiplosDez(sorteio);
  for (let i = 0; i < 10; i++) {
    ret[i].questao00 = 'Observe o seguinte número cardinal:';
    ret[i].questao01 = sorteio[i];
    ret[i].questao02 = 'A sua escrita por extenso é:';
    f = sorteiaFalsos(vMin[mTipo], vMax[mTipo], 4, sorteio[i]);
    ret[i].opcaoA = extensoCardinais(f[0]);
    ret[i].opcaoB = extensoCardinais(f[1]);
    ret[i].opcaoC = extensoCardinais(f[2]);
    ret[i].opcaoD = extensoCardinais(f[3]);
  }
  return [0, ret];
}
