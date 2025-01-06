let darBtn = document.getElementById('dark');
let lightBtn = document.getElementById('light');
let body = document.querySelector('body');

function chngMode (){
    darBtn.addEventListener("click" , (e) =>{
        body.style.backgroundColor = 'black';
 });
 lightBtn.addEventListener("click" , (e) =>{
       body.style.backgroundColor = "white" ;
 });
}

// chngMode();

let modeBtn = document.querySelector("#mode");
let curMode = "light";

modeBtn.addEventListener("click" , () =>{
    if(curMode == "light"){
        curMode = "dark";
        document.querySelector('body').style.backgroundColor = "black";
    }
    else{
        curMode = "light"
        document.querySelector('body').style.backgroundColor = "black";
    }
})