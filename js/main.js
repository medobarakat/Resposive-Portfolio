// this javascript is made with jQuery 3.6 By Ahmed Barakat
// changing the navbar color
$(document).ready(function(){
 $(window).scroll(function(){
     $('nav').toggleClass('navbar-scrolled',$(window).scrollTop()>300);
 });
 // adding active class to the links
  $("#anchorGroup li a").click(function() {
    $("#anchorGroup li a").removeClass('active');
    $(this).addClass('active');
  });
  // Scroll TO Top Button
  var scrollToTop = $('.scrolltop');
  $(window).scroll(function(){
    if($(window).scrollTop() >= 500){
      scrollToTop.fadeIn(1000);
    }else{
       scrollToTop.fadeOut(100);
    }
  });
});



