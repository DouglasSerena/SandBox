var back = document.querySelector('div#back')
var body = document.getElementById('body')
var head = document.getElementById('head')

head.addEventListener('click', function(){back.style.display = 'block'})
body.addEventListener('click', function(){back.style.display = 'none'})

function menu() {
    if (back.style.display == 'block') {
        back.style.display = 'none'
    }else {
        back.style.display = 'block'
    }
}

