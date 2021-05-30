function square(){
  var w=$('.works_top').outerWidth();
  $('.works_top').css('min-height',w);
  console.log('s')
}
if($(window).width()>768 && $(window).width()<1500){
  square();
}
$(window).on('resize',function(){
  if($(window).width()>768 && $(window).width()<1500){
    square();
  }
});
var x = $('.kv').height()
var nav_h = $('nav').height()
$(window).scroll(function(){
      if ($(this).scrollTop()>x-nav_h){
          $('nav').addClass('actived');
      }
      else {
          $('nav').removeClass('actived');
      }
});
AOS.init({
  once: true
});
$(".kv").mousemove(function(e) {
  parallaxIt(e, ".kv_content", -50);
  parallaxIt(e, ".kv_bg", -30);
});

function parallaxIt(e, target, movement) {
  var $this = $(".kv");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
