/************************************************************/
/* Chache images                                            */
/************************************************************/
cacheImg = "images/games_site/gamedetail/header_pic_bioshock.png,images/games_site/gamedetail/header_pic_bubbles.png,images/games_site/gamedetail/gamepic_bioshock.png,images/games_site/gamedetail/gamepic_assassins.png,images/games_site/gamedetail/gamepic_batman.png,images/games_site/gamedetail/gamepic_borderlands2.png,images/games_site/gamedetail/gamepic_crysis2.png,images/games_site/gamedetail/gamepic_lanoire.png,images/games_site/gamedetail/gamepic_lastofus.png".split(",")
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

/************************************************************/
/* PlayingTrailer                                           */
/************************************************************/
function playingTrailer(elem) {
  $(document).bind('touchmove', false);
  elemOffset = elem.offset();
  playingElem = $(elem.clone(true));
  var plm =  {playlist:
      [{
          image: "./images/games_site/welcome/gamepic_dirt3_headline.png",
          sources: [
            {file: "http://www.liandesign.hu/onLive_v3/media/"+elem.attr('data-videoname')+".mp4"},
            {file: "http://www.liandesign.hu/onLive_v3/media/Dirt3_01.oggtheora.ogv"}
          ]
      }]};
  videoElem = $('<div/>').attr('id','video_player');
  $(playingElem)
    .attr('id','trailer_player')
    .css({
      position: 'absolute',
      width: elem.width(),
      height: elem.height(),
      'z-index': 9 })
    .offset(elemOffset)
    .append(videoElem);
  $('body').append(playingElem);
  createPlayer("video_player", $.extend({}, plm, {autostart: true, repeat: false, mute: false, controls: true}));    
  $(playingElem).animate({
    width: '60%',
    height: $('body').width() * 0.6 * 0.5625,
    left: '20%',
    top: $(document).scrollTop() + ($(window).innerHeight() * 0.17) },
    300, function() {
      $(this).addClass('content_shadow');
      playingBg = $('<div/>', { id: 'trailer_bg', class: 'black_bg' });
      $(playingBg)
        .css({
          position: 'absolute',
          width: $(window).innerWidth(),
          height: $(window).innerHeight(),
          left: 0,
          top: $(document).scrollTop(),
          'opacity': '0.8',
          'cursor': 'pointer',
          'z-index': 9 });
      $('body')
        .css({ 'overflow' : 'hidden' });
      $($(playingElem)).before(playingBg);
  });
}

$('html').on({
  click: function() {
    $(this).remove();
    $('body').css({ 'overflow' : 'visible' });
    parentElem = $('#play_trailer');
    parentOffsets = $(parentElem).offset();
    parentOffsets.left += parentElem.width() * 0.03;
    parentOffsets.top += parentElem.height() * 0.03;
    $('#trailer_player').removeClass('content_shadow').animate({
      width: parentElem.width(),
      height: parentElem.height(),
      left: parentOffsets.left,
      top: parentOffsets.top },
      300, function() {
        $(this).remove();
    });
    $(document).unbind('touchmove', false);
  }
}, '#trailer_bg');

$(document).ready(function($) {
  $('#play_trailer').on({
    click: function() {
      if ($('body #trailer_player').length == 0)
        playingTrailer($(this));
    }
  }) 
});