function verifyAge(age) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      return age >= 18 ? resolve() : reject();
    }, 2000);
  });
}

verifyAge(18)
  .then(() => {
    console.log("Maior de idade");
  })
  .catch(() => {
    console.log("Menor de idade");
  });
