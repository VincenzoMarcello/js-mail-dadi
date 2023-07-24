//* email accettate
const emailOk = ["admin@prova.it", "example@prova.it", "live@prova.it"];

//* chiedo all'utente la sua email
const userEmail = prompt("Dimmi la tua email");

//* controllo se l'email è nella lista di email con cui si può accedere tramite un ciclo
let trovata = 0;

for (let i = 0; i < emailOk.length; i++) {
  const email = emailOk[i];
  if (userEmail === email) {
    trovata = 1;
  }
}

//* se sta nella lista allora dico "Accesso consentito"
if (trovata == 1) {
  alert("Accesso consentito");
}
//* altrimenti dico Accesso negato
else {
  alert("Accesso negato");
}
