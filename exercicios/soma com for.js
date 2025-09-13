function somaAteN(n) {
  let soma = 0;

  for (let i = 1; i <= n; i++) {
    soma += i; 
  }

  return soma;
}

console.log(somaAteN(4));  // 10 (1+2+3+4)
console.log(somaAteN(15)); // 120 (1+2+3+...+15)
