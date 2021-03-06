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
    isClickable = (isClickable) ? 'visible' : 'none';
    targetLayer = $('#parallax_layer'+layer+' .parallax_wrapper');
    absPos = document.getElementById($(elem).attr('id')).getBoundingClientRect();
    // FF refresh fix
    targetPos = document.getElementById('scrolling_layer').getBoundingClientRect();
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

<<<<<<< HEAD
=======
/************************************************************/
/* Window onLoad                                            */
/************************************************************/
$(window).load(function() {
	$('body').fadeIn(1000);
});

/************************************************************/
/* Site constants / colorizing                              */
/************************************************************/
>>>>>>> v4.0
var fullScreenHeight;
var fullScreenWidth;

systemColors = new Array('blue','green','turquise','orange','purple','red');
var menuColors = new Array('c8r2_bg','c6r2_bg','c7r2_bg','c5r2_bg','c9r2_bg','c4r2_bg');

var sectionOffsets = new Array();

randomNum = Math.floor(Math.random()*systemColors.length);

$('link[rel=icon]').attr('href','images/games_site/favico_'+systemColors[randomNum]+'.ico');

<<<<<<< HEAD
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
<<<<<<< HEAD
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
=======
		if (nextElem == 0) {
			var actualElemPrefix = $('a.device_button.white').attr('data-filename-prefix');
			if (++actualElemPrefix == 5) actualElemPrefix = 1;
			nextElem = $('a[data-filename-prefix="'+actualElemPrefix + '"]');
		}
		// iPad refresh browser on every animate because low its memory size. Using fade-in-out effect instead
		if (isiPad) {
			if (!nextElem.hasClass('white') && !$(':animated').length) {
				nextElem.addClass('white').siblings().removeClass('white');
				var filename = 'url(images/games_site/slider' + nextElem.attr('data-filename-prefix') + '_device_bg.png)';
				$('.inactive_main_screen')
					.css('background-image',filename)
					.animate({ opacity: 1}, 1000, function() {
						$(this)
							.removeClass('inactive_main_screen')
							.addClass('active_main_screen');
					});
				$('.active_main_screen').animate({ opacity: 0}, 1000, function() {
>>>>>>> parent of b3e6ce2... Merge branch 'v3.5'
					$(this)
						.removeClass('active_main_screen')
						.addClass('inactive_main_screen');
				});
<<<<<<< HEAD
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
=======
			}
		} else {
			if (!nextElem.hasClass('white') && !$(':animated').length) {
				nextElem.addClass('white').siblings().removeClass('white');
				var filename = 'url(images/games_site/slider' + nextElem.attr('data-filename-prefix') + '_device_bg.png)';
				var videoPos = nextElem.attr('data-video-position').split('/')
				$('#video_sizer').animate({
					top : videoPos[0] + '%',
					left: videoPos[1] + '%',
					width : videoPos[2] + '%',
					'transform': 'rotate('+videoPos[3]+'deg)',
					'-webkit-transform':'rotate('+videoPos[3]+'deg)',
					'-moz-transform':'rotate('+videoPos[3]+'deg)',
					'-ms-transform':'rotate('+videoPos[3]+'deg)',
					'-o-transform':'rotate('+videoPos[3]+'deg)'										
				}, 1000);
				$('.inactive_main_screen')
					.css({
						'background-image' : filename,
						display : 'block'	})
					.animate({ left: 0}, 1000, function() {
						$(this)
							.removeClass('inactive_main_screen')
							.addClass('active_main_screen');
					});
				$('.active_main_screen').animate({ left: '-100%'}, 1000, function() {
					$(this)
						.css({ 
							display : 'none',
							left : '100%' })
						.removeClass('active_main_screen')
						.addClass('inactive_main_screen');
				});
			}
>>>>>>> parent of b3e6ce2... Merge branch 'v3.5'
		}
	}

$(document).ready(function() {
=======

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
>>>>>>> v4.0

    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 10) {
      if (!$('#down_arrow').hasClass('rotate')) {
        $('#down_arrow').addClass('rotate');
      }
    } else $('#down_arrow').removeClass('rotate');

<<<<<<< HEAD
=======

});

