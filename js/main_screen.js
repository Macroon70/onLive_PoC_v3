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
    actualMainScreenVideoOffsets = nextElemVideoPos.split('/');
    parentOffsets = document.getElementById('video_layer').getBoundingClientRect();
    $('#video_sizer')
      .stop().animate({
        top : (parentOffsets.height * (actualMainScreenVideoOffsets[0] / 100)) + 'px',
        left : (parentOffsets.width * (actualMainScreenVideoOffsets[1] /100)) + 'px',
        width : (parentOffsets.width * (actualMainScreenVideoOffsets[2] / 100)) + 'px'
      }, 1000);
    $('#slider_menu_bg').css({ left: (13 + (nextElemPrefix * 22)) + '%' });
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
  
  var actualWindowWidth = $(this).width();
  var actualWindowHeight = $(this).height();

  actualWindowWidth = $('#layers_wrapper').width();

  $('#main_screen').css({ height : actualWindowWidth * 0.42 });
  $('#main_screen_footer').css({ height: actualWindowWidth * 0.2344 });



  /************************************************************/
  /* Resize Values                                            */
  /************************************************************/
  $('body').css({'font-size': (actualWindowWidth / 2048) * 110 + '%'});
  var documentScreenWidth = document.body.offsetWidth;
  documentScreenWidth = $('#layers_wrapper').width();
  $('#main_headline_text').css({ height : $('#main_headline_text').width() * 0.61 });
  $('#controllers_wrapper').css({ height : actualWindowHeight });
  $('img').css({ 'max-width': (actualWindowWidth / 1280) * actualWindowWidth });
  $('img').css({ 'max-height': (actualWindowWidth / 1280) * actualWindowWidth });
  $('.device_button').each(function() {
  	$(this).children('div').css({ height : $(this).width() * 0.4673 });
  });
  $('#menu_logo_transparent').css({ height : $('#menu_logo_transparent').width()});
  $('#logo').css({ 
    height : $('#logo').width() * 2,
    top: actualWindowWidth * 0.02 });
  $('#menu_hamburger').css({ height : $('#menu_hamburger').width()});
  $('#down_arrow').css({ height : $('#menu_hamburger').height()});
  $('.divider_up_button > img').css({height : actualWindowWidth*0.04 , width : actualWindowWidth*0.04});
  $('.divider_button > img').css({height : actualWindowWidth*0.04, width : actualWindowWidth*0.04});
  $('.divider_up_button').css({ top : ($('.divider_up_button > img').width() / 2) * -1 });
  $('.divider_button').css({ bottom : ($('.divider_button > img').width() / 2) * -1 });
  $('#menu_close_button').css({ height : $('#menu_hamburger').height()});
  $('#main_screen1').css({ height : actualWindowWidth * 0.446 });
  $('#main_screen2').css({ height : actualWindowWidth * 0.446 });
  $('#main_screen3').css({ height : actualWindowWidth * 0.446 });
  var smallBrickHeight = $('.small_brick').width() * 0.555;
  $('.small_brick').css({ height : smallBrickHeight});
  $('.small_doubled_brick').css({ height : smallBrickHeight * 2});
  $('.normal_brick').css({ height : smallBrickHeight * 2});
  $('.negativ_margin').css({ marginTop : smallBrickHeight * - 1 });	
  $('.big_brick').css({ height : $('.normal_brick').width() * 0.0563 * 18});
  $('.onehalf_brick').css({ height : smallBrickHeight * 4});
  $('.onehalf_brick_game').css({ height : smallBrickHeight * 3});
  $('#third_screen').css({ height : actualWindowWidth * 0.782 });
  $('.negativ_top').css({ top : $('.normal_brick').height() / 2 * -1 });
  $('#player_avatars').css({ height : $('#player_avatars').width() * 0.9 });
  $('.footer_box').css({ height : $('.footer_box').width() * 0.673 });
  $('.footer_big_box').css({ height : $('.footer_box').height() });
  $('#footer_logo').css({ height : $('#footer_logo').width() * 0.272 });
	$('#forth_screen').css({ height : actualWindowWidth * 0.897});
	$('#forth_screen_bg').css({ height : $('#forth_screen_bg').width() * 0.85 });
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
  $('.parallax_layer').each(function() {
    $(this).css({ height : $('#scrolling_layer').height()});
  })
  $('body').css({ height : $('#scrolling_layer').height()});

  $('#video_image4_above_bg').css({
    width: $('#video_image4').width(),
    height: $('#video_image4').height() * 1.1
  });
  
  $('.parallax_wrapper').each(function() {
    $(this).css({ height : $('#scrolling_layer').height() + ($(this).parent().attr('data-speed') * $('#scrolling_layer').height())});
  });

  $('#parallax_first_headline').css({ height : $('#parallax_first_headline').width() * 0.61 });
  $('#parallax_second_headline').css({ height : $('#parallax_second_headline').width() * 0.5});  
  $('#parallax_third_headline').css({ height : $('#parallax_third_headline').width() * 0.51 });
  $('#parallax_forth_headline').css({ height : $('#parallax_first_headline').height()});

  $('.parallax_wrapper').children().each(function() {
    $(this).css({ height : $(this).width() * $(this).attr('data-hdivider')});
  })

  if (!parallaxObjectsAdded) pageParallaxElements();

}

