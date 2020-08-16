// Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade
// "Javascript" e retorna um booleano true/false caso exista ou não.

function temHabilidade(skills) {
  if (skills.includes("Javascript")) {
    console.log(true);
  } else {
    console.log(false);
  }
}

var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
