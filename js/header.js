$(document).ready(function () {
   function animheader() {
      $(".buttonapp").animate({ color: "#fc7878", borderColor: "#00f0ff" }, 3500);
      setTimeout(() => { $(".buttonapp").animate({ color: "#00f0ff", borderColor: "#fc7878" }, 3500); }, 3500);
      setTimeout(() => { animheader(); }, 3500);
   }
   animheader();
});
