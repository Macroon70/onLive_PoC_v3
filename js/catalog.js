
function resizewindow(){

  var actualWindowWidth = $('#layers_wrapper').width();
  var actualWindowHeight = $(this).height();

  /************************************************************/
  /* Common Values                                            */
  /************************************************************/
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

  /************************************************************/
  /* Unique Values                                            */
  /************************************************************/  
  $('#catalog_header').css({ height : actualWindowWidth * 0.117 });
  $('#catalog_menu').css({ height : actualWindowWidth * 0.0488 });
  $('#games_wrapper').css({ height : actualWindowWidth * 1 });

  $('.header_game_brick').css({ 
    height: $('.header_game_brick').width() * 0.375,
    marginBottom: $('.header_game_brick').width() * 0.04
  });

  $('.game_brick').css({ height : $('.game_brick').width() * 0.32 });
  $('.game_brick.onehalf_size').css({ height : $('.game_brick').height() * 1.5 });

  $('.game_brick').each(function() {
    var rowNumber = $(this).attr('data-row');
    var pushSize = $(this).width() * 0.03;
    $(this).css({ 
      top : (actualWindowWidth * 0.371) + (rowNumber * (actualWindowWidth * 0.142)),
      'border-width' : pushSize + 'px',
      'border-style' : 'solid',
      'border-color' : 'transparent'
    });
  })

}

