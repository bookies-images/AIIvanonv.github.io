document.addEventListener( 'DOMContentLoaded', function( event ) {
  $(window).on("load resize", function(){
    $(".header").load("header.html")
  })
});
