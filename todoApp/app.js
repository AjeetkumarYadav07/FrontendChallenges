const taskNote = document.querySelector("#goal-note");
const progressBar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");
const progressLabel = document.querySelector("#progress-label");
const checBoxes = document.querySelectorAll(".goal-checkbox");
const goalInput = document.querySelectorAll(".goal-input");
const resetButton = document.querySelector("#reset");

// Add event listener to reset button
// resetButton.addEventListener("click", () => {
//   localStorage.clear(); // Correctly call the clear method
//   // Reload the page
// });


// for storeValue in local storage 


 const allGaols = JSON.parse(localStorage.getItem ("allGoals")) || {}


  // localStorage.setItem("")
// Sample quotes based on progress
const allQuotes = [
  "Keep going!",
  "Great start!",
  "You're halfway there!",
  "Almost done!",
  "You did it!"
];
// taskNote.style.visibility = "hidden"; 
// Function to disable all checkboxes
function disable() {
  checBoxes.forEach((checkbox) => {
    checkbox.disabled = true;
    
  });
}

// Function to enable all checkboxes
function enable() {
  checBoxes.forEach((checkbox) => {
    checkbox.disabled = false;
   
  });
}

// Function to update the progress
function updateProgress() {
  const completedGoalsCount = Array.from(checBoxes).filter((cb) => cb.checked).length;

  // Update the progress bar width
  const progressPercentage = (completedGoalsCount / checBoxes.length) * 100;
  progressValue.style.width = `${progressPercentage}%`;

  // Update the text inside the progress bar
  progressValue.firstElementChild.innerText = `${completedGoalsCount}/${checBoxes.length} completed`;

  // Update the progress label with a motivational quote
  progressLabel.innerText = allQuotes[completedGoalsCount] || "Keep going!";
}

// Function to check if all input fields are filled
function checkInputFields() {
  let isError = false;

  // Validate all inputs
  goalInput.forEach((field) => {
    if (field.value.trim() === "") {
      isError = true;
     
    }
  });

  // Enable or disable checkboxes based on validation
  if (isError) {
    disable(); // Disable checkboxes if any input is empty
    taskNote.style.visibility = "visible"; // Show error message
  } else {
    enable(); // Enable checkboxes if all inputs are filled
    taskNote.style.visibility = "hidden"; // Hide error message
  }

  return isError;
}

// Add event listeners to input fields for real-time validation
goalInput.forEach((input) => {



  input.addEventListener("input", () => {
    checkInputFields(); // Check fields whenever the user types
  
  });



  input.addEventListener("input", (e) =>{
    allGaols[input.id] = {
      name : input.value ,
      completed : false
    }
    localStorage.setItem("allGoals", JSON.stringify(allGaols))
  })
});

goalInput.forEach((field)=>{
 field.value = allGaols[field.id].name
 
})


// Checkboxes click event
checBoxes.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    if (checkInputFields()) {
 
      e.preventDefault(); 
      // Prevent checkbox interaction if validation fails
    } else if (checkbox.checked) {
      checkbox.parentElement.classList.add("complete");
     
      
    } else {
      checkbox.parentElement.classList.remove("complete");
    }
    
   
     
      progressValue.style.visibility = "visible";

      updateProgress(); // Update progress after marking the checkbox

  });
});

// Initialize validation and progress on page load
checkInputFields(); 
updateProgress(); 
