document.addEventListener("DOMContentLoaded", function(event) {
  $(window).on("load", function(){
    // HEADER
    $(".header").load("header.html .header > *");
    $("head").append($("<style type='text/css'>@import url('header.css')</style>"));
    $.getScript("header-js.js")
    .done(function() {
      //loaded
    })
    .fail(function() {
      //failed
    });
  });
});
