const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

// Load saved state from local storage
document.addEventListener('DOMContentLoaded', () => {
    const isSidebarClosed = localStorage.getItem('sidebarClosed') === 'true';
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isSidebarClosed) {
        sidebar.classList.add('close');
    } else {
        sidebar.classList.remove('close');
    }

    if (isDarkMode) {
        body.classList.add('dark');
        modeText.innerText = "Light mode";
    } else {
        body.classList.remove('dark');
        modeText.innerText = "Dark mode";
    }
});

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    localStorage.setItem('sidebarClosed', sidebar.classList.contains('close'));
});

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
    localStorage.setItem('sidebarClosed', false);
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem('darkMode', body.classList.contains('dark'));

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";
    }
});



let slideIndex = 1;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

// Function to show a specific slide
function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and mark its corresponding dot as active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Function to advance to the next slide
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Function to navigate to a specific slide
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Automatically advance to the next slide every 3 seconds (3000 milliseconds)
setInterval(function () {
  plusSlides(1);
}, 5000);

// Initialize the slider
showSlides(slideIndex);
