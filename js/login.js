/************************************************************/
/* Resize Values                                            */
/************************************************************/
function resizewindow(){

  var actualWindowWidth = $('#layers_wrapper').width();
  var actualWindowHeight = $(this).height();

  /************************************************************/
  /* Common Values                                            */
  /************************************************************/
  $('body').css({'font-size': (actualWindowWidth / 2048) * 110 + '%'});

  $('img').css({ 'max-width': (actualWindowWidth / 1280) * actualWindowWidth });
  $('img').css({ 'max-height': (actualWindowWidth / 1280) * actualWindowWidth });

  $('.divider_button').css({height : actualWindowWidth*0.037, width : actualWindowWidth*0.037});
  //$('.divider_button').css({ bottom : ($('.divider_button > img').width() / 2) * -1 });

  $('#logo').css({ 
    height : $('#logo').width() * 2,
    top: actualWindowWidth * 0.02 });
  $('#controllers_wrapper').css({ height : actualWindowHeight });

  $('#menu_logo_transparent').css({ height : $('#menu_logo_transparent').width()});
  $('#menu_hamburger').css({ height : $('#menu_hamburger').width()});
  $('#menu_close_button').css({ height : $('#menu_hamburger').height()});
  $('#down_arrow').css({ height : $('#menu_hamburger').height()});

  /************************************************************/
  /* Unique Values                                            */
  /************************************************************/  
  $('#main_header').css({ height : actualWindowWidth * 0.6 });
  $('#video_layer').css({ height : $('#main_header').height() * 1.2 });
  $('.related_game').css({ height : $('.related_game').width() * 0.56 });
  $('.header_bg').css({ height : $('.header_bg').width() * 0.512 });
  $('#join_form_wrapper').css({ height : $('#join_form_wrapper').width() * 1.633 });
  $('#login_form_wrapper').css({ height : $('#join_form_wrapper').width() * 1.25 });
  $('#main_offers').css({ height : $('#main_header').height() });
  $('.offer.no_bg').css({ height : $('.offer.no_bg').width() * 1.55 });
  $('.offer.with_bg').css({ height : $('.offer.no_bg').height() });
  $('#mask_layer').css({ height : actualWindowHeight });
  $('.checkbox').css({ height : $('.checkbox').width() * 0.95 });

}

$(document).ready(function() {

  $('body').css({ overflow : 'hidden' });

  $('#login_button').on({
    click: function() {
      return false;
    }
  });

  $('.checkbox').on({
    click: function() {
      if ($(this).hasClass('checkbox_checked')) {
        $(this).removeClass('checkbox_checked')
      } else $(this).addClass('checkbox_checked');
    }
  })

});