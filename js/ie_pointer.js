/*
 * IE doesn't support pointer-events:none
 * As of IE 10, it doesn't support conditional comments, so we use browser detection
 */
var IE_LastBottomElement = null;
$(document).ready(function() {
  if (navigator.userAgent.match(/msie/i) ){
    $('#parallax_layer').on({
      click: function(e){
        $(this).hide();
        var BottomElement = document.elementFromPoint(e.clientX, e.clientY);
        $(this).show();
        if (BottomElement.nodeName==='A'){
          // click doesn't work on A (except it has an onclick function atached)
          window.location(BottomElement.getAttribute('href'));
        }else{
          $(BottomElement).click(); //Manually fire the event for desired underlying element
        }
        return false;
      }
    });

    $('#parallax_layer').on({
      mousemove: function(e){
        $(this).hide();
        var BottomElement = document.elementFromPoint(e.clientX, e.clientY);
        $(this).show();
        if (IE_LastBottomElement == BottomElement && $(this).css('cursor')!='auto'){
          return false;
        }
        IE_LastBottomElement = BottomElement;
        var c = 'auto';
        if (BottomElement.nodeName==='A'){
          c = 'pointer';
        }else{
          if ($(BottomElement).css('cursor')!='auto'){
            c = $(BottomElement).css('cursor');
          }else{
            var p = $(BottomElement).parents();
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
        var BottomElement = document.elementFromPoint(e.clientX, e.clientY);
        if (BottomElement.getAttribute('id')=='controllers_wrapper'){
          $(this).hide();
          $('#parallax_layer').hide();
          BottomElement = document.elementFromPoint(e.clientX, e.clientY);
          $(this).show();
          $('#parallax_layer').show();
          if (BottomElement.nodeName==='A'){
            // click doesn't work on A (except it has an onclick function atached)
            window.location(BottomElement.getAttribute('href'));
          }else{
            $(BottomElement).click(); //Manually fire the event for desired underlying element
          }
        }
        return false;
      }
    });

    $('#controllers_wrapper').on({
      mousemove: function(e){
        $(this).hide();
        $('#parallax_layer').hide();
        var BottomElement = document.elementFromPoint(e.clientX, e.clientY);
        $(this).show();
        $('#parallax_layer').show();
        if (IE_LastBottomElement == BottomElement && $('#controllers_wrapper').css('cursor')!='auto'){
          return false;
        }
        IE_LastBottomElement = BottomElement;
        var c = 'auto';
        if (BottomElement.nodeName==='A'){
          c = 'pointer';
        }else{
          if ($(BottomElement).css('cursor')!='auto'){
            c = $(BottomElement).css('cursor');
          }else{
            var p = $(BottomElement).parents();
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

