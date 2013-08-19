// TODO : add comments and rearrange lines

var fullScreenHeight;
var fullScreenWidth;

var systemColors = new Array('blue','green','turquise','orange','purple','red');
var menuColors = new Array('#2685B5','#8BC53F','#24B5A8','#FF8833','#614ABF','#E63A3A');

var sectionOffsets = new Array();

var randomNum = Math.floor(Math.random()*systemColors.length);

$('link[rel=icon]').attr('href','Media/favico_'+systemColors[randomNum]+'.ico');

function resizewindow(){
  //return;
  var actualWindowWidth = $(this).width();
  var actualWindowHeight = $(this).height();
  
  // csak egy resize legyen
  $('body').css({'font-size': (actualWindowWidth / 2048) * 110 + '%'});


  var documentScreenWidth = document.body.offsetWidth;

  $('#main_headline_text').css({ height : $('#main_headline_text').width() * 0.61 });

  var mainScreenFooter = document.getElementById('main_screen_footer');
  var mainScreenFooterOffset = mainScreenFooter.getBoundingClientRect();
  mainScreenFooter.setAttribute('style' , 'height: '+documentScreenWidth * 0.301+'px !important');

  $('#third_headline_text').css({ height : $('#third_headline_text').width() * 0.51 });

  $('img').css({ 'max-width': (actualWindowWidth / 1600) * actualWindowWidth });
  $('img').css({ 'max-height': (actualWindowWidth / 1600) * actualWindowWidth });

  $('.device_button').each(function() {
  	$(this).children('div').css({ height : $(this).width() * 0.4673 });
  });
  $('#main_screen').css({ height : actualWindowWidth * 0.446 });
  $('#menu_screen').css({ height : actualWindowHeight});
  $('#menu_logo_transparent').css({ height : $('#menu_logo_transparent').width()});
  $('#logo').css({ height : $('#logo').width() * 2});
  $('#menu_hamburger').css({ height : $('#menu_hamburger').width()});
  $('#down_arrow').css({ height : $('#menu_hamburger').height()});
  $('.divider_up_button > img').css({height : actualWindowWidth*0.05 , width : actualWindowWidth*0.05});
  $('.divider_button > img').css({height : actualWindowWidth*0.05, width : actualWindowWidth*0.05});
  $('.divider_up_button').css({ top : ($('.divider_up_button > img').width() / 2) * -1 });
  $('.divider_button').css({ bottom : ($('.divider_button > img').width() / 2) * -1 });
  $('#menu_close_button').css({ height : $('#menu_hamburger').height()});
  $('#main_screen1').css({ height : actualWindowWidth * 0.446 });
  $('#main_screen2').css({ height : actualWindowWidth * 0.446 });
  $('#main_screen3').css({ height : actualWindowWidth * 0.446 });
  $('.small_brick').css({ height : actualWindowWidth * 0.0562});
  $('.small_doubled_brick').css({ height : actualWindowWidth * 0.0562 * 2});
  $('.normal_brick').css({ height : actualWindowWidth * 0.0562 * 2});
  $('.negativ_margin').css({ marginTop : $('.normal_brick').height() / 2 * -1 });	
  $('.big_brick').css({ height : $('.normal_brick').width() * 0.0562 * 18});
  $('.onehalf_brick').css({ height : actualWindowWidth * 0.0562 * 5});
  $('.onehalf_brick_game').css({ height : actualWindowWidth * 0.0562 * 3});
  $('#third_screen_bg').css({ height : actualWindowWidth * 0.7 });
  $('#third_screen').css({ height : actualWindowWidth * 0.7 - ($('.normal_brick').height() / 2)});
  $('.negativ_top').css({ top : $('.normal_brick').height() / 2 * -1 });
  $('#player_avatars').css({ height : $('#player_avatars').width() * 0.9 });
  $('.footer_box').css({ height : $('.footer_box').width() * 0.623 });
  $('.footer_big_box').css({ height : $('.footer_box').height() });
  $('#footer_logo').css({ height : $('#footer_logo').width() * 0.272 });
	$('#forth_screen').css({ height : actualWindowWidth * 0.897});
	$('#forth_screen_bg').css({ height : $('#forth_screen_bg').width() * 0.76 });
  $('.inherit_height').each(function() {
    $(this).css({ height : $(this).parent().height() });
  });

  $('.avatar_icon').each(function() {
  	$(this).css({ height : $(this).width() });
  })
  $('.video_images').each(function() {
  	$(this).css({ height : $(this).width() * 0.56});
  })
  $('.content_border').each(function() {
  	$(this).css({ 
  		'border-color': '#ffffff',
  		'border-width' : $(this).width() * 0.03 + 'px',
  		'border-style' : 'solid' });
  });
  $('#video_layer').css({ height : $('#scrolling_layer').height() });
  $('#parallax_layer').css({ height : $('#scrolling_layer').height()});
  

  $('#parallax_wrapper').css({ height : $('#scrolling_layer').height() * 2});


  $('#parallax_first_headline').css({ height : $('#parallax_first_headline').width() * 0.61 });
  $('#parallax_second_headline').css({ height : $('#parallax_second_headline').width() * 0.5});  

}


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
		if (nextElem == 0) {
			var actualElemPrefix = $('a.device_button.white').attr('data-filename-prefix');
			if (++actualElemPrefix == 5) actualElemPrefix = 1;
			nextElem = $('a[data-filename-prefix="'+actualElemPrefix + '"]');
		}
		// iPad refresh browser on every animate because low its memory size. Using fade-in-out effect instead
		if (isiPad) {
			if (!nextElem.hasClass('white') && !$(':animated').length) {
				nextElem.addClass('white').siblings().removeClass('white');
				var filename = 'url(Media/slider' + nextElem.attr('data-filename-prefix') + '_device_bg.png)';
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
		}
	}

$(document).ready(function() {


  fullScreenHeight = $(window).height();
  fullScreenWidth = $(window).width();

  isiPad = navigator.userAgent.match(/iPad/i) != null;

  resizewindow();
  setHamburgerPosition();

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



  var actualSystemColor = systemColors[randomNum];
  var actualMenuColor = menuColors[randomNum];

  $('#logo').css('background-image', 'url(Media/'+actualSystemColor+'_onlive_logo_small.png)' );
  $('#footer_logo').css('background-image', 'url(Media/'+actualSystemColor+'_onlive_logo_small.png)' );

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
						$('html, body').stop().animate({ scrollTop : sectionOffsets[i] - $(window).height()}, 2000);
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


});

$(window).resize(function(){ resizewindow();});

// a biztonsag kedveert ujrarendezzuk a kepernyot, ha minden lejott
$(window).load(function(){ resizewindow();});

