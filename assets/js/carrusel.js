let slideIndex = 1;
showSlides(slideIndex);

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
// console.log(1, prev);

prev.addEventListener("click", () => plusSlides(-1));
next.addEventListener("click", () => plusSlides(1));

setInterval(() => plusSlides(1), 6000);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
