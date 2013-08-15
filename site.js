var fullScreenHeight;
var fullScreenWidth;

function resizewindow(){
  //return;
  var actualWindowWidth = $(this).width();
  var actualWindowHeight = $(this).height();
  
  // csak egy resize legyen
  $('body').css({'font-size': (actualWindowWidth / 2048) * 110 + '%'});


  // new system of set height for elements
  // míg a többi szétesik, ez a rész tökéletesen tartja a helyzetet .... szóval jQuery lassú, vagy bug
  // a jó öreg js még mindig megbízhatóbb ilyen esetekben
  //var documentScreenWidth = actualWindowWidth;//document.body.offsetWidth;
  var documentScreenWidth = document.body.offsetWidth;

  var mainHeadlineText = document.getElementById('main_headline_text');
  var mainHeadlineTextOffsets = mainHeadlineText.getBoundingClientRect();
  mainHeadlineText.style.height = mainHeadlineTextOffsets.height * 0.61;



  var mainScreenFooter = document.getElementById('main_screen_footer');
  var mainScreenFooterOffset = mainScreenFooter.getBoundingClientRect();
  mainScreenFooter.setAttribute('style' , 'height: '+documentScreenWidth * 0.301+'px !important');

  // old system
  // TODO : átírni az új rendszerre ezeket és lehet át is kell számolni, ezt majd megcsinálom
  $('#main_screen').css({ height : actualWindowWidth * 0.446 });
  $('#menu_screen').css({ height : actualWindowHeight});
  $('#menu_logo_transparent').css({ height : $('#menu_logo_transparent').width()});
  $('#logo').css({ height : $('#logo').width() * 2});
  $('#menu_hamburger').css({ height : $('#menu_hamburger').width()});
  $('#down_arrow').css({ height : $('#menu_hamburger').height()});
  $('.divider_up_button > img').css({height : $('#menu_hamburger').height(), width : $('#menu_hamburger').height()});
  $('#menu_close_button').css({ height : $('#menu_hamburger').height()});
  $('#main_screen1').css({ height : actualWindowWidth * 0.446 });
  $('#main_screen2').css({ height : actualWindowWidth * 0.446 });
  $('#main_screen3').css({ height : actualWindowWidth * 0.446 });
  $('.small_brick').css({ height : actualWindowWidth * 0.0562});
  $('.small_doubled_brick').css({ height : actualWindowWidth * 0.0562 * 2});
  $('.normal_brick').css({ height : actualWindowWidth * 0.0562 * 2});
  $('.negativ_margin').css({ marginTop : $('.normal_brick').height() / 2 * -1 });	
  $('.big_brick').css({ height : $('.normal_brick').width() * 0.0562 * 8});
  $('.onehalf_brick').css({ height : actualWindowWidth * 0.0562 * 5});
  $('.onehalf_brick_game').css({ height : actualWindowWidth * 0.0562 * 3});
  $('#third_screen_bg').css({ height : actualWindowWidth * 0.7 });
  $('#third_screen').css({ height : actualWindowWidth * 0.7 - ($('.normal_brick').height() / 2)});
  $('.negativ_top').css({ top : $('.normal_brick').height() / 2 * -1 });
  $('#player_avatars').css({ height : $('#player_avatars') * 0.3 });
  $('.footer_box').css({ height : $('.footer_box').width() * 0.623 });
  $('.footer_big_box').css({ height : $('.footer_box').height() });
  $('#footer_logo').css({ height : $('#footer_logo').width() * 0.272 });
	$('#forth_screen').css({ height : fullScreenWidth * 0.897});
	$('#forth_screen_bg').css({ height : $('#forth_screen_bg').width() * 0.76 });
  $('.inherit_height').each(function() {
    $(this).css({ height : $(this).parent().height() });
  });
  //$('#source_slide_bg').css({ top : })

}


	function sliderChanger(nextElem) {
		if (nextElem == 0) {
			var actualElemPrefix = $('a.device_button.white').attr('data-filename-prefix');
			if (++actualElemPrefix == 5) actualElemPrefix = 1;
			nextElem = $('a[data-filename-prefix="'+actualElemPrefix + '"]');
		}
		// ipad alatt a kevés browser memória miatt a képcsere esetén újratölti az oldalt, ezért sima fade-in-out effekt a cserénél
		if (isiPad) {
			if (!nextElem.hasClass('white') && !$(':animated').length) {
				nextElem.addClass('white').siblings().removeClass('white');
				var filename = 'url(Media/slider' + nextElem.attr('data-filename-prefix') + '_device_bg.png)';
				var leftPos = nextElem.attr('data-pos');
				$('#floating_bg').animate({ left: leftPos + '%'}, 1000);
				$('.inactive_main_screen')
					.css('background-image',filename)
					.animate({ opacity: 1}, 1000, function() {
						$(this)
							.removeClass('inactive_main_screen')
							.addClass('active_main_screen');
					});
				$('.active_main_screen').animate({ opacity: 0}, 1000, function() {
					$(this)
						.removeClass('active_main_screen')
						.addClass('inactive_main_screen');
				});
			}
		} else {
			if (!nextElem.hasClass('white') && !$(':animated').length) {
				nextElem.addClass('white').siblings().removeClass('white');
				var filename = 'url(Media/slider' + nextElem.attr('data-filename-prefix') + '_device_bg.png)';
				var leftPos = nextElem.attr('data-pos');
				var videoPos = nextElem.attr('data-video-position').split('/')
				$('#video_layer').animate({
					top : videoPos[0] + '%',
					left: videoPos[1] + '%',
					width : videoPos[2] + '%'
				}, 1000);
				$('#floating_bg').animate({ left: leftPos + '%'}, 1000);
				$('.inactive_main_screen')
					.css('background-image',filename)
					.animate({ left: 0}, 1000, function() {
						$(this)
							.removeClass('inactive_main_screen')
							.addClass('active_main_screen');
					});
				$('.active_main_screen').animate({ left: '-100%'}, 1000, function() {
					$(this)
						.css({ left : '100%' })
						.removeClass('active_main_screen')
						.addClass('inactive_main_screen');
				});
			}
		}
	}

