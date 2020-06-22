// Nella pagina c'è un bottone#lanciaMoneta.
// Al click su un bottone, il programma genera un numero casuale (tra 0 e 9).
// Se il numero è pari mostra un img con la testa della moneta.
// Se è dispari mostra un'altra img con la croce della moneta.

var btn = document.getElementById('lanciaMoneta');

console.log(btn);

btn.addEventListener('click', function() {

  var scommessa = prompt("Scommetti\ntesta o croce?");

  console.log(scommessa);

  if (scommessa == "testa" || scommessa == "croce") {

    var min = 0;
    var max = 9;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    var testa = document.getElementById('testa');
    var croce = document.getElementById('croce');
    var result = document.getElementById('result');
    var resultScommessa = document.getElementById('resultScommessa');

    console.log(random);

    testa.className = "hidden";
    croce.className = "hidden";

    // se è dispari
    if (random % 2) {
      result.innerHTML = "E' uscito croce";
      croce.className = "show";
      if (scommessa == "croce") {
        resultScommessa.innerHTML = "Hai vinto!";
      } else {
        resultScommessa.innerHTML = "Hai perso, mi dispiace.";
      }
    } else {
      result.innerHTML = "E' uscito testa";
      testa.className = "show";
      if (scommessa == "testa") {
        resultScommessa.innerHTML = "Hai vinto!";
      } else {
        resultScommessa.innerHTML = "Hai perso, mi dispiace.";
      }
    }
    // chiude pari o dispari

  }
  else {
    alert("Attenzione inserisci solo testa o croce");
  }

});
