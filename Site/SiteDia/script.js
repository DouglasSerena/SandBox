function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    var seg = date.getMinutes()
    msg.innerHTML = `Horas : ${hora}:${seg}`

    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    }else if (hora >= 12 && hora <= 18) {
        img.src = 'img/tarde.png'
        document.body.style.backgroundColor = '#b9846f'
    }else {
        img.src = 'img/noite.png'
        document.body.style.backgroundColor = '#515154'
    }
}
