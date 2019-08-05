const getListaCapitulos = () => {
  const ret = [];
  ret.push({ key: 0, name: `1. Extenso` });
  ret.push({ key: 1, name: `2. Regra de Sinais` });
  ret.push({ key: 2, name: `3. Expressões` });
  ret.push({ key: 3, name: `4. Expressões` });
  ret.push({ key: 4, name: `5. Expressões` });
  return ret;
};

const getQtdeCapitulos = () => getListaCapitulos().length;

const getListaAtividades = capitulo => {
  const ret = [];
  const tmp = [];
  if (capitulo === 0) {
    tmp.push(`Cardinais de zero a dez`);
    tmp.push(`Cardinais de dez a vinte`);
    tmp.push(`Cardinais de vinte a cinquenta`);
    tmp.push(`Cardinais de quarenta a cem`);
    tmp.push(`Cardinais de 10 a 100, dezenas`);
  }
  if (capitulo === 1) {
    tmp.push(`Adição e Subtração`);
    tmp.push(`Parênteses com Adição e Subtração`);
    tmp.push(`Multiplicação e Divisão`);
    tmp.push(`Parênteses Multiplicação e Divisão`);
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
};

const getQtdeAtividades = capitulo => getListaAtividades(capitulo).length;

export { getListaCapitulos, getListaAtividades };