$(document).ready(function() {

>>>>>>> v4.0
  fullScreenHeight = $(window).height();
  fullScreenWidth = $(window).width();

	/************************************************************/
	/* Client Detects                                           */
	/************************************************************/
	/************************************************************/
	/* iPad                                                     */
	/************************************************************/
  isiPad = navigator.userAgent.match(/iPad/i) != null;

<<<<<<< HEAD
  resizewindow();
  setHamburgerPosition();

	// tablet resolution fix
=======
  if (isiPad) {
  	$('#layers_wrapper').css({'max-width': '2048px'});
    $('#controllers_wrapper').css({'max-width': '410px'});
  };
>>>>>>> v4.0
	if (!window.devicePixelRatio) {
		window.devicePixelRatio = 1;
	};

	// ipad browser low memory fix
  if (isiPad) {
  	$('#main_screen2').remove();
  } else {
  	$('#main_screen3').remove();
 	}



	/************************************************************/
	/* load IE specific controls for IE                         */
	/************************************************************/
  if (navigator.userAgent.match(/msie/i) ){
    $.getScript('./js/ie_pointer.js');
  }

<<<<<<< HEAD
  $('#logo').css('background-image', 'url(images/games_site/'+actualSystemColor+'_onlive_logo_small.png)' );
  $('#footer_logo').css('background-image', 'url(images/games_site/'+actualSystemColor+'_onlive_logo_small.png)' );

  $('#down_arrow').css('background-image', 'url(images/games_site/icon_'+actualSystemColor+'_down_arrow.png)' );
  $('#menu_screen').css('background-color', actualMenuColor);
  $('#menu_close_button').css('background-image', 'url(images/games_site/icon_'+actualSystemColor+'_close.png)' );
=======
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
>>>>>>> v4.0

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

<<<<<<< HEAD
<<<<<<< HEAD
	$('div.device_button').on({
		click: function(event) {
=======
	$('.device_button').on({
		click: function() {
>>>>>>> parent of b3e6ce2... Merge branch 'v3.5'
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
						$('html, body').stop().animate({ scrollTop : sectionOffsets[i] - $(window).height()}, 2000);
						break;
					}
				}
			}
		}
	});

=======
	/************************************************************/
	/* User interactions - Hamburger                            */
	/************************************************************/
>>>>>>> v4.0
	$('#menu_hamburger').on({
		click: function() {
			$('#menu_screen').animate({ right : 0}, 500);
		}
	});

	/************************************************************/
	/* User interactions - Menu close                           */
	/************************************************************/
	$('#menu_close_button').on({
		click: function() {
<<<<<<< HEAD
			$('#menu_screen').animate({ right : '-130%'}, 300);
		}
	});

<<<<<<< HEAD
	document.addEventListener('click', function(e) {
		if ($('#menu_screen').css('right') != 0 && !$('#menu_screen').is(':animated')) {
			$('#menu_close_button').trigger('click');
		}
	}, true);

=======
			$('#menu_screen').animate({ right : '-30%'}, 500);
		}
	});

