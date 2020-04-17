var click = document.querySelector("input#click")
var click2 = document.querySelector("input#click2")
var click3 = document.querySelector("input#click3")

function local() {
    localStorage.setItem('nome', 'douglas')
    localStorage.setItem('nome', 'dawdaw')
    localStorage.setItem('nome', 'aana')
}
function local2() {
    click2.addEventListener('click', () => {
        localStorage.getItem('nome')
    })
    console.log(localStorage.getItem('nome'))
}
function local3() {
    click3.addEventListener('click', () => {
        localStorage.setItem('nome', 'ana')
    })
}