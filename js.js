document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function(){
    $(".header").load("header.html .header > *");
  })
});
