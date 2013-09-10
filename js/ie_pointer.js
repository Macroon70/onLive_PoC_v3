/*
 * IE doesn't support pointer-events:none
 * As of IE 10, it doesn't support conditional comments, so we use browser detection
 */
var IE_LastBottomElement = null;
$(document).ready(function() {
  
  function findElement(x,y){
    var node = document.elementFromPoint(x, y);
    if ($(node).parents('#controllers_wrapper').length!=0 && $(node).css('pointer-events')!='none'){
      return node;
    }
    
    $('#controllers_wrapper').hide();
    node = document.elementFromPoint(x, y);
    if ($(node.parentNode).attr('id')!='parallax_layer2' && $(node).css('pointer-events')!='none'){
      $('#controllers_wrapper').show();
      return node;
    }
    
    $('#parallax_layer2').hide();
    node = document.elementFromPoint(x, y);
    if ($(node.parentNode).attr('id')!='parallax_layer1' && $(node).css('pointer-events')!='none'){
      $('#parallax_layer2').show();
      $('#controllers_wrapper').show();
      return node;
    }

    $('#parallax_layer1').hide();
    node = document.elementFromPoint(x, y);
    $('#parallax_layer1').show();
    $('#parallax_layer2').show();
    $('#controllers_wrapper').show();
    return node;
  }
  
  if (navigator.userAgent.match(/msie/i) ){
    $('#parallax_layer2').on({
      click: function(e){
        var node = findElement(e.clientX, e.clientY);
        if (node.nodeName==='A'){
          // click doesn't work on A (except it has an onclick function atached)
          window.location.href=(node.getAttribute('href'));
        }else{
          if ($(node).parents('A').length!=0) window.location.href=($(node).parents('A')[0].getAttribute('href'));
          else if(node.click) node.click();
          else $(node).click(e); //Manually fire the event for desired underlying element
        }
        return false;
      }
    });

    $('#parallax_layer2').on({
      mousemove: function(e){
        var node = findElement(e.clientX, e.clientY);
        if (IE_LastBottomElement == node && $(this).css('cursor')!='auto'){
          return false;
        }
        IE_LastBottomElement = node;
        var c = 'auto';
        if (node.nodeName==='A'){
          c = 'pointer';
        }else{
          if ($(node).css('cursor')!='auto'){
            c = $(node).css('cursor');
          }else{
            var p = $(node).parents();
            for (var i = 0; i < p.length; i++) {
              if ($(p[i]).css('cursor')!='auto'){
                c = $(p[i]).css('cursor');
                break;
              }
            }
          }
        }
        $(this).css('cursor',c);
        
        return false;
      }
    });
  
    $('#controllers_wrapper').on({
      click: function(e){
        var node = findElement(e.clientX, e.clientY);
        if (node.nodeName==='A'){
          // click doesn't work on A (except it has an onclick function atached)
          window.location.href=(node.getAttribute('href'));
        }else{
          if ($(node).parents('A').length!=0) window.location.href=($(node).parents('A')[0].getAttribute('href'));
          else if(node.click) node.click();
          else $(node).click(e); //Manually fire the event for desired underlying element
        }
        return false;
      }
    });

    $('#controllers_wrapper').on({
      mousemove: function(e){
        var node = findElement(e.clientX, e.clientY);
        if (IE_LastBottomElement == node && $('#controllers_wrapper').css('cursor')!='auto'){
          return false;
        }
        IE_LastBottomElement = node;
        var c = 'auto';
        if (node.nodeName==='A'){
          c = 'pointer';
        }else{
          if ($(node).css('cursor')!='auto'){
            c = $(node).css('cursor');
          }else{
            var p = $(node).parents();
            for (var i = 0; i < p.length; i++) {
              if ($(p[i]).css('cursor')!='auto'){
                c = $(p[i]).css('cursor');
                break;
              }
            }
          }
        }
        $(this).css('cursor',c);
        
        return false;
      }
    });
  
  };
});

