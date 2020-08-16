// Adicionar nomes nas listas

var nomes = ["Diego", "Gabriel", "Lucas"];

var ul = document.querySelector("ul");

nomes.map((nome) => {
  let li = document.createElement("li");
  let liText = document.createTextNode(nome);

  li.appendChild(liText);
  ul.appendChild(li);
});

function adicionar() {
  let nome = document.getElementsByName("nome");
  let li = document.createElement("li");
  let liText = document.createTextNode(nome[0].value);

  li.appendChild(liText);
  ul.appendChild(li);
  nome[0].value = "";
}
