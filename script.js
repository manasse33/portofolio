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

// images

let currentIndex =0;

document.addEventListener(
   "DOMContentLoaded", () =>{
      const tolalImages = document.querySelectorAll('.imgs');
      const total = tolalImages.length;
      document.querySelector('.nbr').textContent = total/total;
   }
    
)


function next(){
  
   const tolalImages = document.querySelectorAll('.imgs');
   const total = tolalImages.length;
   const sliderwidth = document.querySelector('.slider');
   const large = sliderwidth.getBoundingClientRect();
   // console.log(currentIndex);
   if (currentIndex < total-1) {
      // console.log(currentIndex);
      currentIndex++;
      document.querySelector('.slider-content').scrollLeft += large.width;
      document.querySelector('.nbr').textContent = currentIndex+1;
   }
   
   
//  let now = total -currentIndex;
}

function previous(){
   const tolalImages = document.querySelectorAll('.imgs');
   const total = tolalImages.length;
   const sliderwidth = document.querySelector('.slider');
   const large = sliderwidth.getBoundingClientRect();
   if (currentIndex>=1) {
      currentIndex--;
      document.querySelector('.slider-content').scrollLeft -= large.width;
      document.querySelector('.nbr').textContent = currentIndex+1;
   }
  
   
}

function swip(){
   const card = document.querySelector('.about');
   console.log(card);
   card.classList.toggle('flip');
   // console.log(1);
}
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  nav.classList.toggle("show");
});

// const links = document.querySelectorAll("nav ul li a");

// links.forEach(link => {
//   link.addEventListener("click", () => {
//     nav.classList.remove("show");
//     burger.classList.remove("open");
//   });
// });




// const btn = document.querySelector('.move');


// console.log(btn);
// btn.addEventListener('click',function(){
//    console.log(btn);
  
// })




 




