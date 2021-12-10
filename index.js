// f84af0c4420f12f8fa420303c1f79e07; clé api
// Création de la requête

let villeDom = document.getElementById("ville");
let tempDom = document.getElementById("temperature_label");
let btn = document.getElementById("changer");

btn.addEventListener("click", () => {
  ville = prompt("Où souhaitez-vous vous téléporter ?");
  recevoirVille(ville);
  console.log(ville);
});

recevoirVille("bangkok");
// recevoirVille("Londres");
function recevoirVille(ville) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ville +
    "&appid=f84af0c4420f12f8fa420303c1f79e07&units=metric";
  let requete = new XMLHttpRequest();
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let temperature = reponse.main.temp;
        let ville = reponse.name;
        // console.log(ville);
        // console.log(temperature);
        villeDom.textContent = ville;
        tempDom.textContent = temperature;
      } else {
        alert("Un problème est intervenu, merci de revenir ultérieurement");
      }
    }
  };
}

// selectionner :  ville, température et btn
