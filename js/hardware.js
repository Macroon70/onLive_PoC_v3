function resizewindow(){

  var actualWindowWidth = $('#layers_wrapper').width();
  var actualWindowHeight = $(this).height();


  // Common values
  $('body').css({'font-size': (actualWindowWidth / 2048) * 110 + '%'});

  $('img').css({ 'max-width': (actualWindowWidth / 1280) * actualWindowWidth });
  $('img').css({ 'max-height': (actualWindowWidth / 1280) * actualWindowWidth });

  $('.divider_button > img').css({height : actualWindowWidth*0.047, width : actualWindowWidth*0.047});
  $('.divider_button').css({ bottom : ($('.divider_button > img').width() / 2) * -1 });

  $('#logo').css({ height : $('#logo').width() * 2});
  $('#controllers_wrapper').css({ height : actualWindowHeight });

  $('#menu_logo_transparent').css({ height : $('#menu_logo_transparent').width()});
  $('#menu_hamburger').css({ height : $('#menu_hamburger').width()});
  $('#menu_close_button').css({ height : $('#menu_hamburger').height()});
  $('#down_arrow').css({ height : $('#menu_hamburger').height()});

  $('.footer_box').css({ height : $('.footer_box').width() * 0.623 });
  $('.footer_big_box').css({ height : $('.footer_box').height() });
  $('#footer_logo').css({ height : $('#footer_logo').width() * 0.272 });

  $('#parallax_layer').css({ height : $('#scrolling_layer').height()});
  $('#parallax_wrapper').css({ height : $('#scrolling_layer').height() * 2});

  // Unique values
  $('.price_box img').css({
    height : actualWindowWidth*0.047, 
    width : actualWindowWidth*0.047,
    bottom : (actualWindowWidth *0.0235) * -1,
    right : (actualWindowWidth *0.0235) * -1});
  $('.divider_button').css({ bottom : ($('.divider_button > img').width() / 2) * -1 });
  $('#main_screen').css({ height : actualWindowWidth * 0.5555 });
  var secondScreenHeight = actualWindowWidth * 0.596;
  $('#second_screen').css({ height : secondScreenHeight });
  $('#second_screen_bg').css({ height : $('#second_screen_bg').width() * 0.817 });
  $('#third_screen').css({ height : secondScreenHeight });
  $('#third_screen_bg').css({ height: $('#third_screen_bg').width() * 0.724});
  $('#features_wrapper h3').each(function() {
    $(this).addClass('c2r2_color');
  })
  $('#featurerings_wrapper').css({ height: $('#third_screen').height() * 0.80 });
  $('#featurerings_wrapper div').each(function() {
    $(this).css({ height : $(this).width()});
  })
  $('#forth_screen').css({ height : secondScreenHeight });
  $('#fifth_screen').css({ height : actualWindowWidth * 0.371 });

  $('#parallax_first_headline').css({ height : $('#parallax_first_headline').width() * 0.31 });

  /*


  $('body').css({'font-size': (actualWindowWidth / 2048) * 110 + '%'});

  $('.divider_button > img').css({height : actualWindowWidth*0.05, width : actualWindowWidth*0.05});
  $('.divider_button').css({ bottom : ($('.divider_button > img').width() / 2) * -1 });

  $('#menu_screen').css({ height : actualWindowHeight});

  $('#menu_logo_transparent').css({ height : $('#menu_logo_transparent').width()});
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
  */


}

$(document).ready(function() {


});