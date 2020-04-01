function gerar() {
    var num = document.querySelector('input#txtn')
    var res = document.querySelector('select#txtr')

    if (num.value.length == 0) {
        alert('[ERRO] Não a valor')
    }else {
        var n = Number(num.value)
        res.innerHTML = ''
        for (var i = 1;i <= 10;i++) {
            var item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab${i}`//este comando server para identificar cada option
            res.appendChild(item)
        }


    }
}