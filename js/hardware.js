/************************************************************/
/* Functions                                                */
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

  $('.divider_button > img').css({height : actualWindowWidth*0.047, width : actualWindowWidth*0.047});
  $('.divider_button').css({ bottom : ($('.divider_button > img').width() / 2) * -1 });

  $('#logo').css({ 
    height : $('#logo').width() * 2,
    top: actualWindowWidth * 0.02 });
  $('#controllers_wrapper').css({ height : actualWindowHeight });

  $('#menu_logo_transparent').css({ height : $('#menu_logo_transparent').width()});
  $('#menu_hamburger').css({ height : $('#menu_hamburger').width()});
  $('#menu_close_button').css({ height : $('#menu_hamburger').height()});
  $('#down_arrow').css({ height : $('#menu_hamburger').height()});

  $('.footer_box').css({ height : $('.footer_box').width() * 0.623 });
  $('.footer_big_box').css({ height : $('.footer_box').height() });
  $('#footer_logo').css({ height : $('#footer_logo').width() * 0.272 });


  /************************************************************/
  /* Unique Values                                            */
  /************************************************************/  
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
  $('#video_layer').css({ height : $('#scrolling_layer').height()});

  $('#parallax_layer').css({ height : $('#scrolling_layer').height()});
  $('.parallax_wrapper').each(function() {
    $(this).css({ height : $('#scrolling_layer').height() + ($(this).parent().attr('data-speed') * $('#scrolling_layer').height())});
  });


}


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

