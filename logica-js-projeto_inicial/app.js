alert("Boas vindas ao jogo do número secreto!");

let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

  if (chute == numeroSecreto) {
    alert(
      `Isso ai! Você acertou o número secreto (${numeroSecreto}) com ${tentativas} ${
        tentativas == 1 ? "tentativa" : "tentativas"
      }`
    );
  } else {
    if (chute > numeroSecreto) {
      alert(`O numero secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}
