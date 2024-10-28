let numeroAleatorio
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