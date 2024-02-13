(function ($) {
	$(document).ready(function(){
	var vpw = (screen.width >= 768) ? '980px' : 'device-width';
	$('meta[name="viewport"]').attr("content", 'width='+vpw);
        
        
        $('.e-burger').on('click', function () {
            $(this).toggleClass('active');
            $('.menu-mobile').toggleClass('active');
            $('body').toggleClass('menu-mobile-active');
            $('.menu-mobile').height(($(window).height() - $('.header-line').height() - $('.nav-first-links').height() - 32) + 'px');
        });
        
        $('.menu-mobile-item').on('click', function() {
            $('.menu-mobile-subitem').hide();
            $('.menu-mobile-item').removeClass('active');
            $(this).addClass('active');
            var src = $(this).data('src');
            $('.menu-mobile-subitem[data-subsrc=' + src + ']').show();
        });
        
        
        $('.main-mobile-slider').owlCarousel({
			items:1,
			loop: true,
			margin:0,
			nav:true,
            navElement: 'span',
            navText: [],
			dots:false,
			addClassActive:true,
			smartSpeed:500,
            
        });
        
        
		var gallery = $('.gallery');
		var thumbnailGallery = $('.thumbnail-gallery');
		var duration = 350;

		gallery.owlCarousel({
			loop:false,
			nav:false,
			items:1
		}).on('changed.owl.carousel', function (e) {
			//On change of main item to trigger thumbnail item
			thumbnailGallery.trigger('to.owl.carousel', [e.item.index, duration, true]);
		});

		thumbnailGallery.owlCarousel({
			loop:false,
			center:true, //to display the thumbnail item in center
			nav:false,
			margin:30,
			autoWidth: false,
			responsive:{
				0:{
					items:3
				},
				960:{
					items:5
				},
				1000:{
					items:5
				},
				1300:{
					items:7
				},
				1900:{
					items:9
				}
			}
		}).on('click', '.owl-item', function () {
			gallery.trigger('to.owl.carousel', [$(this).index(), duration, true]);

		}).on('changed.owl.carousel', function (e) {
			gallery.trigger('to.owl.carousel', [e.item.index, duration, true]);
		});

		$('.gallery-right').click(function() {
			gallery.trigger('next.owl.carousel');
		});
		$('.gallery-left').click(function() {
			gallery.trigger('prev.owl.carousel');
		});

		/* owl slider - header-main-slider */

		var owl3 = $(".header-mini-slider");
		owl3.owlCarousel({
			items:1,
			loop: true,
			margin:0,
			nav:true,
			dots:false,
			addClassActive:true,
			smartSpeed:500
		}).on('changed.owl.carousel', function (property) {
			var _prev_bg = $('.slider-bus-wrap img').attr('src');
			setTimeout(function () {
				var _bg = $('.owl-item.active .carousel-item').data('img');
				$(".slider-bus-wrap").css("background-image", "url("+ _prev_bg +")");
				$('.slider-bus-wrap img').fadeOut(300, function () {
					$('.slider-bus-wrap img').attr('src', _bg);
					$('.slider-bus-wrap img').fadeIn(300, function () {
						$(".slider-bus-wrap").css("background-image", "url("+ _bg +")");
					});
				});
			}, 100);
		});

		/* owl slider - header-main-slider */

		if ($("div").is(".main-header")) {

			setTimeout(function () {
				$('.header-bg img').attr('src', $('.owl-item.active .carousel-item').data('img'));
				$('.header-bg').fadeIn();
			}, 300);

			var owl2 = $("#header-main-slider");

			owl2.owlCarousel({
				items:1,
				loop: true,
				margin:0,
				nav:true,
				dots:false,
				smartSpeed:500,
				// animateOut: 'fadeOut'
			}).on('changed.owl.carousel',function (property) {
				var _prev_bg = $('.header-bg img').attr('src');
				setTimeout(function () {
					var _bg = $('.owl-item.active .carousel-item').data('img');
					$(".header-bg").css("background-image", "url("+ _prev_bg +")");
					$('.header-bg img').fadeOut(300, function () {
						$('.header-bg img').attr('src', _bg);
						$('.header-bg img').fadeIn(300, function () {
							$(".header-bg").css("background-image", "url("+ _bg +")");
						});
					});
				}, 100);

			});

		} else if ($('div').is('.page-bus')) {
			setTimeout(function () {
				$('.slider-bus-wrap img').attr('src', $('.owl-item.active .carousel-item').data('img'));
				$('.slider-bus-wrap').fadeIn();
			}, 300);
		} else if ($('div').is('.info-src-events')) {
			setTimeout(function () {
				$('.slider-bus-wrap img').attr('src', $('.owl-item.active .carousel-item').data('img'));
				$('.slider-bus-wrap').fadeIn();
			}, 300);
		}

		/* owl slider - content-slider #sync-slider */

		var numSlidesSync = $('#sync-slider .sync1 .item-icon').length;
		if (numSlidesSync == 1) {
			$('#sync-slider').addClass('oneElement');
		}
		var sync1 = $("#sync-slider .sync1");
		var sync2 = $("#sync-slider .sync2");
		var slidesPerPage = 4;
		var block = false;

		sync2.on('initialize.owl.carousel initialized.owl.carousel', function(elem) {
			return $('#sync-slider .slider-counter').text(elem.page.index+2 + '/' + elem.item.count)
		});

		sync2.on('to.owl.carousel changed.owl.carousel', function(elem) {
			return $('#sync-slider .slider-counter').text(elem.page.index+1 + '/' + elem.item.count)
		});

		sync2.owlCarousel({
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			items : 1,
			nav: false,
			dots: true,
			loop: true,
			smartSpeed:1000
		}).on('changed.owl.carousel', syncPosition);

		sync1.on('initialized.owl.carousel', function () {
			sync1.find(".owl-item").eq(0).addClass("current");
		}).owlCarousel({
			items : slidesPerPage,
			dots:false,
			nav: false,
			smartSpeed: 1000,
			slideBy: slidesPerPage
		}).on('changed.owl.carousel', syncPosition2);

		function syncPosition(el) {
			if(!block){
				block = true
				var count = el.item.count-1;
				var current = Math.round(el.item.index - (el.item.count/2) - .5);

				if(current < 0) {
				  current = count;
				}

				if(current > count) {
				  current = 0;
				}

				sync1.find(".owl-item").removeClass("current").eq(current).addClass("current");
				var onscreen = sync1.find('.owl-item.active').length - 1;
				var start = sync1.find('.owl-item.active').first().index();
				var end = sync1.find('.owl-item.active').last().index();

				if (current > end) {
				  sync1.data('owl.carousel').to(current, 100, true);
				}

				if (current < start) {
				  sync1.data('owl.carousel').to(current - onscreen, 100, true);
				}
				block = false
			}
		}

		function syncPosition2(el) {
			if(!block){
				block = true
				var number = el.item.index;
				sync2.data('owl.carousel').to(number, 100, true);
				sync1.find(".owl-item").removeClass("current").eq(number).addClass("current");
				block = false
			}
		}

		sync1.on("click", ".owl-item", function(e){
			e.preventDefault();
			var number = $(this).index();
			sync2.data('owl.carousel').to(number, 300, true);
		});

		$("#sync-slider .slider-nav .prev").click(function () {
			sync2.trigger('prev.owl.carousel');
		});

		$("#sync-slider .slider-nav .next").click(function () {
			sync2.trigger('next.owl.carousel');
		});

		/* owl slider - content-slider #sync-slider1 (sample: 1 element) */

		var numSlidesSyncNew = $('#sync-slider1 .sync1 .item-icon').length;
		if (numSlidesSyncNew == 1) {
			$('#sync-slider1').addClass('oneElement');
		}
		var sync1New = $("#sync-slider1 .sync1");
		var sync2New = $("#sync-slider1 .sync2");
		var slidesPerPageNew = 4;
		var blockNew = false;

		sync2New.on('initialize.owl.carousel initialized.owl.carousel', function(elem) {
			return $('#sync-slider1 .slider-counter').text(elem.page.index+2 + '/' + elem.item.count)
		});

		sync2New.on('to.owl.carousel changed.owl.carousel', function(elem) {
			return $('#sync-slider1 .slider-counter').text(elem.page.index+1 + '/' + elem.item.count)
		});

		sync2New.owlCarousel({
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			items : 1,
			nav: false,
			dots: true,
			loop: true,
			smartSpeed:1000
		}).on('changed.owl.carousel', syncPositionNew);

		sync1New.on('initialized.owl.carousel', function () {
			sync1New.find(".owl-item").eq(0).addClass("current");
		}).owlCarousel({
			items : slidesPerPageNew,
			dots:false,
			nav: false,
			smartSpeed: 1000,
			slideBy: slidesPerPageNew
		}).on('changed.owl.carousel', syncPosition2New);

		function syncPositionNew(el) {
			if(!blockNew){
				blockNew = true
				var count = el.item.count-1;
				var current = Math.round(el.item.index - (el.item.count/2) - .5);

				if(current < 0) {
				  current = count;
				}

				if(current > count) {
				  current = 0;
				}

				sync1New.find(".owl-item").removeClass("current").eq(current).addClass("current");
				var onscreen = sync1New.find('.owl-item.active').length - 1;
				var start = sync1New.find('.owl-item.active').first().index();
				var end = sync1New.find('.owl-item.active').last().index();

				if (current > end) {
				  sync1New.data('owl.carousel').to(current, 100, true);
				}

				if (current < start) {
				  sync1New.data('owl.carousel').to(current - onscreen, 100, true);
				}
				blockNew = false
			}
		}

		function syncPosition2New(el) {
			if(!blockNew){
				blockNew = true
				var number = el.item.index;
				sync2New.data('owl.carousel').to(number, 100, true);
				sync1New.find(".owl-item").removeClass("current").eq(number).addClass("current");
				blockNew = false
			}
		}

		sync1New.on("click", ".owl-item", function(e){
			e.preventDefault();
			var number = $(this).index();
			sync2New.data('owl.carousel').to(number, 300, true);
		});

		$("#sync-slider1 .slider-nav .prev").click(function () {
			sync2New.trigger('prev.owl.carousel');
		});

		$("#sync-slider1 .slider-nav .next").click(function () {
			sync2New.trigger('next.owl.carousel');
		});

		/* owl slider - info-mini-slider */

		var owl4 = $(".mini-text-slider1 .info-mini-slider");
		owl4.on('initialize.owl.carousel initialized.owl.carousel', function(elem) {
			return $('.mini-text-slider1 .slider-counter').text(elem.page.index+2 + '/' + elem.item.count)
   		});

		owl4.on('to.owl.carousel changed.owl.carousel', function(elem) {
			return $('.mini-text-slider1 .slider-counter').text(elem.page.index+1 + '/' + elem.item.count)
   		});

		owl4.owlCarousel({
			items:1,
			loop: true,
			margin:0,
			nav:false,
			info:true,
			addClassActive:true,
			smartSpeed:500
		});

		$(".mini-text-slider1 .slider-nav .prev").click(function () {
			owl4.trigger('prev.owl.carousel');
		});

		$(".mini-text-slider1 .slider-nav .next").click(function () {
			owl4.trigger('next.owl.carousel');
		});

		/* table colls colors */

		$("#content table.beauty thead th:even").css("background-color", "#fefae8");
		$("#content table.beauty tbody td:even").css("background-color", "#ebf6ec");

		$("#content table.beauty thead th:odd").css("background-color", "#ebf6ec");
		$("#content table.beauty tbody td:odd").css("background-color", "#fefae8");

		/* lang nav */

		function showLangPanel(el){
			if (!el.hasClass("active")){
				$("body").addClass("lang-open");
				el.addClass("active");
			}
		}

		function hideLangPanel(el){
			if (el.hasClass("active")){
				el.removeClass("active");
				 $("body").removeClass("lang-open");
			}
		}

		$(".nav-locale .lang").on("click", function(e){
			e.preventDefault();
			e.stopPropagation();
			if ($("#country-list").hasClass("active")){
				hideLangPanel($("#country-list"));
			} else{
				showLangPanel($("#country-list"));
			}
		});

		/* search block */

		function showSearchPanel(el){
			if (!el.hasClass("active")){
				$("body").addClass("search-open");
				el.addClass("active");
			}
		}

		function hideSearchPanel(el){
			if (el.hasClass("active")){
				el.removeClass("active");
				 $("body").removeClass("search-open");
			}
		}

		$(".search-block .search-btn").on("click", function(e){
			e.preventDefault();
			e.stopPropagation();
			if ($(".search-wrap").hasClass("active")){
				hideSearchPanel($(".search-wrap"));
			} else{
				showSearchPanel($(".search-wrap"));
			}
		});

		/* want block */

		function showWantPanel(el){
			if (!el.hasClass("active")){
				$("body").addClass("want-open");
				el.addClass("active");
			}
		}

		function hideWantPanel(el){
			if (el.hasClass("active")){
				el.removeClass("active");
				 $("body").removeClass("want-open");
			}
		}

		$(".want-wrap .btn").on("click", function(e){
			e.preventDefault();
			e.stopPropagation();
			if ($(".want-links").hasClass("active")){
				hideWantPanel($(".want-links"));
			} else{
				showWantPanel($(".want-links"));
			}
		});
        
        $('.iwant-mobile span').on('click', function (e) {
            $('body').addClass('want-open');
            $('.iwant-links').addClass('active');
        });



		/* sitemap block */

		function showSitemapPanel(el){
			if (!el.hasClass("active")){
				$("body").addClass("sitemap-open");
				el.addClass("active");
			}
		}

		function hideSitemapPanel(el){
			if (el.hasClass("active")){
				el.removeClass("active");
				 $("body").removeClass("sitemap-open");
			}
		}

		$(".nav-second-links li .burger").on("click", function(e){
			e.preventDefault();
			e.stopPropagation();
			if ($(".sitemap-block").hasClass("active")){
				hideSitemapPanel($(".sitemap-block"));
			} else{
				showSitemapPanel($(".sitemap-block"));
			}
		});

		$(".sitemap-block .block-close").on("click", function(e){
			e.preventDefault();
			e.stopPropagation();
			if ($(".sitemap-block").hasClass("active")){
				hideSitemapPanel($(".sitemap-block"));
			} else{
				showSitemapPanel($(".sitemap-block"));
			}
		});

		/* close blocks */

		$(document).click(function(e) {

			if(!$(e.target).closest('.nav-locale').length) {
				if ($("#country-list").hasClass("active")){
					hideLangPanel($("#country-list"));
				}
			}
			if(!$(e.target).closest('.search-block').length) {
				if ($(".search-wrap").hasClass("active")){
					hideSearchPanel($(".search-wrap"));
				}
			}
			if(!$(e.target).closest('.want-wrap').length) {
				if ($(".want-links").hasClass("active")){
					hideWantPanel($(".want-links"));
				}
			}
            
            if(!$(e.target).closest('.iwant-mobile').length) {
				if ($(".iwant-links").hasClass("active")){
					$('body').removeClass('want-open');
                    $(".iwant-links").removeClass('active');
				}
			}

			if(!$(e.target).closest('.nav-second-links').length) {
				if ($(".sitemap-block").hasClass("active")){
					hideSitemapPanel($(".sitemap-block"));
				}
			}

		});
        
        $('.wrap').on('click', function (e) {
           if ($('.e-burger').is(':visible')) {
                if ($(".want-links").hasClass("active")){
				    hideWantPanel($(".want-links"));
                }
                /*if ($(".search-wrap").hasClass("active")){
					hideSearchPanel($(".search-wrap"));
				}*/
                if ($("#country-list").hasClass("active")){
					hideLangPanel($("#country-list"));
				}
           } 
        });
        
        

		/* fixed nav panel */
        
        $('.recommend-block-link').on('click', function () {
           var _href = $(this).data('src');
           if (_href) location.href = _href;
        });

		$(window).scroll(function(){
		  var nav1 = $('.bus .backto-wrap'),
		  	  nav2 =  $('.bus #nav-second-wrap'),
			  scroll = $(window).scrollTop();
		  if (scroll >= 314) nav1.addClass('panel-fixed'), nav2.addClass('panel-fixed');
		  else nav1.removeClass('panel-fixed'), nav2.removeClass('panel-fixed');
		});
        
        $(window).scroll(function(){
		  var nav1 = $('.about .backto-wrap'),
		  	  nav2 =  $('.about #nav-second-wrap'),
			  scroll = $(window).scrollTop();
		  if (scroll >= 314) nav1.addClass('panel-fixed'), nav2.addClass('panel-fixed');
		  else nav1.removeClass('panel-fixed'), nav2.removeClass('panel-fixed');
		});
        
        $(window).scroll(function(){
		  var nav1 = $('.info-src-all-prog .backto-wrap'),
		  	  nav2 =  $('.info-src-all-prog #nav-second-wrap'),
			  scroll = $(window).scrollTop();
		  if (scroll >= 314) nav1.addClass('panel-fixed'), nav2.addClass('panel-fixed');
		  else nav1.removeClass('panel-fixed'), nav2.removeClass('panel-fixed');
		});
        
        $(window).scroll(function(){
		  var nav1 = $('.info-src .backto-wrap'),
		  	  nav2 =  $('.info-src #nav-second-wrap'),
			  scroll = $(window).scrollTop();
		  if (scroll >= 314) nav1.addClass('panel-fixed'), nav2.addClass('panel-fixed');
		  else nav1.removeClass('panel-fixed'), nav2.removeClass('panel-fixed');
		});
        
        $(window).scroll(function(){
		  var nav1 = $('.feedback .backto-wrap'),
		  	  nav2 =  $('.feedback #nav-second-wrap'),
			  scroll = $(window).scrollTop();
		  if (scroll >= 314) nav1.addClass('panel-fixed'), nav2.addClass('panel-fixed');
		  else nav1.removeClass('panel-fixed'), nav2.removeClass('panel-fixed');
		});
        
        $(window).scroll(function(){
		  var nav1 = $('.contacts .backto-wrap'),
		  	  nav2 =  $('.contacts #nav-second-wrap'),
			  scroll = $(window).scrollTop();
		  if (scroll >= 314) nav1.addClass('panel-fixed'), nav2.addClass('panel-fixed');
		  else nav1.removeClass('panel-fixed'), nav2.removeClass('panel-fixed');
		});
        
        $(window).scroll(function(){
		  var nav1 = $('.page .backto-wrap'),
		  	  nav2 =  $('.page #nav-second-wrap'),
			  scroll = $(window).scrollTop();
		  if (scroll >= 314) nav1.addClass('panel-fixed'), nav2.addClass('panel-fixed');
		  else nav1.removeClass('panel-fixed'), nav2.removeClass('panel-fixed');
		});
        
        $(window).scroll(function(){
		  var nav1 = $('.components .backto-wrap'),
			  scroll = $(window).scrollTop();
		  if (scroll >= 314) {
                nav1.addClass('panel-fixed');
		  } 
		  else {
		    nav1.removeClass('panel-fixed');
		  }
		});
        
        $(window).scroll(function(){
		  var nav1 = $('.press .backto-wrap'),
			  scroll = $(window).scrollTop();
		  if (scroll >= 314) {
                nav1.addClass('panel-fixed');
		  } 
		  else {
		    nav1.removeClass('panel-fixed');
		  }
		});
        
        $(window).scroll(function(){
		  var nav1 = $('.s_itemap .backto-wrap'),
			  scroll = $(window).scrollTop();
		  if (scroll >= 314) {
                nav1.addClass('panel-fixed');   
		  } 
		  else {
		    nav1.removeClass('panel-fixed');  
		  }
		});

		/* back-to-top */

		$(".back-to-top").click(function (e) {
			e.preventDefault();
		   $("html, body").animate({scrollTop: 0}, 500);
		});

		/* backbutton */

		var backbutton = $('.backButton');
		backbutton.on("click", function(e){
			e.preventDefault();
			e.stopPropagation();
			window.history.back();
			history.go(-1);
		});
        
        setTimeout(function () {
            if ($('#hidden_user_status').val() == 'Представитель компании') {
                $('#what_contact_1').siblings('.select-styled').html($('#hidden_user_status').val());
                
                if ($('#hidden_reason').val()) {
                    $('.feedback-reason-block select').siblings('.select-styled').html($('#hidden_reason').val());
                }
                
                if ($('#hidden_industry').val()) {
                    $('.feedback-industry-block select').siblings('.select-styled').html($('#hidden_industry').val());
                }
                
                if ($('#hidden_fame').val()) {
                    $('.feedback-fame-block select').siblings('.select-styled').html($('#hidden_fame').val());
                }
                
                $('div').removeClass('basic-line');
                $('.other-line').removeClass('hideline');
                $('.fiz-line').hide();
                
                
            }
        }, 500);
        
        
        setInterval(function () {
            var feedback_type = $('#what_contact_1').siblings('.select-styled').html();
            if (feedback_type == 'Физическое лицо') {
                $('div').removeClass('basic-line');
                $('.other-line').addClass('hideline');
                $('.fiz-line').show();
            } else if (feedback_type == 'Представитель компании' || feedback_type == 'Другое') {
                $('div').removeClass('basic-line');
                $('.other-line').removeClass('hideline');
                $('.fiz-line').hide();
            } else {
                
            }
        }, 500);
        
        var client = $('.pure-radiobutton #radio2');
        
        $('input[name=back_url]').on('change', function () {
           if (client.is(':checked')) {
            $('.phone-block-wrap').addClass('phone-required');
           } else {
            $('.phone-block-wrap').removeClass('phone-required');
           }
        });

		/* Валидация формы отправки */
		$('.form_send').on('click', function (e) {
			var _error = false;
			$('*').removeClass('required_err');
            $('.error-warn').remove();

			var what_contact_1 = $('#what_contact_1');
			if (!what_contact_1.val()) {
				what_contact_1.parent().addClass('required_err');
				_error = true;
			}
            
            var reason = $('#reason');
            if (!reason.val()) {
                reason.parent().addClass('required_err');
                _error = true;
            }

			var industry = $('#industry');
			if (!industry.val()) {
				industry.parent().addClass('required_err');
				_error = true;
			}

			var companyType = $('#company-type');
			if (!companyType.val()) {
				companyType.parent().addClass('required_err');
				_error = true;
			}

			var name = $('#name');
			if (!name.val()) {
				name.addClass('required_err');
				_error = true;
			}

			var surname = $('#surname');
			if (!surname.val()) {
				surname.addClass('required_err');
				_error = true;
			}

			var company_title = $('#company_title');
			if (!company_title.val()) {
				company_title.addClass('required_err');
				_error = true;
			}

			var email = $('#email');
			if (!email.val()) {
				email.addClass('required_err');
				_error = true;
			}

			var inn = $('#inn');
			if (!inn.val()) {
				inn.addClass('required_err');
				_error = true;
			}

			// if ($('.phone-required').is(':visible')) {
                var phone = $('#phone');
    			if (!phone.val()) {
    				phone.addClass('required_err');
    				_error = true;
    			}
			// }
            

			var question = $('#question');
			if (!question.val()) {
				question.addClass('required_err');
				_error = true;
			}

			var conditions = $('#checkbox1');
			if (!conditions.prop('checked')) {
				conditions.parent().addClass('required_err');
				_error = true;
			}

			var equifaxCheckTrue = $('#equifax-check-true');
		 	if (equifaxCheckTrue.prop('checked')) {
				_error = true;
				console.log('spam');
			} else {
				console.log('ok');
				showPopup()
			}

			if (_error) {
				e.preventDefault();
                var error_warn = "<span class='error-warn'>Заполните поле</span>";
				$('.required_err').each(function (i) {
					if (i == 0) {
						var first_err = $(this).offset().top;
						$('html, body').animate({scrollTop : first_err - 100 }, 400);
					}
                    $(this).after($(error_warn));
                });
			}
		});
        
        $('.form_back').on('click', function (e) {
            e.preventDefault();
            if (confirm('Данные поле формы будут удалены')) {
                $('form.feedback')[0].reset();
                $('html, body').animate({scrollTop : 0 }, 300);
                document.location.reload();
            }
        });

		// grid/list view
		if($('div.blocks-content').hasClass('grid')){
            $('span.view-type.view-blocks').addClass('active')
		}
		if(!($('.view-type').hasClass('active'))){
            $('span.view-type.view-list').addClass('active');
		}

		var first_view_active = $('.view-type.active').data('view');
		$('.blocks-content').addClass(first_view_active);
		$('.view-type').on('click', function () {
			$('.view-type').removeClass('active');
			$(this).addClass('active');
			var view_type = $(this).data('view');
			$('.blocks-content').removeClass('grid list').addClass(view_type);
            var view = $('.view-type.active').data('view');
            setCookie("view-type", view, 30);
		});

        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        /*spoiler-block on main*/
        var sp_read_open = false;
        $('.sp-read').on('click', function () {
            $('.sp-text').slideToggle();
            sp_read_open = !sp_read_open;
            if (sp_read_open) {
                $(this).text('Скрыть подробности');
            } else {
                $(this).text('Читать подробнее');
            }
        });
        
        $('.map-popup-close, .map-popup-point').live('click', function () {
            $('.map-popup').toggleClass('popup-disable');
        });
        
        
        $('.mobile-filters').on('click', function() {
            $(this).siblings('.info-src-menu').slideToggle();
            $(this).toggleClass('active');
        });
        

    });
    
    
    $(window).scroll(function () {
        if ($(window).width() <= 768) {
            scroll = $(window).scrollTop();
		      if (scroll >= 200) {
		          $('.feedback-mobile-scroll').addClass('active');
		          /*
                  $('.want-wrap').addClass('fix-scroll');
                  if ($('.backto-wrap').is(':hidden')) {
                    $('.want-wrap').addClass('fix-top');
                  }
                  */
		      } else {
		          $('.feedback-mobile-scroll').removeClass('active');
		          /*
		          $('.want-wrap').removeClass('fix-scroll');
                  $('.want-wrap').removeClass('fix-top');
                  */
		      }
        }
    });
    
    /*
    $(window).on('load resize', function() {
        if ($(window).width() <= 768) {
            if ($('.want-wrap').is(':visible')) {
                console.log('visible');
                var want = $('.want-wrap');
                $(want).clone();
                want.remove();
                $('#nav-first').append($(want));
            }
        }
    });
    */
    
    
      
})(jQuery);

