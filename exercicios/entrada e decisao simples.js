// Entrada e decisão simples
function verificarNumero(numero) {
  if (numero > 0) {
    return "O número é positivo.";
  } else if (numero < 0) {
    return "O número é negativo.";
  } else {
    return "O número é zero.";
  }
}

console.log(verificarNumero(36));  // Saída: O número é positivo.
console.log(verificarNumero(-7));  // Saída: O número é negativo.
console.log(verificarNumero(0));   // Saída: O número é zero.