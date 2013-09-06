/************************************************************/
/* Functions                                                */
/************************************************************/
/************************************************************/
/* Parallax layer function                                  */
/* params:elem(object),                                     */
/*        layer(layerNum),                                  */
/*        zindex(css z-index),                              */
/*        isClickabel(object is clickable),                 */
/*        pusher(vertical push in percent)                  */
/************************************************************/
function addParallaxObject(elem,layer,zindex,isClickable,pusher) {
  if (elem != null && layer != null) {
    zindex = (zindex != null) ? zindex : 0;
    pusher = (pusher != null) ? pusher : 0;
    isClickable = (isClickable) ? 'auto' : 'none';
    targetLayer = $('#parallax_layer'+layer+' .parallax_wrapper');
    absPos = document.getElementById($(elem).attr('id')).getBoundingClientRect();
    // FF refresh fix
    targetPos = document.getElementById('scrolling_layer').getBoundingClientRect();
    console.log(targetPos.top);
    var leftPusher = 0;
    if ($(window).width() > $('.parallax_layer').width()) {
      leftPusher = (($(window).width() - $('.parallax_layer').width()) / 2);
    }
    elemBorder = (parseFloat($(elem).css('border-left-width')) || 0) * 2;
    elemPadding = (parseFloat($(elem).css('padding-left')) * 1.25 || 0);
    rightPos = parseFloat($(elem).css('right'));
    if (!isNaN(rightPos) && rightPos < 200) elemPadding += rightPos; 
    $(elem)
      .clone(true,true)
      .addClass('parallax_position')
      .attr('data-hdivider',$(elem).innerHeight() / ($(elem).innerWidth() - (elemPadding / 1.35)))
      .css({ 
        'pointer-events': isClickable,
        'position' : 'absolute !important',
        'z-index' : zindex + ' !important',
        top : ((absPos.top + Math.abs(targetPos.top)) / $(targetLayer).height()) * 100 + pusher + '%',
        left : ((absPos.left - leftPusher) / $(targetLayer).innerWidth()) * 100 + '%',
        width: ((absPos.width - (elemBorder*2) - elemPadding) / $(targetLayer).width()) * 100 + '%',
        height: $(elem).innerHeight() + 'px' })
      .appendTo(targetLayer);
    if ( $(elem).css('position') == 'absolute' ) {
      $(elem).remove();
    } else {
      $(elem).css({ 'visibility': 'hidden' }).attr('id','');
    }

  }
}

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
  jwplayer(pa).onPlay(function() {
    $('body .jwfullscreen').remove();
  });  
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
/* Down button breakpoints                                  */
/************************************************************/
function moveToNextBreakpoint() {
  var scrollingLayerOffsets = document.getElementById('scrolling_layer').getBoundingClientRect();
  if ($(window).scrollTop() + $(window).height() >= $(document).height() - 10) {
    $('html, body').stop().animate({ scrollTop : 0 }, 1000);
  } else {
    for (var i = 0; i <= sectionOffsets.length; i++) {
      if (sectionOffsets[i] - $(window).height() * 1.01 > Math.abs(scrollingLayerOffsets.top)) {
        $('html, body').stop().animate({ scrollTop : sectionOffsets[i] - $(window).height()}, 1000);
        break;
      }
    }
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
    $('.parallax_wrapper').each(function() {
      //var parallaxSpeed = 0.15 // exponencial value
      var parallaxSpeed = $(this).parent().attr('data-speed');
      $(this).css({ top : scrollingLayerOffsets.top * parallaxSpeed });
    });
    /************************************************************/
    /* Down Button                                              */
    /************************************************************/
    if ($('#down_arrow').css('opacity') == 1)
      $('#down_arrow').stop().fadeOut(100);

    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
      $('#down_arrow').stop().fadeIn(100);
    }, 1000));

    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 10) {
      if (!$('#down_arrow').hasClass('rotate')) {
        $('#down_arrow').addClass('rotate');
      }
    } else $('#down_arrow').removeClass('rotate');


});

$(document).ready(function() {

  fullScreenHeight = $(window).height();
  fullScreenWidth = $(window).width();

	/************************************************************/
	/* Client Detects                                           */
	/************************************************************/
	/************************************************************/
	/* iPad                                                     */
	/************************************************************/
  isiPad = navigator.userAgent.match(/iPad/i) != null;

  if (isiPad) {
  	$('#layers_wrapper').css({'max-width': '2048px'});
    $('#controllers_wrapper').css({'max-width': '410px'});
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

});

$(window).resize(function(){ resizewindow();});

// a biztonsag kedveert ujrarendezzuk a kepernyot, ha minden lejott
$(window).load(function(){ resizewindow();});