>>>>>>> parent of b3e6ce2... Merge branch 'v3.5'

	var sliderChangerTimer = window.setInterval(function() { sliderChanger(0); }, 15000 );


  $(window).scroll(function() {


		var scrollingLayerOffsets = document.getElementById('scrolling_layer').getBoundingClientRect();

  	// parallax effect - simple :)
  	var parallaxSpeed = 0.35 // exponencial value
  	$('#parallax_wrapper').css({ top : scrollingLayerOffsets.top * parallaxSpeed });

		setHamburgerPosition();

		if (Math.abs(scrollingLayerOffsets.top) > $('#main_screen').height() + 200) {
			clearTimeout(sliderChangerTimer);
	  	sliderChangerTimer = null;
	  	if ( parseInt($('#video_sizer').css('top')) < $('#main_screen').height()) {
	  		$('#video_sizer').css({
	  			top : '52%',
	  			left: '32%'
	  		});
	  	} 
		} else if (sliderChangerTimer == null) {
			sliderChangerTimer = window.setInterval(function() { sliderChanger(0); }, 15000 );
			if ( parseInt($('#video_sizer').css('top')) > $('#main_screen').height()) {
				var actualMainScreenVideoOffsets = $('a.device_button.white').attr('data-video-position').split('/');				
				$('#video_sizer').css({
					top : actualMainScreenVideoOffsets[0] + '%',
					left: actualMainScreenVideoOffsets[1] + '%',
					width : actualMainScreenVideoOffsets[2] + '%',
				});

			}
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


	// Small video players controll
	$('.small_video_player').on({
		click: function() {
			var clickedZindex = $(this).css('z-index');
			if (clickedZindex != 3) {
				var idName = $(this).children().first().attr('id');
				event.stopPropagation();
    		jwplayer( idName+'_ply').play();
				$(this)
					.addClass('content_border content_shadow playing_small_video')
					.css({
						'z-index' : 3,
						'border-color': '#ffffff',
  					'border-width' : $(this).width() * 0.03 + 'px',
  					'border-style' : 'solid'
					})
					.siblings('.small_video_player').each(function() {
						var childZindex = $(this).css('z-index');
						if (childZindex == 3) $(this).css({'z-index' : 2});
						if (childZindex == 2) $(this).css({'z-index' : 1});
						if ($(this).hasClass('playing_small_video')) {
							var idName = $(this).children().first().attr('id');
							event.stopPropagation();
			    		jwplayer( idName+'_ply').pause(true);
							$(this)
								.removeClass('content_border content_shadow playing_small_video')
								.css({ border : 0 })
						}
					})
			} else {
				if ($(this).hasClass('playing_small_video')) {
					$(this).removeClass('playing_small_video')
				} else { 
					$(this).addClass('playing_small_video');
					var idName = $(this).children().first().attr('id');
					event.stopPropagation();
	    		jwplayer( idName+'_ply').play();
				}
			}
		}
	})


	// TODO : readable id name and configure player.js to our project for less codelines and disable repeating

  /* embend player */
  /** Write container **/
  if (!document.getElementById("botr_7Wi9qfSk_GjAHfwUI_div")) {
    document.write("<div id='botr_7Wi9qfSk_GjAHfwUI_div'></div>");
  }

  /** Insert fallback. **/
  var videoSource = 'http://www.liandesign.hu/onLive_v3/Media/Dirt3_01.640.mp4';
  var bgSource = 'http://content.bitsontherun.com/thumbs/7Wi9qfSk-480.jpg';
  document.getElementById("botr_7Wi9qfSk_GjAHfwUI_div").innerHTML = "<div id='botr_7Wi9qfSk_GjAHfwUI_ply' style='background:#000 "+bgSource+"'><a href='"+videoSource+"' style='display:block; width:100%; height:100%; border:none; background:transparent url(http://content.bitsontherun.com/staticfiles/play.png) no-repeat center center; text-indent:-99999px;'>Bunny Test</a></div>";

  document.getElementById("small_video_2").innerHTML = "<div id='small_video_2_ply' style='background:#000 "+bgSource+"'><a href='"+videoSource+"' style='display:block; width:100%; height:100%; border:none; background:transparent url(http://content.bitsontherun.com/staticfiles/play.png) no-repeat center center; text-indent:-99999px;'>Bunny Test</a></div>";
  document.getElementById("small_video_3").innerHTML = "<div id='small_video_3_ply' style='background:#000 "+bgSource+"'><a href='"+videoSource+"' style='display:block; width:100%; height:100%; border:none; background:transparent url(http://content.bitsontherun.com/staticfiles/play.png) no-repeat center center; text-indent:-99999px;'>Bunny Test</a></div>";
  document.getElementById("small_video_1").innerHTML = "<div id='small_video_1_ply' style='background:#000 "+bgSource+"'><a href='"+videoSource+"' style='display:block; width:100%; height:100%; border:none; background:transparent url(http://content.bitsontherun.com/staticfiles/play.png) no-repeat center center; text-indent:-99999px;'>Bunny Test</a></div>";


   /** Initialize player **/
  jwplayer.key = "EcHWjL0bMZsdo8QE0vv5IpN4yF2kjo0m";
  jwplayer("small_video_2_ply").setup({
    analytics: {"enabled": false},
    aspectratio: "16:9",
    // strange, true value not starting the video, false however start
    autostart: false,
    controls: false,
    displaytitle: false,
    fallback: true,
    flashplayer: "http://a.jwpcdn.com/player/6/653609/jwplayer.flash.swf",
    height: "100%",
    html5player: "http://a.jwpcdn.com/player/6/653609/jwplayer.html5.js",
    image: "http://content.bitsontherun.com/thumbs/7Wi9qfSk-480.jpg",
    playlist: "http://content.bitsontherun.com/jw6/7Wi9qfSk.xml",
    plugins: {"http://a.jwpcdn.com/player/6/653609/ping.js": {"pixel": "http://content.bitsontherun.com/ping.gif"}},
    primary: "flash",
    repeat: false,
    stretching: "uniform",
    width: "100%"
  });
  //jwplayer().play();
  //jwplayer().onComplete(function(){jwplayer().play();});

  /** Initialize player **/
  jwplayer.key = "EcHWjL0bMZsdo8QE0vv5IpN4yF2kjo0m";
  jwplayer("small_video_3_ply").setup({
    analytics: {"enabled": false},
    aspectratio: "16:9",
    // strange, true value not starting the video, false however start
    autostart: false,
    controls: false,
    displaytitle: false,
    fallback: true,
    flashplayer: "http://a.jwpcdn.com/player/6/653609/jwplayer.flash.swf",
    height: "100%",
    html5player: "http://a.jwpcdn.com/player/6/653609/jwplayer.html5.js",
    image: "http://content.bitsontherun.com/thumbs/7Wi9qfSk-480.jpg",
    playlist: "http://content.bitsontherun.com/jw6/7Wi9qfSk.xml",
    plugins: {"http://a.jwpcdn.com/player/6/653609/ping.js": {"pixel": "http://content.bitsontherun.com/ping.gif"}},
    primary: "flash",
    repeat: false,
    stretching: "uniform",
    width: "100%"
  });
  //jwplayer().play();
  //jwplayer().onComplete(function(){jwplayer().play();});

  /** Initialize player **/
  jwplayer.key = "EcHWjL0bMZsdo8QE0vv5IpN4yF2kjo0m";
  jwplayer("small_video_1_ply").setup({
    analytics: {"enabled": false},
    aspectratio: "16:9",
    // strange, true value not starting the video, false however start
    autostart: false,
    controls: false,
    displaytitle: false,
    fallback: true,
    flashplayer: "http://a.jwpcdn.com/player/6/653609/jwplayer.flash.swf",
    height: "100%",
    html5player: "http://a.jwpcdn.com/player/6/653609/jwplayer.html5.js",
    image: "http://content.bitsontherun.com/thumbs/7Wi9qfSk-480.jpg",
    playlist: "http://content.bitsontherun.com/jw6/7Wi9qfSk.xml",
    plugins: {"http://a.jwpcdn.com/player/6/653609/ping.js": {"pixel": "http://content.bitsontherun.com/ping.gif"}},
    primary: "flash",
    repeat: false,
    stretching: "uniform",
    width: "100%"
  });
  //jwplayer().play();
  //jwplayer().onComplete(function(){jwplayer().play();});

  /** Initialize player **/
  jwplayer.key = "EcHWjL0bMZsdo8QE0vv5IpN4yF2kjo0m";
  jwplayer("botr_7Wi9qfSk_GjAHfwUI_ply").setup({
    analytics: {"enabled": false},
    aspectratio: "16:9",
    // strange, true value not starting the video, false however start
    autostart: false,
    controls: false,
    displaytitle: false,
    fallback: false,
    flashplayer: "http://a.jwpcdn.com/player/6/653609/jwplayer.flash.swf",
    height: "100%",
    html5player: "http://a.jwpcdn.com/player/6/653609/jwplayer.html5.js",
    image: "http://content.bitsontherun.com/thumbs/7Wi9qfSk-480.jpg",
    playlist: "http://content.bitsontherun.com/jw6/7Wi9qfSk.xml",
    plugins: {"http://a.jwpcdn.com/player/6/653609/ping.js": {"pixel": "http://content.bitsontherun.com/ping.gif"}},
    primary: "flash",
    repeat: false,
    stretching: "uniform",
    width: "100%"
  });
  //jwplayer("").play();
  //jwplayer().onComplete(function(){jwplayer().play();});

 


=======
>>>>>>> v4.0
});

$(window).resize(function(){ resizewindow();});

// for safety we shall reorganize the layout when every item is loaded
$(window).load(function(){ resizewindow();});
