$(window).on('load', function(){
  waterfall('.waterfall span');
});
window.addEventListener('resize', function () {
  waterfall('.waterfall span');
});

/*
window.addEventListener('resize', function () {
  waterfall(grid);
});
*/
