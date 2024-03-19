// Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"

// partendo a contare da 10
// viene decrementato il numero di 1 ogni secondo
// quando il numero arriva a 0, scriviamo "Buon anno!"

const textContainer = document.querySelector('#text');

let timer = 10;
textContainer.innerHTML = timer;

const clock = setInterval(function() {
    timer--;
    textContainer.innerHTML = timer;
    if(timer == 0) {
        clearInterval(clock);
        textContainer.innerHTML = 'Buon anno!';
    }
}, 1000);
