/************************************************************/
/* Functions                                                */
/************************************************************/
/************************************************************/
/* Video player functions                                   */
/************************************************************/
function playerComplete(pa){
  $('#'+pa).parents('.playing_small_video').removeClass('playing_small_video');
}

function createPlayer(pa, se, oc){
  jwplayer(pa).setup($.extend({},{
    analytics: {"enabled": false},
    aspectratio: "16:9",
    autostart: false,
    controls: false,
    displaytitle: false,
    fallback: false,
    flashplayer: "http://a.jwpcdn.com/player/6/653609/jwplayer.flash.swf",
    height: "100%",
    html5player: "http://a.jwpcdn.com/player/6/653609/jwplayer.html5.js",
    plugins: {"http://a.jwpcdn.com/player/6/653609/ping.js": {"pixel": "http://content.bitsontherun.com/ping.gif"}},
    primary: "html5",
    repeat: false,
    stretching: "uniform",
    width: "100%"
  },se));
  if (oc != null){
    jwplayer(pa).onComplete(function(){oc(pa);});
  }
}

/************************************************************/
/* Hamburger poistion                                       */
/************************************************************/
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


/************************************************************/
/* Window onLoad                                            */
/************************************************************/
$(window).load(function() {
	$('body').fadeIn(1000);
});

/************************************************************/
/* Site constants / colorizing                              */
/************************************************************/
var fullScreenHeight;
var fullScreenWidth;

systemColors = new Array('blue','green','turquise','orange','purple','red');
var menuColors = new Array('c8r2_bg','c6r2_bg','c7r2_bg','c5r2_bg','c9r2_bg','c4r2_bg');

var sectionOffsets = new Array();

randomNum = Math.floor(Math.random()*systemColors.length);

$('link[rel=icon]').attr('href','images/games_site/favico_'+systemColors[randomNum]+'.ico');


/************************************************************/
/* Scrolling methods                                        */
/************************************************************/
$(window).scroll(function() {

    /************************************************************/
    /* Parallax effect                                          */
    /************************************************************/
    scrollingLayerOffsets = document.getElementById('scrolling_layer').getBoundingClientRect();
    var parallaxSpeed = 0.15 // exponencial value
    $('#parallax_wrapper').css({ top : scrollingLayerOffsets.top * parallaxSpeed });

    /************************************************************/
    /* Down Button                                              */
    /************************************************************/
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

$(document).ready(function() {

  fullScreenHeight = $(window).height();
  fullScreenWidth = $(window).width();

  resizewindow();

	/************************************************************/
	/* Client Detects                                           */
	/************************************************************/
	/************************************************************/
	/* iPad                                                     */
	/************************************************************/
  isiPad = navigator.userAgent.match(/iPad/i) != null;

  if (isiPad) {
  	$('#layers_wrapper').css({'max-width': '2048px'});
  };
	if (!window.devicePixelRatio) {
		window.devicePixelRatio = 1;
	};


	/************************************************************/
	/* load IE specific controls for IE                         */
	/************************************************************/
  if (navigator.userAgent.match(/msie/i) ){
    $.getScript('./js/ie_pointer.js');
  }

	/************************************************************/
	/* Colorize menu                                            */
	/************************************************************/
	$('#menu_screen p').addClass('white_color');
  actualSystemColor = systemColors[randomNum];
  actualMenuColor = menuColors[randomNum];
  $('#logo').css('background-image', 'url(images/games_site/logo_'+actualSystemColor+'.png)' );
  $('#footer_logo').css('background-image', 'url(images/games_site/logo_'+actualSystemColor+'.png)' );
  $('#down_arrow').css('background-image', 'url(images/games_site/button_down_'+actualSystemColor+'.png)' );
  $('#menu_screen').addClass(actualMenuColor);
  $('#menu_close_button').css('background-image', 'url(images/games_site/button_close_'+actualSystemColor+'.png)' );

	/************************************************************/
	/* User interactions - Footer buttons                       */
	/************************************************************/
  $('#link_wrapper > a').on({
    mouseover: function() {
      $(this)
        .addClass('white_imp')
        .children('img')
          .addClass('white_bg_imp')
    },
    mouseleave: function() {
      $(this)
        .removeClass('white_imp')
        .children('img')
          .removeClass('white_bg_imp')
    }
  });

	/************************************************************/
	/* User interactions - Hamburger                            */
	/************************************************************/
	$('#menu_hamburger').on({
		click: function() {
			$('#menu_screen').animate({ right : 0}, 300);
		}
	});

	/************************************************************/
	/* User interactions - Menu close                           */
	/************************************************************/
	$('#menu_close_button').on({
		click: function() {
			$('#menu_screen').animate({ right : '-130%'}, 300);
		}
	});

	/************************************************************/
	/* User interactions - Global click events listener         */
	/************************************************************/
	document.addEventListener('click', function(e) {
		if ($('#menu_screen').css('right') != 0 && !$('#menu_screen').is(':animated')) {
			$('#menu_close_button').trigger('click');
		}
    var toElem=e.relatedTarget|| e.toElement;
		if ($(toElem)[0] === $('img.details_close.cloned_details')[0]) {
			$('img.details_close.cloned_details').parent().remove();
      $('.game_brick')
        .css({ 
          'z-index' : 0,
          'border-color' : 'transparent' })
        .removeClass('selected_brick content_shadow_reverse')
        .children('.play_trailer')
        	.removeClass('show_play_controll');
		}
    $('.input_box').each(function() {
      $(this).children('ul').animate({ height : 0}, 100);
    });
	}, true);


});

$(window).resize(function(){ resizewindow();});

// a biztonsag kedveert ujrarendezzuk a kepernyot, ha minden lejott
$(window).load(function(){ resizewindow();});
