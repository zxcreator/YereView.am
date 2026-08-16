(function () {
    "use strict";

    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function toggleScrolled() {
        const selectBody = document.querySelector("body");
        const selectHeader = document.querySelector("#header");
        if (
            !selectHeader.classList.contains("scroll-up-sticky") &&
            !selectHeader.classList.contains("sticky-top") &&
            !selectHeader.classList.contains("fixed-top")
        )
            return;
        window.scrollY > 100 ? selectBody.classList.add("scrolled") : selectBody.classList.remove("scrolled");
    }

    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

    function mobileNavToogle() {
        document.querySelector("body").classList.toggle("mobile-nav-active");
        mobileNavToggleBtn.classList.toggle("bi-list");
        mobileNavToggleBtn.classList.toggle("bi-x");
    }
    mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll("#navmenu a").forEach((navmenu) => {
        navmenu.addEventListener("click", () => {
            if (document.querySelector(".mobile-nav-active")) {
                mobileNavToogle();
            }
        });
    });

    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
        navmenu.addEventListener("click", function (e) {
            e.preventDefault();
            this.parentNode.classList.toggle("active");
            this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
            e.stopImmediatePropagation();
        });
    });

    /**
     * Preloader
     */
    const preloader = document.querySelector("#preloader");
    if (preloader) {
        window.addEventListener("load", () => {
            preloader.remove();
        });
    }

    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector(".scroll-top");

    function toggleScrollTop() {
        if (scrollTop) {
            window.scrollY > 100 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active");
        }
    }
    scrollTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    window.addEventListener("load", toggleScrollTop);
    document.addEventListener("scroll", toggleScrollTop);

    /**
     * Animation on scroll function and init
     */
    function aosInit() {
        AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    }
    window.addEventListener("load", aosInit);

    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
        selector: ".glightbox",
    });

    /**
     * Initiate Pure Counter
     */
    new PureCounter();

    /**
     * Init swiper sliders
     */

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        initialSlide: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3500,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    window.addEventListener("load", swiper);

    /**
     * Correct scrolling position upon page load for URLs containing hash links.
     */
    window.addEventListener("load", function (e) {
        if (window.location.hash) {
            if (document.querySelector(window.location.hash)) {
                setTimeout(() => {
                    let section = document.querySelector(window.location.hash);
                    let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
                    window.scrollTo({
                        top: section.offsetTop - parseInt(scrollMarginTop),
                        behavior: "smooth",
                    });
                }, 100);
            }
        }
    });

    /**
     * Navmenu Scrollspy
     */
    let navmenulinks = document.querySelectorAll(".navmenu a");

    function navmenuScrollspy() {
        navmenulinks.forEach((navmenulink) => {
            if (!navmenulink.hash) return;
            let section = document.querySelector(navmenulink.hash);
            if (!section) return;
            let position = window.scrollY + 200;
            if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
                document.querySelectorAll(".navmenu a.active").forEach((link) => link.classList.remove("active"));
                navmenulink.classList.add("active");
            } else {
                navmenulink.classList.remove("active");
            }
        });
    }
    window.addEventListener("load", navmenuScrollspy);
    document.addEventListener("scroll", navmenuScrollspy);
})();

// Gallery Swiper

