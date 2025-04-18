const themeToggle = document.getElementById('theme-toggle');
const thema = document.getElementById('theme2');
if(localStorage.getItem('theme') === 'dark'){
   document.body.classList.add('light-mode');
  

   thema.style.display ='none';
   themeToggle.style.transition ='0.5s ease-in';
   themeToggle.style.display='block';
}

else{
   document.body.classList.remove('light-mode');
   thema.style.display ='block';
   thema.style.transition ='0.5s ease-in';
   themeToggle.style.display='none';
   
}

themeToggle.addEventListener('click',()=>{
   if (document.body.classList.contains('light-mode')) {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme','dark');
      thema.style.display ='block';
      thema.style.transition ='0.5s ease-in';
      themeToggle.style.display='none';
   }
   else{
      document.body.classList.add('light-mode');
      thema.style.display ='none';
      themeToggle.style.transition ='0.5s ease-in';
      themeToggle.style.display='block';
   }
 
})

thema.addEventListener('click',()=>{
   if (document.body.classList.contains('light-mode')) {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme','dark');
      thema.style.display ='block';
      thema.style.transition ='0.5s ease-in';
      themeToggle.style.display='none';
   }
   else{
      document.body.classList.add('light-mode');
      thema.style.display ='none';
      themeToggle.style.transition ='0.5s ease-in';
      themeToggle.style.display='block';
   }
 
})




   
   


function swip(){
   const card = document.querySelector('.about');
   console.log(card);
   card.classList.toggle('flip');
}

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  nav.classList.toggle("show");
});

const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
    burger.classList.remove("open");
  });
});





function autoScroll() {
 
   
   let scrollContainer = document.getElementById("slider");
 
   if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
  
      scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      scrollContainer.scrollBy({ left: scrollContainer.offsetWidth, behavior: 'smooth' });
    }
 
}

setInterval(autoScroll, 3000);




function autoScrolle() {
  
   let back = document.getElementById("slider-back");
   
      if (back.scrollLeft + back.offsetWidth >= back.scrollWidth) {
         back.scrollTo({ left: 0, behavior: 'smooth' });
       } else {
         back.scrollBy({ left: back.offsetWidth, behavior: 'smooth' });
       }
   
 }
 
 setInterval(autoScrolle, 4000);


 const experienceItems = document.querySelectorAll('.experience-item');

function revealExperienceItems() {
  const windowHeight = window.innerHeight;
  experienceItems.forEach(item => {
    const elementTop = item.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealExperienceItems);
window.addEventListener('load', revealExperienceItems); // pour affichage direct si déjà visible





 



function autoScroller() {
  
   let back = document.querySelector(".container-projet");
   
      if (back.scrollLeft + back.offsetWidth >= back.scrollWidth) {
         back.scrollTo({ left: 0, behavior: 'smooth' });
       } else {
         back.scrollBy({ left: back.offsetWidth, behavior: 'smooth' });
       }
   
 }
 
 setInterval(autoScroller, 4000);

