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

$(window).scroll(function() {


    var scrollingLayerOffsets = document.getElementById('scrolling_layer').getBoundingClientRect();

    // parallax effect - simple :)
    var parallaxSpeed = 0.15 // exponencial value
    $('#parallax_wrapper').css({ top : scrollingLayerOffsets.top * parallaxSpeed });

    //setHamburgerPosition();

    if (Math.abs(scrollingLayerOffsets.top) > $('#main_screen').height() + 200) {
      clearTimeout(sliderChangerTimer);
      sliderChangerTimer = null;
      if ( parseInt($('#video_sizer').css('top')) < $('#main_screen').height()) {
        $('#video_sizer').css({
          top : '48.6%',
          left: '30%',
          width: '52%'
        });
      } 
    } else if (sliderChangerTimer == null) {
      sliderChangerTimer = window.setInterval(function() { sliderChanger(0); }, 15000 );
      if ( parseInt($('#video_sizer').css('top')) > $('#main_screen').height()) {
        var actualMainScreenVideoOffsets = $('div.device_button.white').attr('data-video-position').split('/');       
        $('#video_sizer').css({
          top : actualMainScreenVideoOffsets[0] + '%',
          left: actualMainScreenVideoOffsets[1] + '%',
          width : actualMainScreenVideoOffsets[2] + '%',
        });

      }
    }

    if ($('#down_arrow').css('opacity') == 1)
      $('#down_arrow').stop().fadeOut('slow');

    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
      $('#down_arrow').stop().fadeIn('slow');
    }, 250));

    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
      if (!$('#down_arrow').hasClass('rotate')) {
        $('#down_arrow').addClass('rotate');
      }
    } else $('#down_arrow').removeClass('rotate');

  });


sliderChangerTimer = window.setInterval(function() { sliderChanger(0); }, 15000 );


