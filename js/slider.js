var slideIndex = 0;
showSlides();

function showSlides() {
  var time = 5000;
  var i;
  // Pegando as classe mySlides e dot dentro de variáveis
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // Loop deixa todos os elementos com mySlides com display none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Incrementando +1 na variável slideIndex 
  slideIndex++;
  
  // Se o index do slide, for maior que o número total de slides, o index será 1
  if (slideIndex > slides.length) {slideIndex = 1}    
 
  // Loop que adiciona os dots 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Faz o slide funcionar 
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, time); // Passando slides em 1 segundo
}