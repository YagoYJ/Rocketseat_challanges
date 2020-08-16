const input = document.querySelector("input");
const button = document.querySelector("button");
const h2 = document.querySelector("h2");
const ul = document.querySelector("ul");

var myPromise = function (user) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.github.com/users/${user}/repos`);
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Error");
        }
      }
    };
  });
};

function addRepos() {
  const user = input.value;

  myPromise(user)
    .then((res) => {
      h2.innerText = "";
      ul.style.display = "flex";
      ul.innerHTML = "";

      var userTitle = document.createTextNode(`${user}'s repos:`);
      h2.appendChild(userTitle);
      res.map((repo) => {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.setAttribute("href", repo.clone_url);
        a.setAttribute("target", "_blank");
        var aText = document.createTextNode(repo.name);

        a.appendChild(aText);
        li.appendChild(a);
        ul.appendChild(li);
      });
    })
    .catch(() => {
      console.log("Error");
    });

  input.value = "";
}
