const TAB = document.getElementById("TOMBOLONE");
for (let i = 1; i <= 76; i++) {
  const cella = document.createElement("div");
  cella.classList.add("cella");
  cella.innerText = i;
  TAB.appendChild(cella);
}
for (let j = 1; j <= 76; i++) {
  const numero = document.createElement("div");
  numero.classList.add("numero");
  cella.innerText = i;
  TAB.appendChild(numero);
}
