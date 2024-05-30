document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.b1 ');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.location.href = "/html/home.html";
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.b2 ');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.location.href = "/html/home.html#about-us";
        });
    });
});
    
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.b3 ');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.location.href = "/html/pro.html";
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.b4 ');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
        window.location.href = "/html/contact.html";
        });
    });
});

// Contact us button
document.addEventListener('DOMContentLoaded', function() {
    var contactUsButton = document.getElementById('contact-button');

    contactUsButton.addEventListener('click', function() {
        window.location.href = "https://api.whatsapp.com/send?phone=918779392536&text=hellothere";
    });
});
// buy 
document.addEventListener('DOMContentLoaded', function() {
    var contactUsButton = document.getElementById('buy');

    contactUsButton.addEventListener('click', function() {
        window.location.href = "https://api.whatsapp.com/send?phone=917545451531&text=zdfg";
    });
});

// Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Increment slideIndex
    slideIndex++;
    // If slideIndex is greater than the number of slides, reset it to 1
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Hide all dots' active class
    i = 0;
    do {
        dots[i].className = dots[i].className.replace(" active", "");
        i++;
    } while (i < dots.length);

    // Display the current slide and set the dot as active
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";

    // Set a timeout to run the function again after 10 seconds
    setTimeout(showSlides, 10000); // Change slide every 10 seconds
}

// Change slides on dot click
var dots = document.getElementsByClassName("dot");
var slides = document.getElementsByClassName("slide");

for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        slideIndex = Array.from(dots).indexOf(this) ;
        showSlides();
        var currentImage = slides[slideIndex - 1].querySelector('img'); // Assuming each slide contains an <img> element
        console.log(currentImage.src); // Do something with the image, e.g., log its src
    });
}

// Update the JavaScript to handle the new section similar to the provided image slider
let customSlideImages = document.querySelectorAll('.custom-slide-container img');
let customNext = document.querySelector('.custom-next');
let customPrev = document.querySelector('.custom-prev');
let customDots = document.querySelectorAll('.custom-dot');
let customCounter = 0;
let intervalId;

// Function to show the next slide automatically
function autoSlide() {
    intervalId = setInterval(() => {
        slideNext();
    }, 5000); // Change slide every 5 seconds
}

// Start auto sliding
autoSlide();

// Function to show the next slide
function slideNext() {
    customSlideImages[customCounter].style.animation = 'next1 0.5s ease-in forwards';
    if (customCounter >= customSlideImages.length - 1) {
        customCounter = 0;
    } else {
        customCounter++;
    }
    customSlideImages[customCounter].style.animation = 'next2 0.5s ease-in forwards';
    customIndicators();
}

// Function to navigate to a specific image by clicking on the dots
customDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(intervalId); // Stop auto sliding
        customSlideImages[customCounter].style.animation = 'prev1 0.5s ease-in forwards';
        customDots[customCounter].classList.remove('active');
        
        customCounter = index;
        
        customSlideImages[customCounter].style.animation = 'prev2 0.5s ease-in forwards';
        customDots[customCounter].classList.add('active');
        
        autoSlide(); // Restart auto sliding
    });
});

function customIndicators() {
    for (let i = 0; i < customDots.length; i++) {
        customDots[i].classList.remove('active');
    }
    customDots[customCounter].classList.add('active');
}

function switchImage(currentImage) {
    // Add your custom logic for switching images in the custom slider section
}

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }