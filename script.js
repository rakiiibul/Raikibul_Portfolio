
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
    //typing animation screen
    var typed = new Typed(".typing-1", {
        strings: ["Programmer", "Data scientist", "Data analyst"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Programmer", "Data scientist", "Data analyst"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
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
