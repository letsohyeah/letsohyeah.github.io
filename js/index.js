$(document).ready(function () {
  $("img.lazy").lazyload({
    effect : "fadeIn"
  });
});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$(window).load(function(){
 // PAGE IS FULLY LOADED
 // FADE OUT YOUR OVERLAYING DIV
 $('#overlay').fadeOut();
});

$(document).ready(function(){
  $('body').css('display', 'none');
  $('body').fadeIn(1400);
});
$(document).ready(function(){
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
  $('.bar').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
       $(this).removeClass("move");
  });
  $('div#titleA').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
       $(this).removeClass("move-title");
  });
});

$(document).ready(function(){
  $('#click-w').click(function(){
    var delayInMilliseconds = 250;
    $('#infobox-works').toggleClass('view',true);
    $('#infobox-about').toggleClass('view',false);
    $('#infobox-contact').toggleClass('view',false);
    if ($(window).width() < 737) {
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
  $('.bar').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
       $(this).removeClass("move");
  });
  $('div#title').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
       $(this).removeClass("move-title");
  });
});

$(document).ready(function(){
  $('#click-c').click(function(){
    var delayInMilliseconds = 250;
    $('#infobox-contact').toggleClass('view',true);
    $('#infobox-works').toggleClass('view',false);
    $('#infobox-about').toggleClass('view',false);
    if ($(window).width() < 737) {
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
  if ($(window).width() < 737) {
    $('.item').on('click',function(){
      $('.rightbox.Works.mobile').toggleClass('view',true);
    });
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
  var yU = document.getElementById("infobox-works").scrollTop;
  var yB = document.getElementById("infobox-works").scrollBottom;
  var topH = document.getElementById('topbox').offsetHeight;
  var infoH = document.getElementById('infobox-works').offsetHeight;
  if (document.getElementById("infobox-works").scrollTop > 80) {
    document.getElementById("topbox").style.height = "5rem";
    document.getElementById("logobox").style.display = "none";
    document.getElementById("navbox").style.flexDirection = "row";
    document.getElementById("nav").style.justifyContent = "space-around";
    document.getElementById("nav").style.borderRight = "1px solid #474849";
    document.getElementById("navbox").style.height = "5rem";
    document.getElementById("nav").style.height = "5rem";
    document.getElementById("nav").style.flexDirection = "row";
    document.getElementById("titlebox").style.width = "calc(var(--vh, 1vh) * 38.7)";
    document.getElementById("titlebox").style.height = "5rem";
    document.getElementById("nav").style.width = "100%";
    if ( $(window).width() < 767) {
      document.getElementById("infobox-works").style.top = "5rem";
      document.getElementById("infobox-contact").style.top = "5rem";
    }
    document.getElementById("infobox-works").style.height = "calc( var(--vh, 1vh) * 100 - 5rem )";
    document.getElementById("infobox-about").style.height = "calc( var(--vh, 1vh) * 100 - 5rem )";
    document.getElementById("infobox-contact").style.height = "calc( var(--vh, 1vh) * 100 - 5rem )";
  }else {
    if ( $(window).width() < 767 ) {
      document.getElementById("infobox-about").style.height = "auto";
      document.getElementById("infobox-works").style.height = "calc( var(--vh, 1vh) * 100 - 61.3vw )";
      document.getElementById("infobox-contact").style.height = "100vw";
      document.getElementById("topbox").style.height = "auto";
      document.getElementById("navbox").style.height = "auto";
      document.getElementById("nav").style.height = "38.7vw";
      document.getElementById("titlebox").style.height = "22.6vw";
      document.getElementById("infobox-works").style.top = "61.3vw";
      document.getElementById("infobox-contact").style.top = "61.3vw";
    }else {
      document.getElementById("infobox-about").style.height = "calc(var(--vh, 1vh) * 61.3)";
      document.getElementById("infobox-works").style.height = "calc(var(--vh, 1vh) * 61.3)";
      document.getElementById("topbox").style.height = "calc(var(--vh, 1vh) * 38.7)";
      document.getElementById("navbox").style.height = "calc(var(--vh, 1vh) * 38.7)";
      document.getElementById("nav").style.height = "calc(var(--vh, 1vh) * 22.6)";
      document.getElementById("titlebox").style.height = "calc(var(--vh, 1vh) * 16.1)";
      document.getElementById("infobox-contact").style.height = "calc(var(--vh, 1vh) * 61.3)";
    }
    document.getElementById("nav").style.borderRight = "none";
    document.getElementById("nav").style.flexDirection = "column";
    document.getElementById("nav").style.justifyContent = "center";
    document.getElementById("navbox").style.flexDirection = "column";
    document.getElementById("logobox").style.display = "flex";
    document.getElementById("titlebox").style.width = "100%";
  }
}
