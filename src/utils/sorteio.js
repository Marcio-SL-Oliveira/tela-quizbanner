const sorteiaUmNumero = (valorMin = 0, valorMax = 10) => {
  let v = valorMin + Math.random() * (valorMax - valorMin + 1);
  v = Math.floor(Math.random() * (valorMax - valorMin + 1)) + valorMin;
  return v;
};

const sorteiaNumeros = (valorMin, valorMax, qtdeSorteada) => {
  const arrayList = [qtdeSorteada];
  if (valorMin > valorMax || valorMax - valorMin + 1 < qtdeSorteada)
    return null;

  for (let i = 0; i < qtdeSorteada; i++) {
    arrayList[i] = sorteiaUmNumero(valorMin, valorMax);
    for (let j = 0; j < i; j++) {
      if (arrayList[j] === arrayList[i]) {
        i--;
        break;
      }
    }
  }
  return arrayList;
};

const sorteiaFalsos = (valorMin, valorMax, qtdeSorteada, menos) => {
  const arrayList = [qtdeSorteada];
  if (valorMin > valorMax || valorMax - valorMin + 1 < qtdeSorteada)
    return null;

  arrayList[0] = menos;
  for (let i = 1; i < qtdeSorteada; i++) {
    arrayList[i] = sorteiaUmNumero(valorMin, valorMax);
    for (let j = 0; j < i; j++) {
      if (arrayList[j] === arrayList[i]) {
        i--;
        break;
      }
    }
  }
  return arrayList;
};

const multiplosDez = array => array.map(item => item * 10);

export { sorteiaUmNumero, sorteiaNumeros, sorteiaFalsos, multiplosDez };
