/************************************************************/
/* Array shuffle prototype                                  */
/************************************************************/
// TODO : more loop for better rnd
Array.prototype.shuffle = function() {
  var actualPos = this.length, rndPos, tmpElem;
  if (actualPos == 0) return this;
  while (--actualPos) {
    rndPos = Math.floor( Math.random() * (actualPos + 1));
    tmpElem = this[actualPos];
    this[actualPos] = this[rndPos];
    this[rndPos] = tmpElem;
  }
  return this;
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
  $('#hidden_details_box').css({ height : $('#hidden_details_box').height() * 0.8 });
  $('#catalog_header').css({ height : actualWindowWidth * 0.117 });
  $('#catalog_menu').css({ height : actualWindowWidth * 0.0488 });
  var rowsNum = $('#games_wrapper').attr('data-rows');
  $('#games_wrapper').css({ height : (actualWindowWidth * 0.1 * rowsNum) + (actualWindowWidth * 0.06) });

  $('.header_game_brick').css({ 
    height: $('.header_game_brick').width() * 0.375,
    marginBottom: $('.header_game_brick').width() * 0.04
  });

  $('.game_brick').css({ height : $('.game_brick').width() * 0.36 });
  $('.game_brick.onehalf_size').css({ height : $('.game_brick').width() * 0.54 });

  $('.game_brick').each(function() {
    var rowNumber = $(this).attr('data-row').split('/');
    var pushSize = $(this).width() * 0.03;
    var pushBorder = rowNumber[1] * ((($('.game_brick.onehalf_size').height() * 0.08) - pushSize) * rowNumber[2]);
    $(this).css({ 
      top : (actualWindowWidth * 0.371) + (rowNumber[0] * (actualWindowWidth * 0.0788)) + parseInt(pushBorder),
      'border-width' : pushSize + 'px',
      'border-style' : 'solid',
      'border-color' : 'transparent'
    });
  })


}

/************************************************************/
/* GameBricks animations after Load Page                    */
/************************************************************/
$(window).load(function() {
  $('.game_brick').each(function() {
    var rowNumber = $(this).attr('data-row').split('/');
    var pushSize = $(this).width() * 0.03;
    var actualWindowWidth = $('#layers_wrapper').width();
    var pushBorder = rowNumber[1] * (((actualWindowWidth * 0.018) - pushSize) * rowNumber[2]);
    var originalTop = (actualWindowWidth * 0.371) + (rowNumber[0] * (actualWindowWidth * 0.0788)) + parseInt(pushBorder);
    $(this)
      .css({ top : originalTop * ((rowNumber[0] + 6) * 0.15 )})
      .animate({ top : originalTop} , 1500);
  })
});

$(document).ready(function() {

  /************************************************************/
  /* Color manager                                            */
  /************************************************************/
  var catalogHeaderDarkColor = new Array('c8r3_','c6r3_','c7r3_','c5r3_','c9r3_','c4r3_');
  var catalogHeaderColor = new Array('c8r2_','c6r2_','c7r2_','c5r2_','c9r2_','c4r2_');
  var catalogHeaderLightColor = new Array('c8r1_','c6r1_','c7r1_','c5r1_','c9r1_','c4r1_');

  var catalogGameRndColors = catalogHeaderColor.shuffle();

  $('#catalog_menu').addClass(actualMenuColor);
  $('#catalog_header a').not('.actual_header').addClass(catalogHeaderLightColor[randomNum]+'color');
  $('#catalog_header li.actual_header a').addClass(catalogHeaderDarkColor[randomNum]+'color')
    .append('<img src="images/games_site/button_down_dark_'+actualSystemColor+'.png" alt=""/>');
  $('.has_submenu p').append('<img src="images/games_site/button_down_dark_'+actualSystemColor+'.png" alt=""/>');
  $('ul.cat_submenu')
    .addClass(catalogHeaderDarkColor[randomNum]+'bg')
    .find('a')
      .addClass(catalogHeaderLightColor[randomNum]+'color');
  $('.game_brick').each(function() {
    var colorBrick = $(this).attr('data-color');
    if (typeof colorBrick !== 'undefined' && colorBrick !== false) {
      $(this).children('.bg_color_wrapper').addClass(catalogGameRndColors[colorBrick]+'bg');
    }
  })

  /************************************************************/
  /* User interactions                                        */
  /************************************************************/

  /************************************************************/
  /* Click on header menu                                     */
  /************************************************************/
  $('.actual_header').on({
    click: function() {
      if ($('#catalog_header ul').hasClass('opened_menu')) {
        $('#catalog_header ul').animate({ top : '45%' },300).removeClass('opened_menu');
        $('#catalog_header li').not('.actual_header').animate({ opacity : 0 },300, function() {
          $(this).css({ 'display' : 'none' })
        });
        $('#catalog_header').animate({ height : $('#layers_wrapper').width() * 0.1 });
        $('#catalog_header img').removeClass('rotate');
      } else {
        $('#catalog_header ul').animate({ top : '15%' },300).addClass('opened_menu');
        $('#catalog_header li').css({ 'display' : 'block' }).animate({ opacity : 1, height : '100%' },300);
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
      $(this).removeClass(catalogHeaderDarkColor[randomNum]+'bg')
        .find('img')
          .attr('src','images/games_site/button_down_dark_'+actualSystemColor+'.png');
      var nextHoverElem=e.relatedTarget|| e.toElement;
      if ($(this).has(nextHoverElem).length == 0) $(this).children('.cat_submenu').stop().fadeOut(100);
    },

  })

  /************************************************************/
  /* Gamebrick click                                          */
  /************************************************************/
  $('.game_brick').on({
    click: function() {
      $('#games_wrapper > #hidden_details_box').remove();
      if ($(this).hasClass('selected_brick')) {
        $(this)
          .css({ 
            'z-index' : 0,
            'border-color' : 'transparent' })
          .removeClass('selected_brick content_shadow_reverse');
      } else {
        $(this)
          .css({
            'z-index' : 1,
            'border-color': '#ffffff',
          })
          .addClass('selected_brick content_shadow_reverse')
          .siblings()
            .css({
              'z-index' : 0,
              'border-color' : 'transparent'
            })
            .removeClass('selected_brick content_shadow_reverse');
        leftPos = ($(this).hasClass('right_side')) ? '18%' : '46%';
        topPos = $(this).position().top - ($('.game_brick.onehalf_size').height() * 1.7);
        parentTopMin = $('#games_wrapper').offset().top + $('#games_wrapper').height() * 0.45;
        topPos = Math.min(topPos,parentTopMin);
        bgColor = $(this).attr('data-color');
        if (typeof bgColor !== 'undefined' && bgColor !== false) {
          bgClass = catalogGameRndColors[bgColor]+'bg';
        } else {
          bgrandomNum = Math.floor(Math.random()*catalogGameRndColors.length);
          bgClass = catalogGameRndColors[bgrandomNum]+'bg';
        }
        $('#hidden_details_box')
          .clone()
          .css({ 
            left : leftPos,
            top : topPos,
            display : 'block' ,
            height : $('#hidden_details_box').width() * 0.8
          })
          .addClass(bgClass)
          .appendTo('#games_wrapper');
      }
    }
  });

  $('.selected_brick').on({
    click: function() {
    }
  });

});
