
jQuery(document).ready(function () {

    // Табы
    function initTabs(tabsContainer) {
        $(tabsContainer).find('.tab-links a').on('click', function (e) {
            e.preventDefault();

            // Убираем класс active у всех табов и их содержимого
            $(tabsContainer).find('.tab-links a').removeClass('active');
            $(tabsContainer).find('.tab').removeClass('active');

            // Добавляем класс active к текущему табу и его содержимому
            $(this).addClass('active');

            $($(this).data('content')).addClass('active');

            $.each($('.slider-screen'), function () {
                $(this).slick('refresh');
            })
        });
    }

    // Инициализируем табы для каждого контейнера с классом .tabs
    $('.tabs-container').each(function () {
        initTabs(this);
    });


    // Инициализация слайдера со скриншотами
    $.each($('.slider-screen'), function () {
        $(this).slick({
            // slidesToScroll: 1,
            // slidesToShow: 6,
            arrows: true,
            infinite: false,
            swipeToSlide: true,
            dots: true,
            appendDots: $(this).parents('.ap-screens-tab').find('.ap-screens-tab__dots'),
            prevArrow: '<a href="#" class="prev-button"></a>',
            nextArrow: '<a href="#" class="next-button"></a>',
            appendArrows: $(this).parents('.ap-screens-tab').find('.container-arrows'),

        });
    });


    // аккодион в тарифах
    $('.tariff-accord__button').on('click', function () {
        var parents = $(this).parents('.accord-wrap--js');
        parents.find('.accord-block--js').slideToggle();
        parents.toggleClass('active');
        parents.siblings('.accord-wrap--js').removeClass('active').find('.accord-block--js').slideUp();
    });
});