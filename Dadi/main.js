const max = 6;
const min = 1;

//* Giocatore 1 lancia il dado
const gamerOneValue = Math.floor(Math.random() * max) + min;
alert("il Giocatore 1 ha ottenuto " + gamerOneValue);

//* Giocatore 2 lancia il dado
const gamerTwoValue = Math.floor(Math.random() * max) + min;
alert("il Giocatore 2 ha ottenuto " + gamerTwoValue);

//* SE Giocatore 1 ha un numero superiore di giocatore 2 vince
if (gamerOneValue > gamerTwoValue) {
  alert("Giocatore 1 Win");
}
//* ALTRIMENTI SE Giocatore 2 ha un numero superiore di giocatore 1 vince
else if (gamerTwoValue > gamerOneValue) {
  alert("Giocatore 2 Win");
}
//* ALTRIMENTI essendo uguali abbiamo un pareggio
else {
  alert("Pareggio");
}
