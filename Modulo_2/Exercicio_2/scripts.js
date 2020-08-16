// Alterar a cor do quadrado quando o mouse passa por cima dele

const button = document.getElementById("button");
const container = document.getElementById("container");
const squares = document.querySelectorAll(".square");

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

button.addEventListener("click", () => {
  var square = document.createElement("div");
  square.setAttribute("class", "square");

  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = getRandomColor();
  });

  container.appendChild(square);
});
