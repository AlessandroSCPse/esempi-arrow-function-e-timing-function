// Il programma chiede all’utente quanti 
// secondi mancano alla cottura della pasta.
// Dopo il tempo indicato, appare un alert().

// Chiedere all'utente i secondi
const userSeconds = parseInt(prompt('Dimmi fra quanti secondi è pronta la pasta'));
console.log(userSeconds);

const userMilliseconds = userSeconds * 1000;
// Dopo x secondi faccio alert con scritto 'Butta la pasta';
setTimeout(function () {
    alert('Butta la pasta');
}, userMilliseconds);