jQuery.fn.extend({
  live: function( types, data, fn ) {
    jQuery( this.context ).on( types, this.selector, data, fn );
    return this;
  }
});

jQuery.fn.reset = function () {
  jQuery(this).each(function() { 
    this.reset(); 
  });
}

Share = {
	vkontakte: function(purl, ptitle, pimg, text) {
		url  = 'http://vkontakte.ru/share.php?';
		url += 'url='          + encodeURIComponent(purl);
		url += '&title='       + encodeURIComponent(ptitle);
		url += '&description=' + encodeURIComponent(text);
		url += '&image='       + encodeURIComponent(pimg);
		url += '&noparse=true';
		Share.popup(url);
	},
	facebook: function(purl, ptitle, pimg, text) {
		url  = 'http://www.facebook.com/sharer.php?s=100';
		url += '&p[title]='     + encodeURIComponent(ptitle);
		url += '&p[summary]='   + encodeURIComponent(text);
		url += '&p[url]='       + encodeURIComponent(purl);
		url += '&p[images][0]=' + encodeURIComponent(pimg);
		Share.popup(url);
	},
	twitter: function(purl, ptitle) {
		url  = 'http://twitter.com/share?';
		url += 'text='      + encodeURIComponent(ptitle);
		url += '&url='      + encodeURIComponent(purl);
		url += '&counturl=' + encodeURIComponent(purl);
		Share.popup(url);
	},
	popup: function(url) {
		window.open(url,'','toolbar=0,status=0,width=626,height=436');
	}
};
