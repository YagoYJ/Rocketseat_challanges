// Mostrar a lista dentro do DOM

var nomes = ["Diego", "Gabriel", "Lucas"];

var ul = document.querySelector("ul");

nomes.map((nome) => {
  var li = document.createElement("li");
  var liText = document.createTextNode(nome);

  li.appendChild(liText);
  ul.appendChild(li);
});
