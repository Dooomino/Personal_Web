$("#toTop").on("click",function(e){
  e.preventDefault();
  var c = $("html, body").stop().animate({ scrollTop: 0 },1000);
});

let imageCount = 0;
let state = 0;

$(window).on('ready', function(e) {
  $(".progress").addClass("half");
});

$(window).on('load', function(e) {
  $(".progress").addClass("ready");
  $(".loading-text").animate({opacity:0,height:0},1000);
  $(".done-text").css("display","block");

  setTimeout(function(){
    $(".done-text").animate({opacity:1},1000);
  },450);

  setTimeout(function (){
    $(".progress").addClass("end");
  },800);
});