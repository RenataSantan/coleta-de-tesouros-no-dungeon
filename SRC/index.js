const readline = require('readline');

const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o número total de salas: ', (answer) => {
  const totalSalas = parseInt(answer);

  for (let sala = 1; sala <= totalSalas; sala++) {
      const temTesouro = salasComTesouro.includes(sala);
      const temMonstro = salasComMonstro.includes(sala);

      if (temTesouro) {
          console.log("Tesouro na sala " + sala + "!");
      } else if (temMonstro) {
          console.log("Monstro na sala " + sala + "!");
      }
  }

  rl.close();
});