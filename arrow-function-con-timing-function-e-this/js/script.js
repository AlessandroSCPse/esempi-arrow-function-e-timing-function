// Ho un div con dentro un testo
// al click sul div stesso, il testo cambia in 'sono stato cliccato'
// dopo 2 secondi
const textContainer = document.querySelector('#text');
textContainer.addEventListener('click', function() {
    console.log(this);
    setTimeout(() => {
        console.log(this);
        this.innerHTML = 'sono stato cliccato';
    }, 2000);
});
