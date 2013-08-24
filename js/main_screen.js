function resizewindow(){
  //return;
  
  var actualWindowWidth = $(this).width();
  var actualWindowHeight = $(this).height();

  actualWindowWidth = $('#layers_wrapper').width();


  // v3.5
  //////////////////////////////////////
  $('#main_screen').css({ height : actualWindowWidth * 0.42 });
  $('#main_screen_footer').css({ height: actualWindowWidth * 0.2344 });



  // v3.0
  //////////////////////////////////////

  // csak egy resize legyen
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
  //$('#main_screen').css({ height : actualWindowWidth * 0.446 });
  //$('#menu_screen').css({ height : actualWindowHeight});
  $('#menu_logo_transparent').css({ height : $('#menu_logo_transparent').width()});
  $('#logo').css({ height : $('#logo').width() * 2});
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
  //$('#third_screen_bg').css({ height : actualWindowWidth * 0.752 });
  $('#third_screen').css({ height : actualWindowWidth * 0.782 });
  //$('#third_screen').css({ height : $('#third_screen_bg').height()});
  //$('#third_screen').css({ height : actualWindowWidth * 0.7 - ($('.normal_brick').height() / 2)});
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
  $('#parallax_layer').css({ height : $('#scrolling_layer').height()});
  $('body').css({ height : $('#scrolling_layer').height()});
  
  $('#parallax_wrapper').css({ height : $('#scrolling_layer').height() * 2});
  $('#video_image4_above_bg').css({
    width: $('#video_image4').width(),
    height: $('#video_image4').height() * 1.1
  });


  $('#parallax_first_headline').css({ height : $('#parallax_first_headline').width() * 0.61 });
  $('#parallax_second_headline').css({ height : $('#parallax_second_headline').width() * 0.5});  
  $('#parallax_third_headline').css({ height : $('#parallax_third_headline').width() * 0.51 });
  $('#parallax_forth_headline').css({ height : $('#parallax_first_headline').height()});


}

$(document).ready(function() {



});