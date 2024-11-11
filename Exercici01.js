let numeroAleatorio;
let intents = 0;
function play() {
numeroAleatorio = Math.floor(Math.random() * 11);
let divNumero = document.getElementById('numero');
divNumero.innerText = numeroAleatorio;
if(numeroAleatorio < 5) {
    divNumero.style.color = 'red';
} else {
    divNumero.style.color = 'green';
}
window.open('encerta.html', 'Encerta', 'width=800,height=600');

}
function rebreResposta(encertat) {
    intents++;
    let resultatDiv = document.getElementById('resultat');
    let missatge = encertat ? `Has encertat el número en ${intents} intents!` : `No has encertat. Intents: ${intents}`;
    resultatDiv.innerText = missatge;

    // Guardar el resultado en una cookie
    document.cookie = `encertat=${encertat}; path=/; max-age=86400`;
}