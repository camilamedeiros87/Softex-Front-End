function verificaDia(dia) {
  switch (dia) {
    case "segunda":
    case "terca":
    case "quarta":
    case "quinta":
    case "sexta":
      return "Dia útil";

    case "sabado":
    case "domingo":
      return "Fim de semana";

    default:
      return "Dia inválido";
  }
}

// Exemplos de uso:
console.log(verificaDia("terca"));  // Dia útil
console.log(verificaDia("sábado"));  // Fim de semana
console.log(verificaDia("feriado"));  // Dia inválido
