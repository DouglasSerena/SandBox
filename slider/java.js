var slider = document.querySelector(".slider")
var auto = document.querySelector("#auto")
var voltar = document.querySelector("#voltar")
var avancar = document.querySelector("#avancar")
var barra = document.querySelector(".barra")
var load = document.querySelector(".load")
var contador = 0;
var imgs = [];
var tempoTroca = 0;
var tempoLoad= 0;
var tempo = 200;

// carregar as imagens

function preCarregar(img) {
    for (i=0;i<img;i++) {
        imgs[i] = new Image();
        imgs[i].src = "s"+i+".jpeg";
    }
    carregarImage(contador);
    anime();
}

// carregar image

function carregarImage(contador) {
    slider.style.backgroundImage = `url("${imgs[contador].src}")`;
}

// verificador de image

function verificador(dir) {
    contador+=dir;
    if (contador < 0) {
        contador = imgs.length-1;
    }
    if(contador > imgs.length-1) {
        contador = 0;
    }
    carregarImage(contador);    
}

// auto

function anime() {
    tempoTroca++;
    if(tempoTroca >= tempo) {
        tempoTroca=0;
        verificador(1);
    }
    tempoLoad = tempoTroca/(tempo/100);
    load.style.width = `${tempoLoad}%`
    requestAnimationFrame(anime);
}

// voltar

voltar.addEventListener("click", function() {
    tempoTroca = 0;
    verificador(-1);
});

// acrecentrar

avancar.addEventListener("click", function() {
    tempoTroca = 0;
    verificador(1);
});

// inicia o circulo

window.addEventListener("load", function(event) {
    preCarregar(7);
});