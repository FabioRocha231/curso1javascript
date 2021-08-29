function geraRelatorios(array) {
  let contAprovados = 0;
  let contReprovados = 0;
  for (const nota of array) {
    if (nota >= 7) {
      contAprovados += 1;
    } else {
      contReprovados += 1;
    }
  }
  return `Aprovados ${contAprovados}. Reprovados ${contReprovados}`;
}

console.log(
  geraRelatorios([4, 5, 12, 43, 4, 12, 43, 564, 66, 7, 5, 4, 3, 3, 2, 1])
);
