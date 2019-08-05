const questaoEmBranco = () => {
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
      opcaoV: ``,
      dicas00: ``,
      dicas01: ``,
      dicas02: ``,
    };
    questao.push(tmp);
  }
  return questao;
};

const placarInicial = () => {
  const ret = [];
  for (let i = 0; i < 10; i++) {
    const tmp = { id: i, placarAE: -1 };
    ret.push(tmp);
  }
  return ret;
};

const novoPlacar = (placarAtual, index, acertoErro) => {
  placarAtual[index].placarAE = acertoErro;
  return placarAtual;
};

export { questaoEmBranco, placarInicial, novoPlacar };
