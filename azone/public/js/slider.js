// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
    console.log("свайпер")
    // BildSlider
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

// Инициализация слайдеров
function initSliders() {
    // добавление классов слайдерам
    // при необходимости отключить
    bildSliders();
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector('.feedback__slider')) { // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper('.feedback__slider', { // Указываем скласс нужного слайдера
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,
            loop: true,

            // Эффекты
            // effect: 'fade',
            autoplay: {
                delay: 3000,
                // disableOnInteraction: false,
            },


            // Пагинация

            pagination: {
                el: '.feedback-swiper__pagination',
                clickable: true,
                // type: "fraction",
                renderBullet: function (index, className) {
                    const pageIndex = String(index + 1).padStart(2, '0');

                    console.log(pageIndex)
                    return `<span class="${className}"> ${pageIndex}</span>`;
                },

            },

            // Кнопки "влево/вправо"
            navigation: {
                prevEl: '.swiper__navigation .prev',
                nextEl: '.swiper__navigation .next',
            },
        });
    }

    if (document.querySelector('.projects__slider')) { // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper('.projects__slider', { // Указываем скласс нужного слайдера
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            loop: true,

            // Эффекты
            // effect: 'fade',
            autoplay: {
                delay: 3000,
                // disableOnInteraction: false,
            },

            // Кнопки "влево/вправо"
            navigation: {
                prevEl: '.projects__slider__navigation .prev',
                nextEl: '.projects__slider__navigation .next',
            },
        });
    }

    if (document.querySelector('.simple__slider')) { // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper('.simple__slider', { // Указываем скласс нужного слайдера
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            slidesPerView: 3,
            spaceBetween: 40,
            // autoHeight: true,
            speed: 800,
            loop: true,

            // Эффекты
            // effect: 'fade',
            autoplay: {
                delay: 30000,
                // disableOnInteraction: false,
            },

            // Кнопки "влево/вправо"
            navigation: {
                prevEl: '.delivery-swiper__navigation .prev',
                nextEl: '.delivery-swiper__navigation .next',
            },

            // Брейкпоинты

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    // autoHeight: true,
                },
                576: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    // autoHeight: true,
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
}

window.addEventListener("load", function (e) {
    // Запуск инициализации слайдеров
    initSliders();
    // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
    //initSlidersScroll();
});