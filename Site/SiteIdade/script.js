function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (form_ano.value.length == 0 || form_ano > ano) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    }else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(form_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homen'
            if (idade >= 0  && idade < 12) {
                //criança
                img.setAttribute('src', './img/HC.png')
            }else if (idade < 21) {
                //joven
                img.setAttribute('src', './img/HJ.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', './img/HA.png')
            }else {
                //idoso
                img.setAttribute('src', './img/HV.png')
            }
        }else {
            genero = 'Mulher'
            if (idade >= 0  && idade < 12) {
                //criança
                img.setAttribute('src', './img/MC.png')
            }else if (idade < 21) {
                //joven
                img.setAttribute('src', './img/MJ.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', './img/MA.png')
            }else {
                //idoso
                img.setAttribute('src', './img/MV.png')
            }
        }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} ano.`
    res.appendChild(img)
    }
}