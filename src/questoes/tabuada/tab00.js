export default function getQuestoes() {
  const questao = [];
  for (let i = 1; i < 10; i++) {
    const tmp = {
      id: i,
      questao00: `0${i} - Primeiro Texto`,
      questao01: `0${i} - Segundo Texto`,
      questao02: `0${i} - Terceiro Texto`,
      opcaoA: `0${i} - Texto A`,
      opcaoB: `0${i} - Texto B`,
      opcaoC: `0${i} - Texto C`,
      opcaoD: `0${i} - Texto D`,
      opcaoE: `0${i} - Texto E`,
      dicas00: `0${i} - Minha Primeira Dica`,
      dicas01: `0${i} - Minha Segunda Dica`,
    };
    questao.push(tmp);
  }
  return questao;
}
