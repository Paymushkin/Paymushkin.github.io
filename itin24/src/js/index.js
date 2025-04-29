jQuery(document).ready(function() {

  $('.modal-open').modal('show');


  $.each($('.slider-brands'), function() {
    $(this).slick({
      slidesToScroll: 1,
      slidesToShow: 9,
      arrows: false,
      infinite: true,
      swipeToSlide: true,
      dots: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },

      ],

    });
  });
  if ( $('.banner-slider').length ) {

    $('.banner-slider').on('init', function(e, slick) {
      var $firstAnimatingElements = $('.banner-slider__item:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);

    })
    $('.banner-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.banner-slider__item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    })

    $('.banner-slider').slick({
      infinity: false,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrow: false,
      autoplay:true,
      asNavFor: '.banner-slider-nav',
      cssEase: 'linear'
    })

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
          $this.removeClass($animationType);
        })
      })

    }
  

    $('.banner-slider-nav').slick({
      slidesToScroll: 1,
      slidesToShow: 7,
      asNavFor: '.banner-slider',
      infinite: false,
      focusOnSelect: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            variableWidth: true,
            swipeToSlide: true,
            slidesToShow: 3,
            infinite: true,

          },
        },
      ],
    });

  }


  $('.team-slider').slick({
    infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    dots: true,
    arrow: false,
  });

  $.each($('.slider-reviews'), function() {
    $(this).slick({
      slidesToScroll: 1,
      slidesToShow: 3,
      infinite: true,
      variableWidth: true,
      centerMode: true,
      adaptiveHeight: true,
      arrows: true,
      prevArrow: '<a href="#" class="prev-button prev-button-big"></a>',
      nextArrow: '<a href="#" class="next-button next-button-big"></a>',
      appendArrows: $(this).parents('.slider__wrap').find('.container-arrows'),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            centerMode: false,
            arrows: false,
          },
        },
      ],
    });
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



  if ( $('.banner-slider-page').length ) {

    $('.banner-slider-page').on('init', function(e, slick) {
      var $firstAnimatingElements = $('.banner-slider-page__item:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);

    })
    $('.banner-slider-page').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.banner-slider-page__item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    })



    $('.banner-slider-page').slick({
      infinity: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrow: true,
      autoplay:true,
      prevArrow: '<a href="#" class="prev-button prev-button-page"></a>',
      nextArrow: '<a href="#" class="next-button next-button-page"></a>',
      appendArrows: $('.banner-slider-page').parents('.slider__wrap').find('.container-arrows'),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            dots: true,
            arrows: false,
          },
        },
      ],

    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
          $this.removeClass($animationType);
        })
      })

    }


  }




  $.each($('.slider-case-small'), function() {
    $(this).slick({
      infinity: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrow: true,
      prevArrow: '<a href="#" class="prev-button prev-button-page-black"></a>',
      nextArrow: '<a href="#" class="next-button next-button-page-black"></a>',
      appendArrows: $(this).parents('.slider__wrap').find('.container-arrows'),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            variableWidth: true,
            dots: false,
            arrows: false,
          },
        },
      ],


    });
  });

  $.each($('.slider-events'), function() {
    $(this).slick({
      infinity: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrow: true,
      prevArrow: '<a href="#" class="prev-button prev-button-page-orange"></a>',
      nextArrow: '<a href="#" class="next-button next-button-page-orange"></a>',
      appendArrows: $(this).parents('.slider__wrap').find('.container-arrows'),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            variableWidth: true,
            swipeToSlide: true,
            slidesToShow: 3,
            dots: true,
          },
        },
      ],


    });
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



  /// formstyler

  $('.accept-checkbox, .select-filter, .select-label').styler();

  ///


  $('.item-active-js').on('click', function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });


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
  
  $('.item-active-multi-js').on('click', function() {
    $(this).toggleClass('active');
  });


  $('.check-select__label').on('click', function(event) {
    event.stopPropagation();
    console.log('son function');
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


  $('.video-link').magnificPopup({
    type: 'iframe',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true,
    },

  });


  //// count

  $('.count-minus, .count-plus').click(function() {
    var $input = $(this).parent().find('.input-count');
    if ($(this).hasClass('count-minus')) {
      var count = parseInt($input.val(), 10) - 1;
    } else {
      var count = parseInt($input.val(), 10) + 1;
    }
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });


  $('.input-file').inputfile({
    uploadText: '<span class="glyphicon glyphicon-upload"></span> <span class="attach-text">Прикрепить файл</span>',
    removeText: '<span class="glyphicon glyphicon-trash"></span>',
    restoreText: '<span class="glyphicon glyphicon-remove"></span>',

    uploadButtonClass: 'input-file-button',
    removeButtonClass: 'delete-file',
  });


  $('.button-add').on('click', function() {
    $(this).addClass('button-add-active');
  });


  //// slider-clients

  jQuery(function($) {
    // ALL SLIDER CALL
    sliderCall.photoGallery();
    lightboxTrigger();

  });


  var sliderCall = {
    photoGallery: function() {
      var slider = $('.slider-clients');
      slider.slick({
        infinity: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrow: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              variableWidth: true,
              swipeToSlide: true,
              slidesToShow: 3,
            },
          },
        ],
      });
    },
  };


  function lightboxTrigger() {
    var galleries = $('.slider-clients');
    galleries.each(function() {
      var gallery = $(this);
      gallery.find(':not(.slick-cloned)').children('.slider-clients__link').magnificPopup({
        type: 'image',
        fixedContentPos: true,
        closeOnBgClick: true,
        alignTop: false,
        tLoading: 'Загружается картинка #%curr%...',
        gallery: {
          enabled: true,
          tCounter: '<span class="mfp-counter">%curr%/%total%</span>',
        },
      });
    });

  }


  $('.datapicker-aside').datepicker({
    inline: true,
    todayButton: new Date(),
  });

  $('.input-cal').datepicker();

  /// mask
  $(function() {
    $('.phone').mask('+7 (999) 999 - 99 - 99');
  });

  $('.quest-block').tooltip({
    html: true,
    title: '<div class="tooltip-block">\n' +
      '                        <div class="tooltip-block-text">На одной копии «1С-Битрикс: Управление сайтом» можно создать несколько поддерживаемых сайтов. Поддержка для дополнительных сайтов может быть приобретена со значительными скидками.</div>',
    placement: 'bottom',
    trigger: 'hover',
    delay: {show: 100, hide: 100},
    animation: true,
  });


  $('.input').on('focus', function() {
    $(this).parents('.subscribe-input__wrap').addClass('input-select');
  });


  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {

      if ($('.icons-fixed').is(':hidden')) {
        $('.icons-fixed').css({opacity: 1}).fadeIn('slow');

      }
    } else {
      $('.icons-fixed').stop(true, false).fadeOut('fast');
    }
  });
  $('.icons-fixed').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 300);
  });


  // toggle password visibility
  $('.glyphicon').on('click', function() {
    $(this).toggleClass('glyphicon-eye-open'); // toggle our classes for the eye icon
    $(this).parents('.input__wrap').find('.input-pass').togglePassword(); // activate the hideShowPassword plugin
    console.log('sdsd');
  });
  ///


  $('body').on('click', '[href*="#scroll"]', function(e) {
    var fixed_offset = 80;
    $('html,body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 1000);
    e.preventDefault();
  });


  // bottomline
  //
  var $window = $(window),
    $target = $('.table-tariff'),
    $bottomline = $('.bottom-line');
  $footer = $('.footer');
  $h = $target.offset().top;
  $h2 = $footer.offset().top - 1000;
  $window.on('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < $h || scrollTop > $h2) {
      $bottomline.fadeOut('fast');
      return;
    } else {
      $bottomline.fadeIn('fast');
    }
    return;
  });


});



