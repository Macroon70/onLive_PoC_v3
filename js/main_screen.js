/************************************************************/
/* Functions                                                */
/************************************************************/
/************************************************************/
/* SliderChanger                                            */
/************************************************************/

function sliderChanger(nextElem) {
  var actualElemPrefix = $('div.device_button.white_color').attr('data-filename-prefix');
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
  if (!nextElem.hasClass('white_color') && !$('.active_main_screen').is(':animated')) {
    nextElem
      .addClass('white_color')
        .children('p')
          .addClass('white_imp');
    nextElem
      .siblings()
      .removeClass('white_color')
      .children('p')
        .removeClass('white_imp');
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
    $('#slider_menu_bg').css({ left: (13 + (nextElemPrefix * 22)) + '%' });
    /*
    $('#slider_menu_bg').animate({
      left : (13 + (nextElemPrefix * 22)) + '%'
    }, 1000);
    */
  }
}


/************************************************************/
/* Resize Values                                            */
/************************************************************/
function resizewindow(){
<<<<<<< HEAD
  //return;
  var actualWindowWidth = $(this).width();
  var actualWindowHeight = $(this).height();
  
  // csak egy resize legyen
=======
  
  var actualWindowWidth = $(this).width();
  var actualWindowHeight = $(this).height();

  actualWindowWidth = $('#layers_wrapper').width();

  $('#main_screen').css({ height : actualWindowWidth * 0.42 });
  $('#main_screen_footer').css({ height: actualWindowWidth * 0.2344 });



  /************************************************************/
  /* Resize Values                                            */
  /************************************************************/
>>>>>>> v4.0
  $('body').css({'font-size': (actualWindowWidth / 2048) * 110 + '%'});
  var documentScreenWidth = document.body.offsetWidth;
<<<<<<< HEAD

  $('#main_headline_text').css({ height : $('#main_headline_text').width() * 0.61 });
  $('#main_screen_footer').css({ height: documentScreenWidth * 0.31 });

  $('#third_headline_text').css({ height : $('#third_headline_text').width() * 0.51 });

  $('img').css({ 'max-width': (actualWindowWidth / 1600) * actualWindowWidth });
  $('img').css({ 'max-height': (actualWindowWidth / 1600) * actualWindowWidth });

  $('.device_button').each(function() {
  	$(this).children('div').css({ height : $(this).width() * 0.4673 });
  });
  $('#main_screen').css({ height : actualWindowWidth * 0.446 });
  $('#menu_screen').css({ height : actualWindowHeight});
=======
  documentScreenWidth = $('#layers_wrapper').width();
  $('#main_headline_text').css({ height : $('#main_headline_text').width() * 0.61 });
  $('#controllers_wrapper').css({ height : actualWindowHeight });
  $('img').css({ 'max-width': (actualWindowWidth / 1280) * actualWindowWidth });
  $('img').css({ 'max-height': (actualWindowWidth / 1280) * actualWindowWidth });
  $('.device_button').each(function() {
  	$(this).children('div').css({ height : $(this).width() * 0.4673 });
  });
>>>>>>> v4.0
  $('#menu_logo_transparent').css({ height : $('#menu_logo_transparent').width()});
  $('#logo').css({ 
    height : $('#logo').width() * 2,
    top: actualWindowWidth * 0.02 });
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
<<<<<<< HEAD
  $('.small_brick').css({ height : actualWindowWidth * 0.0562});
  $('.small_doubled_brick').css({ height : actualWindowWidth * 0.0562 * 2});
  $('.normal_brick').css({ height : actualWindowWidth * 0.0562 * 2});
  $('.negativ_margin').css({ marginTop : $('.normal_brick').height() / 2 * -1 });	
  $('.big_brick').css({ height : $('.normal_brick').width() * 0.0562 * 18});
  $('.onehalf_brick').css({ height : actualWindowWidth * 0.0562 * 5});
  $('.onehalf_brick_game').css({ height : actualWindowWidth * 0.0562 * 3});
  $('#third_screen_bg').css({ height : actualWindowWidth * 0.7 });
  $('#third_screen').css({ height : actualWindowWidth * 0.7 - ($('.normal_brick').height() / 2)});
=======
  var smallBrickHeight = $('.small_brick').width() * 0.555;
  $('.small_brick').css({ height : smallBrickHeight});
  $('.small_doubled_brick').css({ height : smallBrickHeight * 2});
  $('.normal_brick').css({ height : smallBrickHeight * 2});
  $('.negativ_margin').css({ marginTop : smallBrickHeight * - 1 });	
  $('.big_brick').css({ height : $('.normal_brick').width() * 0.0563 * 18});
  $('.onehalf_brick').css({ height : smallBrickHeight * 4});
  $('.onehalf_brick_game').css({ height : smallBrickHeight * 3});
  $('#third_screen').css({ height : actualWindowWidth * 0.782 });
>>>>>>> v4.0
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
<<<<<<< HEAD


  $('#parallax_first_headline').css({ height : $('#parallax_first_headline').width() * 0.61 });
  $('#parallax_second_headline').css({ height : $('#parallax_second_headline').width() * 0.5});  
=======
  $('#video_image4_above_bg').css({
    width: $('#video_image4').width(),
    height: $('#video_image4').height() * 1.1
  });
  $('#parallax_first_headline').css({ height : $('#parallax_first_headline').width() * 0.61 });
  $('#parallax_second_headline').css({ height : $('#parallax_second_headline').width() * 0.5});  
  $('#parallax_third_headline').css({ height : $('#parallax_third_headline').width() * 0.51 });
  $('#parallax_forth_headline').css({ height : $('#parallax_first_headline').height()});
}

