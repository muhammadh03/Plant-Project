/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Toggle Button ~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelector(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle('ri-close-large-line');
});


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Show Scroll Up ~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    if(this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
}

window.addEventListener("scroll", scrollUp);


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const scrollHeader = () => {
    const header = document.getElementById("navbar");

    if(window.scrollY >= 50) {
        header.classList.add("border-b", "border-yellow-500");
    } else {
        header.classList.remove("border-b", "border-yellow-500");
    }
}

window.addEventListener("scroll", scrollHeader);


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// const activeLink = () => {
//     const sections = document.querySelectorAll("section");
//     const navLinks = document.querySelectorAll(".nav-link");

//     let current = "home";

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;

//         if (window.scrollY >= sectionTop - 60) {
//             current = section.getAttribute("id");
//         }
//     });

//     navLinks.forEach(item => {
//         item.classList.remove("active");

//         if (item.href.includes(current)) {
//             item.classList.add("active");
//         }

//         // Potential Issue: If the href attribute contains more than just the section ID (e.g., https://example.com#about), this logic might fail in certain cases.
//         // To fix this, we can modify the comparison logic to check if the href attribute includes the current section ID with a trailing "#" character.
//         // if (item.href.endsWith(`#${current}`)) {
//         //     item.classList.add("active");
//         // }
//     });
// }

// window.addEventListener("scroll", activeLink);

// OBSERVATION: 
// The above code loops through all sections and navigation links separately. If performance becomes a concern (e.g., with a large number of sections), you could optimize it by stopping the section loop once the current section is found.


// Here's the corrected and optimized version:
const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "home"; // Default section

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(item => {
        item.classList.remove("active");

        if (item.href.endsWith(`#${current}`)) {
            item.classList.add("active");
        }
    });
};

window.addEventListener("scroll", activeLink);


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },


    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true,
});

sr.reveal(`.home__data, .about__top, .popular__top, .review__top, .review__swiper, .footer__icon, .footer__content, .copy__right`);
sr.reveal(`.home__image`, {delay: 500, scale: 0.5});

sr.reveal(`.service__card, .popular__card`, {interval: 100});

sr.reveal(`.about__leaf`, {delay: 1000, origin: "right"});
sr.reveal(`.about__item__1-content, .about__item__2-img`, {origin: "right"});
sr.reveal(`.about__item__2-content, .about__item__1-img`, {origin: "left"});

sr.reveal(`.review__leaf, .footer__floral`, {delay: 1000, origin: "left"});