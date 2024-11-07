let intents = 0;
function incrementarIntents() {
    intents++;
}
function compara() {
    let inputNumero = document.getElementById('inputNumero').value;
    let divMissatge = document.getElementById('missatge');
    let numeroAleatorio1 = parseInt(window.opener.document.getElementById("numero").textContent);
    console.log(numeroAleatorio1);
    if(inputNumero === numeroAleatorio1) {
        alert("Has encertat el numero!");
    } else {
        alert("Es incorrecte");
    }
    
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }