  $('.tabs-item--js comparison-item').on('click', function() {
    var itemThumbs = $(this).attr('data-thumb'),
      imgThumbs = $('.tabs__block--js[data-thumb= \'' + itemThumbs + '\']');
    $(this).addClass('active comparison').siblings().removeClass('active comparison');
    imgThumbs.addClass('active comparison').siblings().removeClass('active comparison');
  });
  $('.tabs-item--js').on('click', function() {
    var itemThumbs = $(this).attr('data-thumb'),
      imgThumbs = $('.tabs__block--js[data-thumb= \'' + itemThumbs + '\']');
    $(this).addClass('active').siblings().removeClass('active');
    imgThumbs.addClass('active').siblings().removeClass('active');
    imgThumbs.find('.slider-case').slick('refresh'); 
    imgThumbs.find('.slider-case2').slick('refresh');
    imgThumbs.find('.slider-case3').slick('refresh');
    imgThumbs.find('.slider-case4').slick('refresh');
    imgThumbs.find('.slider-case5').slick('refresh');
  });

 $('.accord-title--js').on('click', function() {
    var parents = $(this).parents('.accord-wrap--js');
    parents.find('.accord-block--js').slideToggle();
    parents.toggleClass('active');
    parents.siblings('.accord-wrap--js').removeClass('active').find('.accord-block--js').slideUp();
  });

$('.tariff-accord__button').on('click', function() {
    var parents = $(this).parents('.accord-wrap--js');
    parents.find('.accord-block--js').slideToggle();
    parents.toggleClass('active');
    parents.siblings('.accord-wrap--js').removeClass('active').find('.accord-block--js').slideUp();
  });


$.each($('.slider-case'), function() {
    $(this).slick({
      infinity: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      asNavFor: '.slider-case-nav',
      arrows: true,
      prevArrow: '<a href="#" class="prev-button prev-button-case"></a>',
      nextArrow: '<a href="#" class="next-button next-button-case"></a>',
      appendArrows: $(this).parents('.slider__wrap').find('.container-arrows'),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
          },
        },
      ],


    });
  });
  $.each($('.slider-case2'), function() {
    $(this).slick({
      infinity: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      asNavFor: '.slider-case-nav2',
      arrows: true,
      prevArrow: '<a href="#" class="prev-button prev-button-case"></a>',
      nextArrow: '<a href="#" class="next-button next-button-case"></a>',
      appendArrows: $(this).parents('.slider__wrap').find('.container-arrows'),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
          },
        },
      ],


    });
  });
  $.each($('.slider-case3'), function() {
    $(this).slick({
      infinity: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      asNavFor: '.slider-case-nav2',
      arrows: true,
      prevArrow: '<a href="#" class="prev-button prev-button-case"></a>',
      nextArrow: '<a href="#" class="next-button next-button-case"></a>',
      appendArrows: $(this).parents('.slider__wrap').find('.container-arrows'),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
          },
        },
      ],


    });
  });
  $.each($('.slider-case4'), function() {
    $(this).slick({
      infinity: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      asNavFor: '.slider-case-nav2',
      arrows: true,
      prevArrow: '<a href="#" class="prev-button prev-button-case"></a>',
      nextArrow: '<a href="#" class="next-button next-button-case"></a>',
      appendArrows: $(this).parents('.slider__wrap').find('.container-arrows'),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
          },
        },
      ],


    });
  });
  $.each($('.slider-case5'), function() {
    $(this).slick({
      infinity: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      asNavFor: '.slider-case-nav2',
      arrows: true,
      prevArrow: '<a href="#" class="prev-button prev-button-case"></a>',
      nextArrow: '<a href="#" class="next-button next-button-case"></a>',
      appendArrows: $(this).parents('.slider__wrap').find('.container-arrows'),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
          },
        },
      ],


    });
  });


  $('.slider-case-nav').slick({
    slidesToScroll: 1,
    slidesToShow: 7,
    asNavFor: '.slider-case',
    infinite: false,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  });
  $('.slider-case-nav2').slick({
    slidesToScroll: 1,
    slidesToShow: 7,
    asNavFor: '.slider-case2',
    infinite: false,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  });
  $('.slider-case-nav3').slick({
    slidesToScroll: 1,
    slidesToShow: 7,
    asNavFor: '.slider-case3',
    infinite: false,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  });
  $('.slider-case-nav4').slick({
    slidesToScroll: 1,
    slidesToShow: 7,
    asNavFor: '.slider-case4',
    infinite: false,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  });
  $('.slider-case-nav5').slick({
    slidesToScroll: 1,
    slidesToShow: 7,
    asNavFor: '.slider-case5',
    infinite: false,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  });



 $('.readmore').readmore({
    speed: 700,
    maxHeight: 160,
    moreLink: '<a href="#" class="show-more">Показать все</a>',
    lessLink: '<a href="#" class="show-more">Скрыть</a>',
  });

  $('.readmore-safety').readmore({
    speed: 700,
    maxHeight: 80,
    moreLink: '<a href="#" class="show-more">Показать все</a>',
    lessLink: '<a href="#" class="show-more">Скрыть</a>',
  });

$('.button-add.otr').on('click', function() {
	var vid = $(this).attr('data-vid');
	var pricedop = $(this).attr('data-price');
	var price = $('.tariff-price.priceotr' + vid).html();
	if($(this).hasClass('none')){
		price = price.replace(/\D/g, "");
		price = Number(price) - Number(pricedop);
		$(this).addClass('button-add-active');
		$('.tariff-price.priceotr' + vid).html(thousandSeparator(price) + ' ₽');
		$(this).removeClass('button-add-active');
		$(this).removeClass('none');
		return;
	}
	$(this).addClass('none');
	//console.log(vid);
	price = price.replace(/\D/g, "");
	price = Number(price) + Number(pricedop);
	$(this).addClass('button-add-active');
	$('.tariff-price.priceotr' + vid).html(thousandSeparator(price) + ' ₽');
});
var thousandSeparator = function(str) {
    var parts = (str + '').split('.'),
        main = parts[0],
        len = main.length,
        output = '',
        i = len - 1;
    
    while(i >= 0) {
        output = main.charAt(i) + output;
        if ((len - i) % 3 === 0 && i > 0) {
            output = ' ' + output;
        }
        --i;
    }

    if (parts.length > 1) {
        output += '.' + parts[1];
    }
    return output;
};

// Мобильное меню
$(document).ready(function() {
    $('.humb').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        var isActive = $('body').hasClass('active');
        console.log('Before toggle:', isActive);
        
        $('body').toggleClass('active');
        
        setTimeout(function() {
            console.log('After toggle:', $('body').hasClass('active'));
        }, 100);
    });
});

/*
$('.tariff-accord__button').on('click', function() {
    var parents = $(this).parents('.accord-wrap--js');
    parents.find('.accord-block--js').slideToggle();
    parents.toggleClass('active');
    parents.siblings('.accord-wrap--js').removeClass('active').find('.accord-block--js').slideUp();
  });
  */