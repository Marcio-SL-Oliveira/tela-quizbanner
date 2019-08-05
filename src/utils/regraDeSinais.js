const sinalDoNumero = numero => (numero < 0 ? '-' : '+');

const sinalDaOperacao = (numero, operacao) => {
  let s = '+';
  if (operacao === 1) {
    if (numero === -1) s = '-';
  }
  if (operacao === 2) {
    if (numero === 1) s = 'x';
    else s = ':';
  }
  return s;
};

const sorteiaFalsosZ = (numero, sinalOp, operacao) => {
  const f = [4];
  let resultado;
  const falso = sinalOp === -1 ? numero[0] + numero[1] : numero[0] - numero[1];
  if (operacao === 1) {
    resultado = sinalOp === 1 ? numero[0] + numero[1] : numero[0] - numero[1];
  } else {
    resultado = sinalOp === 1 ? numero[0] * numero[1] : numero[0] / numero[1];
  }
  f[0] = sinalDoNumero(resultado) + Math.abs(resultado);
  f[1] = sinalDoNumero(resultado * -1) + Math.abs(resultado);
  f[2] = sinalDoNumero(falso) + Math.abs(falso);
  f[3] = sinalDoNumero(falso * -1) + Math.abs(falso);
  return f;
};

export { sinalDoNumero, sinalDaOperacao, sorteiaFalsosZ };
