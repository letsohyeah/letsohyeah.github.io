$(window).on('load', function(){
  waterfall('.waterfall span');
  app.$Lazyload.$on('loaded', function (listener) {
    waterfall('.waterfall span');
  })
});
window.addEventListener('resize', function () {
  waterfall('.waterfall span');
});

/*
window.addEventListener('resize', function () {
  waterfall(grid);
});
*/
