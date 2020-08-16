// Mostrar os números pares de um determinado intervalo de numeros
function pares(x, y) {
  var pares = [];
  console.log("Todos os numeros pares:");
  for (let i = x; i <= y; i++) {
    if (i % 2 == 0) {
      pares.push(i);
    }
  }
  console.log(pares);
}
pares(32, 40);
