function verificar() {
    var a = convertToBoolean(document.getElementById("a").value);
    var b = convertToBoolean(document.getElementById("b").value);
    var p = document.getElementById("porta").value;
    var resultado = document.getElementById("resultado")

    switch (p) {
        case "not":
            resultado.innerText = "a: " + !a + "<br/>b: " + !b;
            break;
        case "and":

            // if (a == true && b == true) {
            //     resultado.innerHTML = "and = true"
            // } else {
            //     resultado.innerHTML = "and = false"
            // }

            resultado.innerHTML = a === true && b === true ? "and = true" : "and = false";
            break;
        case "or":
            resultado.innerHTML = a === true || b === true ? "and = true" : "and = false";
            break;
        case "xor":
            resultado.innerHTML = a ^ b ? "and = true" : "and = false";
            // ou a != b ? "and = true" : "and = false";
            break;
    }
}

// função que converter para boolean
function convertToBoolean1(content) {
    if (content == 'true')
        return true;
    return false;
}

function convertToBoolean(content) {
    return content == 'true' ? true : false; // if ternario
}
//identar o codigo automaticamente em  crtl+ ;
