function getListaCapitulos() {
  const ret = [];
  ret.push({ key: 0, name: `1. Regra de Sinais` });
  ret.push({ key: 1, name: `2. Regra` });
  ret.push({ key: 2, name: `3. Expressões` });
  ret.push({ key: 3, name: `4. Expressões` });
  ret.push({ key: 4, name: `5. Expressões` });
  return ret;
}

function getQtdeCapitulos() {
  return getCapitulos().length;
}

function getListaAtividades(capitulo) {
  const ret = [];
  const tmp = [];
  if (capitulo === 0) {
    tmp.push(`Adição e Subtração`);
    tmp.push(`Parênteses com Adição e Subtração`);
    tmp.push(`Multiplicação e Divisão`);
    tmp.push(`Parênteses Multiplicação e Divisão`);
  }
  if (capitulo === 1) {
    tmp.push(`Adição do 2, 3 e 4`);
    tmp.push(`Adição do 3, 4 e 5`);
    tmp.push(`Adição do 4, 5 e 6`);
  }
  if (capitulo === 2) {
    tmp.push(`Adição e Subtração 2, 3 e 4`);
    tmp.push(`Adição e Subtração do 3, 4 e 5`);
    tmp.push(`Adição e Subtração do 4, 5 e 6`);
  }
  for (let i = 0; i < tmp.length; i++) {
    ret.push({ key: i, name: `${i + 1}. ${tmp[i]}` });
  }
  if (ret.length < 1) ret.push({ key: 0, name: `Não disponível` });

  return ret;
}

function getQtdeAtividades() {
  return getAtividades().length;
}

export { getListaCapitulos, getListaAtividades };
