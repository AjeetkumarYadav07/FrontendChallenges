 function clrfun(  ){
         box[0].style.backgroundColor = Math.random('red');
 }


let box = document.getElementsByClassName('box')
let btn = document.getElementById('btn')

btn.onclick = clrfun ;