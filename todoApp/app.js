const taskNote = document.querySelector("#goal-note");
const checBoxes = document.querySelectorAll(".goal-checkbox");
const inputField = document.querySelectorAll(".goal-input");
const progressBar = document.querySelector(".progress-bar") ;
const progressValue = document.querySelector(".progress-value");

/*  Use local storage to sotre the items */
//    progressValue.style.visibility = "visible";
//   function updateProgress(){

//   }

const storeGoals = JSON.parse(localStorage.getItem("storeGoals")) || {};

function ErorNotice() {
  let isError = false;

  inputField.forEach((filed) => {
    if (filed.value.trim() === "") {
      isError = true;
    }
  });

  if (isError) {
    taskNote.style.visibility = "visible";
    return false;
  } else {
    taskNote.style.visibility = "hidden";
    return true;
  }
}

 /// to set the value on localStrage to broswe again //

inputField.forEach((filed) =>{
    if(storeGoals[filed.id]){
        filed.value = storeGoals[filed.id].name;
        if(storeGoals[filed.id].completed){
            filed.parentElement.classList.add('completed');
        }
    }
});

inputField.forEach((filed) => {
  filed.addEventListener("input", () => {
    ErorNotice();
  });

  filed.addEventListener("input", (e) => {
    storeGoals[e.target.id] = {
      name: filed.value,
      completed: false,
    };
    localStorage.setItem("storeGoals", JSON.stringify(storeGoals));
  });

});


    checBoxes.forEach((CheckBox) => {
        CheckBox.addEventListener("click", (e) => {
          if (ErorNotice()) {
            CheckBox.parentElement.classList.add("completed");
           
          }
        });
      });
      


  
 