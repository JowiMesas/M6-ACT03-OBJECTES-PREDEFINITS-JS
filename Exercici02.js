
let colors = ["red","blue","green","yellow"];
let windowsOpen = [];
let totalWindows = 0;
let countdown = 30;
let first_window = true;
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
        windowsOpen.push(newWindow);
        totalWindows++;
        document.getElementById("totalFinestres").innerText = totalWindows;
    }

}
function sameWindows(esIgual) {
    let sameColor = null;
    for (let i = 0; i < windowsOpen.length; i++) {
        //Comparamos que sean ventanas diferentes pero del mismo color
        if(windowsOpen[i] !== esIgual && windowsOpen[i].color === esIgual.color) {
            sameColor = windowsOpen[i];
            break;
        }
    }
}