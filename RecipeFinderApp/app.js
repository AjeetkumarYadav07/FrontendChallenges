// const itemName = document.querySelector('#food-name');
// const itemImage = document.querySelector('#food-img');
const toggleBtn = document.querySelector("#toggle");
 const naVcontainer = document.querySelector(".nav-container");
const loadMoreBtn = document.querySelector(".load-More")
  const chngMode = document.querySelector('#theme');
  const menu = document.querySelector("#menu")

// const recipeApi = async () => {
//     console.log("loading data...");
   
//      const recipeId = [ 1 ,2 , 3]; 

//       let api = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
//       let fooditems = await api.json(); // fooditems is an object
//       console.log(fooditems); // Check the structure of the response
  
//       // Access the meal name correctly
//       // itemName.innerText = `Name: ${fooditems.meals[0].strMeal}`;
//       // itemImage.src = ` ${fooditems.meals[0].strMealThumb}`;
//      //  itemImage.src = fooditems.meals[0].strMealThumb;

//         // Update each recipe's image and name dynamically
//         document.getElementById(`food-img-${id}`).src = fooditems.meals[0].strMealThumb;
//         document.getElementById(`food-name-${id}`).innerText = fooditems.meals[0].strMeal;
//  
  
let more = loadMoreBtn.addEventListener('click' , () =>{
   menu.style.display = "block";
   recipeApi();
})
 


const recipeApi = async () => {
   console.log("Loading data...");
 
   const recipeId = [1, 2, 3, 4, 5, 6 , 7];
 
   for (let id of recipeId) {
     try {
       // Fetch data from the API
       let api = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
       
       // Check if the response is successful
       if (!api.ok) {
         throw new Error(`HTTP error! status: ${api.status}`);
       }
 
       let fooditems = await api.json();
 
       // Update HTML elements with fetched data
       document.getElementById(`food-img-${id}`).src = fooditems.meals[0].strMealThumb;
       document.getElementById(`food-name-${id}`).innerText = fooditems.meals[0].strMeal;
       document.getElementById(`food-recipe-${id}`).href = fooditems.meals[0].strSource;
       document.getElementById(`recipe-tutorial-${id}`).href = fooditems.meals[0].strYoutube;
     } catch (error) {
       // Log the error and provide feedback to the user
       console.error(`Error fetching data for recipe ID ${id}:`, error);
       
       // Optionally, display an error message or placeholder in the UI
       document.getElementById(`food-img-${id}`).src = "placeholder-image-url.jpg";
       document.getElementById(`food-name-${id}`).innerText = "Error loading recipe";
       document.getElementById(`food-recipe-${id}`).href = "Error to loading recipe";
     }
   }
 };
 




 

  toggleBtn.addEventListener("click" , (e) =>{
     naVcontainer.classList.toggle('active');
    
  })

  chngMode.addEventListener("click",  (e) =>{
     document.body.classList.toggle("theme")
  })
  

