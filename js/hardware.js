/************************************************************/
/* Functions                                                */
/************************************************************/
function resizewindow(){

  var actualWindowWidth = $(this).width();
  var actualWindowHeight = $(this).height();

  $('body').css({'font-size': (actualWindowWidth / 2048) * 110 + '%'});

  $('.divider_button > img').css({height : actualWindowWidth*0.05, width : actualWindowWidth*0.05});
  $('.divider_button').css({ bottom : ($('.divider_button > img').width() / 2) * -1 });

<<<<<<< HEAD
  $('#menu_screen').css({ height : actualWindowHeight});
=======
  $('#logo').css({ 
    height : $('#logo').width() * 2,
    top: actualWindowWidth * 0.02 });
  $('#controllers_wrapper').css({ height : actualWindowHeight });
>>>>>>> v4.0

  $('#menu_logo_transparent').css({ height : $('#menu_logo_transparent').width()});
  $('#logo').css({ height : $('#logo').width() * 2});
  $('#menu_hamburger').css({ height : $('#menu_hamburger').width()});
  $('#down_arrow').css({ height : $('#menu_hamburger').height()});
  $('#menu_close_button').css({ height : $('#menu_hamburger').height()});


  $('#main_screen').css({ height : actualWindowWidth * 0.56 });
  $('#hw_controller').css({ height : $('#main_screen').height() });
  $('.white_controller').each(function() {
    $(this).css({ height : $(this).width() * 0.72 });
  }) 

  $('#video_layer').css({ height : $('#scrolling_layer').height() });


  $('#main_screen_footer').css({ height: actualWindowWidth * 0.39 });
  $('#source_slider_controller').css({ height : $('#main_screen_footer').height() * 1.40 });

  $('.device_button').each(function() {
    $(this).children('img').css({ height : actualWindowWidth * 0.0673 });
  });

  $('#main_screen_footer_extra_content').css({ height : actualWindowWidth * 0.44 });

  $('#second_screen').css({ height : $('#main_screen').height() });
  $('#onlive_page').css({ height : $('#onlive_page').width() * 1.52 });

  $('#third_screen').css({ height : $('#third_screen').width() * 0.454 });

  $('.footer_box').css({ height : $('.footer_box').width() * 0.623 });
  $('.footer_big_box').css({ height : $('.footer_box').height() });
  $('#footer_logo').css({ height : $('#footer_logo').width() * 0.272 });


  $('#parallax_layer').css({ height : $('#scrolling_layer').height()});
  $('#parallax_wrapper').css({ height : $('#scrolling_layer').height() * 2});
  $('#parallax_first_headline').css({ height : $('#parallax_first_headline').width() * 0.61 });
  $('#parallax_second_headline').css({ height : $('#parallax_first_headline').width() * 0.61 });



  /*
  
  // csak egy resize legyen

  var documentScreenWidth = document.body.offsetWidth;

  $('#main_headline_text').css({ height : $('#main_headline_text').width() * 0.61 });

  $('#third_headline_text').css({ height : $('#third_headline_text').width() * 0.51 });

  $('img').css({ 'max-width': (actualWindowWidth / 1600) * actualWindowWidth });
  $('img').css({ 'max-height': (actualWindowWidth / 1600) * actualWindowWidth });

  $('.divider_up_button > img').css({height : actualWindowWidth*0.05 , width : actualWindowWidth*0.05});
  $('.divider_button > img').css({height : actualWindowWidth*0.05, width : actualWindowWidth*0.05});
  $('.divider_up_button').css({ top : ($('.divider_up_button > img').width() / 2) * -1 });
  $('.divider_button').css({ bottom : ($('.divider_button > img').width() / 2) * -1 });
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
<<<<<<< HEAD
  $('.content_border').each(function() {
  	$(this).css({ 
  		'border-color': '#ffffff',
  		'border-width' : $(this).width() * 0.03 + 'px',
  		'border-style' : 'solid' });
  });

=======
  $('#forth_screen').css({ height : secondScreenHeight });
  $('#fifth_screen').css({ height : actualWindowWidth * 0.371 });

  $('#parallax_first_headline').css({ height : $('#parallax_first_headline').width() * 0.31 });
  $('#video_layer').css({ height : $('#scrolling_layer').height()});
>>>>>>> v4.0

  $('#parallax_second_headline').css({ height : $('#parallax_second_headline').width() * 0.5});  
*/

<<<<<<< HEAD
}
=======

/************************************************************/
/* Document Ready                                           */
/************************************************************/
$(document).ready(function($) {

  /************************************************************/
  /* User interactions - Features                             */
  /************************************************************/
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

  /************************************************************/
  /* User interactions - Down button                           */
  /************************************************************/
  $('#down_arrow').on({
    click: function() {
      sectionOffsets[0] = ($('#main_screen').height() * 1.09);
      sectionOffsets[1] = sectionOffsets[0] + $('#second_screen').height();
      sectionOffsets[2] = sectionOffsets[1] + $('#third_screen').height();
      sectionOffsets[3] = sectionOffsets[2] + $('#forth_screen').height();
      sectionOffsets[4] = sectionOffsets[3] + $('#fifth_screen').height();
      sectionOffsets[5] = $('#scrolling_layer').height();
      moveToNextBreakpoint();
    }
  });


  /************************************************************/
  /* Initialize small video resources                         */
  /************************************************************/
  var plm =  {playlist:
      [{
          image: "./images/games_site/welcome/gamepic_dirt3_headline.png",
          sources: [
            {file: "http://www.liandesign.hu/onLive_v3/media/Dirt3_01.640.mp4"},
            {file: "http://www.liandesign.hu/onLive_v3/media/Dirt3_01.oggtheora.ogv"}
          ]
      }]};

  createPlayer("main_video_ply", $.extend({}, plm, {autostart: true, repeat: true, mute: true}));

});

>>>>>>> v4.0
