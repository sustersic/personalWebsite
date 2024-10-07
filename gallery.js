var slideIndex = 1;
var autoSlidesTimer;
showSlides(slideIndex);
autoSlides();

function autoSlides() {
  autoSlidesTimer = setTimeout(() => {
    plusSlides(1);
    autoSlides();
  }, 5000);
}
function plusSlides(n) {
  showSlides((slideIndex += n));
  restartAutoSlides();
}
function currentSlide(n) {
  showSlides((slideIndex = n));
  restartAutoSlides();
}
function restartAutoSlides() {
  clearTimeout(autoSlidesTimer);
  autoSlides();
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activeDot";
}

document.addEventListener("DOMContentLoaded", (event) => {
  let startX, startY, endX, endY;
  let lastSwipeTime = 0;
  const threshold = 50; // Minimum distance for a swipe to be considered
  const debounceTime = 500; // 1 second debounce time
  let isSwipe = false;

  const handleSwipe = () => {
    const now = Date.now();
    if (now - lastSwipeTime < debounceTime) {
      return; // Ignore if the last swipe was within the debounce time
    }
    lastSwipeTime = now;
    const diffX = endX - startX;
    const diffY = endY - startY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // Horizontal swipe
      if (Math.abs(diffX) > threshold) {
        isSwipe = true;
        if (diffX > 0) {
          plusSlides(-1); // Swipe right
        } else {
          plusSlides(1); // Swipe left
        }
      }
    }
  };

  document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isSwipe = false;
  });

  document.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;
    handleSwipe();
  });

  document.addEventListener("mousedown", (e) => {
    startX = e.clientX;
    startY = e.clientY;
    isSwipe = false;
  });

  document.addEventListener("mouseup", (e) => {
    endX = e.clientX;
    endY = e.clientY;
    handleSwipe();
  });

  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (isSwipe) {
        e.preventDefault(); // Prevent the default action if it was a swipe
      }
    });
  });

  document.querySelectorAll("img").forEach((img) => {
    img.ondragstart = () => false;
  });
});
