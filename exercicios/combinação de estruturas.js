function filtrarPares(numeros) {
  let pares = []; // array para guardar os números pares

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares.push(numeros[i]); // adiciona o número par no array
    }
  }

  return pares;
}

// Exemplo de uso:
console.log(filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Saída: [2, 4, 6, 8, 10]
