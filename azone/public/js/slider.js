function bildSliders() {
    let sliders = document.querySelectorAll(`[class*="__swiper"]:not(.swiper-wrapper)`);
    if (sliders) {
        sliders.forEach(slider => {
            slider.parentElement.classList.add("swiper");
            slider.classList.add("swiper-wrapper");
            for (const slide of slider.children) {
                slide.classList.add('swiper-slide')
            }
        })
    }
}
function initSliders() {
    bildSliders();
    if (document.querySelector('.feedback__slider')) {
        new Swiper('.feedback__slider', {
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,
            loop: true,
            autoplay: false,
            navigation: {
                prevEl: '.feedback-swiper__navigation .prev',
                nextEl: '.feedback-swiper__navigation .next',
            },
        });
    }

    if (document.querySelector('.projects__slider')) {
        new Swiper('.projects__slider', {
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            loop: true,
            navigation: {
                prevEl: '.projects-swiper__navigation  .prev',
                nextEl: '.projects-swiper__navigation  .next',
            },
            pagination: {
                el: ".projects-swiper__pagination",
                type: "progressbar",
            },
            on: {
                slideChange: function (swiper) {
                    const projectsImages = document.querySelectorAll("#projectsImages img")

                    if (projectsImages.length) {
                        projectsImages.forEach((img) => {
                            img.classList.add("hidden")
                        })
                        const currentImageIndex = swiper.realIndex
                        document.querySelector(`img[data-image='${currentImageIndex}']`).classList.remove("hidden")
                    }
                }
            }
        });
    }

    if (document.querySelector('.simple__slider')) {
        new Swiper('.simple__slider', {
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            slidesPerView: 3,
            spaceBetween: 40,
            speed: 800,
            loop: true,
            autoplay: {
                delay: 3000,
            },
            navigation: {
                prevEl: '.delivery-swiper__navigation .prev',
                nextEl: '.delivery-swiper__navigation .next',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1268: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            },
        });
    }

    if (document.querySelector('.grid-recomendation__slider')) {
        new Swiper('.grid-recomendation__slider', {
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            slidesPerView: 3,
            spaceBetween: 65,
            speed: 800,
            loop: true,
            autoplay: {
                delay: 3000,
            },
            navigation: {
                prevEl: '.grid-recomendation__navigation .prev',
                nextEl: '.grid-recomendation__navigation .next',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1268: {
                    slidesPerView: 2,
                    spaceBetween: 65,
                },
            },
        });
    }
}
window.addEventListener("load", function (e) {
    initSliders();
});