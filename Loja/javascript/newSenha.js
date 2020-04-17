var senha = document.getElementById("senha")
var verificarSenha = document.getElementById("verificarSenha")
var erro = document.getElementById("erro")

function redefinir() {
    if (senha.value.length == 0 || verificarSenha.value.length == 0) {
        erro.innerHTML = "Preencha os campo da senha."
    }else if (senha.value != verificarSenha.value) {
        erro.innerHTML = "Senhas diferente."
    }else if (senha.value.length < 9){
        erro.innerHTML = "Muito curta."
    }else if (senha.value == verificarSenha.value) {
        localStorage.setItem('senha', senha.value)
        alert("Senha redefinida")
        location.replace('../html/logar.html')
    }
}