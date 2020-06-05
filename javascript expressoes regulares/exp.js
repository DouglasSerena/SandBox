
var alvo = '11a22b33c';
var exp = /(\d\d)(\w)/g;

while (resultado = exp.exec(alvo)) {
    console.log(resultado);
    console.log(exp.lastIndex);
}
