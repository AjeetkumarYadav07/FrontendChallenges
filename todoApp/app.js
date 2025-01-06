const taskNote = document.querySelector("#goal-note");
const checBoxes = document.querySelectorAll(".goal-checkbox");
const  inputField =  document.querySelectorAll(".goal-input");

 function ErorNotice () {
     let isError = false;

    inputField.forEach((filed) =>{
        if(filed.value.trim() === ""){
            isError = true ;
           
        }
        
    });

    if(isError){
        taskNote.style.visibility = "visible";
        return false ;
       }
       else{
        taskNote.style.visibility = "hidden";
        return true;
       };
     

 
}




 inputField.forEach((filed) =>{
    filed.addEventListener('input' , () =>{
        ErorNotice();
    })
 })

checBoxes.forEach((CheckBox) =>{
     CheckBox.addEventListener("click" , (e)=>{
        if(ErorNotice()){
            CheckBox.parentElement.classList.add('completed')
        }
        
     });
});