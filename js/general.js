/************************************************************/
/* Resize Values                                            */
/************************************************************/
function resizewindow(){

  actualWindowWidth = $('#layers_wrapper').width();
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
  var menuHeight = Math.max(actualWindowWidth * 0.6, $('#main_content_area').height() * 1.2 );
  $('#main_menu_area').css({ height : menuHeight });
  $('#main_menu_area ul li.selected_menu').addClass('c5r2_imp');
  $('#caption_area').height( actualWindowWidth * 0.2343);
  $('#caption_subhead').height( actualWindowWidth * 0.1152);

}


$(document).ready(function() {

  /************************************************************/
  /* User interactions - Down button                           */
  /************************************************************/
  $('#down_arrow').on({
    click: function() {
      sectionOffsets[0] = $('#scrolling_layer').height();
      moveToNextBreakpoint();
    }
  });

  /************************************************************/
  /* User interactions - Menu                                 */
  /************************************************************/
  $('#main_menu_area ul li').on({ 
    mouseover: function() {
      $(this).addClass('c5r2_imp');
    },
    mouseleave: function() {
      if (!$(this).hasClass('selected_menu')) $(this).removeClass('c5r2_imp');
    },
    click: function() {
      if (!$(this).hasClass('selected_menu')) {
        $(this)
          .addClass('selected_menu c5r2_imp')
          .siblings()
            .removeClass('selected_menu c5r2_imp');
        actualTemplate = $(this).attr('data-template');
        $('#main_content_area').fadeOut('fast', function() {
          $(this).empty();
          $('#'+actualTemplate).clone().appendTo($(this));
          var wrapperHeight = Math.max($('#main_content_area').height() * 1.20, actualWindowWidth * 0.6);
          $('#main_content_wrapper').animate({
            height: wrapperHeight},
            700 );
          $('#main_menu_area').animate({
            height: wrapperHeight},
            700 );
          $(this).fadeIn('fast');
        });
      }
    }
  })

  var actualTemplate = $('#main_menu_area ul li.selected_menu').attr('data-template');
  $('#'+actualTemplate).clone().appendTo('#main_content_area');



});