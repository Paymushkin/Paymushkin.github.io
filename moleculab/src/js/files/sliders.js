/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
// import Swiper, { Pagination, Autoplay, Navigation } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

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
	bildSliders();
	if (document.querySelector('.hero__slider')) {
		new Swiper('.hero__slider', {
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			autoplay: {
				delay: 3000,
			},

			// Пагинация
			pagination: {
				el: '.hero-slide__pagination',
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.hero-slide__prev',
				nextEl: '.hero-slide__next',
			},
		});
	}

	if (document.querySelector('.news__slider')) {
		new Swiper('.news__slider', {
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			loop: true,

			// Эффекты
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			// Пагинация

			pagination: {
				el: '.news__pagination',
			},

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
		});
	}

	if (document.querySelector('.spheres__slider')) {
		new Swiper('.spheres__slider', {
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			// Эффекты
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			// Пагинация

			pagination: {
				el: '.spheres__pagination',
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
		});
	}

	if (document.querySelector('.body-events__slider')) {
		new Swiper('.body-events__slider', {
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			slidesPerView: 2,
			spaceBetween: 0,
			speed: 800,

			// Пагинация
			pagination: {
				el: '.body-events__pagination',
			},

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
		});
	}

	if (document.querySelector('.clients__slider')) {
		new Swiper('.clients__slider', {
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			slidesPerView: 6,
			spaceBetween: 0,
			speed: 800,

			// Пагинация
			pagination: {
				el: '.clients__pagination',
				clickable: true,
			},


			// Скроллбар
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},

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
		});
	}

	if (document.querySelector('.laboratory__slider')) {
		new Swiper('.laboratory__slider', {
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			// Эффекты
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			// Пагинация
			pagination: {
				el: '.laboratory__pagination',
			},

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
		});
	}

	if (document.querySelector('.product__slider')) {
		new Swiper('.product__slider', {
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			// Пагинация
			pagination: {
				el: '.product__pagination',
				clickable: true,
			},

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
			}
		});
	}

	if ((document.querySelectorAll('[data-slider-products]').length) && (window.screen.width > 576)) {

		document.querySelectorAll('[data-slider-products]').forEach(slider => {

			new Swiper(slider, {
				observer: true,
				observeParents: true,
				observeSlideChildren: true,
				slidesPerView: 1,
				spaceBetween: 0,
				speed: 800,

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

	if ((document.querySelectorAll('[data-mobile-products]').length) && (window.screen.width <= 576)) {

		document.querySelectorAll('[data-mobile-products]').forEach((slider, index) => {

			const fraction = slider.querySelector(`.fraction`);
			const slides = slider.querySelectorAll(`.swiper-slide`);
			const slideCount = slides.length;
			fraction.textContent = `1 из ${slideCount}`;
			const sliderInfoPrefix = "slider_info_";
			const sliderDiffPrefix = "slider_diff_";
			const dynamicSliderInfoName = sliderInfoPrefix + index;
			const dynamicSliderDiffName = sliderDiffPrefix + index;

			new Swiper(slider, {
				observer: true,
				observeParents: true,
				observeSlideChildren: true,
				slidesPerView: 1,
				spaceBetween: 10,
				speed: 800,

				pagination: {
					el: `.comparisson-mobile__pagination-${slider.getAttribute("data-mobile-products")}`,
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

	if ((document.querySelectorAll('[data-mobile-info]').length) && (window.screen.width <= 576)) {

		document.querySelectorAll('[data-mobile-info]').forEach((slider, index) => {

			const sliderPrefix = "slider_info_";
			const dynamicSliderName = sliderPrefix + index;

			window[dynamicSliderName] = new Swiper(slider, {
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

	if ((document.querySelectorAll('[data-mobile-diff]').length) && (window.screen.width <= 576)) {

		document.querySelectorAll('[data-mobile-diff]').forEach((slider, index) => {

			const sliderPrefix = "slider_diff_";
			const dynamicSliderName = sliderPrefix + index;

			window[dynamicSliderName] = new Swiper(slider, {
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
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)


window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});

// console.log(slider_comparisson_0)