// testemonial swiper
const testimonials = [
    {
        name: "PURE",
        position: "Առողջ ապրելակերպ",
        image: "assets/img/partners/pure.jpg",
        text: "Մեզ համար կարևոր էր, որ մեր ապրանքը ներկայացվի ճիշտ լսարանին։ Տաքսիներում տեղադրված գովազդը օգնեց մեզ ավելի տեսանելի դառնալ և հասնել նոր հաճախորդների։",
        rating: 5,
    },

    {
        name: "Tonoyans Construction",
        position: "Շինարարական ընկերություն",
        image: "assets/img/partners/tonoyans.png",
        text: "Տաքսիներում գովազդի միջոցով մեր ընկերության մասին տեղեկությունը հասանելի դարձավ ավելի լայն լսարանի։ Համագործակցությունից գոհ ենք և գնահատում ենք պրոֆեսիոնալ մոտեցումը։",
        rating: 5,
    },

    {
        name: "Alma",
        position: "Հագուստ",
        image: "assets/img/partners/alma.jpg",
        text: "Գովազդը տաքսիներում մեզ համար դարձավ նոր և արդյունավետ միջոց հաճախորդների ուշադրությունը գրավելու համար։ Հատկապես գնահատում ենք գովազդի տեսանելիությունն ու լայն հասանելիությունը:",
        rating: 5,
    },

    {
        name: "Aleksandr Valdi",
        position: "Էկզոտիկ Հագուստ",
        image: "assets/img/partners/aleksandr-valdi.jpg",
        text: "Մեր արտադրանքը պահանջում է ճիշտ ներկայացում և տեսանելիություն։ Տաքսիների գովազդային հարթակը մեզ օգնեց ներկայանալ նոր լսարանի և բարձրացնել բրենդի ճանաչելիությունը:",
        rating: 5,
    },

    {
        name: "Best Plit",
        position: "Բնական քարից Սալիկներ",
        image: "assets/img/partners/bestplit.jpg",
        text: "Գովազդը մեզ հնարավորություն տվեց ներկայացնել մեր բնական քարից պատրաստված արտադրանքը լայն լսարանի։ Համագործակցությունը մեզ համար դարձավ նոր հաճախորդների հետ կապ հաստատելու արդյունավետ միջոց:",
        rating: 4,
    },

    {
        name: "Noyan",
        position: "Ըմպելիքներ",
        image: "assets/img/partners/noyan.jpg",
        text: "Տաքսիներում գովազդը մեզ հնարավորություն տվեց ներկայացնել մեր ըմպելիքները նոր գործընկերների։ Համագործակցությունը մեզ համար դարձավ նոր գործընկերների հետ կապ հաստատելու արդյունավետ միջոց:",
        rating: 5,
    },
];
document.addEventListener("DOMContentLoaded", function () {
    const carouselElement = document.getElementById("testimonialCarousel");

    const carouselInner = carouselElement.querySelector(".carousel-inner");

    const indicators = carouselElement.querySelector(".carousel-indicators");

    let currentMode = null;

    /* =====================================================
       CREATE STARS
    ===================================================== */

    function createStars(rating) {
        let stars = "";

        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars += `
                    <i class="bi bi-star-fill"></i>
                `;
            } else if (rating >= i - 0.5) {
                stars += `
                    <i class="bi bi-star-half"></i>
                `;
            } else {
                stars += `
                    <i class="bi bi-star"></i>
                `;
            }
        }

        return stars;
    }

    /* =====================================================
       CREATE CARD
    ===================================================== */

    function createCard(testimonial) {
        const wrapper = document.createElement("div");

        wrapper.className = "testimonial-card-wrapper";

        wrapper.innerHTML = `

            <div class="card testimonial-card">

                <div class="card-body text-center">

                    <img
                        src="${testimonial.image}"
                        class="rounded-circle testimonial-avatar mb-3"
                        alt="${testimonial.name}"
                    >

                    <h5 class="card-title">
                        ${testimonial.name}
                    </h5>

                    <p class="card-text text-muted testimonial-position">
                        ${testimonial.position}
                    </p>

                    <p class="card-text testimonial-text">
                        "${testimonial.text}"
                    </p>

                    <div class="text-warning testimonial-rating">
                        ${createStars(testimonial.rating)}
                    </div>

                </div>

            </div>

        `;

        return wrapper;
    }

    /* =====================================================
       BUILD CAROUSEL
    ===================================================== */

    function buildCarousel() {
        const isMobile = window.innerWidth < 768;

        const newMode = isMobile ? "mobile" : "desktop";

        /*
         * Если режим не изменился,
         * ничего не перестраиваем.
         */

        if (currentMode === newMode) {
            return;
        }

        currentMode = newMode;

        /* =================================================
           REMOVE OLD BOOTSTRAP CAROUSEL INSTANCE
        ================================================= */

        const oldCarousel = bootstrap.Carousel.getInstance(carouselElement);

        if (oldCarousel) {
            oldCarousel.dispose();
        }

        /* =================================================
           CLEAR
        ================================================= */

        carouselInner.innerHTML = "";
        indicators.innerHTML = "";

        /* =================================================
           MOBILE
           1 CARD PER SLIDE
        ================================================= */

        if (isMobile) {
            testimonials.forEach((testimonial, index) => {
                const slide = document.createElement("div");

                slide.className = "carousel-item" + (index === 0 ? " active" : "");

                const card = createCard(testimonial);

                slide.appendChild(card);

                carouselInner.appendChild(slide);

                /* INDICATOR */

                const indicator = document.createElement("button");

                indicator.type = "button";

                indicator.dataset.bsTarget = "#testimonialCarousel";

                indicator.dataset.bsSlideTo = index;

                indicator.setAttribute("aria-label", `Slide ${index + 1}`);

                if (index === 0) {
                    indicator.classList.add("active");

                    indicator.setAttribute("aria-current", "true");
                }

                indicators.appendChild(indicator);
            });
        } else {
            /* =================================================
           DESKTOP
           3 CARDS PER SLIDE
        ================================================= */
            for (let i = 0; i < testimonials.length; i += 3) {
                const slide = document.createElement("div");

                slide.className = "carousel-item" + (i === 0 ? " active" : "");

                const row = document.createElement("div");

                row.className = "row g-4 align-items-stretch";

                const currentTestimonials = testimonials.slice(i, i + 3);

                currentTestimonials.forEach((testimonial) => {
                    const column = document.createElement("div");

                    column.className = "col-md-4 d-flex";

                    const card = createCard(testimonial);

                    column.appendChild(card);

                    row.appendChild(column);
                });

                slide.appendChild(row);

                carouselInner.appendChild(slide);

                /* INDICATOR */

                const slideNumber = i / 3;

                const indicator = document.createElement("button");

                indicator.type = "button";

                indicator.dataset.bsTarget = "#testimonialCarousel";

                indicator.dataset.bsSlideTo = slideNumber;

                indicator.setAttribute("aria-label", `Slide ${slideNumber + 1}`);

                if (slideNumber === 0) {
                    indicator.classList.add("active");

                    indicator.setAttribute("aria-current", "true");
                }

                indicators.appendChild(indicator);
            }
        }

        /* =================================================
           INITIALIZE BOOTSTRAP CAROUSEL
        ================================================= */

        new bootstrap.Carousel(carouselElement, {
            interval: false,
            ride: false,
            touch: true,
            wrap: true,
        });
    }

    /* =====================================================
       INITIAL BUILD
    ===================================================== */

    buildCarousel();

    /* =====================================================
       RESPONSIVE REBUILD
    ===================================================== */

    let resizeTimer;

    window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function () {
            buildCarousel();
        }, 150);
    });
});
// Partsner Start

var partnerSwiper = new Swiper(".partnerswiper", {
    slidesPerView: 1,
    // navigation: { // nextEl: ".swiper-button-next", // prevEl: ".swiper-button-prev", // },

    spaceBetween: 20,

    speed: 5000,

    loop: true,

    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },

    breakpoints: {
        576: {
            slidesPerView: 5,
        },

        900: {
            slidesPerView: 5,
        },

        1100: {
            slidesPerView: 5,
        },
    },
});

// Partners End
