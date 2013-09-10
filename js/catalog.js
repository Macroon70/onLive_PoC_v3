/************************************************************/
/* Array shuffle prototype                                  */
/************************************************************/
// TODO : more loop for better rnd
Array.prototype.shuffle = function() {
  var actualPos = this.length, rndPos, tmpElem, tmpName, tmpDark;
  if (actualPos == 0) return this;
  while (--actualPos) {
    rndPos = Math.floor( Math.random() * (actualPos + 1));
    tmpElem = this[actualPos];
    tmpName = catalogColorNames[actualPos];
    tmpDark = catalogGameRndDarkColors[actualPos];
    this[actualPos] = this[rndPos];
    catalogColorNames[actualPos] = catalogColorNames[rndPos];
    catalogGameRndDarkColors[actualPos] = catalogGameRndDarkColors[rndPos];
    this[rndPos] = tmpElem;
    catalogColorNames[rndPos] = tmpName;
    catalogGameRndDarkColors[rndPos] = tmpDark;
  }
  return this;
}



/************************************************************/
/* Resize Values                                            */
/************************************************************/
var previousWindowWidth = -1;
function resizewindow(){

  actualWindowWidth = $('#layers_wrapper').width();
  var actualWindowHeight = $(this).height();

  /************************************************************/
  /* Recalculate Scroll Stop Values                           */
  /************************************************************/
  for(var i=0; i<sectionOffsets.length; i++){
    sectionOffsets[i] = sectionOffsets[i] * actualWindowWidth / previousWindowWidth;
  }
  previousWindowWidth = actualWindowWidth;

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

  /************************************************************/
  /* Unique Values                                            */
  /************************************************************/  
  //$('#hidden_details_box').css({ height : $('#hidden_details_box').width() * 0.8 });
  //$('.cloned_details').css({ height : $('.cloned_details').width() * 0.8 });
  $('#games_wrapper > #hidden_details_box').each(function() {
    $(this).css({ height : $('#layers_wrapper').width() * 0.34 });
  });
  if (!$('#catalog_header ul').hasClass('opened_menu')) {
    $('#catalog_header').css({ height : actualWindowWidth * 0.117 });
  } else {
    $('#catalog_header').css({ height: actualWindowWidth * 0.33 });
  }
  $('#catalog_header ul').css({ top : actualWindowWidth * 0.05 });
  $('#catalog_menu').css({ height : actualWindowWidth * 0.0488 });
  var rowsNum = $('#games_wrapper').attr('data-rows');

  $('.header_game_brick').css({ 
    height: $('.header_game_brick').width() * 0.375,
    marginBottom: $('.header_game_brick').width() * 0.04
  });

  $('#games_wrapper').css({ height : ($('.header_game_brick').width()*0.379) + (actualWindowWidth * 0.078 * rowsNum) + (actualWindowWidth * 0.06) });


  $('.game_brick').css({ height : $('.game_brick').width() * 0.36 });
  $('.game_brick.onehalf_size').css({ height : $('.game_brick').width() * 0.54 });

  $('.game_brick').each(function() {
    var rowNumber = $(this).attr('data-row').split('/');
    var pushSize = $(this).width() * 0.03;
    var fixPos = (actualWindowWidth * 0.371) + (rowNumber[0] * (actualWindowWidth * 0.081));
    $(this).css({ 
      top : fixPos ,
      'border-width' : pushSize + 'px',
      'border-style' : 'solid',
      'border-color' : 'transparent'
    });
  })
}

/************************************************************/
/* Colorize bricks                                          */
/************************************************************/
function colorizeBricks(minRow) {
  $('.game_brick').each(function() {
    var rowNumber = $(this).attr('data-row').split('/');
    if (rowNumber[0] >= minRow) {
      var colorBrick = $(this).attr('data-color');
      if (typeof colorBrick !== 'undefined' && colorBrick !== false) {
        $(this).children('.bg_color_wrapper').addClass(catalogGameRndColors[colorBrick]+'bg');
      }
    }
  })
}

/************************************************************/
/* GameBricks animations after Load Page                    */
/************************************************************/
function brickAnim(minRow) {
  $('.game_brick').each(function() {
    var rowNumber = $(this).attr('data-row').split('/');
    if (rowNumber[0] >= minRow) {
      var pushSize = $(this).width() * 0.03;
      var actualWindowWidth = $('#layers_wrapper').width();
      var originalTop = (actualWindowWidth * 0.371) + (rowNumber[0] * (actualWindowWidth * 0.081))
      $(this)
        .css({ top : originalTop + (((rowNumber[0] - ((catalogCount - 1) * 15)) + 6) * 200 )})
        .animate({ top : originalTop} , 1500);
    }
  })
}

