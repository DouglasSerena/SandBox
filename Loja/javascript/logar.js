var usuario = document.getElementById("usuario")
var senha = document.getElementById("senha")
var erro = document.getElementById("erro")
var ves = 1


function logar(){
    if (usuario.value.length == 0 || senha.value.length == 0) {
        erro.innerHTML = "preencha totos os campos"
    }else {
        if (usuario.value == localStorage.getItem('usuario') || usuario.value == localStorage.getItem('email')) {
            if (senha.value == localStorage.getItem('senha')) {
                sessionStorage.setItem('logado', true)
                location.replace("index.html")
            }else {
                erro.innerHTML = "senha errada"
                if (ves == 3) {
                    erro.innerHTML += `<br/><a href="../html/verificaUsuario.html" style="color: blue;">redefinir senha</a>`
                }else if (ves < 3) {
                    ves += 1
                }
            }
        }else {
           erro.innerHTML = "usuario ou email não existe"
        }
    }
}

var logado = document.getElementById("logado")

function logador() {
    if (sessionStorage.getItem('logado') == "true") {
        logado.innerHTML = `<label for="menu">
                                <p>${localStorage.getItem('usuario')}</p>
                                <li class="icon-login"></li>
                            </label>
                            <input type="checkbox" name="menu" id="menu">
                            <div class="menu">
                                <a href=""><p>Perfil</p></a>
                                <a href=""><p>Carrinho</p></a>
                                <input type="button" value="sair" onclick="sair()">
                            </div>`
    }else {
        logado.innerHTML = `<label for="logar"><p>Logar</p><li class="icon-login"></li></label>`
    }
}

function sair() {
    sessionStorage.setItem('logado', false)
    location.replace("index.html")
}