jQuery(document).ready(function () {
   var stopAfterSec = 999999;
   var speed = 40;

   var purple = [20, 15, 114];
   var green = [13, 11, 46];
   var sea_green = [8, 7, 17];

   var order = [green, sea_green, purple];

   var current = 0;
   var direction = -1;
   var color = end_color = order[current];

   function updateGradient() {
      if (color[0] == end_color[0] && color[1] == end_color[1] && color[2] == end_color[2]) {
         direction = (current > 0 && current < order.length - 1) ? direction : (-1) * Math.sign(direction);
         current += direction;
         end_color = order[current];
      }

      $('.services').css({
         background: "-webkit-radial-gradient(center, ellipse cover, rgba(0, 0, 0, 1) 0%, rgba(" + color[0] + ", " + color[1] + ", " + color[2] + ", 1) 100%)"
      });
      for (var i = 0; i <= 2; i++) {
         if (color[i] != end_color[i]) {
            color[i] += Math.sign((end_color[i] - color[i]));
         }
      }
   }

   var startGradientAnimation = setInterval(updateGradient, speed);

   setTimeout(function () {
      clearInterval(startGradientAnimation);
   }, stopAfterSec * 1000);

});