// Cliccando su un pulsante, viene avviato un cronometro.
// Per fermare il cronometro, bisogna cliccare su un secondo pulsante.

// All'inizio partiamo da 0
// al click su go-btn parte il cronometro (setInternval) quindi ogni secondo incremento di 1
// al click su stop-btn il cronometro si ferma (clearInterval)

const cronoText = document.querySelector('#crono-text');
const goBtn = document.querySelector('#go-btn');
const stopBtn = document.querySelector('#stop-btn');
let seconds = 0;
let cronoClock;

goBtn.addEventListener('click', function() {
    cronoClock = setInterval(function() {
        seconds++;
        cronoText.innerHTML = seconds;
    }, 1000);
});

stopBtn.addEventListener('click', function() {
    clearInterval(cronoClock);
});
