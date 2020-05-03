var num = [5, 4, 3, 2, 1, 0]
num[6] = 18
num.push(203)
num.sort()
//num.length // mostra o tamanho do vetor
//num.sort() // ordena os numero
/*
for (i = 0;i < num.length;i++) {
    console.log(`valores dpo vetor ${num[i]}`)
}
for (pos in num) {
    console.log(`a posição ${pos} vale ${num[pos]}`)
}
*/

var res = num.indexOf(203)

if (res == -1) {
    console.log('Nao possui nem uma posição com esse valor')
}else {
    console.log(`O valor ${num[res]} esta na posição ${res}`)
}