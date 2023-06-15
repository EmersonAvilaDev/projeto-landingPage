let leonardo = window.document.getElementById("Leonardo");
let samantha = window.document.getElementById("Samantha");
let bruna = window.document.getElementById("Bruna");
let arrowRight = window.document.getElementById("arrow-right");
let arrowLeft = window.document.getElementById("arrow-left");

const rowToRight = () => {
    leonardo.style = "display: none";
    bruna.style = "display: flex";
    arrowRight.style = "display: none";
    arrowLeft.style = "display: flex";
}

const rowToLeft = () => {
    leonardo.style = "display: flex";
    bruna.style = "display: none";
    arrowRight.style = "display: flex";
    arrowLeft.style = "display: none";
}