const toggleBtn = document.querySelector("#toggle")
  const naVcontainer = document.querySelector(".nav-container")

  const chngMode = document.querySelector('#theme')


  toggleBtn.addEventListener("click" , (e) =>{
     naVcontainer.classList.toggle('active');
    
  })

  chngMode.addEventListener("click",  (e) =>{
     document.body.classList.toggle("theme")
  })