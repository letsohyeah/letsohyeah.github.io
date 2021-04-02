var grid = document.querySelector('.waterfall');
$(window).load(function(){
  waterfall(grid);
});
window.addEventListener('resize', function () {
  waterfall(grid);
});
