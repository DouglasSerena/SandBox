window.onload = function(){
    menu = document.getElementById('menu');
    back = document.getElementById('back');
    item = document.getElementsByClassName('menu-item');
    
    for (var i = 0; i < item.length; i++) {
        item[i].addEventListener('click', function(){ back.style.display = 'none'});
    }
    
    menu.addEventListener('click', function(){ back.style.display = 'block' });
    back.addEventListener('click', function(){ back.style.display = 'none' });
}   