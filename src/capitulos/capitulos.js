function getListaCapitulos() {
  const ret = [];
  ret.push({
    key: 0,
    name: `1. Tabuada Tabuada Tabuada Tabuada Tabuada Tabuada Tabuada x Tabuada`,
  });
  ret.push({ key: 1, name: `2. Tabuadas` });
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
  if (capitulo === 0) {
    ret.push({ key: 0, name: `Adição do 2` });
    ret.push({ key: 1, name: `Adição do 3` });
    ret.push({ key: 2, name: `Adição do 4` });
  }
  if (capitulo === 1) {
    ret.push({ key: 0, name: `Adição do 2, 3 e 4` });
    ret.push({ key: 1, name: `Adição do 3, 4 e 5` });
    ret.push({ key: 2, name: `Adição do 4, 5 e 6` });
  }
  if (capitulo === 2) {
    ret.push({ key: 0, name: `Adição e Subtração 2, 3 e 4` });
    ret.push({ key: 1, name: `Adição e Subtração do 3, 4 e 5` });
    ret.push({ key: 2, name: `Adição e Subtração do 4, 5 e 6` });
  }
  return ret;
}

function getQtdeAtividades() {
  return getAtividades().length;
}

export { getListaCapitulos, getListaAtividades };
