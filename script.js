// Função para o slider de imagens
let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');

function showSlides() 
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
   
