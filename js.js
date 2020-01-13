var menu = document.getElementById('menu');
// console.log(menu);
menu.onclick = function(){
    var btn = document.querySelector('.menu');
    if ((btn.style.height == 0 && btn.style.overflow == 0) || (btn.style.height == '0px' && btn.style.overflow == 'hidden')){
        btn.style.height = 'auto';
        btn.style.overflow = 'visible';
    }
    
    else{
        btn.style.height = '0';
        btn.style.overflow = 'hidden';
    }
    // console.log(btn);
}