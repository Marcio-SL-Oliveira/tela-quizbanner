import { sorteiaUmNumero, sorteiaNumeros } from '../../utils/sorteio';
import questaoEmBranco from '../../utils/questoesEmBranco';
import { tipo } from '../../utils/utils';
import {
  sinalDoNumero,
  sinalDaOperacao,
  sorteiaFalsosZ,
} from '../../utils/regraDeSinais';

export default function regraDeSinais(atividade = 0) {
  const mAtividade = atividade + 1;
  const ret = questaoEmBranco();
  let f;
  const vMin = [0, 11, 2];
  const vMax = [0, 29, 11];
  const s1 = sorteiaNumeros(vMin[mAtividade], vMax[mAtividade], 10);
  const s2 = sorteiaNumeros(vMin[mAtividade], vMax[mAtividade], 10);
  const sorteio = [s1, s2];

  const sinais = [[1, -1], [1, 1], [-1, 1], [-1, -1]];
  const maxSinal = 3;
  let wSinal = sorteiaUmNumero(0, maxSinal);
  let sinalOp;

  for (let i = 0; i < 10; i++) {
    wSinal = tipo(wSinal, 0, maxSinal);
    sinalOp = i % 2 === 0 ? 1 : -1;
    sorteio[0][i] *= sinais[wSinal][0];
    if (mAtividade === 1) {
      // Adição e Subtração
      if (sorteio[0][i] === sorteio[1][i]) sorteio[1][i] += 1;
      sorteio[1][i] *= sinalOp * sinais[wSinal][1];
    }

    if (mAtividade === 2) {
      // Multiplicação e Divisão
      sorteio[1][i] *= sinais[wSinal][0] * sinais[wSinal][1];
      if (sinalOp === -1) {
        // Divisão
        sorteio[0][i] *= Math.abs(sorteio[1][i]);
        if (Math.abs(sorteio[0][i]) < Math.abs(sorteio[1][i])) {
          const tmp = sorteio[0][i];
          sorteio[0][i] = sorteio[1][i];
          sorteio[1][i] = tmp;
        }
      }
    }

    ret[i].questao00 = 'Observe a operação de números inteiros:';
    ret[i].questao01 = `${sinalDoNumero(sorteio[0][i]) +
      Math.abs(sorteio[0][i])} ${sinalDaOperacao(
      sinalOp,
      mAtividade
    )} (${sinalDoNumero(sorteio[1][i])}${Math.abs(sorteio[1][i])})`;

    ret[i].questao02 = 'O resultado é';
    const num = [sorteio[0][i], sorteio[1][i]];
    f = sorteiaFalsosZ(num, sinalOp, mAtividade);
    [ret[i].opcaoA, ret[i].opcaoB, ret[i].opcaoC, ret[i].opcaoD] = f;
  }
  return ret;
}
