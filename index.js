// script.js

// Variables for navigation toggle and slider functionality
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

// Function to toggle navigation on mobile view
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Function to show the next slide
function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Show the selected slide
    slides[index].classList.add('active');
}

// Function to start the automatic slider
function startSlider() {
    showSlide(currentSlide); // Show the first slide
    
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide
        showSlide(currentSlide);
    }, 5000); // Change slide every 5 seconds
}

// Initialize slider
startSlider();


const toggleButtons = document.querySelectorAll('.toggle-content');

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.classList.toggle('show');
  });
});

// linking navbar to other pages


function toggleNav() {
  const navLinksMobile = document.getElementById('mobile-menu');
  const navToggle = document.querySelector('.nav-toggle');
  const closeIcon = document.querySelector('.close-icon');

  // Toggle visibility of mobile nav and icons
  navLinksMobile.classList.toggle('hidden');
  navToggle.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
}


                                                                                                                                               