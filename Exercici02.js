
let colors = ["red","blue","green","yellow"];
let windowsOpen = [];
let totalWindows = 0;
let countdown = 30;
let first_window = true;
let windowClickada = null; 

function start() {
 countdown = 30;
document.getElementById("countdown").innerText = `Temps restant ${countdown} segons`;
let timeCountdown = setInterval(() =>{
    countdown--;
    document.getElementById("countdown").innerText = `Temps restant ${countdown} segons`;
    if(countdown% 3 == 0) {
        createWindow();
    }
    if(countdown <= 0) {
        clearInterval(timeCountdown);
    }
},1000)
}

function createWindow() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    let width = 200;
    let height = 200;
    let left, top;
 
    if (first_window) {
        left = (window.screen.width / 2) - (width / 2);
        top = (window.screen.height / 2) - (height / 2);
        first_window = false;
    }else {
        // Para las siguientes ventanas, se abrirán en una posición aleatoria
        left = Math.random() * (window.screen.width - width);
        top = Math.random() * (window.screen.height - height);
    }
 
    const newWindow = window.open('', '', `width=200,height=150,left=${left},top=${top}`);

    if(newWindow) {
        newWindow.document.body.style.backgroundColor = color;
        newWindow.document.body.innerHTML = `<h1 style="color: white;">${color}</h1>`;
        newWindow.color = color;
        newWindow.onclick = () =>sameWindows(newWindow);
        windowsOpen.push(newWindow);
        totalWindows++;
        document.getElementById("totalFinestres").innerText = totalWindows;
    }

}
function sameWindows(esIgual) {
    // Si no hay ventana clicada, marcamos la actual como seleccionada
    if (windowClickada === null) {
        windowClickada = esIgual;
    } else {
        // Si ya hay una ventana clicada y no es la misma
        if (windowClickada !== esIgual) {
            // Si las ventanas tienen el mismo color
            if (windowClickada.color === esIgual.color) {
                // Cerramos ambas ventanas
                esIgual.close();
                windowClickada.close();

                // Eliminamos ambas de windowsOpen
                windowsOpen = windowsOpen.filter(win => win !== esIgual && win !== windowClickada);
                totalWindows -= 2;
                document.getElementById("totalFinestres").innerText = totalWindows;

                // Si ya no hay ventanas abiertas, mostramos el mensaje de victoria
                if (totalWindows <= 0) {
                    document.getElementById("message").innerText = "Enhorabona! Has guanyat!";
                    countdown = 0;
                }

                // Restablecemos la variable para la siguiente selección
                windowClickada = null;
            } else {
                // Si los colores no coinciden, desmarcamos la ventana seleccionada
                windowClickada = null;
            }
        } else {
            // Si hacemos clic en la misma ventana  cambiamos su color y creamos otra mas
                esIgual.color = colors[Math.floor(Math.random() * colors.length)];
                esIgual.document.body.style.backgroundColor = esIgual.color;
                esIgual.document.body.innerHTML = `<h1 style="color: white;">${esIgual.color}</h1>`;
                createWindow();
            
        }
    }


}