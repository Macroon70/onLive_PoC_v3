// TODO : add comments and rearrange lines

$(window).load(function() {
	$('body').fadeIn(1000);
});

var fullScreenHeight;
var fullScreenWidth;

var systemColors = new Array('blue','green','turquise','orange','purple','red');
var menuColors = new Array('#2685B5','#8BC53F','#24B5A8','#FF8833','#614ABF','#E63A3A');

var sectionOffsets = new Array();

var randomNum = Math.floor(Math.random()*systemColors.length);

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


	$('#features_wrapper h3').on({
		mouseover: function() {
			var ringsName = $(this).attr('data-ringname');
			$('#featurerings_wrapper div.'+ringsName).fadeIn(300);
			$('#featurerings_wrapper div:not(.'+ringsName+')').fadeOut(300);
		}
	})


  fullScreenHeight = $(window).height();
  fullScreenWidth = $(window).width();

  isiPad = navigator.userAgent.match(/iPad/i) != null;

  resizewindow();
  //setHamburgerPosition();

	// tablet resolution fix
	if (!window.devicePixelRatio) {
		window.devicePixelRatio = 1;
	};


  var actualSystemColor = systemColors[randomNum];
  var actualMenuColor = menuColors[randomNum];

  $('#logo').css('background-image', 'url(images/games_site/logo_'+actualSystemColor+'.png)' );
  $('#footer_logo').css('background-image', 'url(images/games_site/logo_'+actualSystemColor+'.png)' );

  $('#down_arrow').css('background-image', 'url(images/games_site/button_down_'+actualSystemColor+'.png)' );
  $('#menu_screen').css('background-color', actualMenuColor);
  $('#menu_close_button').css('background-image', 'url(images/games_site/button_close_'+actualSystemColor+'.png)' );


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


	var sliderChangerTimer = window.setInterval(function() { sliderChanger(0); }, 15000 );


  $(window).scroll(function() {


		var scrollingLayerOffsets = document.getElementById('scrolling_layer').getBoundingClientRect();

  	// parallax effect - simple :)
  	var parallaxSpeed = 0.15 // exponencial value
  	$('#parallax_wrapper').css({ top : scrollingLayerOffsets.top * parallaxSpeed });

		//setHamburgerPosition();

		if (Math.abs(scrollingLayerOffsets.top) > $('#main_screen').height() + 200) {
			clearTimeout(sliderChangerTimer);
	  	sliderChangerTimer = null;
	  	if ( parseInt($('#video_sizer').css('top')) < $('#main_screen').height()) {
	  		$('#video_sizer').css({
	  			top : '48.6%',
	  			left: '30%',
	  			width: '52%'
	  		});
	  	} 
		} else if (sliderChangerTimer == null) {
			sliderChangerTimer = window.setInterval(function() { sliderChanger(0); }, 15000 );
			if ( parseInt($('#video_sizer').css('top')) > $('#main_screen').height()) {
				var actualMainScreenVideoOffsets = $('div.device_button.white').attr('data-video-position').split('/');				
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
		click: function(event) {
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

 


});

$(window).resize(function(){ resizewindow();});

// a biztonsag kedveert ujrarendezzuk a kepernyot, ha minden lejott
$(window).load(function(){ resizewindow();});

