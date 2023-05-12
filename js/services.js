$(document).ready(function () {
   var rotation1, rotation2, rotation3;
   rotation1 = rotation2 = rotation3 = 0;

   jQuery.fn.rotate = function (degrees) {
      $(this).css({
         '-webkit-transform': 'rotate(' + degrees + 'deg)',
         '-moz-transform': 'rotate(' + degrees + 'deg)',
         '-ms-transform': 'rotate(' + degrees + 'deg)',
         'transform': 'rotate(' + degrees + 'deg)'
      });
      return $(this);
   };

   var isScrolling = false;

   window.addEventListener("scroll", throttleScroll, false);

   function throttleScroll(e) {
      if (isScrolling == false) {
         window.requestAnimationFrame(function () {
            dealWithScrolling(e);
            isScrolling = false;
         });
      }
      isScrolling = true;
   }

   function dealWithScrolling(e) {
      rotation1 += 1;
      $('#1cogwheel').rotate(rotation1);
      rotation2 += 2;
      $('#2cogwheel').rotate(rotation2);
      rotation3 += 3;
      $('#3cogwheel').rotate(rotation3);
   }



});