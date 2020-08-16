// Exibir dados do array
var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"],
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"],
  },
];

function showUsersInformations(array) {
  array.map((user) => {
    console.log(
      `O ${user.nome} possui as habilidades: ${user.habilidades.join(", ")}`
    );
  });
}

showUsersInformations(usuarios);