$(document).ready(function() {


  // Small video players controll
  $('.small_video_player').on({
    click: function(event) {
      var clickedZindex = $(this).css('z-index');
      if (clickedZindex != 3) {
        var idName = $(this).children().first().attr('id');
        event.stopPropagation();
        jwplayer( idName+'_ply').play();
        $(this)
          .addClass('content_border content_shadow playing_small_video')
          .css({
            'z-index' : 3,
            'border-color': '#ffffff',
            'border-width' : $(this).width() * 0.03 + 'px',
            'border-style' : 'solid'
          })
          .siblings('.small_video_player').each(function() {
            var childZindex = $(this).css('z-index');
            if (childZindex == 3) $(this).css({'z-index' : 2});
            if (childZindex == 2) $(this).css({'z-index' : 1});
            if ($(this).hasClass('content_border')) {
              var idName = $(this).children().first().attr('id');
              event.stopPropagation();
              jwplayer( idName+'_ply').pause(true);
              $(this)
                .removeClass('content_border content_shadow playing_small_video')
                .css({ border : 0 })
            }
          })
      } else {
        if ($(this).hasClass('playing_small_video')) {
          $(this).removeClass('playing_small_video')
          var idName = $(this).children().first().attr('id');
          event.stopPropagation();
          jwplayer( idName+'_ply').pause(true);
        } else { 
          $(this).addClass('playing_small_video');
          var idName = $(this).children().first().attr('id');
          event.stopPropagation();
          jwplayer( idName+'_ply').play(true);
        }
      }
    }
  })

  /* embend player */
  /** Write container **/
  if (!document.getElementById("botr_7Wi9qfSk_GjAHfwUI_div")) {
    document.write("<div id='botr_7Wi9qfSk_GjAHfwUI_div'></div>");
  }

  /** Insert fallback. **/
  var videoSource = 'http://www.liandesign.hu/onLive_v3/Media/Dirt3_01.640.mp4';
  var bgSource = 'http://content.bitsontherun.com/thumbs/7Wi9qfSk-480.jpg';
  document.getElementById("botr_7Wi9qfSk_GjAHfwUI_div").innerHTML = "<div id='botr_7Wi9qfSk_GjAHfwUI_ply' style='background:#000 "+bgSource+"'><a href='"+videoSource+"' style='display:block; width:100%; height:100%; border:none; background:transparent url(http://content.bitsontherun.com/staticfiles/play.png) no-repeat center center; text-indent:-99999px;'>Bunny Test</a></div>";

  document.getElementById("small_video_2").innerHTML = "<div id='small_video_2_ply' style='background:#000 "+bgSource+"'><a href='"+videoSource+"' style='display:block; width:100%; height:100%; border:none; background:transparent url(http://content.bitsontherun.com/staticfiles/play.png) no-repeat center center; text-indent:-99999px;'>Bunny Test</a></div>";
  document.getElementById("small_video_3").innerHTML = "<div id='small_video_3_ply' style='background:#000 "+bgSource+"'><a href='"+videoSource+"' style='display:block; width:100%; height:100%; border:none; background:transparent url(http://content.bitsontherun.com/staticfiles/play.png) no-repeat center center; text-indent:-99999px;'>Bunny Test</a></div>";
  document.getElementById("small_video_1").innerHTML = "<div id='small_video_1_ply' style='background:#000 "+bgSource+"'><a href='"+videoSource+"' style='display:block; width:100%; height:100%; border:none; background:transparent url(http://content.bitsontherun.com/staticfiles/play.png) no-repeat center center; text-indent:-99999px;'>Bunny Test</a></div>";


   /** Initialize player **/
  jwplayer.key = "EcHWjL0bMZsdo8QE0vv5IpN4yF2kjo0m";
  jwplayer("small_video_2_ply").setup({
    analytics: {"enabled": false},
    aspectratio: "16:9",
    // strange, true value not starting the video, false however start
    autostart: false,
    controls: false,
    displaytitle: false,
    fallback: true,
    flashplayer: "http://a.jwpcdn.com/player/6/653609/jwplayer.flash.swf",
    height: "100%",
    html5player: "http://a.jwpcdn.com/player/6/653609/jwplayer.html5.js",
    image: "http://content.bitsontherun.com/thumbs/7Wi9qfSk-480.jpg",
    playlist: "http://content.bitsontherun.com/jw6/7Wi9qfSk.xml",
    plugins: {"http://a.jwpcdn.com/player/6/653609/ping.js": {"pixel": "http://content.bitsontherun.com/ping.gif"}},
    primary: "flash",
    repeat: false,
    stretching: "uniform",
    width: "100%"
  });
  //jwplayer().play();
  //jwplayer().onComplete(function(){jwplayer().play();});

  /** Initialize player **/
  jwplayer.key = "EcHWjL0bMZsdo8QE0vv5IpN4yF2kjo0m";
  jwplayer("small_video_3_ply").setup({
    analytics: {"enabled": false},
    aspectratio: "16:9",
    // strange, true value not starting the video, false however start
    autostart: false,
    controls: false,
    displaytitle: false,
    fallback: true,
    flashplayer: "http://a.jwpcdn.com/player/6/653609/jwplayer.flash.swf",
    height: "100%",
    html5player: "http://a.jwpcdn.com/player/6/653609/jwplayer.html5.js",
    image: "http://content.bitsontherun.com/thumbs/7Wi9qfSk-480.jpg",
    playlist: "http://content.bitsontherun.com/jw6/7Wi9qfSk.xml",
    plugins: {"http://a.jwpcdn.com/player/6/653609/ping.js": {"pixel": "http://content.bitsontherun.com/ping.gif"}},
    primary: "flash",
    repeat: false,
    stretching: "uniform",
    width: "100%"
  });
  //jwplayer().play();
  //jwplayer().onComplete(function(){jwplayer().play();});

  /** Initialize player **/
  jwplayer.key = "EcHWjL0bMZsdo8QE0vv5IpN4yF2kjo0m";
  jwplayer("small_video_1_ply").setup({
    analytics: {"enabled": false},
    aspectratio: "16:9",
    // strange, true value not starting the video, false however start
    autostart: false,
    controls: false,
    displaytitle: false,
    fallback: true,
    flashplayer: "http://a.jwpcdn.com/player/6/653609/jwplayer.flash.swf",
    height: "100%",
    html5player: "http://a.jwpcdn.com/player/6/653609/jwplayer.html5.js",
    image: "http://content.bitsontherun.com/thumbs/7Wi9qfSk-480.jpg",
    playlist: "http://content.bitsontherun.com/jw6/7Wi9qfSk.xml",
    plugins: {"http://a.jwpcdn.com/player/6/653609/ping.js": {"pixel": "http://content.bitsontherun.com/ping.gif"}},
    primary: "flash",
    repeat: false,
    stretching: "uniform",
    width: "100%"
  });
  //jwplayer().play();
  //jwplayer().onComplete(function(){jwplayer().play();});

  /** Initialize player **/
  jwplayer.key = "EcHWjL0bMZsdo8QE0vv5IpN4yF2kjo0m";
  jwplayer("botr_7Wi9qfSk_GjAHfwUI_ply").setup({
    analytics: {"enabled": false},
    aspectratio: "16:9",
    // strange, true value not starting the video, false however start
    autostart: false,
    controls: false,
    displaytitle: false,
    fallback: false,
    flashplayer: "http://a.jwpcdn.com/player/6/653609/jwplayer.flash.swf",
    height: "100%",
    html5player: "http://a.jwpcdn.com/player/6/653609/jwplayer.html5.js",
    image: "http://content.bitsontherun.com/thumbs/7Wi9qfSk-480.jpg",
    playlist: "http://content.bitsontherun.com/jw6/7Wi9qfSk.xml",
    plugins: {"http://a.jwpcdn.com/player/6/653609/ping.js": {"pixel": "http://content.bitsontherun.com/ping.gif"}},
    primary: "flash",
    repeat: false,
    stretching: "uniform",
    width: "100%"
  });
  //jwplayer("").play();
  //jwplayer().onComplete(function(){jwplayer().play();});


});