/************************************************************/
/* Add parallax elements                                    */
/************************************************************/
parallaxObjectsAdded = false;

function pageParallaxElements() {
  parallaxObjectsAdded = true;  
  if (!isiPad) {
    /* params:elem(object),                                     */
    /*        layer(layerNum),                                  */
    /*        zindex(css z-index),                              */
    /*        isClickabel(object is clickable),                 */
    /*        pusher(vertical push in percent)                  */
    /* after clone, checkhing every elem css states             */
    /************************************************************/
    addParallaxObject($('#second_upper_level'),1,-2,true,2.63);
    addParallaxObject($('#headline_brick'),1,-1,true,2.63);
    addParallaxObject($('#parallax_second_headline'),2,0,false,7.1);
    addParallaxObject($('#parallax_third_headline'),2,0,false,15);
    addParallaxObject($('#box_spectatle'),1,-1,true,5);
    addParallaxObject($('#parallax_forth_headline'),2,0,false,27);
    addParallaxObject($('#video_image1'),2,0,true,24);
    addParallaxObject($('#video_image3'),1,0,true,8.7);
  } else {
    $('.parallax_layer').each(function() {
      $(this).height(0);
    })
  }
  createPlayer("small_video_1_ply", $.extend({}, pl3, {autostart: false, repeat: false, mute: true, controls: false}), playerComplete);
  createPlayer("small_video_3_ply", $.extend({}, pl2, {autostart: false, repeat: false, mute: true, controls: false}), playerComplete);
}

/************************************************************/
/* Scrolling methods                                        */
/************************************************************/
$(window).scroll(function() {

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
	$('body').on({
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
					});
          $('.small_video_player').not($(this)).each(function() {
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
	}, '.small_video_player');

  /************************************************************/
  /* Initialize small video resources                         */
  /************************************************************/
  var pl1 =  {playlist:
      [{
          image: "./images/games_site/welcome/gamepic_dirt3_headline.png",
          sources: [
            {file: "http://www.liandesign.hu/onLive_v3/media/Dirt3_01.mp4"},
            {file: "http://www.liandesign.hu/onLive_v3/media/Dirt3_02.oggtheora.ogv"}
          ]
      }]};
  pl2 =  {playlist:
      [{
          image: "./images/games_site/welcome/gamepic_dirt3_headline.png",
          sources: [
            {file: "http://www.liandesign.hu/onLive_v3/media/Dirt3_01.mp4"},
            {file: "http://www.liandesign.hu/onLive_v3/media/Dirt3_02.oggtheora.ogv"}
          ]
      }]};
  pl3 =  {playlist:
      [{
          image: "./images/games_site/welcome/gamepic_dirt3_headline.png",
          sources: [
            {file: "http://www.liandesign.hu/onLive_v3/media/Dirt3_01.mp4"},
            {file: "http://www.liandesign.hu/onLive_v3/media/Dirt3_02.oggtheora.ogv"}
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
  createPlayer("main_video_ply", $.extend({}, plm, {autostart: true, repeat: true, mute: true, controls: false}));
});


