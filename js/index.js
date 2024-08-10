 

// slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName('slide');

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add('active');

  setTimeout(showSlides, 3000); // Ganti gambar setiap 2 detik
}
