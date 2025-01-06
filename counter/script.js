
let count = document.getElementById('count')
let minusBtn = document.getElementById('minus')
let plusBtn = document.getElementById('plus')
let resetBtn = document.getElementById('reset')
let chngBy = document.getElementById('chngBy')

plusBtn.addEventListener( 'click' , ()=> {
    let counValue = parseInt(count.innerText) ;
    let chngValue = parseInt(chngBy.value);
    count.innerText = counValue + chngValue;
})
minusBtn.addEventListener( 'click' , ()=> {
    let counValue =  parseInt(count.innerText);
    let chngValue = parseInt(chngBy.value);
    count.innerText = counValue - chngValue;
})

resetBtn.addEventListener( 'click' , () => {
    count.innerText = 0 ;
})