/************************************************************/
/* Scrolling methods                                        */
/************************************************************/
$(window).scroll(function() {
>>>>>>> v4.0

  /************************************************************/
  /* Main video copy between two main video position          */
  /************************************************************/
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
      var actualMainScreenVideoOffsets = $('div.device_button.white_color').attr('data-video-position').split('/');       
      $('#video_sizer').css({
        top : actualMainScreenVideoOffsets[0] + '%',
        left: actualMainScreenVideoOffsets[1] + '%',
        width : actualMainScreenVideoOffsets[2] + '%',
      });

    }
  }

});

/************************************************************/
/* Fire sliderChanger                                       */
/************************************************************/
sliderChangerTimer = window.setInterval(function() { sliderChanger(0); }, 15000 );

/************************************************************/
/* Document Ready                                           */
/************************************************************/
$(document).ready(function() {

  /************************************************************/
  /* User interaction - Slider buttons                        */
  /************************************************************/
  $('.device_button').on({
    mouseover: function() {
      $(this)
        .children('p')
          .addClass('white_imp');
    },
    mouseleave: function() {
      if (!$(this).hasClass('white_color')) {      
        $(this)
          .children('p')
            .removeClass('white_imp');
        }
      }
  });

  $('div.device_button').on({
    click: function(event) {
      sliderChanger($(this));
      clearTimeout(sliderChangerTimer);
      sliderChangerTimer = window.setInterval(function() { sliderChanger(0); }, 15000 );
    }
  });

  /************************************************************/
  /* User interaction - Down button                           */
  /************************************************************/
  $('#down_arrow').on({
    click: function() {
      sectionOffsets[0] = $('#main_screen').height() + $('#main_screen_footer').height() + $('.normal_brick').height() + $(window).height();
      sectionOffsets[1] = sectionOffsets[0] + $('#third_screen').height() + $('.normal_brick').height();
      sectionOffsets[2] = sectionOffsets[1] + $('#main_screen').height() * 2 + $('.normal_brick').height();
      sectionOffsets[3] = $('#scrolling_layer').height();
      moveToNextBreakpoint();
    }
  });

  /************************************************************/
  /* User interactions - Global click events listener         */
  /************************************************************/
  document.addEventListener('click', function(e) {
    if ($('#menu_screen').css('right') != 0 && !$('#menu_screen').is(':animated')) {
      $('#menu_close_button').trigger('click');
    }
  }, true);


  /************************************************************/
  /* Small Video player                                       */
  /************************************************************/
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
						if ($(this).hasClass('content_border')) {
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
					var idName = $(this).children().first().attr('id');
					event.stopPropagation();
	    		jwplayer( idName+'_ply').pause(true);
				} else { 
					$(this).addClass('playing_small_video');
					var idName = $(this).children().first().attr('id');
					event.stopPropagation();
	    		jwplayer( idName+'_ply').play(true);
				}
			}
		}
	});

  /************************************************************/
  /* Initialize small video resources                         */
  /************************************************************/
  var pl1 =  {playlist:
      [{
          image: "./images/games_site/welcome/gamepic_dirt3_headline.png",
          sources: [
            {file: "http://www.liandesign.hu/onLive_v3/media/Dirt3_01.mp4"},
            {file: "http://www.liandesign.hu/onLive_v3/media/Dirt3_01.oggtheora.ogv"}
          ]
      }]};
  var pl2 =  {playlist:
      [{
          image: "./images/games_site/welcome/gamepic_dirt3_headline.png",
          sources: [
            {file: "http://www.liandesign.hu/onLive_v3/media/Dirt3_01.mp4"},
            {file: "http://www.liandesign.hu/onLive_v3/media/Dirt3_01.oggtheora.ogv"}
          ]
      }]};
  var pl3 =  {playlist:
      [{
          image: "./images/games_site/welcome/gamepic_dirt3_headline.png",
          sources: [
            {file: "http://www.liandesign.hu/onLive_v3/media/Dirt3_01.mp4"},
            {file: "http://www.liandesign.hu/onLive_v3/media/Dirt3_01.oggtheora.ogv"}
          ]
      }]};
  var plm =  {playlist:
      [{
          image: "./images/games_site/welcome/gamepic_dirt3_headline.png",
          sources: [
            {file: "http://www.liandesign.hu/onLive_v3/media/Dirt3_01.640.mp4"},
            {file: "http://www.liandesign.hu/onLive_v3/media/Dirt3_01.oggtheora.ogv"}
          ]
      }]};

  createPlayer("small_video_2_ply", $.extend({}, pl1, {autostart: false, repeat: false, mute: true, controls: false}), playerComplete);
  createPlayer("small_video_3_ply", $.extend({}, pl2, {autostart: false, repeat: false, mute: true, controls: false}), playerComplete);
  createPlayer("small_video_1_ply", $.extend({}, pl3, {autostart: false, repeat: false, mute: true, controls: false}), playerComplete);
  createPlayer("main_video_ply", $.extend({}, plm, {autostart: true, repeat: true, mute: true, controls: false}));


});


