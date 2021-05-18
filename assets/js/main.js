var slideIndex = 1;   
var slides = []
    
document.addEventListener('DOMContentLoaded', function(){
  iniciarCarrousel(slideIndex);
  setInterval(() => {
    slideIndex++;
    iniciarCarrousel(slideIndex);
  }, 2250);
  
});
/* FUNCIONES */
function iniciarCarrousel(n) {
  var i;
  slides = document.getElementsByClassName("slider");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
