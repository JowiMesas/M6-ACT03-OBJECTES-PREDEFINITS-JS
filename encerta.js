let intents = 0;
function incrementarIntents() {
    intents++;
}
function compara() {
    let inputNumero = document.getElementById('inputNumero').value;
    let divMissatge = document.getElementById('missatge');
    let numeroAleatorio1 = parseInt(window.opener.document.getElementById("numero").textContent);
    console.log(numeroAleatorio1);
    if(inputNumero == numeroAleatorio1) {
        alert("Has encertat el numero!");
        divMissatge.innerText = "Numero encertat!";
        setCookie("encertat", "true", 1);
        window.opener.rebreResposta(true);
        window.close();
    } else {
        alert("Es incorrecte");
        divMissatge.innerText = "Numero Incorrecte, torna a provar!!";
        setCookie("encertat", "false", 1);
        window.opener.rebreResposta(false);

    }
    
    setTimeout(() => {window.close();}, 7000);
}
function mostrarUltimResultat() {
    let encertat = getCookie("encertat");
    if (encertat) {
        let missatge = encertat === "true" ? 'Últim intent: Has encertat!' : 'Últim intent: No has encertat.';
        document.getElementById('missatge').innerText = missatge;
    }
}

// Ejecutar al cargar la página
window.onload = mostrarUltimResultat; 
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}