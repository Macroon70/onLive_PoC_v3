/************************************************************/
/* Chache images                                            */
/************************************************************/
cacheImg = "images/games_site/gamedetail/header_pic_bioshock.png,images/games_site/gamedetail/header_pic_bubbles.png,images/games_site/gamedetail/gamepic_bioshock.png".split(",")
var tempImg = []

for(var x=0;x<cacheImg.length;x++) {
    tempImg[x] = new Image();
    tempImg[x].src = cacheImg[x];
}

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

  $('#logo').css({ height : $('#logo').width() * 2});
  $('#controllers_wrapper').css({ height : actualWindowHeight });

  $('#menu_logo_transparent').css({ height : $('#menu_logo_transparent').width()});
  $('#menu_hamburger').css({ height : $('#menu_hamburger').width()});
  $('#menu_close_button').css({ height : $('#menu_hamburger').height()});
  $('#down_arrow').css({ height : $('#menu_hamburger').height()});

  /************************************************************/
  /* Unique Values                                            */
  /************************************************************/  
  $('#header_wrapper').css({ height : actualWindowWidth * 0.25 });
  $('div.rating_type').css({ height : $('div.rating_type').width() * 0.21 });
  $('div.rating_type_cl').css({ height : $('div.rating_type').width() * 0.21 });
  var valueWidth = ($('div.rating_type').width() / 5) * $('div.rating_value').attr('data-value');
  $('div.rating_value').css({ width : valueWidth });
  $('.info_image').css({ height : $('.info_panel').height() * 0.6});
  $('.info_image.biggersize').css({ height : $('.info_panel').height() * 1.5});
  $('#right_info_panel').css({ height : $('#right_info_panel').width() * 1.34 });
  $('.related_game').css({ height : $('.related_game').width() * 0.56 });

}