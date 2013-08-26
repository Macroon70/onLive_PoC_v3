/*
 * IE doesn't support pointer-events:none
 * As of IE 10, it doesn't support conditional comments, so we use browser detection
 */
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
  };
});


