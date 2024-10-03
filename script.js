
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky")

        } else {
            $('.navbar').removeClass("sticky")

        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");

        }
    });
    //
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 10000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
  


    var skillContent = document.getElementsByClassName('skill_content');
    var skillHeader = document.querySelectorAll('skill_header');
    function toggleSkill() {
        let itemClass = this.parentNode.className
        for (i = 0; i < skillContent.length; i++) {
            skillContent[i].className = 'skill_content skill_close'
        }
        if (itemClass === 'skill_content skill_close') {
            this.parentNode.className = 'skill_content skill_open'
        }

    }
    skillHeader.forEach(element => {
        element.addEventListener('click', toggleSkill)

    })




});

const slider = document.querySelector('.slider');

function activate(e) {
const items = document.querySelectorAll('.item');
if (e.target.matches('.next')) {
    slider.append(items[0]); // Move the first item to the end (next slide)
  } 
  else if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]); // Move the last item to the front (previous slide)
  }
}

document.addEventListener('click',activate,false);
// Auto-transition for the slider
function autoTransition() {
    const items = document.querySelectorAll('.item');
    slider.append(items[0]); // Automatically move the first item to the end (next slide)
  }
  
  const intervalTime = 3000; 
  let autoSlide = setInterval(autoTransition, intervalTime);
  
  slider.addEventListener('mouseover', () => {
    clearInterval(autoSlide); 
  });
  slider.addEventListener('mouseout', () => {
    autoSlide = setInterval(autoTransition, intervalTime); 
  });
  

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
