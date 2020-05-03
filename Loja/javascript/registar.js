var usuario = document.getElementById("usuario")
var email = document.getElementById("email")
var senha = document.getElementById("senha")
var verificarSenha = document.getElementById("verificarSenha")
var erro = document.getElementById("erro")
var aceito = document.getElementsByName("aceitarTermos")

function save() {
    if (sessionStorage.getItem('email').length != 0 || sessionStorage.getItem('usuario').length != 0){
        email.setAttribute('value', sessionStorage.getItem('email'))
        usuario.setAttribute('value', sessionStorage.getItem('usuario'))
    }
}

function enviar() {
    if (usuario.value.length == 0 || email.value.length == 0 || verificarSenha.value.length == 0 || senha.value.length == 0) {
        erro.innerHTML = 'Preencha todos os campos acima.'
    }else {
        if (usuario.value == localStorage.getItem('usuario') || email.value == localStorage.getItem('email')) {
            erro.innerHTML = 'Usuario ou email ja sendo utilizado.'
            return 0
        }
        sessionStorage.setItem('email', email.value)
        sessionStorage.setItem('usuario', usuario.value)
        if (senha.value.length < 9) {
            erro.innerHTML = 'Sua senha esta muito curta.'
        }else {
            if (senha.value != verificarSenha.value) {
                erro.innerHTML = 'Sua senha estão difirente.'
            }else if (senha.value == verificarSenha.value) {
                if (aceito[0].checked) {
                    alert("Cadastro concluido.")
                    localStorage.setItem('email', email.value)
                    localStorage.setItem('usuario', usuario.value)
                    localStorage.setItem('senha', senha.value)
                    sessionStorage.setItem('logado', true)
                    location.replace('../../index.html')
                }else {
                    erro.innerHTML = 'Aceite os termos acima.'
                }
            }
        }
    }
}