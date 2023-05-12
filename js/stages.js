$(document).ready(function () {
   var a, b, c, d, e, f, g;
   a = b = c = d = e = f = g = false;
   $(".aclass").hide();
   $("#a").click(
      function () {
         if (a == false) {
            a = true;
            $("#a1").show(400, "swing");
            if (b == true) {
               b = false;
               $("#b1").hide(400, "swing");
            }
            else if (c == true) {
               c = false;
               $("#c1").hide(400, "swing");
            }
            else if (d == true) {
               d = false;
               $("#d1").hide(400, "swing");
            }
            else if (e == true) {
               e = false;
               $("#e1").hide(400, "swing");
            }
            else if (f == true) {
               f = false;
               $("#f1").hide(400, "swing");
            }
            else if (g == true) {
               g = false;
               $("#g1").hide(400, "swing");
            }
         }
         else {
            a = false;
            $("#a1").hide(400, "swing");
         }
      }
   );
   $("#b").click(
      function () {
         if (b == false) {
            b = true;
            $("#b1").show(400, "swing");
            if (a == true) {
               a = false;
               $("#a1").hide(400, "swing");
            }
            else if (c == true) {
               c = false;
               $("#c1").hide(400, "swing");
            }
            else if (d == true) {
               d = false;
               $("#d1").hide(400, "swing");
            }
            else if (e == true) {
               e = false;
               $("#e1").hide(400, "swing");
            }
            else if (f == true) {
               f = false;
               $("#f1").hide(400, "swing");
            }
            else if (g == true) {
               g = false;
               $("#g1").hide(400, "swing");
            }
         }
         else {
            b = false;
            $("#b1").hide(400, "swing");
         }
      }
   );
   $("#c").click(
      function () {
         if (c == false) {
            c = true;
            $("#c1").show(400, "swing");
            if (b == true) {
               b = false;
               $("#b1").hide(400, "swing");
            }
            else if (a == true) {
               a = false;
               $("#a1").hide(400, "swing");
            }
            else if (d == true) {
               d = false;
               $("#d1").hide(400, "swing");
            }
            else if (e == true) {
               e = false;
               $("#e1").hide(400, "swing");
            }
            else if (f == true) {
               f = false;
               $("#f1").hide(400, "swing");
            }
            else if (g == true) {
               g = false;
               $("#g1").hide(400, "swing");
            }
         }
         else {
            c = false;
            $("#c1").hide(400, "swing");
         }
      }
   );
   $("#d").click(
      function () {
         if (d == false) {
            d = true;
            $("#d1").show(400, "swing");
            if (b == true) {
               b = false;
               $("#b1").hide(400, "swing");
            }
            else if (c == true) {
               c = false;
               $("#c1").hide(400, "swing");
            }
            else if (a == true) {
               a = false;
               $("#a1").hide(400, "swing");
            }
            else if (e == true) {
               e = false;
               $("#e1").hide(400, "swing");
            }
            else if (f == true) {
               f = false;
               $("#f1").hide(400, "swing");
            }
            else if (g == true) {
               g = false;
               $("#g1").hide(400, "swing");
            }
         }
         else {
            d = false;
            $("#d1").hide(400, "swing");
         }
      }
   );
   $("#e").click(
      function () {
         if (e == false) {
            e = true;
            $("#e1").show(400, "swing");
            if (b == true) {
               b = false;
               $("#b1").hide(400, "swing");
            }
            else if (c == true) {
               c = false;
               $("#c1").hide(400, "swing");
            }
            else if (d == true) {
               d = false;
               $("#d1").hide(400, "swing");
            }
            else if (a == true) {
               a = false;
               $("#a1").hide(400, "swing");
            }
            else if (f == true) {
               f = false;
               $("#f1").hide(400, "swing");
            }
            else if (g == true) {
               g = false;
               $("#g1").hide(400, "swing");
            }
         }
         else {
            e = false;
            $("#e1").hide(400, "swing");
         }
      }
   );
   $("#f").click(
      function () {
         if (f == false) {
            f = true;
            $("#f1").show(400, "swing");
            if (b == true) {
               b = false;
               $("#b1").hide(400, "swing");
            }
            else if (c == true) {
               c = false;
               $("#c1").hide(400, "swing");
            }
            else if (d == true) {
               d = false;
               $("#d1").hide(400, "swing");
            }
            else if (e == true) {
               e = false;
               $("#e1").hide(400, "swing");
            }
            else if (a == true) {
               a = false;
               $("#a1").hide(400, "swing");
            }
            else if (g == true) {
               g = false;
               $("#g1").hide(400, "swing");
            }
         }
         else {
            f = false;
            $("#f1").hide(400, "swing");
         }
      }
   );
   $("#g").click(
      function () {
         if (g == false) {
            g = true;
            $("#g1").show(400, "swing");
            if (b == true) {
               b = false;
               $("#b1").hide(400, "swing");
            }
            else if (c == true) {
               c = false;
               $("#c1").hide(400, "swing");
            }
            else if (d == true) {
               d = false;
               $("#d1").hide(400, "swing");
            }
            else if (e == true) {
               e = false;
               $("#e1").hide(400, "swing");
            }
            else if (f == true) {
               f = false;
               $("#f1").hide(400, "swing");
            }
            else if (a == true) {
               a = false;
               $("#a1").hide(400, "swing");
            }
         }
         else {
            g = false;
            $("#g1").hide(400, "swing");
         }
      }
   );

});
