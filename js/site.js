// TODO : add comments and rearrange lines
// TODO : optimizing resize method for each sites

$(window).load(function() {
	$('body').fadeIn(1000);
});

var fullScreenHeight;
var fullScreenWidth;

var systemColors = new Array('blue','green','turquise','orange','purple','red');
var menuColors = new Array('c8r2_bg','c6r2_bg','c7r2_bg','c5r2_bg','c9r2_bg','c4r2_bg');



var sectionOffsets = new Array();

randomNum = Math.floor(Math.random()*systemColors.length);

$('link[rel=icon]').attr('href','images/games_site/favico_'+systemColors[randomNum]+'.ico');

	function setHamburgerPosition() {
		var scrollingLayerOffsetsInside = document.getElementById('scrolling_layer').getBoundingClientRect();
		if (Math.abs(scrollingLayerOffsetsInside.top) > $(window).height() / 10) {
			$('#menu_hamburger').css({ top : '5%' });
		} else {
			var fivePercent = $(window).width() * 0.05;
			//var fivePercent = $('#logo').height();
			$('#menu_hamburger').css({ top : ($(window).height() / 10) + fivePercent  - Math.abs(scrollingLayerOffsetsInside.top) });
		}		
	}

	function sliderChanger(nextElem) {
		var actualElemPrefix = $('div.device_button.white').attr('data-filename-prefix');
		var nextElemPrefix;
		if (nextElem == 0) {
			nextElemPrefix = parseInt(actualElemPrefix) + 1;
			if (nextElemPrefix == 4) nextElemPrefix = 1;
			nextElem = $('div[data-filename-prefix="'+nextElemPrefix + '"]');
		} else {
			nextElemPrefix = nextElem.attr('data-filename-prefix');
		}
		var nextElemVideoPos = nextElem.attr('data-video-position');
		var activeLayer = $('#main_screen'+actualElemPrefix);
		var pushLayer = $('#main_screen'+nextElemPrefix);
		if (!nextElem.hasClass('white') && !$('.active_main_screen').is(':animated')) {
			nextElem.addClass('white').siblings().removeClass('white');
			pushLayer
				.fadeIn(1000, function() {
					$(this)
						.removeClass('inactive_main_screen')
						.addClass('active_main_screen');
				});
			activeLayer
				.fadeOut(1000, function() {
					$(this)
						.removeClass('active_main_screen')
						.addClass('inactive_main_screen');
				});
			actualMainScreenVideoOffsets = nextElemVideoPos.split('/');
			$('#video_sizer')
				.animate({
					top : actualMainScreenVideoOffsets[0] + '%',
					left: actualMainScreenVideoOffsets[1] + '%',
					width : actualMainScreenVideoOffsets[2] + '%',
				}, 1000);
			$('#slider_menu_bg').animate({
				left : (13 + (nextElemPrefix * 22)) + '%'
			}, 1000);
		}


	}


$(document).ready(function() {


	// Hardware methods
	$('#features_wrapper h3').on({
		mouseover: function() {
			var ringsName = $(this).attr('data-ringname');
			$(this)
				.addClass('c5r2_imp')
				.siblings()
					.removeClass('c5r2_imp');
			$('#featurerings_wrapper div.'+ringsName).stop().animate({ opacity : 1 },300);
			$('#featurerings_wrapper div:not(.'+ringsName+')').stop().animate({ opacity : 0 },300);
		}
	});

	$('.fring').on({
		mouseover: function() {
			if ($(this).css('opacity') == 0) {
				var ringsName = $(this).attr('data-ringname');
				$('#featurerings_wrapper div.'+ringsName).stop().animate({ opacity : 1 },300);
				$('#featurerings_wrapper div:not(.'+ringsName+')').stop().animate({ opacity : 0 },300);
				$('#features_wrapper h3.'+ringsName)
					.addClass('c5r2_imp')
					.siblings()
						.removeClass('c5r2_imp');

			}
		}
	});



  fullScreenHeight = $(window).height();
  fullScreenWidth = $(window).width();

  isiPad = navigator.userAgent.match(/iPad/i) != null;

  if (isiPad) {
  	$('#layers_wrapper').css({'max-width': '2048px'});
  };

  resizewindow();
  //setHamburgerPosition();

	// tablet resolution fix
	if (!window.devicePixelRatio) {
		window.devicePixelRatio = 1;
	};


  actualSystemColor = systemColors[randomNum];
  actualMenuColor = menuColors[randomNum];

  $('#logo').css('background-image', 'url(images/games_site/logo_'+actualSystemColor+'.png)' );
  $('#footer_logo').css('background-image', 'url(images/games_site/logo_'+actualSystemColor+'.png)' );

  $('#down_arrow').css('background-image', 'url(images/games_site/button_down_'+actualSystemColor+'.png)' );
  $('#menu_screen').addClass(actualMenuColor);
  $('#menu_close_button').css('background-image', 'url(images/games_site/button_close_'+actualSystemColor+'.png)' );

  // Catalog Colors


	$('div.device_button').on({
		click: function(event) {
			sliderChanger($(this));
			clearTimeout(sliderChangerTimer);
			sliderChangerTimer = window.setInterval(function() { sliderChanger(0); }, 15000 );
		}
	});



	$('#down_arrow').on({
		click: function() {
			var scrollingLayerOffsets = document.getElementById('scrolling_layer').getBoundingClientRect();
			if ($(window).scrollTop() + $(window).height() == $(document).height()) {
				$('html, body').stop().animate({ scrollTop : 0 }, 1000);
			} else {
				sectionOffsets[0] = $('#main_screen').height() + $('#main_screen_footer').height();
				sectionOffsets[1] = sectionOffsets[0] + $('.normal_brick').height() + $(window).height();
				sectionOffsets[2] = sectionOffsets[1] + $('#third_screen').height() + $('.normal_brick').height();
				sectionOffsets[3] = sectionOffsets[2] + $('#main_screen').height() * 2 + $('.normal_brick').height();
				sectionOffsets[4] = $('#scrolling_layer').height();
				for (var i = 0; i <= sectionOffsets.length; i++) {
					if (sectionOffsets[i] - $(window).height() > Math.abs(scrollingLayerOffsets.top)) {
						$('html, body').stop().animate({ scrollTop : sectionOffsets[i] - $(window).height()}, 2000);
						break;
					}
				}
			}
		}
	});

	$('#menu_hamburger').on({
		click: function() {
			$('#menu_screen').animate({ right : 0}, 300);
		}
	});

	$('#menu_close_button').on({
		click: function() {
			$('#menu_screen').animate({ right : '-130%'}, 300);
		}
	});

	document.addEventListener('click', function(e) {
		if ($('#menu_screen').css('right') != 0 && !$('#menu_screen').is(':animated')) {
			$('#menu_close_button').trigger('click');
		}
	}, true);


});

$(window).resize(function(){ resizewindow();});

// a biztonsag kedveert ujrarendezzuk a kepernyot, ha minden lejott
$(window).load(function(){ resizewindow();});
