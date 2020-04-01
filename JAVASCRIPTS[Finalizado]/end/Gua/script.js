var txtnum = document.querySelector('input#txtnum')
var res = document.querySelector('select#valor')
var div = document.querySelector('div#div')
var valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function Inlist(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function adicionar() {
    if (isNumber(txtnum.value) && !Inlist(txtnum.value, valores)) {
        valores.push(Number(txtnum.value))
        var item = document.createElement('option')
        item.innerText = `Valor Adicionado foi ${Number(txtnum.value)}`
        res.appendChild(item)
        div.innerHTML = ''
    }else {
        alert('Valor invalido')
    }
    txtnum.value = ''
    txtnum.focus()
}

function validar() {
    if (valores.length == 0) {
        alert('[ERRO] Não a valores adicionados')
    }else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        for (pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        var media = soma / tot

        div.innerHTML = ''
        div.innerHTML += `<p>Ao total foi adicionado ${tot} Números.</p>`
        div.innerHTML += `<p>O menor valor é ${menor}.</p>`
        div.innerHTML += `<p>O maior valor é ${maior}.</p>`
        div.innerHTML += `<p>A soma dos valores deu ${soma}.</p>`
        div.innerHTML += `<p>A media dos valores deu ${Math.round(media)}.</p>`
    }
}