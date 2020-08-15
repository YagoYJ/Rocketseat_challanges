// var myPromise = function () {
//   return new Promise(function (resolve, reject) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "");
//     xhr.send(null);

//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText));
//         } else {
//           reject("Error");
//         }
//       }
//     };
//   });
// };

axios
  .get("https://api.github.com/users/YagoYJ")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
