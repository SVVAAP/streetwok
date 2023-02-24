// Smooth Scroll
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
    event.preventDefault();
    $('html, body').stop().animate({
    scrollTop: target.offset().top
    }, 1000);
    }
    });
    
    // Sticky Header
    var header = document.querySelector('header');
    var banner = document.querySelector('#banner');
    var bannerHeight = banner.offsetHeight;
    window.addEventListener('scroll', function() {
    if (window.pageYOffset > bannerHeight) {
    header.classList.add('sticky');
    } else {
    header.classList.remove('sticky');
    }
    });


   // Automatic Sliding Functionality
var menuSlider = document.getElementById("menu-slider");
var menuItems = document.querySelectorAll(".menu-item");
var currentIndex = 0;
var itemWidth = menuItems[0].clientWidth;
var maxIndex = menuItems.length - 1;
var intervalId;

menuSlider.style.width = (itemWidth * (maxIndex + 1)) + "px";

function slide() {
    if (currentIndex === maxIndex) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    menuSlider.style.transform = "translateX(-" + (currentIndex * itemWidth) + "px)";
}

// Start the Slideshow
intervalId = setInterval(slide, 5000);

// Stop the Slideshow on Hover
menuSlider.addEventListener("mouseover", function() {
    clearInterval(intervalId);
});

// Restart the Slideshow on Mouseout
menuSlider.addEventListener("mouseout", function() {
    intervalId = setInterval(slide, 5000);
});


const menuSlider = document.getElementById('menu-slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let scrollPos = 0;

prevBtn.addEventListener('click', () => {
  menuSlider.scrollLeft = Math.max(0, scrollPos - 310);
  scrollPos = menuSlider.scrollLeft;
});

nextBtn.addEventListener('click', () => {
  menuSlider.scrollLeft = Math.min(menuSlider.scrollWidth - menuSlider.clientWidth, scrollPos + 310);
  scrollPos = menuSlider.scrollLeft;
});
