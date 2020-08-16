// Mostrar um quadrado assim que o botão é clicado

const button = document.getElementById("button");
const container = document.getElementById("container");

button.addEventListener("click", () => {
  var square = document.createElement("div");
  square.setAttribute("class", "square");

  container.appendChild(square);
});
