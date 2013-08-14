var fullScreenHeight;
var fullScreenWidth;

function resizewindow(){
  //return;
  var actualWindowWidth = $(this).width();
  $('#main_screen').css({ height : actualWindowWidth * 0.49 });
  $('.small_brick').css({ height : actualWindowWidth * 0.0562});
  $('.small_doubled_brick').css({ height : actualWindowWidth * 0.0562 * 2});
  $('.normal_brick').css({ height : actualWindowWidth * 0.0562 * 2});
  $('.negativ_margin').css({ marginTop : $('.normal_brick').height() / 2 * -1 });	
  $('.big_brick').css({ height : $('.normal_brick').width() * 0.0562 * 8});
  $('.onehalf_brick').css({ height : actualWindowWidth * 0.0562 * 5});
  $('.onehalf_brick_game').css({ height : actualWindowWidth * 0.0562 * 3});
  $('#third_screen_bg').css({ height : actualWindowWidth * 0.7 });
  $('#third_screen').css({ height : actualWindowWidth * 0.7 - ($('.normal_brick').height() / 2)});
  $('.negativ_top').css({ top : $('.normal_brick').height() / 2 * -1 });
  $('#player_avatars').css({ height : $('#player_avatars') * 0.3 });
  $('.footer_box').css({ height : $('.footer_box').width() * 0.623 });
  $('.footer_big_box').css({ height : $('.footer_box').height() });
  $('#footer_logo').css({ height : $('#footer_logo').width() * 0.272 });
	$('#forth_screen').css({ height : fullScreenWidth * 0.897});
	$('#forth_screen_bg').css({ height : $('#forth_screen_bg').width() * 0.76 });
  $('.inherit_height').each(function() {
    $(this).css({ height : $(this).parent().height() });
  });

}


$(document).ready(function() {

  fullScreenHeight = $(window).height();
  fullScreenWidth = $(window).width();



/*
 	$('#main_screen').css({ height : fullScreenWidth * 0.49});
	$('.small_brick').css({ height : $(this).width() * 0.0562});
	$('.small_doubled_brick').css({ height : $(this).width() * 0.0562 * 2});
	$('.normal_brick').css({ height : $(this).width() * 0.0562 * 2});
	$('.negativ_margin').css({ marginTop : $('.normal_brick').height() / 2 * -1 });	
	$('.big_brick').css({ height : $('.normal_brick').width() * 0.0562 * 8});
	$('.onehalf_brick').css({ height : $(this).width() * 0.0562 * 5});
	$('.onehalf_brick_game').css({ height : $(this).width() * 0.0562 * 3});
	$('#third_screen_bg').css({ height : fullScreenWidth * 0.7 });
	$('#third_screen').css({ height : fullScreenWidth * 0.7 - ($('.normal_brick').height() / 2)});
	$('.negativ_top').css({ top : $('.normal_brick').height() / 2 * -1 });
	$('#player_avatars').css({ height : $('#player_avatars').width() * 0.3 });
	$('#forth_screen').css({ height : fullScreenWidth * 0.897});
	$('#forth_screen_bg').css({ height : $('#forth_screen_bg').width() * 0.76 });
	$('.footer_box').css({ height : $('.footer_box').width() * 0.623 });
	$('.footer_big_box').css({ height : $('.footer_box').height() });
	$('#footer_logo').css({ height : $('#footer_logo').width() * 0.272 });
	$('.inherit_height').each(function() {
		$(this).css({ height : $(this).parent().height() });
	});
*/

	$('#video_layer').css({
		top: '21%',
		left: '34%',
		width: '60%'
	})

	//$('.full_screen').css({ height: fullScreenHeight });

	/*
	$('.zoom-content').on({
		mouseover: function() {
			$('#video_layer').stop().animate({ zoom: '103%' }, 1000);
		},
		mouseout: function() {
			$('#video_layer')	.stop().animate({ zoom: '100%' }, 1000);
		}
	});
*/

	$(window).resize(function() {
    resizewindow();
	});

  resizewindow();


});
