const extensoCardinais = (valor = 0, genero = 'o') => {
  let v = valor;
  let maisMil = '';
  if (v > 1000) {
    const vm = v / 1000;
    maisMil = `${extensoCardinais(vm, null)} mil`;
    v -= vm * 1000;
    if (v === 0) return maisMil;
    maisMil += ' e ';
  }

  const n = [
    'zero',
    'um',
    'dois',
    'três',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove',
    'dez',
    'onze',
    'doze',
    'treze',
    'quartorze',
    'quinze',
    'dezesseis',
    'dezessete',
    'dezoito',
    'dezenove',
    'vinte',
  ];
  if (genero === 'a') {
    n[1] = 'uma';
    n[2] = 'duas';
  }
  if (v < 21) return maisMil + n[v];
  const d = [
    '',
    'dez',
    'vinte',
    'trinta',
    'quarenta',
    'cinquenta',
    'sessenta',
    'setenta',
    'oitenta',
    'noventa',
    'cem',
  ];
  if (v < 101 && v % 10 === 0) return maisMil + d[v / 10];
  const c = [
    '',
    'cento',
    'duzent',
    'trezent',
    'quatrocent',
    'quinhent',
    'seiscent',
    'setecent',
    'oitocent',
    'novecent',
    'mil',
  ];
  for (let i = 2; i < 10; i++) {
    c[i] += genero === 'a' ? 'as' : 'os';
    // if (genero === 'a') c[i] += 'as';
    // else c[i] += 'os';
  }
  if (v < 1001 && v % 100 === 0) return maisMil + c[v / 100];

  let ru = v % 10; // varia de 1 a 9
  if (v < 100) {
    const de = (v - ru) / 10;
    return `${maisMil + d[de]} e ${n[ru]}`;
  }
  // Acima de 100, menos centenas exatas
  let r = v % 100;
  const rc = (v - r) / 100;
  const txtC = `${c[rc]} e `;
  if (r < 21) return maisMil + txtC + n[r];

  // Centena indo de dezena em dezena
  if (r % 10 === 0) return maisMil + txtC + d[r / 10];
  ru = r % 10;
  // Centena, dezena e unidades
  r = (r - (r % 10)) / 10; // varia de 1 a 9
  return `${maisMil + txtC + d[r]} e ${n[ru]}`;
};

export { extensoCardinais };
