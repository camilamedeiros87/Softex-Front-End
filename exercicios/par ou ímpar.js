function verificarParImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

console.log(verificarParImpar(10)); // Saída: Par
console.log(verificarParImpar(7));  // Saída: Ímpar