

$(window).on('load',function(){
  // PAGE IS FULLY LOADED
  // FADE OUT YOUR OVERLAYING DIV
  $('#overlay').fadeOut();
});

$(document).ready(function(){
  $('body').css('display', 'none');
  $('body').fadeIn(1400);
  $('#infobox-about').toggleClass('view',true);
  $('.rightbox.about').toggleClass('view',true);
  $('.bar').addClass('move');
  $(".textA").addClass("showtitle");


  $('#click-a').click(function(){
    var delayInMilliseconds = 250;
    $('.rightbox.about').toggleClass('view',true);
    $('.rightbox.works').removeClass('view');
    $('#infobox-about').toggleClass('view',true);
    $('#infobox-works').toggleClass('view',false);
    $('#infobox-contact').toggleClass('view',false);
    $('.bar').toggleClass('move',true);
    $("div#title").addClass("move-title");
    setTimeout(function() {
      $(".textA").addClass("showtitle");
      $(".textW").removeClass("showtitle");
      $(".textC").removeClass("showtitle");
    }, delayInMilliseconds);
  });
  $('#click-w').click(function(){
    var delayInMilliseconds = 250;
    $('#infobox-works').toggleClass('view',true);
    $('#infobox-about').toggleClass('view',false);
    $('#infobox-contact').toggleClass('view',false);
    if ($(window).width() < 768) {
      $('.rightbox.about').toggleClass('view',false);
      $('.rightbox.works').toggleClass('view',false);
    }
    $("div#title").addClass("move-title");
    setTimeout(function() {
      $(".textW").addClass("showtitle");
      $(".textA").removeClass("showtitle");
      $(".textC").removeClass("showtitle");
    }, delayInMilliseconds);
  });
  $('#click-c').click(function(){
    var delayInMilliseconds = 250;
    $('#infobox-contact').toggleClass('view',true);
    $('#infobox-works').toggleClass('view',false);
    $('#infobox-about').toggleClass('view',false);
    if ($(window).width() < 768) {
      $('.rightbox.about').toggleClass('view',false);
      $('.rightbox.works').toggleClass('view',false);
    }
    $("div#title").addClass("move-title");
    setTimeout(function() {
      $(".textC").addClass("showtitle");
      $(".textA").removeClass("showtitle");
      $(".textW").removeClass("showtitle");
    }, delayInMilliseconds);
  });


  $('.bar').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
       $(this).removeClass("move");
  });
  $('div#title').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
       $(this).removeClass("move-title");
  });
  $('div#titleA').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
       $(this).removeClass("move-title");
  });
  $('div#title').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
       $(this).removeClass("move-title");
  });

  $('.tab').on('click',function(){
    $(this).siblings().removeClass('actived');
    $(this).toggleClass('actived',true);
  })

  if ($(window).width() < 768) {
    $('.close').on('click',function(){
      $('.rightbox.Works.mobile').toggleClass('view',false);
    });
  }
});



/*$(document).ready(function() {
   $('.waterfall a').each(function(){
           $(this).click(
               function(){
                 var id = $(this).attr('id');
                 $('#A' + id ).toggleClass('view',true);
                 $('#A' + id ).siblings().toggleClass('view',false);
                 $("#A" + id + " .lazy").trigger('appear');
                   });
       });
});*/


function scrollFunction() {

  var yU = $("#infobox-works").scrollTop();
  if (yU > 80) {
    $("#logobox").css('display','none');
    $("#topbox").toggleClass('scroll',true);
    $("#navbox").toggleClass('scroll',true);
    $("#nav").toggleClass('scroll',true);
    $("#titlebox").toggleClass('scroll',true);
    $("#infobox-works").toggleClass('scroll',true);
    $("#infobox-about").toggleClass('scroll',true);
    $("#infobox-contact").toggleClass('scroll',true);
  }else {
    $("#topbox").toggleClass('scroll',false);
    $("#titlebox").toggleClass('scroll',false);
    $("#infobox-works").toggleClass('scroll',false);
    $("#infobox-about").toggleClass('scroll',false);
    $("#infobox-contact").toggleClass('scroll',false);
    $("#nav").toggleClass('scroll',false);
    $("#navbox").toggleClass('scroll',false);
    $("#logobox").css('display','flex');
  }
}