/************************************************************/
/* PlayingTrailer                                           */
/************************************************************/
function playingTrailer(elem) {
  $(document).bind('touchmove', false);
  elemOffset = elem.offset();
  elemOffset.top += elem.width() * 0.03;
  elemOffset.left += elem.width() * 0.03;
  playingElem = $(elem.children('.sub_brick').clone(true));
  dataElem = $(elem.children('.play_trailer'));
  var plm =  {playlist:
      [{
          image: "./images/games_site/welcome/gamepic_dirt3_headline.png",
          sources: [
            {file: "http://www.liandesign.hu/onLive_v3/media/"+dataElem.attr('data-videoname')+".mp4"},
            {file: "http://www.liandesign.hu/onLive_v3/media/Dirt3_01.oggtheora.ogv"}
          ]
      }]};
  videoElem = $('<div/>').attr('id','video_player');
  $(playingElem)
    .attr('id','trailer_player')
    .css({
      overflow: 'hidden',
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
          'cursor': 'pointer',
          'opacity': '0.8',
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
    parentElem = $('.show_play_controll').parent();
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


/************************************************************/
/* Catalog defaults                                         */
/************************************************************/
catalogCount = 1;
maxPage = 4;

/************************************************************/
/* Window onLoad                                            */
/************************************************************/
$(window).load(function() {
  brickAnim(0);
  sectionOffsets.push($('#games_wrapper').height() + ($('.header_game_brick').height() * 1.5));
});

/************************************************************/
/* Document ready                                           */
/************************************************************/
$(document).ready(function() {

  $(this).scrollTop(0);
  previousWindowWidth = Math.max(parseInt($('#layers_wrapper').css('min-width')), Math.min(parseInt($('#layers_wrapper').css('max-width')),$(window).width()));
  /************************************************************/
  /* Color manager                                            */
  /************************************************************/
  var catalogHeaderDarkColor = new Array('c8r3_','c6r3_','c7r3_','c5r3_','c9r3_','c4r3_');
  var catalogHeaderColor = new Array('c8r2_','c6r2_','c7r2_','c5r2_','c9r2_','c4r2_');
  var catalogHeaderLightColor = new Array('c8r1_','c6r1_','c7r1_','c5r1_','c9r1_','c4r1_');
  catalogColorNames = new Array('blue','green','turquise','orange','purple','red');


  catalogGameRndDarkColors = catalogHeaderDarkColor.slice(0); 
  catalogGameRndColors = catalogHeaderColor.slice(0);
  catalogGameRndColors.shuffle();

  $('#catalog_menu').addClass(actualMenuColor);
  $('#catalog_header a').addClass(catalogHeaderDarkColor[randomNum]+'color');
  $('#catalog_header li.actual_header a').append('<img src="images/games_site/button_down_dark_'+actualSystemColor+'.png" alt=""/>');
  $('.has_submenu p').append('<img src="images/games_site/button_down_dark_'+actualSystemColor+'.png" alt=""/>');
  $('ul.cat_submenu')
    .addClass(catalogHeaderDarkColor[randomNum]+'bg')
    .find('a')
      .addClass('white');
  $('.header_details_wrapper h2').addClass(catalogHeaderColor[randomNum]+'color');
  $('.header_details_wrapper p').addClass(catalogHeaderColor[randomNum]+'color');
  $('.header_details_wrapper img').attr('src','images/games_site/button_forward_dark_'+actualSystemColor+'.png')
  colorizeBricks(0);

  /************************************************************/
  /* User interactions                                        */
  /************************************************************/

  /************************************************************/
  /* Click on header menu                                     */
  /************************************************************/
  $('.actual_header').on({
    click: function() {
      if ($('#catalog_header ul').hasClass('opened_menu')) {
        $('#catalog_header ul').removeClass('opened_menu');
        $('#catalog_header li').not('.actual_header').stop().animate({ opacity : 0 },300, function() {
          $(this).css({ 'display' : 'none' })
        });
        $('#catalog_header').animate({ height : $('#layers_wrapper').width() * 0.1 });
        $('#catalog_header img').removeClass('rotate');
      } else {
        $('#catalog_header ul').addClass('opened_menu');
        $('#catalog_header li').css({ 'display' : 'block' }).stop().animate({ opacity : 1, height : '100%' },300);
        $('#catalog_header').animate({ height : $('#layers_wrapper').width() * 0.33 });
        $('#catalog_header img').addClass('rotate');
      }
      return false;
    }
  });

  /************************************************************/
  /* Hover filter menus                                       */
  /************************************************************/
  $('#catalog_header li').not('actual_header').on({
    mouseover: function() {
      $(this)
        .addClass('hovered_header')
        .children('a')
          .addClass(catalogHeaderDarkColor[randomNum]+'imp');
    },
    mouseout: function() {
      $(this)
        .removeClass('hovered_header')
        .children('a')
          .removeClass(catalogHeaderDarkColor[randomNum]+'imp');
    }
  });

  $('.has_submenu').on({
    mouseover: function() {
      $(this)
        .addClass(catalogHeaderDarkColor[randomNum]+'bg')
        .find('img')
          .attr('src','images/games_site/button_up_white.png');
      $(this).children('.cat_submenu').stop().fadeIn(100);
    },
    mouseout: function(e) {
      var nextHoverElem=e.relatedTarget|| e.toElement;
      if ($(this).has(nextHoverElem).length == 0) {
        $(this).removeClass(catalogHeaderDarkColor[randomNum]+'bg')
          .find('img')
            .attr('src','images/games_site/button_down_dark_'+actualSystemColor+'.png');
        $(this).children('.cat_submenu').stop().fadeOut(100);
      }
    },
    touchstart: function() {
        if ($(this).hasClass(catalogHeaderDarkColor[randomNum]+ 'bg')) {
          $(this).removeClass(catalogHeaderDarkColor[randomNum]+'bg')
            .find('img')
              .attr('src','images/games_site/button_down_dark_'+actualSystemColor+'.png');
          $(this).children('.cat_submenu').stop().fadeOut(100);
        } else {
          $(this)
            .addClass(catalogHeaderDarkColor[randomNum]+'bg')
            .find('img')
              .attr('src','images/games_site/button_up_white.png');
          $(this).children('.cat_submenu').stop().fadeIn(100);
        }
    }

  })

  /************************************************************/
  /* Gamebrick click (dynamically check)                      */
  /************************************************************/
  $('#games_wrapper').on({
    click: function() {
      if ($(this).hasClass('selected_brick')) {
        if ($(this).children('.play_trailer').length > 0)
          playingTrailer($(this));
      } else {
        $('#games_wrapper > #hidden_details_box').remove();
        $(this)
          .css({
            'z-index' : 1,
            'border-color': '#ffffff'
          })
          .addClass('selected_brick')
          .siblings()
            .css({
              'z-index' : 0,
              'border-color' : 'transparent'
            })
            .removeClass('selected_brick');
        $(this).children('.play_trailer').addClass('show_play_controll');
        $(this).siblings().children('.play_trailer').removeClass('show_play_controll');
        leftPos = ($(this).hasClass('right_side')) ? '18%' : '46%';
        topPos = $(this).position().top - ($('.game_brick.onehalf_size').height() * 1.7);
        parentTopMin = $('#games_wrapper').height() - ($('.game_brick.onehalf_size').height() * 3);
        topPos = Math.min(topPos,parentTopMin);
        bgColor = $(this).attr('data-color');
        if (typeof bgColor !== 'undefined' && bgColor !== false) {
          bgClass = catalogGameRndColors[bgColor]+'bg';
          bgUsrRate = catalogColorNames[bgColor];
          bgDark = catalogGameRndDarkColors[bgColor]+'bg';
        } else {
          bgrandomNum = Math.floor(Math.random()*catalogGameRndColors.length);
          bgClass = catalogGameRndColors[bgrandomNum]+'bg';
          bgUsrRate = catalogColorNames[bgrandomNum];
          bgDark = catalogGameRndDarkColors[bgrandomNum]+'bg';
        }
        cloneElem = $('#hidden_details_box').clone();
        dataElem = $(this).children('.game_details');
        upperSection = cloneElem.children('.upper_section');
        upperSection.children('.game_name').html(dataElem.attr('data-name'));
        upperSection.children('.game_type').html(dataElem.attr('data-type'));
        middleSection = cloneElem.children('.middle_section');
        middleSection.find('.user_rating_vis').css('background-image','url(images/games_site/user_rating_'+bgUsrRate+'.png)');
        middleSection.find('.user_rating_vis_bg').animate({ width : ((80 / 5) * dataElem.attr('data-rating')) + '%'}, 500);
        middleSection.find('.metascore_vis').html(dataElem.attr('data-metascore') );
        middleSection.find('.content_vis').html(dataElem.attr('data-content'));
        lowerSection = cloneElem.children('.lower_section');
        lowerSection.find('.bundle_img').attr('src','images/games_site/game_bundle_'+bgUsrRate+'.png');
        lowerSection.find('.game_bundle_vis').html('&#36;'+dataElem.attr('data-bundle'));
        lowerSection.find('.togo_img').attr('src','images/games_site/game_togo_'+bgUsrRate+'.png');
        lowerSection.find('.game_togo_vis').html('&#36;'+dataElem.attr('data-togo'));
        buttonSection = cloneElem.children('.button_section');
        buttonSection.find('a').each(function() {
          $(this).addClass(bgDark);
        })
        closePosition = ($(this).hasClass('left_side')) ? 'right_close' : 'left_close';
        cloneElem.find('.details_close')
          .attr('src','images/games_site/button_close_'+bgUsrRate+'.png')
          .addClass(closePosition + ' cloned_details');
        cloneElem
          .css({ 
            left : leftPos,
            top : topPos,
            display : 'block' ,
            height : $('#layers_wrapper').width() * 0.34
          })
          .addClass(bgClass + ' content_shadow')
          .appendTo('#games_wrapper');
      }
   }
  },'.game_brick');

  /************************************************************/
  /* Details page close                                       */
  /************************************************************/
  $('body').on({
    click: function(e) {
      var toElem= e.relatedTarget|| e.toElement;
      $('img.details_close.cloned_details').parent().remove();
      $('.game_brick')
        .css({ 
          'z-index' : 0,
          'border-color' : 'transparent' })
        .removeClass('selected_brick content_shadow')
        .children('.play_trailer')
          .removeClass('show_play_controll');
    }
  },'img.details_close.cloned_details');

  /************************************************************/
  /* User interactions - Down button                           */
  /************************************************************/
  $('#down_arrow').on({
    click: function() {
      moveToNextBreakpoint();
    }
  });

  /************************************************************/
  /* User interactions - Global click events listener         */
  /************************************************************/
  document.addEventListener('click', function(e) {
    if ($(e.target).closest('#main_catalog_menu').length == 0 && $('#catalog_header ul').hasClass('opened_menu'))
      $('.actual_header').trigger('click'); 
  }, true);

  /************************************************************/
  /* Loading more games                                       */
  /************************************************************/
  $(window).scroll(function(e) {
    var elementHeight = $('#scrolling_layer').height(); 
    var scrollPosition = document.getElementById('scrolling_layer').getBoundingClientRect();
    if (elementHeight - 1 <= Math.abs(parseInt(scrollPosition.top) - parseInt($(window).height()))) {
      if (catalogCount + 1 <= maxPage) {
        catalogCount++;
        if (catalogCount == maxPage) $('#footer_screen').css({ 'display' : 'block' });
        $('#games_wrapper').attr('data-rows',catalogCount * 16);      
        resizewindow();
        $.ajax({
          url: './ajaxCatalog'+catalogCount+'.php',
          data: { requestCatalog : catalogCount },
          type: 'post',
          success: function(data) {
            $('#games_wrapper')
              .append(data);
            resizewindow();
            colorizeBricks((catalogCount-1) * 15);
            brickAnim((catalogCount-1) * 15);
            sectionOffsets.push($('#games_wrapper').height() + ($('.header_game_brick').height() * 1.5));
          },
          error: function(xhr, error) {
            $('#footer_screen').css({ 'display' : 'block' });            
            $('#games_wrapper')
              .attr('data-rows',--catalogCount * 16)
              .animate({ height : ($('.header_game_brick').width()*0.379) + (actualWindowWidth * 0.078 * (catalogCount * 16)) + (actualWindowWidth * 0.06) },1000);
            catalogCount = maxPage;
            sectionOffsets.push(($('.header_game_brick').width()*0.379) + (actualWindowWidth * 0.078 * (catalogCount * 16)) + (actualWindowWidth * 0.06) + ($('#catalog_header').height() * 1.5));
          }
        });
      }
    } 
  })


});
