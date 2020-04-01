var txtnum = document.querySelector('input#txtnum')
var res = document.querySelector('select#valor')
var div = document.querySelector('div#div')
var valores = []

function adicionar() {
    var num = Number(txtnum.value)

    if (txtnum.value.length == 0) {
        alert('[ERRO] Não a valor no campo abaixo.')
    }else if (num < 1 || num > 100) {
        alert('[ERRO] Valor escrito esta fora dos parametros')
    }else {
        var item = document.createElement('option')
        item.innerText = `Valor ${num} adicionado`
        res.appendChild(item)
    }
}

function validar() {
    var tam = n.length
    n.sort()
    div.innerHTML += `<p>Ao todo, temos ${tam} Números cadastratos.</p>`
    div.innerHTML += `<p>O maior valor informado foi ${n[tam-1]}.</p>`
    div.innerHTML += `<p>O menor valor informado foi ${n[0]}.</p>`
    for (i = tam;i > 1;i--) {
        var soma =+ n[i-1]        
    }
    div.innerHTML += `<p>somando todos os valores, temos ${soma}.</p>`
    div.innerHTML += `<p>A média dos valores digitados é ${soma/tam}.</p>`
}   