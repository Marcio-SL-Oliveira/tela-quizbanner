const tipo = (valorAtual, minimo, maximo) => {
  let novoValor = valorAtual + 1;
  if (novoValor > maximo) novoValor = minimo;
  return novoValor;
};

export { tipo };
