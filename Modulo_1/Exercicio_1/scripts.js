// Desafio: Mostrar os dados do objeto
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP",
};

function showAdressMessage(address) {
  console.log(
    `O usuário mora em ${address.cidade} / ${address.uf}, no bairro ${address.bairro}, na rua "${address.rua}" com o n° ${address.numero}.`
  );
}

showAdressMessage(endereco);
