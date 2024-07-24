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
    bildSliders();

    if (document.querySelector('.hero__slider')) { // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper('.hero__slider', { // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            // modules: [Autoplay, Pagination, Navigation],
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,

            //touchRatio: 0,
            //simulateTouch: false,
            // loop: true,
            //preloadImages: false,
            //lazy: true,
            // parallax: true,


            // Эффекты
            // effect: 'fade',
            autoplay: {
                delay: 3000,
                // disableOnInteraction: false,
            },


            // Пагинация

            pagination: {
                el: '.hero-slide__pagination',
                // clickable: true,
                // type: "fraction",
            },


            // Скроллбар
            /*
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            */

            // Кнопки "влево/вправо"
            navigation: {
                prevEl: '.hero-slide__prev',
                nextEl: '.hero-slide__next',
            },

            // Брейкпоинты

            // breakpoints: {
            // 	320: {
            // 		slidesPerView: 1,
            // 		spaceBetween: 0,
            // 		autoHeight: true,
            // 	},
            // 	576: {
            // 		slidesPerView: 1,
            // 		spaceBetween: 0,
            // 		autoHeight: true,
            // 	},
            // 	768: {
            // 		slidesPerView: 2,
            // 		spaceBetween: 10,
            // 	},
            // 	992: {
            // 		slidesPerView: 3,
            // 		spaceBetween: 20,
            // 	},
            // 	1268: {
            // 		slidesPerView: 4,
            // 		spaceBetween: 20,
            // 	},
            // },
            // События
            // on: {
            // 	init: function(swiper) {
            // 		const allSlides = document.querySelector(".fraction-controll__all");
            // 		const allSlidesItems = document.querySelectorAll(".slide-main-block:not(.swiper-slide-duplicate)");

            // 		allSlides.textContent = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;
            // 	},
            // 	slideChange: function(swiper) {
            // 		const currentSlide = document.querySelector(".fraction-controll__current");
            // 		currentSlide.textContent = (swiper.realIndex + 1) < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
            // 	}
            // }
        });
    }

    if (document.querySelector('.news__slider')) { // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper('.news__slider', { // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            // modules: [Autoplay, Pagination],
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,

            //touchRatio: 0,
            //simulateTouch: false,
            loop: true,
            //preloadImages: false,
            //lazy: true,
            // parallax: true,


            // Эффекты
            // effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },


            // Пагинация

            pagination: {
                el: '.news__pagination',
                // clickable: true,
                // type: "fraction",
            },


            // Скроллбар
            /*
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            */

            // Кнопки "влево/вправо"
            // navigation: {
            // 	prevEl: '.navigation .prev',
            // 	nextEl: '.navigation .next',
            // },

            // Брейкпоинты

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoHeight: true,
                },
                576: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoHeight: true,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1268: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            },
            // События
            // on: {
            // 	init: function(swiper) {
            // 		const allSlides = document.querySelector(".fraction-controll__all");
            // 		const allSlidesItems = document.querySelectorAll(".slide-main-block:not(.swiper-slide-duplicate)");

            // 		allSlides.textContent = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;
            // 	},
            // 	slideChange: function(swiper) {
            // 		const currentSlide = document.querySelector(".fraction-controll__current");
            // 		currentSlide.textContent = (swiper.realIndex + 1) < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
            // 	}
            // }
        });
    }

    if (document.querySelector('.spheres__slider')) { // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper('.spheres__slider', { // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            // modules: [Autoplay, Pagination],
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            slidesPerView: 1,
            spaceBetween: 0,
            // autoHeight: true,
            speed: 800,

            //touchRatio: 0,
            //simulateTouch: false,
            // loop: true,
            //preloadImages: false,
            //lazy: true,
            // parallax: true,


            // Эффекты
            // effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },


            // Пагинация

            pagination: {
                el: '.spheres__pagination',
                // clickable: true,
                // type: "fraction",
            },


            // Скроллбар
            /*
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            */

            // Кнопки "влево/вправо"
            // navigation: {
            // 	prevEl: '.navigation .prev',
            // 	nextEl: '.navigation .next',
            // },

            // Брейкпоинты

            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    autoHeight: true,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1268: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            },
            // События
            // on: {
            // 	init: function(swiper) {
            // 		const allSlides = document.querySelector(".fraction-controll__all");
            // 		const allSlidesItems = document.querySelectorAll(".slide-main-block:not(.swiper-slide-duplicate)");

            // 		allSlides.textContent = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;
            // 	},
            // 	slideChange: function(swiper) {
            // 		const currentSlide = document.querySelector(".fraction-controll__current");
            // 		currentSlide.textContent = (swiper.realIndex + 1) < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
            // 	}
            // }
        });
    }

    if (document.querySelector('.body-events__slider')) { // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper('.body-events__slider', { // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            // modules: [Autoplay, Pagination],
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            slidesPerView: 2,
            spaceBetween: 0,
            // autoHeight: true,
            speed: 800,

            //touchRatio: 0,
            //simulateTouch: false,
            // loop: true,
            //preloadImages: false,
            //lazy: true,
            // parallax: true,


            // Эффекты
            // effect: 'fade',
            // autoplay: {
            // 	delay: 3000,
            // 	disableOnInteraction: false,
            // },


            // Пагинация

            pagination: {
                el: '.body-events__pagination',
                // clickable: true,
                // type: "fraction",
            },


            // Скроллбар
            /*
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            */

            // Кнопки "влево/вправо"
            // navigation: {
            // 	prevEl: '.navigation .prev',
            // 	nextEl: '.navigation .next',
            // },

            // Брейкпоинты

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    autoHeight: true,
                },
                576: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1268: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
            },
            // События
            // on: {
            // 	init: function(swiper) {
            // 		const allSlides = document.querySelector(".fraction-controll__all");
            // 		const allSlidesItems = document.querySelectorAll(".slide-main-block:not(.swiper-slide-duplicate)");

            // 		allSlides.textContent = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;
            // 	},
            // 	slideChange: function(swiper) {
            // 		const currentSlide = document.querySelector(".fraction-controll__current");
            // 		currentSlide.textContent = (swiper.realIndex + 1) < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
            // 	}
            // }
        });
    }

    if (document.querySelector('.clients__slider')) { // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper('.clients__slider', { // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            // modules: [Autoplay, Pagination],
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            slidesPerView: 6,
            // slidesPerColumn: 2,
            spaceBetween: 0,
            // autoHeight: true,
            speed: 800,

            //touchRatio: 0,
            //simulateTouch: false,
            // loop: true,
            //preloadImages: false,
            //lazy: true,
            // parallax: true,


            // Эффекты
            // effect: 'fade',
            // autoplay: {
            // 	delay: 3000,
            // 	disableOnInteraction: false,
            // },


            // Пагинация

            pagination: {
                el: '.clients__pagination',
                clickable: true,
                // dynamicBullets: true,
                // dynamicMainBullets: 5,
                // hiddenClass: "swiper-pagination-hidden",
                // type: "fraction",
            },


            // Скроллбар
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },

            // grid: {
            // 	fill: "row",
            // 	rows: 2,
            // },

            // Кнопки "влево/вправо"
            // navigation: {
            // 	prevEl: '.navigation .prev',
            // 	nextEl: '.navigation .next',
            // },

            // Брейкпоинты

            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    autoHeight: true,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    // grid: {
                    // 	column: 1,
                    // },
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                    // grid: {
                    // 	rows: 2,
                    // },
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                    // grid: {
                    // 	rows: 2,
                    // },
                },
                1025: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                },
                1440: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                },
            },
            // События
            // on: {
            // 	init: function(swiper) {
            // 		const allSlides = document.querySelector(".fraction-controll__all");
            // 		const allSlidesItems = document.querySelectorAll(".slide-main-block:not(.swiper-slide-duplicate)");

            // 		allSlides.textContent = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;
            // 	},
            // 	slideChange: function(swiper) {
            // 		const currentSlide = document.querySelector(".fraction-controll__current");
            // 		currentSlide.textContent = (swiper.realIndex + 1) < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
            // 	}
            // }
        });
    }

    if (document.querySelector('.laboratory__slider')) { // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper('.laboratory__slider', { // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            // modules: [Autoplay, Pagination],
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            slidesPerView: 1,
            spaceBetween: 0,
            // autoHeight: true,
            speed: 800,

            //touchRatio: 0,
            //simulateTouch: false,
            // loop: true,
            //preloadImages: false,
            //lazy: true,
            // parallax: true,


            // Эффекты
            // effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },


            // Пагинация

            pagination: {
                el: '.laboratory__pagination',
                // clickable: true,
                // type: "fraction",
            },


            // Скроллбар
            /*
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            */

            // Кнопки "влево/вправо"
            // navigation: {
            // 	prevEl: '.navigation .prev',
            // 	nextEl: '.navigation .next',
            // },

            // Брейкпоинты

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    autoHeight: true,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1268: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            },
            // События
            // on: {
            // 	init: function(swiper) {
            // 		const allSlides = document.querySelector(".fraction-controll__all");
            // 		const allSlidesItems = document.querySelectorAll(".slide-main-block:not(.swiper-slide-duplicate)");

            // 		allSlides.textContent = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;
            // 	},
            // 	slideChange: function(swiper) {
            // 		const currentSlide = document.querySelector(".fraction-controll__current");
            // 		currentSlide.textContent = (swiper.realIndex + 1) < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
            // 	}
            // }
        });
    }

    if (document.querySelector('.product__slider')) { // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper('.product__slider', { // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            // modules: [Autoplay, Pagination, Navigation],
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            slidesPerView: 1,
            spaceBetween: 0,
            // autoHeight: true,
            speed: 800,

            // Пагинация

            pagination: {
                el: '.product__pagination',
                clickable: true,
                // type: "fraction",
            },

            // Кнопки "влево/вправо"
            navigation: {
                // prevEl: '.hero-slide__prev',
                // nextEl: '.hero-slide__next',
            },

            // Брейкпоинты

            // breakpoints: {
            // 	320: {
            // 		slidesPerView: 1,
            // 		spaceBetween: 0,
            // 		autoHeight: true,
            // 	},
            // 	576: {
            // 		slidesPerView: 1,
            // 		spaceBetween: 0,
            // 		autoHeight: true,
            // 	},
            // 	768: {
            // 		slidesPerView: 2,
            // 		spaceBetween: 10,
            // 	},
            // 	992: {
            // 		slidesPerView: 3,
            // 		spaceBetween: 20,
            // 	},
            // 	1268: {
            // 		slidesPerView: 4,
            // 		spaceBetween: 20,
            // 	},
            // },
            // События
            on: {
                init: function (swiper) {
                    // работа с переключением главное изображения в продукте

                    const thumbnails = document.querySelectorAll('.product-gallery__item');
                    thumbnails.forEach(function (thumbnail, index) {
                        thumbnail.addEventListener('click', function () {
                            thumbnails.forEach(thumbnail => {
                                thumbnail.classList.remove("_current-slide")
                            })
                            thumbnail.classList.add("_current-slide")

                            swiper.slideTo(index); // Переключение на соответствующий слайд
                        });
                    });
                },
                // slideChange: function(swiper) {
                // 	const currentSlide = document.querySelector(".fraction-controll__current");
                // 	currentSlide.textContent = (swiper.realIndex + 1) < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
                // }
            }
        });
    }

    if ((document.querySelectorAll('[data-slider-products]').length) && (window.screen.width > 576)) { // Указываем скласс нужного слайдера

        document.querySelectorAll('[data-slider-products]').forEach(slider => {

            new Swiper(slider, { // Указываем скласс нужного слайдера
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                slidesPerView: 1,
                spaceBetween: 0,
                speed: 800,
                allowTouchMove: false,

                // Кнопки "влево/вправо"
                navigation: {
                    prevEl: `.comparisson__navigation-${slider.getAttribute("data-slider-products")} .comparisson__prev`,
                    nextEl: `.comparisson__navigation-${slider.getAttribute("data-slider-products")} .comparisson__next`,
                },

                // Брейкпоинты

                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        autoHeight: true,
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    900: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1268: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                },
            });
        });

    }

    if ((document.querySelectorAll('[data-mobile-products]').length)) { // Указываем скласс нужного слайдера

        document.querySelectorAll('[data-mobile-products]').forEach((slider, index) => {

            const fraction = slider.querySelector(`.fraction`);
            const slides = slider.querySelectorAll(`.swiper-slide`);
            const slideCount = slides.length;
            fraction.textContent = `1 из ${slideCount}`;
            const sliderInfoPrefix = "slider_info_";
            const sliderDiffPrefix = "slider_diff_";
            const dynamicSliderInfoName = sliderInfoPrefix + index;
            const dynamicSliderDiffName = sliderDiffPrefix + index;

            new Swiper(slider, { // Указываем скласс нужного слайдера
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                slidesPerView: 1,
                spaceBetween: 10,
                speed: 800,

                pagination: {
                    el: `.comparisson-mobile__pagination-${slider.getAttribute("data-mobile-products")}`,
                    // type: "fraction",
                },

                on: {
                    slideChange: function (swiper) {
                        fraction.textContent = `${swiper.realIndex + 1} из ${slideCount}`;
                        window[dynamicSliderInfoName].slideTo(swiper.realIndex)
                        window[dynamicSliderDiffName].slideTo(swiper.realIndex)
                    }
                }

            });
        });

    }

    if ((document.querySelectorAll('[data-mobile-info]').length)) { // Указываем скласс нужного слайдера

        document.querySelectorAll('[data-mobile-info]').forEach((slider, index) => {

            const sliderPrefix = "slider_info_";
            const dynamicSliderName = sliderPrefix + index;

            window[dynamicSliderName] = new Swiper(slider, { // Указываем скласс нужного слайдера
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                slidesPerView: 1,
                spaceBetween: 10,
                speed: 800,
                allowTouchMove: false,
            });
        });

    }

    if ((document.querySelectorAll('[data-mobile-diff]').length)) { // Указываем скласс нужного слайдера

        document.querySelectorAll('[data-mobile-diff]').forEach((slider, index) => {

            const sliderPrefix = "slider_diff_";
            const dynamicSliderName = sliderPrefix + index;

            window[dynamicSliderName] = new Swiper(slider, { // Указываем скласс нужного слайдера
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                slidesPerView: 1,
                spaceBetween: 10,
                speed: 800,
                allowTouchMove: false,
            });
        });

    }
}


window.addEventListener("load", function (e) {
    // Запуск инициализации слайдеров
    initSliders();
    // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
    //initSlidersScroll();
});