$(document).ready(function() {

  fullScreenHeight = $(window).height();
  fullScreenWidth = $(window).width();

  isiPad = navigator.userAgent.match(/iPad/i) != null;

  resizewindow();

	// tablet resolution fix
	if (!window.devicePixelRatio) {
		window.devicePixelRatio = 1;
	};

	// ipad browser low memory fix
  if (isiPad) {
  	$('#main_screen2').remove();
  } else {
  	$('#main_screen3').remove();
 	}



  var systemColors = new Array('blue','green','turquise','orange','purple','red');
  var menuColors = new Array('#2685B5','#8BC53F','#24B5A8','#FF8833','#614ABF','#E63A3A');

  var sectionOffsets = new Array();

  var randomNum = Math.floor(Math.random()*systemColors.length);
  var actualSystemColor = systemColors[randomNum];
  var actualMenuColor = menuColors[randomNum];

  $('#logo').css('background-image', 'url(Media/'+actualSystemColor+'_onlive_logo_small.png)' );
  $('#down_arrow').css('background-image', 'url(Media/icon_'+actualSystemColor+'_down_arrow.png)' );
  $('#menu_screen').css('background-color', actualMenuColor);
  $('#menu_close_button').css('background-image', 'url(Media/icon_'+actualSystemColor+'_close.png)' );


	$('.device_button').on({
		click: function() {
			sliderChanger($(this));
			clearTimeout(sliderChangerTimer);
			sliderChangerTimer = window.setInterval(function() { sliderChanger(0); }, 15000 );			
			return false;
		}
	});



	$('#down_arrow').on({
		click: function() {
			var scrollingLayerOffsets = document.getElementById('scrolling_layer').getBoundingClientRect();
			if ($(window).scrollTop() + $(window).height() == $(document).height()) {
				$('html, body').stop().animate({ scrollTop : 0 }, 1000);
			} else {
				sectionOffsets[0] = $('#main_screen').height() + $('#main_screen_footer').height();
				sectionOffsets[1] = sectionOffsets[0] + $('#second_screen').height() - $('.small_brick').height();
				sectionOffsets[2] = sectionOffsets[1] + $('#third_screen').height() + $('.normal_brick').height();
				sectionOffsets[3] = sectionOffsets[2] + $('#main_screen').height() * 2;
				sectionOffsets[4] = $('#scrolling_layer').height();
				for (var i = 0; i <= sectionOffsets.length; i++) {
					if (sectionOffsets[i] - $(window).height() > Math.abs(scrollingLayerOffsets.top)) {
						$('html, body').stop().animate({ scrollTop : sectionOffsets[i] - $(window).height()}, 1000);
						break;
					}
				}
			}
		}
	});

	$('#menu_hamburger').on({
		click: function() {
			$('#menu_screen').animate({ right : 0}, 500);
		}
	});

	$('#menu_close_button').on({
		click: function() {
			$('#menu_screen').animate({ right : '-30%'}, 500);
		}
	});


	var sliderChangerTimer = window.setInterval(function() { sliderChanger(0); }, 15000 );


  $(window).scroll(function() {

		var scrollingLayerOffsets = document.getElementById('scrolling_layer').getBoundingClientRect();

		if (Math.abs(scrollingLayerOffsets.top) > $('#main_screen').height() + 200) {
			clearTimeout(sliderChangerTimer);
	  	sliderChangerTimer = null;
		} else if (sliderChangerTimer == null) {
			sliderChangerTimer = window.setInterval(function() { sliderChanger(0); }, 15000 );			
		}

  	if ($('#down_arrow').css('opacity') == 1)
			$('#down_arrow').stop().fadeOut('slow');

  	clearTimeout($.data(this, 'scrollTimer'));
  	$.data(this, 'scrollTimer', setTimeout(function() {
  		$('#down_arrow').stop().fadeIn('slow');
  	}, 250));

  	if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
  		if (!$('#down_arrow').hasClass('rotate')) {
				$('#down_arrow').addClass('rotate');
  		}
   	} else $('#down_arrow').removeClass('rotate');

  });


});

$(window).resize(function(){ resizewindow();});

// a biztonsag kedveert ujrarendezzuk a kepernyot, ha minden lejott
$(window).load(function(){ resizewindow();});

