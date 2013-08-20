function resizewindow(){

  var actualWindowWidth = $(this).width();
  var actualWindowHeight = $(this).height();

  $('body').css({'font-size': (actualWindowWidth / 2048) * 110 + '%'});

  $('.divider_button > img').css({height : actualWindowWidth*0.05, width : actualWindowWidth*0.05});
  $('.divider_button').css({ bottom : ($('.divider_button > img').width() / 2) * -1 });

  $('#menu_screen').css({ height : actualWindowHeight});

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

  $('#parallax_layer').css({ height : $('#scrolling_layer').height()});
  $('#parallax_wrapper').css({ height : $('#scrolling_layer').height() * 2});
  $('#parallax_first_headline').css({ height : $('#parallax_first_headline').width() * 0.61 });



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
  $('.content_border').each(function() {
  	$(this).css({ 
  		'border-color': '#ffffff',
  		'border-width' : $(this).width() * 0.03 + 'px',
  		'border-style' : 'solid' });
  });


  $('#parallax_second_headline').css({ height : $('#parallax_second_headline').width() * 0.5});  
*/

}