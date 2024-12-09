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
	if (document.querySelector('.hero-slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.hero-slider', { // Указываем скласс нужного слайдера
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

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,
			// parallax: true,


			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				// disableOnInteraction: false,
			},


			// Пагинация

			pagination: {
				el: '.hero-slider__pagination',
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


	if (document.querySelector('.genres-carousel__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.genres-carousel__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			// modules: [Autoplay, Pagination, Navigation],
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			slidesPerView: 1,
			spaceBetween: 16,
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
			// 	// disableOnInteraction: false,
			// },


			// Пагинация

			pagination: {
				// el: '.hero-slider__pagination',
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
				prevEl: '.genres-navigation__prev',
				nextEl: '.genres-navigation__next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 2,
				},
				576: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 5,
					spaceBetween: 20,
				},
			},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)


window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});