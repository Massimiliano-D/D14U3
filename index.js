const TAB = document.getElementById("TOMBOLONE");
for (let i = 1; i <= 76; i++) {
  const cella = document.createElement("div");
  cella.classList.add("cella");
  cella.classList.add("all");
  cella.innerText = i;
  TAB.appendChild(cella);
}

let randomIndex = 0;
const estraibot = document.getElementById("estraibot");
estraibot.onclick = function () {
  const arrynum = document.getElementsByClassName("all");
  randomIndex = Math.floor(Math.random() * 76 + 1);
  // console.log(randomIndex);
  // console.log(arrynum);
  for (i = 0; i < arrynum.length; i++) {
    if (randomIndex === parseInt(arrynum[i].innerText)) {
      arrynum[i].classList.add("uscito");
    }
  }
};
