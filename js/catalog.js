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
};

/************************************************************/
/* Color manager                                            */
/************************************************************/
var catalogHeaderDarkColor = new Array('c8r3_','c6r3_','c7r3_','c5r3_','c9r3_','c4r3_');
var catalogHeaderColor = new Array('c8r2_','c6r2_','c7r2_','c5r2_','c9r2_','c4r2_');
var catalogHeaderLightColor = new Array('c8r1_','c6r1_','c7r1_','c5r1_','c9r1_','c4r1_');
catalogColorNames = new Array('blue','green','turquise','orange','purple','red');


catalogGameRndDarkColors = catalogHeaderDarkColor.slice(0); 
var catalogGameRndColors = catalogHeaderColor.slice(0);
catalogGameRndColors.shuffle();



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
  //$('#hidden_details_box').css({ height : $('#hidden_details_box').width() * 0.8 });
  //$('.cloned_details').css({ height : $('.cloned_details').width() * 0.8 });
  $('#games_wrapper > #hidden_details_box').each(function() {
    console.log($(this));
    $(this).css({ height : $('#layers_wrapper').width() * 0.34 });
  });
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
function addBricks() {
  var root = null;
  var firstTop = 0;
  $('#games_wrapper > .game_brick').each(function() {
    if (root===null){
      root = $(this).parents('#games_wrapper');
      firstTop = 0;//root.position().top;
      //var x = root.find('.header_game_brick');
      //alert(root.find('.header_game_brick'));
      root.find('.header_game_brick').each(function(){
        firstTop += $(this).height();
      });
      firstTop *= 1.15;
    }
    var rowNumber = $(this).attr('data-row').split('/');
    var pushSize = $(this).width() * 0.03;
    var actualWindowWidth = $('#layers_wrapper').width();
    var pushBorder = rowNumber[1] * (((actualWindowWidth * 0.018) - pushSize) * rowNumber[2]);
    var originalTop = /*(actualWindowWidth * 0.371)*/firstTop + (rowNumber[0] * (actualWindowWidth * 0.0788)) + parseInt(pushBorder);
    $(this)
      .css({ top : originalTop * ((rowNumber[0] + 6) * 0.15 )})
      .animate({ top : originalTop} , 1500);
    var colorBrick = $(this).attr('data-color');
    if (typeof colorBrick !== 'undefined' && colorBrick !== false) {
      $(this).children('.bg_color_wrapper').addClass(catalogGameRndColors[colorBrick]+'bg');
    }
  });
};

var catalogCount = 0;

function loadbricks(sc){
  $.ajax({
    url: './newCatalogBricks.xml?catno='+catalogCount,
    complete: function(data, textStatus, jqXHR){
      if (textStatus === 'success'){
        $('#scrolling_layer').append(data.responseText);
        resizewindow();
        addBricks();

        /************************************************************/
        /* Gamebrick click                                          */
        /************************************************************/
        $('.game_brick').on({
          click: function() {
            if ($(this).hasClass('selected_brick')) {
              // TODO : start to play trailer video
              /*
               $(this)
               .css({ 
               'z-index' : 0,
               'border-color' : 'transparent' })
               .removeClass('selected_brick content_shadow_reverse');
               $(this).children('.play_trailer').removeClass('show_play_controll');
               */
            } else {
              $('#games_wrapper > #hidden_details_box').remove();
              $(this)
                      .css({
                'z-index': 1,
                'border-color': '#ffffff'
              })
                      .addClass('selected_brick content_shadow_reverse')
                      .siblings()
                      .css({
                'z-index': 0,
                'border-color': 'transparent'
              })
                      .removeClass('selected_brick content_shadow_reverse');
              $(this).children('.play_trailer').addClass('show_play_controll');
              $(this).siblings().children('.play_trailer').removeClass('show_play_controll');
              leftPos = ($(this).hasClass('right_side')) ? '18%' : '46%';
              topPos = $(this).position().top - ($('.game_brick.onehalf_size').height() * 1.7);
              parentTopMin = $('#games_wrapper').offset().top + $('#games_wrapper').height() * 0.45;
              topPos = Math.min(topPos, parentTopMin);
              bgColor = $(this).attr('data-color');
              if (typeof bgColor !== 'undefined' && bgColor !== false) {
                bgClass = catalogGameRndColors[bgColor] + 'bg';
                bgUsrRate = catalogColorNames[bgColor];
                bgDark = catalogGameRndDarkColors[bgColor] + 'bg';
              } else {
                bgrandomNum = Math.floor(Math.random() * catalogGameRndColors.length);
                bgClass = catalogGameRndColors[bgrandomNum] + 'bg';
                bgUsrRate = catalogColorNames[bgrandomNum];
                bgDark = catalogGameRndDarkColors[bgrandomNum] + 'bg';
              }
              cloneElem = $('#hidden_details_box').clone();
              dataElem = $(this).children('.game_details');
              upperSection = cloneElem.children('.upper_section');
              upperSection.children('.game_name').html(dataElem.attr('data-name'));
              upperSection.children('.game_type').html(dataElem.attr('data-type'));
              middleSection = cloneElem.children('.middle_section');
              middleSection.find('.user_rating_vis').css('background-image', 'url(images/games_site/user_rating_' + bgUsrRate + '.png)');
              middleSection.find('.user_rating_vis_bg').animate({width: ((80 / 5) * dataElem.attr('data-rating')) + '%'}, 500);
              middleSection.find('.metascore_vis').html(dataElem.attr('data-metascore'));
              middleSection.find('.content_vis').html(dataElem.attr('data-content'));
              lowerSection = cloneElem.children('.lower_section');
              lowerSection.find('.bundle_img').attr('src', 'images/games_site/game_bundle_' + bgUsrRate + '.png');
              lowerSection.find('.game_bundle_vis').html('&#36;' + dataElem.attr('data-bundle'));
              lowerSection.find('.togo_img').attr('src', 'images/games_site/game_togo_' + bgUsrRate + '.png');
              lowerSection.find('.game_togo_vis').html('&#36;' + dataElem.attr('data-togo'));
              buttonSection = cloneElem.children('.button_section');
              buttonSection.find('a').each(function() {
                $(this).addClass(bgDark);
              });
              closePosition = ($(this).hasClass('left_side')) ? 'right_close' : 'left_close';
              cloneElem.find('.details_close')
                      .attr('src', 'images/games_site/button_close_' + bgUsrRate + '.png')
                      .addClass(closePosition + ' cloned_details');
              cloneElem
                      .css({
                left: leftPos,
                top: topPos,
                display: 'block',
                height: $('#layers_wrapper').width() * 0.34
              })
                      .addClass(bgClass)
                      .appendTo('#games_wrapper');
            }
          }
        });
        
        $('#games_wrapper').attr('id','games_wrapper'+catalogCount);
        catalogCount++;
        
        if (sc){
        var actualWindowHeight = $(window).height();
          $('html, body').stop().animate({scrollTop: $(window).scrollTop() + actualWindowHeight}, 500);
        }
        
      }
    },
    dataType: 'text'
  });
}

$(window).load(function() {
  loadbricks(false);
});

$(document).ready(function() {

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

	$('#down_arrow').off("click");
  $('#down_arrow').on({
    click: function(event){
      var actualWindowHeight = $(window).height();
      var bodyHeight = $(document).height();
      if ($(window).scrollTop() < bodyHeight - actualWindowHeight){
        $('html, body').stop().animate({ scrollTop : bodyHeight - actualWindowHeight }, 2000);
      }else{
        loadbricks(true);
      }
    }
  });

});
