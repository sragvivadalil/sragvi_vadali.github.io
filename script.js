/*const navSlide = () => {
   const burger = document.querySelector('.burger');
   const nav = document.querySelector('.nav-links');
   const navLinks = document.querySelectorAll('.nav-links li');
   burger.addEventListener('click', () => {
     nav.classList.toggle('nav-active');
     //Animate Links
     navLinks.forEach((link, index) => {
       if(link.style.animation) {
         link.style.animation = ''
       } else {
         link.style.animation = 'navLinkFade 0.5s ease forwards 2s';
       }
     });
   });

}

navSlide(); */

let sliderImages - document.querySelectorAll('.slide'),
     arrowLeft = document.querySelector('#arrow-left'),
     arrowRight = document.querySelector('#arrow-right'),
     current = 0;
//Clear all images
function reset() {
  for(let i = 0; i < sliderImages.lenght; i++){
    sliderImages[i].style.display = 'none';
  }
}

function  startSlide(){
  reset();
}

startSlide();
